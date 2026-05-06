'use client'

import { useRef, useState, useEffect } from 'react';

const productTags = [
  { name: 'Vepaar', type: 'Product' },
  { name: 'DateDish', type: 'Project' },
  { name: 'Pagemaker', type: 'Product' },
  { name: 'Accreglab', type: 'Project' },
  { name: 'Voliz', type: 'Product' },
  { name: 'Dimboo', type: 'Project' },
  { name: 'Everest', type: 'Product' },
  { name: 'eaaasy.de', type: 'Project' },
  { name: 'D2Cguru', type: 'Product' },
  { name: 'Livvy', type: 'Project' },
  { name: 'Literaliga', type: 'Project' },
  { name: 'Ride & Stride', type: 'Project' },
  { name: 'Gotham Med', type: 'Project' },
  { name: 'ABC', type: 'Project' },
] as const;

const apmPoints = [
  'Defined product roadmap, PRDs, and feature requirements for SaaS platforms',
  'Collaborated with design, engineering, and QA teams for Agile delivery',
  'Analyzed user behavior and metrics to drive data-backed decisions',
  'Ensured product quality through manual and automation testing practices',
] as const;

// Each pill is ~96 px wide + 8 px gap → 5 visible = 5 * (96 + 8) - 8 = 512 px
const VISIBLE = 5;
const PILL_W = 96; // px per pill (fixed width)
const GAP = 8;  // px gap
const TRACK_W = VISIBLE * PILL_W + (VISIBLE - 1) * GAP; // 512 px

export default function WorkSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const syncBtns = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    syncBtns();
    el.addEventListener('scroll', syncBtns, { passive: true });
    return () => el.removeEventListener('scroll', syncBtns);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const step = VISIBLE * (PILL_W + GAP);
    sliderRef.current?.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section id="work" className="px-4 pb-10 sm:px-5 md:pb-14 lg:px-6">
      <div className="mx-auto max-w-[1200px]">

        {/* ── Heading ── */}
        <div className="mb-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6f8cff] sm:text-[13px]">
            Work Experience
          </p>
          <h2 className="mt-3 max-w-[760px] text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#18233f] sm:text-[36px] md:text-[42px]">
            Shipping products across product, operations, and engineering.
          </h2>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* ══ Left: APM card ══ */}
          <div className="rounded-[28px] p-6 glass-card-strong sm:p-7 lg:p-8">

            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5b75da] glass-badge">
                  Jan 2024 — Present
                </div>
                <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.03em] text-[#1c2438] sm:text-[28px]">
                  Associate Product Manager
                </h3>
                <p className="mt-1 text-[15px] font-medium text-[#405172]">7Span</p>
              </div>
              <div className="inline-flex w-fit items-center rounded-full px-4 py-2 text-[13px] font-medium text-[#4a5d8f] glass-badge">
                Core Role
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-[1.85] text-[#586177]">
              Spearheaded product development across Vepaar, Pagemaker, Voliz, and Everest while
              driving feature work from ideation to launch through research, prioritization, Agile
              delivery, and quality validation.
            </p>

            {/* ── Slider ── */}
            <div className="mt-5">
              {/* Legend */}
              <div className="mb-3 flex items-center gap-5">
                <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#586177]">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
                  Product
                </span>
                <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#586177]">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
                  Project
                </span>
              </div>

              {/* Arrow + Track row */}
              <div className="flex items-center gap-2">

                {/* Left arrow */}
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canLeft}
                  aria-label="Scroll left"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200
                    ${canLeft
                      ? 'border-indigo-200 bg-white text-indigo-600 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                      : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M8.5 10.5L4.5 6.5l4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Fixed-width scrollable track — shows exactly 5 pills */}
                <div className="relative overflow-hidden" style={{ width: TRACK_W }}>
                  {/* Left fade */}
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(to right, rgba(255,255,255,1), transparent)',
                      opacity: canLeft ? 1 : 0,
                    }}
                  />
                  {/* Right fade */}
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(to left, rgba(255,255,255,1), transparent)',
                      opacity: canRight ? 1 : 0,
                    }}
                  />

                  {/* Scrollable inner */}
                  <div
                    ref={sliderRef}
                    className="flex gap-2 overflow-x-auto py-2 -my-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {productTags.map((item) => (
                      <span
                        key={item.name}
                        title={item.type}
                        style={{ width: PILL_W, minWidth: PILL_W }}
                        className={`shrink-0 flex items-center justify-center gap-1 rounded-full py-1.5
                          text-[12px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
                          ${item.type === 'Product'
                            ? 'border border-indigo-200 bg-white text-indigo-600 shadow-[0_2px_10px_rgba(99,102,241,0.18)]'
                            : 'border border-teal-200  bg-white text-teal-600  shadow-[0_2px_10px_rgba(20,184,166,0.18)]'
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full
                            ${item.type === 'Product' ? 'bg-indigo-400' : 'bg-teal-400'}`}
                        />
                        <span className="truncate">{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right arrow */}
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canRight}
                  aria-label="Scroll right"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200
                    ${canRight
                      ? 'border-indigo-200 bg-white text-indigo-600 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                      : 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M4.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bullet points */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {apmPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-[18px] px-4 py-3.5 glass-card">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#6f8cff]" />
                  <p className="text-[14px] leading-[1.7] text-[#47536d]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ══ Right: Other roles ══ */}
          <div className="flex flex-col gap-5">

            <div className="rounded-[28px] p-6 glass-card sm:p-7">
              <div className="inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5b75da] glass-badge">
                Jan 2023 — Oct 2023
              </div>
              <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#1c2438]">
                Placement &amp; Training Coordinator
              </h3>
              <p className="mt-1 text-[14px] font-medium text-[#31415f]">LJ University · Volunteer</p>
              <p className="mt-4 text-[14px] leading-[1.85] text-[#586177]">
                Coordinated placement drives for 500+ students and improved workflow efficiency by
                35% through scheduling, communication, and operational support.
              </p>
            </div>

            <div className="rounded-[28px] p-6 glass-card sm:p-7">
              <div className="inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5b75da] glass-badge">
                Jan 2021 — Jun 2022
              </div>
              <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#1c2438]">
                Software Engineer (Python Developer)
              </h3>
              <p className="mt-1 text-[14px] font-medium text-[#31415f]">Identiq InfoTech</p>
              <p className="mt-4 text-[14px] leading-[1.85] text-[#586177]">
                Developed Python backend services, REST APIs, and SQL optimizations, reducing API
                latency by 25% and improving scalability for client-facing applications.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
