'use client';

import { useEffect, useRef } from 'react';

/**
 * CursorGlow — zero-React-render cursor tracking.
 *
 * Previous implementation called setState on every mousemove event,
 * triggering ~60 React re-renders/second. This version holds a direct
 * ref to the DOM node and mutates its style inline — no VDOM diff,
 * no component re-render, no Reconciler work at all.
 *
 * The rAF throttle ensures we write to the DOM at most once per frame
 * (aligned with the browser's paint cycle) instead of on every raw event.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const pos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Throttle DOM writes to once per animation frame
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.background = `radial-gradient(600px circle at ${pos.current.x}px ${pos.current.y}px, rgba(120,140,255,0.05), transparent 40%)`;
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
      // Start offscreen — will be positioned by the event handler
      style={{ background: 'radial-gradient(600px circle at -1000px -1000px, rgba(120,140,255,0.05), transparent 40%)' }}
    />
  );
}
