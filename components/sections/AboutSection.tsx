import Magnetic from '@/components/ui/Magnetic';

const aboutStats = [
  {
    title: '2+ Years in Product',
    description:
      'Built SaaS products end-to-end with ownership.',
  },
  {
    title: '30% Bug Reduction',
    description:
      'Improved quality through QA & automation.',
  },
  {
    title: '25% Performance Boost',
    description:
      'Optimized APIs for speed & scalability.',
  },
  {
    title: '500+ Students Coordinated',
    description:
      'Improved workflows by 35% efficiency.',
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
  // 'Mixboard',
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
  // { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/monday.com' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion' },
  { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/google' },
  { name: 'Directus', logo: 'https://cdn.simpleicons.org/directus' },
  { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
] as const;

const marqueeTools = [...toolLogos, ...toolLogos];

export default function AboutSection() {
  return (
    <section id="about" className="px-4 pb-10 sm:px-5 md:pb-14 lg:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Portrait + Bio */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[240px_1fr]">
          <div className="overflow-hidden rounded-[26px] p-2 glass-card">
            <img
              src="/images/Hero.png"
              alt="Krunal Baldha portrait"
              className="h-[260px] w-full rounded-[22px] object-cover sm:h-[300px] lg:h-full"
            />
          </div>

          <div className="rounded-[26px] px-6 py-7 glass-card-strong sm:px-8 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
              About Me
            </p>

            <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#2a2730] sm:text-[34px]">
              {/* Associate Product Manager building scalable SaaS products. */}
            </h2>

            <p className="mt-4 max-w-[860px] text-[16px] leading-[1.95] text-[#5f6678] sm:text-[17px]">
              I&apos;m a results-driven Associate Product Manager with 2+ years
              of experience delivering SaaS products end-to-end. I specialize in
              product strategy, roadmap planning, PRD development, Agile
              execution, user stories, KPI tracking, and data-driven product
              decisions.
            </p>

            {/* <p className="mt-3 max-w-[860px] text-[16px] leading-[1.95] text-[#5f6678] sm:text-[17px]">
              I&apos;ve worked across products like Vepaar, Pagemaker, Voliz,
              Everest, and D2Cguru, contributing from feature ideation to
              release. My strength is combining product thinking, QA discipline,
              and cross-functional collaboration to improve adoption, retention,
              usability, and product quality.
            </p> */}

            <Magnetic>
              <a
                href="/resume/Krunal%20Baldha%20-%20PM%20Main%20.pdf"
                download="Krunal Baldha - Resume.pdf"
                className="hover-gradient-border mt-7 inline-block rounded-[16px] border border-white/60 px-6 py-3 text-[16px] font-medium text-[#2b2b35] shadow-[0_6px_0_rgba(43,43,53,0.10)] transition hover:scale-[1.02] glass-badge"
              >
                Download Resume
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {aboutStats.map((item) => (
            <div key={item.title} className="rounded-[20px] p-5 glass-card">
              <h3 className="text-[18px] font-semibold leading-[1.3] text-[#1f2937]">
                {item.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.6] text-[#6b7280]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Expertise + Tools */}
        <div className="mt-6 rounded-[22px] p-5 glass-card-strong sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <h3 className="min-w-[170px] text-[24px] font-semibold tracking-[-0.03em] text-[#2d2a32]">
              Core Expertise
            </h3>

            <div className="flex flex-wrap gap-3">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-2 text-[14px] font-medium text-[#4d5a70] glass-badge"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tool Marquee */}
          <div className="relative mt-6 overflow-hidden border-t border-white/40 pt-4 marquee-wrapper">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white/50 to-transparent" />

            <div
              className="flex w-max gap-8 marquee-track"
              style={{ animationDuration: '18s' }}
            >
              {marqueeTools.map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  className="flex items-center gap-2.5 text-[14px] text-[#6b7280]"
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