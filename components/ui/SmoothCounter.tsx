'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SmoothCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: [0.2, 0.8, 0.2, 1],
        onUpdate: (val) => {
          const formatted = Number.isInteger(value) ? Math.round(val) : Number(val).toFixed(1);
          setDisplayValue(formatted.toString());
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
