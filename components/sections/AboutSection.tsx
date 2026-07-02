import Image from 'next/image';
import Magnetic from '@/components/ui/Magnetic';

const aboutStats = [
  {
    title: '2+ Years in Product',
    description: 'Built SaaS products end-to-end with full ownership.',
    icon: '🚀',
    color: '#6f8cff',
  },
  {
    title: '30% Bug Reduction',
    description: 'Improved quality through QA & automation.',
    icon: '🐛',
    color: '#34d399',
  },
  {
    title: '25% Performance Boost',
    description: 'Optimized APIs for speed & scalability.',
    icon: '⚡',
    color: '#f59e0b',
  },
  {
    title: '500+ Students Coordinated',
    description: 'Improved workflows by 35% efficiency.',
    icon: '🎓',
    color: '#ec4899',
  },
] as const;

const expertiseTags = [
  'Product Strategy',
  'Roadmap Planning',
  'Feature Prioritisation',
  'PRD & User Stories',
  'Product Discovery',
  'Agile / Scrum',
  'Sprint Planning',
  'Backlog Grooming',
  'Market Research',
  'User Personas',
  'Product Analytics',
  'GA / Mixpanel',
  'UX/UI Collaboration',
  'QA Testing',
  'Automation Testing',
  'SQL',
  'Python',
  'REST APIs',
  'Figma',
  'Jira',
  'ClickUp',
  'Google Workspace',
] as const;

const toolLogos = [
  { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
  { name: 'Google Analytics', logo: 'https://cdn.simpleicons.org/googleanalytics' },
  { name: 'Mixpanel', logo: 'https://cdn.simpleicons.org/mixpanel' },
  { name: 'ClickUp', logo: 'https://cdn.simpleicons.org/clickup' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion' },
  { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/google' },
  { name: 'Directus', logo: 'https://cdn.simpleicons.org/directus' },
  { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
] as const;

const marqueeTools = [...toolLogos, ...toolLogos];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-anchor pt-3 pb-3 sm:pt-4 sm:pb-4 lg:pt-6 lg:pb-6 px-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1200px]">

        {/* Portrait + Bio */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[260px_1fr]">
          {/* Portrait */}
          <div className="overflow-hidden rounded-[26px] p-2 glass-card relative min-h-[300px] lg:min-h-full">
            <Image
              src="/images/krunal.png"
              alt="Krunal Baldha portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 260px"
              priority
              className="rounded-[22px] object-cover object-top p-2"
            />
          </div>

          {/* Bio */}
          <div className="rounded-[26px] px-6 py-7 glass-card-strong sm:px-8 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
              About Me
            </p>

            <h2
              id="about-heading"
              className="mt-3 text-[26px] font-semibold tracking-[-0.03em] text-[#2a2730] sm:text-[30px]"
            >
              Associate Product Manager building scalable SaaS products.
            </h2>

            <p className="mt-4 max-w-[860px] text-[15px] leading-[1.95] text-[#5f6678] sm:text-[16px]">
              I&apos;m a results-driven Associate Product Manager with 2+ years
              of experience delivering SaaS products end-to-end. I specialize in
              product strategy, roadmap planning, PRD development, Agile
              execution, user stories, KPI tracking, and data-driven product
              decisions.
            </p>

            <p className="mt-3 max-w-[860px] text-[15px] leading-[1.95] text-[#5f6678] sm:text-[16px]">
              I&apos;ve worked across products like Vepaar, Pagemaker, Voliz,
              Everest, and D2Cguru, contributing from feature ideation to
              release. My strength is combining product thinking, QA discipline,
              and cross-functional collaboration to ship quality products users love.
            </p>

            <Magnetic>
              <a
                href="/resume/Krunal%20Baldha%20-%20PM%20Main%20.pdf"
                download="Krunal Baldha - Resume.pdf"
                className="hover-gradient-border mt-7 inline-flex items-center gap-2.5 rounded-[16px] border border-white/60 px-6 py-3 text-[15px] font-semibold text-[#2b2b35] shadow-[0_6px_0_rgba(43,43,53,0.10)] transition hover:scale-[1.02] glass-badge"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {aboutStats.map((item) => (
            <div
              key={item.title}
              className="group rounded-[20px] p-5 glass-card hover:scale-[1.02] transition-all duration-250 cursor-default"
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] text-[20px] transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}18` }}
              >
                {item.icon}
              </div>
              <h3 className="text-[17px] font-semibold leading-[1.3] text-[#1f2937]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-[#6b7280]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Expertise + Tools */}
        <div className="mt-6 rounded-[22px] p-5 glass-card-strong sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <h3 className="min-w-[170px] text-[22px] font-semibold tracking-[-0.03em] text-[#2d2a32]">
              Core Expertise
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[#4d5a70] transition-all duration-200 hover:scale-[1.03] glass-badge"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tool Marquee */}
          <div className="relative mt-6 overflow-hidden border-t border-white/40 pt-5 marquee-wrapper">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white/60 to-transparent" />

            <div
              className="flex w-max gap-8 marquee-track"
              style={{ animationDuration: '20s' }}
            >
              {marqueeTools.map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  className="flex items-center gap-2.5 text-[13px] text-[#6b7280]"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}