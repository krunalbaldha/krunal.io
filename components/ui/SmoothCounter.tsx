'use client';

import { animate, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SmoothCounter({
  value,
  duration = 1.2,
  suffix = '',
  prefix = '',
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  // Default to final `value` so SSR / static production builds always render the target number in HTML
  const [displayValue, setDisplayValue] = useState<number>(value);

  useEffect(() => {
    // On client mount, start count up from 0 to target value
    setDisplayValue(0);
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Liquid deceleration curve
      onUpdate(currentValue) {
        setDisplayValue(Math.round(currentValue));
      },
    });

    return () => controls.stop();
  }, [value, duration]);

  return (
    <motion.span
      ref={nodeRef}
      className="inline-flex items-baseline tracking-tight font-bold"
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}
