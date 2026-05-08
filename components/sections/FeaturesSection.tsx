const featureCards = [
  {
    title: 'Own, Build & Ship',
    description: 'Taking products from idea to launch with full ownership across the SDLC.',
    icon: 'images/icons/own-build-ship.svg',
    alt: 'own-build-ship icon',
    delay: '120ms',
  },
  {
    title: 'Systems That Scale',
    description: 'Designing scalable SaaS solutions with strong UX, performance, and reliability.',
    icon: 'images/icons/b2b-b2cc.svg',
    alt: 'b2b-b2cc icon',
    delay: '240ms',
  },
  {
    title: 'Product + Quality Thinking',
    description: 'Blending product strategy with QA expertise to deliver high-quality releases.',
    icon: 'images/icons/big-lean.svg',
    alt: 'big-lean icon',
    delay: '360ms',
  },
] as const;

export default function FeaturesSection() {
  return (
    <section className="px-4 pb-16 pt-2 sm:px-5 md:pb-20 lg:px-6">
      <div className="mx-auto max-w-[1200px] rounded-[30px] px-7 py-9 glass-card-strong sm:px-8 sm:py-10 lg:px-12 lg:py-11">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-12">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col items-start feature-card-anim"
              style={{ animationDelay: card.delay }}
            >
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center text-[#7aa13b] transition-transform duration-300 group-hover:scale-[1.02]">
                <img src={card.icon} alt={card.alt} className="h-[46px] w-[46px] object-contain" />
              </div>
              <h3 className="max-w-[300px] text-[24px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#1d2333] lg:text-[26px]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-[310px] text-[15px] leading-[1.85] text-[#586177] lg:text-[16px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
