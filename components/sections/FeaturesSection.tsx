import Image from 'next/image';

const featureCards = [
  {
    title: 'Own, Build & Ship',
    description: 'Taking products from idea to launch with full ownership across the SDLC.',
    icon: 'images/icons/own-build-ship.svg',
    alt: 'own-build-ship icon',
    delay: '120ms',
    accent: '#6f8cff',
  },
  {
    title: 'Systems That Scale',
    description: 'Designing scalable SaaS solutions with strong UX, performance, and reliability.',
    icon: 'images/icons/b2b-b2cc.svg',
    alt: 'b2b-b2cc icon',
    delay: '240ms',
    accent: '#a78bfa',
  },
  {
    title: 'Product + Quality Thinking',
    description: 'Blending product strategy with QA expertise to deliver high-quality releases.',
    icon: 'images/icons/big-lean.svg',
    alt: 'big-lean icon',
    delay: '360ms',
    accent: '#34d399',
  },
] as const;

export default function FeaturesSection() {
  return (
    <section aria-labelledby="features-heading" className="pt-10 pb-3 sm:pt-12 sm:pb-4 lg:pt-16 lg:pb-6 px-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1200px] rounded-[30px] px-7 py-9 glass-card-strong sm:px-8 sm:py-10 lg:px-12 lg:py-12">

        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6f8cff]">
            What I Do
          </p>
          <h2
            id="features-heading"
            className="mt-3 max-w-[560px] text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#18233f] sm:text-[34px]"
          >
            Built for impact, shipped with intention.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col items-start rounded-[22px] p-6 feature-card-anim glass-card hover:scale-[1.01] transition-all duration-250"
              style={{ animationDelay: card.delay }}
            >
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${card.accent}18` }}>
                <Image src={`/${card.icon}`} alt={card.alt} width={34} height={34} className="object-contain" />
              </div>
              <h3 className="max-w-[300px] text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#1d2333] lg:text-[22px]">
                {card.title}
              </h3>
              <p className="mt-3 max-w-[310px] text-[14px] leading-[1.85] text-[#586177] lg:text-[15px]">
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-auto pt-5 w-8 h-[2px] rounded-full transition-all duration-300 group-hover:w-14"
                style={{ background: card.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
