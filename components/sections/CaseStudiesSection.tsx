'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const caseStudies = [
  {
    eyebrow: 'Vepaar · SaaS · Growth',
    title: 'Boosting Product Adoption with Onboarding & UX Optimization',
    description:
      'Redesigned onboarding and simplified key user flows to reduce friction and improve activation. Focused on faster time-to-value, resulting in higher user retention and improved feature adoption across SMB users.',
    image: '/images/blogs/1.png',
    accent: '#6366f1',
    bg: 'rgba(99,102,241,0.06)',
    tags: ['Onboarding', 'UX Optimization', 'Activation', 'Retention'],
    href: '/case-studies/vepaar',
    comingSoon: false,
    metric: { label: 'Activation Rate', value: '+34%' },
  },
  {
    eyebrow: 'Voliz · SaaS · Engagement',
    title: 'Increasing User Engagement through Data-Driven Product Decisions',
    description:
      'Leveraged product analytics and user behavior insights to identify drop-offs and optimize user journeys. Implemented data-backed improvements that enhanced engagement, usability, and overall product experience.',
    image: '/images/blogs/2.png',
    accent: '#ec4899',
    bg: 'rgba(236,72,153,0.05)',
    tags: ['Product Analytics', 'User Behavior', 'Engagement', 'UX'],
    href: '/case-studies/voliz',
    comingSoon: true,
    metric: { label: 'Engagement', value: '+28%' },
  },
  {
    eyebrow: 'Everest · Platform · Performance',
    title: 'Improving Product Quality with QA Strategy & Automation',
    description:
      'Introduced structured QA processes and automation testing to reduce production defects. Strengthened release cycles, improved system reliability, and ensured consistent product quality across web and mobile platforms.',
    image: '/images/blogs/3.png',
    accent: '#14b8a6',
    bg: 'rgba(20,184,166,0.05)',
    tags: ['QA Strategy', 'Automation', 'Reliability', 'Performance'],
    href: '/case-studies/everest',
    comingSoon: true,
    metric: { label: 'Defect Rate', value: '-52%' },
  },

  // {
  //   eyebrow: 'DateDish · Social · Dating',
  //   title: 'Improving Product Quality with QA Strategy & Automation',
  //   description:
  //     'Introduced structured QA processes and automation testing to reduce production defects. Strengthened release cycles, improved system reliability, and ensured consistent product quality across web and mobile platforms.',
  //   image: '/images/blogs/4.png',
  //   accent: '#14b8a6',
  //   bg: 'rgba(20,184,166,0.05)',
  //   tags: ['QA Strategy', 'Automation', 'Reliability', 'Performance'],
  //   href: '/case-studies/everest',
  //   comingSoon: true,
  //   metric: { label: 'Defect Rate', value: '-52%' },
  // },
] as const;

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % caseStudies.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % caseStudies.length);
  };

  return (
    <section className="px-4 pb-10 sm:px-5 md:pb-14 lg:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
              Case Studies
            </p>
            <p className="mt-2 max-w-[560px] text-[15px] leading-[1.8] text-[#5b657c]">
              A curated set of work showcasing how I approach complex problems,
              design systems, and business impact.
            </p>
          </div>

          {/* Dot indicators */}
          <div className="hidden items-center gap-2 sm:flex">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to case study ${i + 1}`}
                style={{
                  width: active === i ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '100px',
                  background: active === i ? '#6f8cff' : 'rgba(111,140,255,0.25)',
                  transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main card */}
        <div
          className="rounded-[28px] p-5 glass-card-strong sm:p-6 lg:p-7"
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          {/* Accent glow behind card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${study.accent}22 0%, transparent 70%)`,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          </AnimatePresence>

          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            {/* ── Text Panel ── */}
            <div className="order-2 min-h-[300px] lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${active}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                >
                  {/* Eyebrow + Coming Soon badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[13px] font-medium text-[#74809a]">{study.eyebrow}</p>
                    {study.comingSoon && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/50 bg-gradient-to-r from-amber-400/20 to-orange-400/20 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-amber-600">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 max-w-[440px] text-[21px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#1d2333] sm:text-[23px] lg:text-[25px]">
                    {study.title}
                  </h3>

                  <p className="mt-3 max-w-[440px] text-[14px] leading-[1.75] text-[#5f6678]">
                    {study.description}
                  </p>

                  {/* Metric chip */}
                  <div
                    className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{
                      background: `${study.accent}12`,
                      border: `1px solid ${study.accent}30`,
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: study.accent,
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '12px', color: study.accent, fontWeight: 600 }}>
                      {study.metric.value}
                    </span>
                    <span style={{ fontSize: '12px', color: '#74809a', fontWeight: 500 }}>
                      {study.metric.label}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1.5 text-[12px] text-[#647086] glass-badge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {study.comingSoon ? (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-[13px] font-medium text-amber-600 select-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Case study coming soon
                    </div>
                  ) : (
                    <Link
                      href={study.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition hover:gap-2.5"
                      style={{ color: study.accent }}
                    >
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Image Panel ── */}
            <div className="order-1 lg:order-2">
              <motion.div
                animate={{ backgroundColor: study.bg }}
                transition={{ duration: 0.45 }}
                className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-[22px] p-3 glass-card sm:min-h-[280px] lg:min-h-[320px]"
              >
                {/* Coming Soon overlay */}
                {study.comingSoon && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[22px] bg-white/30 backdrop-blur-[2px]">
                    <div className="rounded-2xl border border-amber-200/60 bg-white/70 px-6 py-4 text-center shadow-lg backdrop-blur-sm">
                      <p className="text-[13px] font-semibold text-amber-600">🚀 Coming Soon</p>
                      <p className="mt-1 text-[11px] text-[#74809a]">Case study in progress</p>
                    </div>
                  </div>
                )}

                {/* Decorative accent ring */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    left: '-40px',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: `1.5px dashed ${study.accent}30`,
                    pointerEvents: 'none',
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-wrapper-${active}`}
                    initial={{ opacity: 0, scale: 0.95, rotate: -2, y: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: 2, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.05 }}
                      className="h-[200px] w-auto cursor-pointer object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)] sm:h-[240px] lg:h-[280px]"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Controls */}
          <div className="relative z-10 mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Stepped progress */}
              <span className="rounded-full px-3 py-1.5 text-[12px] font-medium text-[#55637c] glass-badge">
                {active + 1} / {caseStudies.length}
              </span>
              <span className="text-[12px] text-[#94a3b8]">{study.eyebrow.split('·')[0].trim()}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#3b4a6b] transition hover:-translate-y-0.5 glass-card"
                aria-label="Previous case study"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#3b4a6b] transition hover:-translate-y-0.5 glass-card"
                aria-label="Next case study"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}