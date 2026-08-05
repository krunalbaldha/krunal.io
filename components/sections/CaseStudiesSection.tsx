'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const caseStudies = [
  {
    eyebrow: 'Monzi · Full-Stack · Fintech',
    title: 'Monzi Personal Finance Management Platform',
    description:
      'A secure personal finance and analytics platform featuring automated monthly budgeting cycles, instant dashboard load times, and custom financial insight engines.',
    image: '/images/blogs/monzi.png',
    accent: '#6366f1',
    bg: 'rgba(99,102,241,0.06)',
    tags: ['Personal Finance', 'Budget Automation', 'Financial Analytics', 'Fintech'],
    href: '/case-studies/monzi',
    productUrl: 'https://monzi.krunal.site',
    comingSoon: false,
    metric: { label: 'Query Latency', value: 'Sub-ms' },
  },
  {
    eyebrow: 'NextHire AI · AI & Talent Automation',
    title: 'AI Resume Screening, ATS Matching & Semantic Retrieval',
    description:
      'Leveraged rule-based ATS matching, intelligent parsing workflows, and FAISS vector search to streamline candidate evaluation, cutting shortlist time by 85% with 94% search precision.',
    image: '/images/blogs/NextHire.png',
    accent: '#6366f1',
    bg: 'rgba(99,102,241,0.06)',
    tags: ['AI Screening', 'FAISS Vector Search', 'ATS Matching', 'Semantic AI'],
    href: '/case-studies/nexthire',
    productUrl: 'https://nexthire.krunal.site',
    comingSoon: false,
    metric: { label: 'Shortlist Time', value: '-85%' },
  },
  {
    eyebrow: 'Webmine · Platform · Performance',
    title: 'Improving Product Quality with QA Strategy & Automation',
    description:
      'Introduced structured QA processes and automation testing to reduce production defects. Strengthened release cycles, improved system reliability, and ensured consistent product quality across web and mobile platforms.',
    image: '/images/blogs/3.png',
    accent: '#14b8a6',
    bg: 'rgba(20,184,166,0.05)',
    tags: ['QA Strategy', 'Automation', 'Reliability', 'Performance'],
    href: '/case-studies/webmine',
    productUrl: 'https://webmine.app',
    comingSoon: true,
    metric: { label: 'Defect Rate', value: '-52%' },
  },
] as const;

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % caseStudies.length);
  };

  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="section-anchor pt-3 pb-3 sm:pt-4 sm:pb-4 lg:pt-6 lg:pb-6 px-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
              Projects & Case Studies
            </p>
            <h2 id="case-studies-heading" className="mt-3 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#18233f] sm:text-[36px] md:text-[42px]">
              Projects & Case Studies
            </h2>
            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.8] text-[#5b657c]">
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
                  transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
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
                  transition={{ duration: 0.2, ease: 'easeOut' }}
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
                    {!study.comingSoon ? (
                      <Link href={study.href} className="hover:underline hover:text-[#3d5aff] transition-colors">
                        {study.title}
                      </Link>
                    ) : (
                      study.title
                    )}
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

                  {/* CTA Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {study.comingSoon ? (
                      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-[13px] font-medium text-amber-600 select-none">
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
                        className="inline-flex items-center gap-1.5 rounded-full px-4.5 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                        style={{ backgroundColor: study.accent }}
                      >
                        View Case Study
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}

                    {!study.comingSoon && study.productUrl && (
                      <a
                        href={study.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-4.5 py-2.5 text-[13.5px] font-semibold text-[#3b4a6b] shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-[#18233f] hover:border-slate-300 hover:scale-[1.02]"
                      >
                        View Product
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Image Panel ── */}
            <div className="order-1 lg:order-2">
              <motion.div
                animate={{ backgroundColor: study.bg }}
                transition={{ duration: 0.45 }}
                className="relative w-full aspect-[16/10] overflow-hidden rounded-[22px] p-3 sm:p-4 glass-card"
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
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="w-full h-full z-10"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.03 }}
                      className="relative w-full h-full rounded-[14px] sm:rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-950 flex items-center justify-center transition duration-300"
                    >
                      {/* Accent glow behind image */}
                      <div 
                        className="absolute inset-0 opacity-40 blur-[40px] pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${study.accent}88 0%, transparent 70%)`
                        }}
                      />
                      <div className="relative h-[85%] w-[85%] z-10">
                        {!study.comingSoon ? (
                          <Link href={study.href} className="block w-full h-full relative">
                            <Image
                              src={study.image}
                              alt={study.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 500px"
                              priority
                              className="cursor-pointer object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition duration-300 hover:scale-[1.02]"
                            />
                          </Link>
                        ) : (
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 500px"
                            priority
                            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
                          />
                        )}
                      </div>
                    </motion.div>
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
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#3b4a6b] transition hover:scale-[1.02] glass-card"
                aria-label="Previous case study"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#3b4a6b] transition hover:scale-[1.02] glass-card"
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