const highlightStats = [
  {
    title: '30% Reduction in Bug Leakage',
    subtitle: 'through QA strategy & automation',
    brand: 'Quality',
    accent: 'QA',
  },
  {
    title: '25% Faster API Performance',
    subtitle: 'via backend optimization',
    brand: 'Engineering',
    accent: 'Performance',
  },
  {
    title: '35% Workflow Efficiency Increase',
    subtitle: 'in operations & coordination',
    brand: 'LJ University',
    accent: 'Operations',
  },
  {
    title: 'Improved Product Adoption',
    subtitle: 'via UX & onboarding improvements',
    brand: 'Vepaar',
    accent: 'Growth',
  },
  {
    title: '5+ SaaS Products Delivered',
    subtitle: 'from ideation to launch',
    brand: 'APM',
    accent: 'Execution',
  },
  {
    title: 'Cross-functional Collaboration',
    subtitle: 'with design, dev & QA teams',
    brand: 'Teamwork',
    accent: 'Collaboration',
  },
] as const;

const marqueeHighlights = [...highlightStats, ...highlightStats];

export default function HighlightsSection() {
  return (
    <section className="px-4 pb-16 sm:px-5 md:pb-20 lg:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
            Highlights
          </p>

          <h2 className="mt-3 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#18233f] sm:text-[36px] md:text-[42px]">
            Impact in Numbers
          </h2>
        </div>

        <div className="relative rounded-[30px] bg-white/35 p-5 shadow-[0_20px_70px_rgba(31,43,92,0.08)] backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[24px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#f7f8ff] via-[#f7f8ff]/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#f7f8ff] via-[#f7f8ff]/90 to-transparent" />

            <div
              className="flex w-max gap-6 py-2 marquee-track"
              style={{ animationDuration: '24s' }}
            >
              {marqueeHighlights.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="flex h-auto min-h-[220px] w-[300px] shrink-0 flex-col rounded-[26px] border border-white/60 bg-white/70 px-7 py-7 shadow-[0_18px_50px_rgba(31,43,92,0.10)] backdrop-blur-xl sm:w-[320px]"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b6aea3]">
                    {item.accent}
                  </p>

                  <h3 className="mt-5 max-w-[260px] text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#2a2730] sm:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-[14px] leading-[1.55] text-[#655f59] sm:text-[15px]">
                    {item.subtitle}
                  </p>

                  <div className="mt-auto pt-4 text-[17px] font-semibold tracking-[-0.02em] text-[#5d35d7] sm:text-[18px]">
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