const highlightStats = [
  {
    title: '30% Reduction in Bug Leakage',
    subtitle: 'through QA strategy & automation',
    brand: 'Quality',
    accent: 'QA',
    color: '#6f8cff',
  },
  {
    title: '25% Faster API Performance',
    subtitle: 'via backend optimization',
    brand: 'Engineering',
    accent: 'Performance',
    color: '#34d399',
  },
  {
    title: '35% Workflow Efficiency Increase',
    subtitle: 'in operations & coordination',
    brand: 'LJ University',
    accent: 'Operations',
    color: '#f59e0b',
  },
  {
    title: 'Improved Product Adoption',
    subtitle: 'via UX & onboarding improvements',
    brand: 'Vepaar',
    accent: 'Growth',
    color: '#ec4899',
  },
  {
    title: '5+ SaaS Products Delivered',
    subtitle: 'from ideation to launch',
    brand: 'APM',
    accent: 'Execution',
    color: '#a78bfa',
  },
  {
    title: 'Cross-functional Collaboration',
    subtitle: 'with design, dev & QA teams',
    brand: 'Teamwork',
    accent: 'Collaboration',
    color: '#14b8a6',
  },
] as const;

const marqueeHighlights = [...highlightStats, ...highlightStats];

export default function HighlightsSection() {
  return (
    <section aria-labelledby="highlights-heading" className="section-anchor pt-3 pb-3 sm:pt-4 sm:pb-4 lg:pt-6 lg:pb-6 px-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
            Highlights
          </p>

          <h2
            id="highlights-heading"
            className="mt-3 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#18233f] sm:text-[36px] md:text-[42px]"
          >
            Impact in Numbers
          </h2>
        </div>

        <div className="relative rounded-[30px] p-5 glass-card-strong">
          <div className="relative overflow-hidden rounded-[24px] marquee-wrapper">
            {/* Fade masks — use transparent so they work on any background */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white/60 to-transparent" />

            <div
              className="flex w-max gap-5 py-2 marquee-track"
              style={{ animationDuration: '28s' }}
            >
              {marqueeHighlights.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="flex h-auto min-h-[210px] w-[280px] shrink-0 flex-col rounded-[22px] px-6 py-6 glass-card sm:w-[300px]"
                >
                  {/* Accent label with color dot */}
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: item.color }}
                    />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#94a3b8]">
                      {item.accent}
                    </p>
                  </div>

                  <h3 className="mt-4 max-w-[260px] text-[16px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#2a2730] sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-[240px] text-[13px] leading-[1.6] text-[#655f59] sm:text-[14px]">
                    {item.subtitle}
                  </p>

                  <div
                    className="mt-auto pt-4 text-[15px] font-semibold tracking-[-0.02em] sm:text-[16px]"
                    style={{ color: item.color }}
                  >
                    {item.brand}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}