import Image from 'next/image';
import Magnetic from '@/components/ui/Magnetic';
import { Button } from '@/components/ui/button';

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
    <section id="about" aria-labelledby="about-heading" className="section-anchor pt-2 pb-2 sm:pt-3 sm:pb-3 lg:pt-4 lg:pb-4 px-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1200px]">

        {/* Portrait + Bio */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[290px_1fr] items-stretch">
          {/* Portrait */}
          <div className="group relative overflow-hidden rounded-[30px] p-3.5 glass-card flex flex-col items-center justify-center bg-gradient-to-b from-white/30 to-white/10 shadow-[0_12px_32px_rgba(99,102,241,0.04)] hover:shadow-[0_16px_40px_rgba(61,90,255,0.12)] border border-white/60 hover:border-indigo-200/80 transition-all duration-500 w-full h-full min-h-[350px] lg:min-h-0">
            {/* Elegant mesh backdrop glow behind avatar */}
            <div 
              className="absolute inset-2 rounded-[24px] opacity-75 blur-[28px] pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
              style={{
                background: `radial-gradient(circle at 20% 20%, #c7d2fe 0%, #e0e7ff 40%, #dbeafe 100%)`
              }}
            />
            {/* Additional dynamic color ring */}
            <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-indigo-100/50 transition-colors duration-500 pointer-events-none z-20" />
            
            <div className="relative w-[85%] h-[85%] z-10 transition-all duration-500 group-hover:scale-[1.04] group-hover:rotate-[1deg]">
              <Image
                src="/images/profile.jpg"
                alt="Krunal Baldha portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 290px"
                priority
                className="rounded-[20px] object-cover object-top drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="rounded-[30px] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9 glass-card-strong flex flex-col justify-between border border-white/70 shadow-[0_12px_32px_rgba(99,102,241,0.03)]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff] sm:text-[13px] mb-4">
                About Me
              </p>

              <h2
                id="about-heading"
                className="text-[25px] font-bold tracking-[-0.03em] text-[#0f172a] sm:text-[30px] leading-[1.3] mb-4"
              >
                Associate Product Manager building{' '}
                <span className="text-[#3d5aff]">
                  scalable SaaS products
                </span>.
              </h2>

              <div className="space-y-4 text-[14.5px] leading-[1.85] text-[#5b657c] font-medium">
                <p>
                  I&apos;m a results-driven Associate Product Manager with 2+ years of experience delivering SaaS products end-to-end. I specialize in product strategy, roadmap planning, PRD development, Agile execution, user stories, KPI tracking, and data-driven product decisions.
                </p>

                <p>
                  I&apos;ve worked across products like Vepaar, Pagemaker, Voliz, Everest, and D2Cguru, contributing from feature ideation to release. My strength is combining product thinking, QA discipline, and cross-functional collaboration to ship quality products users love.
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center">
              <Magnetic>
                <Button 
                  variant="outlinePremium" 
                  asChild 
                  className="group/btn rounded-full h-[50px] px-8 border-indigo-200/80 bg-white hover:bg-gradient-to-r hover:from-[#3d5aff] hover:to-[#5c6eff] hover:text-white hover:border-transparent shadow-[0_4px_12px_rgba(99,102,241,0.05)] hover:shadow-[0_8px_20px_rgba(61,90,255,0.22)] hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 text-[14px] font-bold"
                >
                  <a
                    href="/resume/Krunal%20Baldha%20-%20PM%20Main%20.pdf"
                    download="Krunal Baldha - Resume.pdf"
                    className="flex items-center"
                  >
                    <svg 
                      width="15" 
                      height="15" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      aria-hidden="true" 
                      className="mr-2.5 transition-transform duration-300 group-hover/btn:translate-y-0.5"
                    >
                      <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Download Resume
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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