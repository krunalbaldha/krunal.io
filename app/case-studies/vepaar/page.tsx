import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Vepaar Case Study – Boosting Product Adoption | Krunal Baldha',
  description:
    'How I redesigned onboarding and simplified key user flows at Vepaar to reduce friction and improve activation, resulting in higher user retention and feature adoption.',
};

export default function VepaarCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] px-4 py-24 sm:px-5 lg:px-6 selection:bg-[#3d5aff]/20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#3d5aff]/4 blur-[160px]" />
        <div className="absolute top-[40%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#a78bfa]/4 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px]">
        {/* Back link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] font-semibold text-[#475569] shadow-sm transition-all duration-300 hover:bg-[#3d5aff] hover:text-white hover:border-[#3d5aff] hover:scale-[1.02]"
        >
          ← Back to Portfolio
        </Link>

        {/* Header Hero Section */}
        <div className="mt-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
            Vepaar · SaaS · Growth
          </p>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18233f] sm:text-[46px] lg:text-[54px]">
            Boosting Product Adoption with Onboarding &amp; UX Optimization
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#5b657c] font-medium max-w-[800px]">
            Redesigning onboarding structures and simplifying setup flows to optimize time-to-value milestones for business users.
          </p>

          {/* Key Metrics Grid in Hero */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Activation Rate</span>
              <p className="mt-1 text-[22px] font-bold text-[#6f8cff]">+35%</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
              <p className="mt-1 text-[22px] font-bold text-[#a78bfa]">3 Months</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Time-to-Value</span>
              <p className="mt-1 text-[22px] font-bold text-[#34d399]">-20%</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">User Retention</span>
              <p className="mt-1 text-[22px] font-bold text-[#e11d48]">+15%</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {['Onboarding', 'UX Optimization', 'Activation', 'Retention'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#6f8cff] bg-[#6f8cff]/5 border border-[#6f8cff]/10 hover:bg-[#6f8cff]/10 hover:border-[#6f8cff]/20 transition-all duration-300 shadow-sm cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#6f8cff] shadow-[0_0_6px_#6f8cff]" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://vepaar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#3d5aff] hover:bg-[#2b44d8] text-white px-6 py-2.5 text-[13.5px] font-semibold shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              View Product
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Image / Content Area */}
        <div className="mt-10 overflow-hidden rounded-[28px] p-3 sm:p-4 glass-card-strong border border-white/60 shadow-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center aspect-[16/10] md:aspect-[21/9] w-full">
          <div 
            className="relative w-full h-full rounded-[14px] sm:rounded-xl overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] bg-slate-950 flex items-center justify-center transition duration-500 hover:scale-[1.002]"
          >
            {/* Accent glow behind image */}
            <div 
              className="absolute inset-0 opacity-40 blur-[60px] pointer-events-none"
              style={{
                background: `radial-gradient(circle, #6f8cff 0%, transparent 70%)`
              }}
            />
            <div className="relative h-[85%] w-[85%] z-10">
              <Image
                src="/images/blogs/1.png"
                alt="Vepaar Case Study"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* Case Study Body */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          
          <div className="space-y-10">
            {/* The Challenge */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff] text-[15px] font-bold">1</span>
                The Challenge
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                Vepaar, a growing business platform, was experiencing high drop-off rates during the initial user setup. Users found the configuration process overwhelming, leading to lower activation rates and delayed time-to-value for small and medium-sized businesses (SMBs).
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Onboarding Drop-offs</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    New users frequently abandoned the platform during the first setup steps.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Delayed Time-to-Value</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    It took too long for users to set up a functional profile and see initial value.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Setup Complexity</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    The overwhelming amount of customizable features left users confused on startup.
                  </p>
                </div>
              </div>
            </section>

            {/* My Role & Approach */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff] text-[15px] font-bold">2</span>
                My Role &amp; Approach
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                As the Product Manager, I led the redesign of the onboarding experience. My approach focused on simplifying key user flows, reducing friction points, and guiding users step-by-step to their &apos;Aha!&apos; moment faster. I leveraged analytics tools and conducted user interviews to identify drop-off points.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#6f8cff] bg-[#6f8cff]/5 px-2 py-0.5 rounded border border-[#6f8cff]/10">Step 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Friction Mapping</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Tracked user actions on onboarding screens to isolate drop-off points.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#6f8cff] bg-[#6f8cff]/5 px-2 py-0.5 rounded border border-[#6f8cff]/10">Step 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Customer Surveys</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Surveyed small business owners to understand what parts of setup were most confusing.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#6f8cff] bg-[#6f8cff]/5 px-2 py-0.5 rounded border border-[#6f8cff]/10">Step 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Prototype Iterations</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Created and verified progressive setup flows to find the most intuitive path.
                  </p>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff] text-[15px] font-bold">3</span>
                The Solution
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                We introduced a step-by-step progressive onboarding guide, breaking down the complex setup into smaller, manageable steps. We added interactive tooltips and a checklist to guide users. The redesign focused heavily on user experience optimization, ensuring the interface was intuitive.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6f8cff]/10 text-[#6f8cff] border border-[#6f8cff]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Progressive Wizard</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Divided configuration pages into digestible, numbered milestones.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6f8cff]/10 text-[#6f8cff] border border-[#6f8cff]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Interactive Tooltips</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Added contextual, hoverable tooltips to clarify options without cluttering the screen.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6f8cff]/10 text-[#6f8cff] border border-[#6f8cff]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Setup Checklist</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Gave users a persistent progress checklist that check-marked tasks in real time.
                  </p>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff] text-[15px] font-bold">4</span>
                Results &amp; Impact
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#6f8cff]/15 hover:border-[#6f8cff]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Activation Rate</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#6f8cff] tracking-tight leading-none">+35%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Increase in user activation rate and onboarding completion milestones.
                  </p>
                </div>

                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#6f8cff]/15 hover:border-[#6f8cff]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Time-to-Value</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#34d399] tracking-tight leading-none">-20%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Reduction in average setup duration, allowing SMBs to launch faster.
                  </p>
                </div>

                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#6f8cff]/15 hover:border-[#6f8cff]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">User Retention</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6f8cff]/10 text-[#6f8cff]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#a78bfa] tracking-tight leading-none">+15%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Higher retention rates over 3 months for users completing setup.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Metadata Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="rounded-[24px] p-6 glass-card shadow-sm hover:border-[#6f8cff]/30 transition duration-300">
              <h3 className="text-[14px] font-bold text-[#18233f] border-b border-slate-200/50 pb-3 mb-4">
                Project Details
              </h3>
              <div className="space-y-4 text-[13.5px]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Role</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">Product Manager</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">3 Months</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Team</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px] leading-relaxed">Design, Frontend Dev, Analytics</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Circular Case Studies Navigation */}
        <div className="mt-20">
          <div className="rounded-[24px] p-6 sm:p-8 glass-card-strong border border-white/60 shadow-sm flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Next Case Study</span>
              <h3 className="mt-1.5 text-[22px] font-bold text-[#18233f] tracking-tight">Nexthire SaaS Engagement</h3>
            </div>
            <Link
              href="/case-studies/nexthire"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6f8cff] hover:bg-[#3d5aff] text-white px-8 py-3.5 text-[14px] font-semibold shadow-md transition duration-300 hover:-translate-y-0.5"
            >
              Read Next Case Study →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
