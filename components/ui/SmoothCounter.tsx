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
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Start counting immediately as soon as page loads / mounts
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth snappy deceleration curve
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
