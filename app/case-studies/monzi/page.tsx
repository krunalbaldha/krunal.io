import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Monzi Case Study – Personal Finance & Analytics | Krunal Baldha',
  description:
    'A secure personal finance and analytics platform featuring secure user authentication, automated monthly cycles, and custom budget modeling.',
};

export default function MonziCaseStudy() {
  const techStack = [
    { layer: 'Platform Framework', tech: 'Next.js Framework', version: 'Core Engine', role: 'Handles web page routing, server rendering, and visual optimization.' },
    { layer: 'UI Architecture', tech: 'React Library', version: 'Core UI', role: 'Powers dynamic client-side layouts and smooth interactive interfaces.' },
    { layer: 'Design Engine', tech: 'Tailwind CSS', version: 'Styles', role: 'Provides custom visual styling and responsive page layouts.' },
    { layer: 'Database Layer', tech: 'Prisma Client', version: 'Data Link', role: 'Handles data queries, schema configuration, and secure data storage operations.' },
    { layer: 'Relational Database', tech: 'PostgreSQL', version: 'Data Store', role: 'Stores financial records safely with relational structures.' },
    { layer: 'User Security', tech: 'Supabase Auth', version: 'Secure Auth', role: 'Manages user sessions, secure password logins, and account data access.' },
    { layer: 'Analytics Charts', tech: 'Recharts', version: 'Visuals', role: 'Renders interactive cashflow breakdowns and financial tracking graphs.' },
    { layer: 'Form Verification', tech: 'Zod Validation', version: 'Verification', role: 'Validates user inputs to prevent invalid transaction entries.' },
    { layer: 'Icon Library', tech: 'Lucide Symbols', version: 'Icons', role: 'Supplies modern visual icons for financial actions and indicators.' },
    { layer: 'Encryption Utility', tech: 'Bcrypt & JWT', version: 'Security', role: 'Secures account password storage and session access tokens.' },
  ];

  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] px-4 py-24 sm:px-5 lg:px-6 selection:bg-[#6366f1]/20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#6366f1]/4 blur-[160px]" />
        <div className="absolute top-[40%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#a78bfa]/4 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#34d399]/3 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px]">
        {/* Back link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] font-semibold text-[#475569] shadow-sm transition-all duration-300 hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] hover:scale-[1.02]"
        >
          ← Back to Portfolio
        </Link>

        {/* Header Hero Section */}
        <div className="mt-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6366f1]">
            Monzi · Finance · Platform
          </p>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18233f] sm:text-[46px] lg:text-[54px]">
            Monzi Personal Finance Management Platform
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#5b657c] font-medium max-w-[800px]">
            A Secure Personal Finance &amp; Analytics Platform featuring secure user authentication, automated monthly cycles, and custom budget modeling.
          </p>

          {/* Key Metrics Grid in Hero */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Load Speed</span>
              <p className="mt-1 text-[22px] font-bold text-[#6366f1]">Instant</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
              <p className="mt-1 text-[22px] font-bold text-[#a78bfa]">3 Months</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Database Engine</span>
              <p className="mt-1 text-[22px] font-bold text-[#34d399]">PostgreSQL</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Type</span>
              <p className="mt-1 text-[22px] font-bold text-[#e11d48]">Web App</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {['React', 'Next.js', 'PostgreSQL', 'Secure Auth', 'Tailwind CSS'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#6366f1] bg-[#6366f1]/5 border border-[#6366f1]/10 hover:bg-[#6366f1]/10 hover:border-[#6366f1]/20 transition-all duration-300 shadow-sm cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1] shadow-[0_0_6px_#6366f1]" />
                {tag}
              </span>
            ))}
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
                background: `radial-gradient(circle, #6366f1 0%, transparent 70%)`
              }}
            />
            <div className="relative h-[85%] w-[85%] z-10">
              <Image
                src="/images/blogs/monzi.png"
                alt="Monzi Dashboard Mockup"
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
          <div className="space-y-12">
            
            {/* 1. Executive Summary */}
            <section className="scroll-mt-24 p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] text-[15px] font-bold">1</span>
                Executive Summary
              </h2>
              <div className="mt-6 space-y-4 text-[15.5px] leading-[1.85] text-[#5b657c]">
                <p>
                  <strong>Monzi</strong> is a modern, high-performance web application designed for personal finance tracking, budget modeling, savings milestone tracking, and automated financial insights. Designed with a mobile-first, desktop-optimized aesthetic, Monzi bridges the gap between simple budget tracking spreadsheets and fully-fledged automated banking aggregators.
                </p>
                <p>
                  By utilizing a modern development stack, Monzi maintains instant responsiveness for dashboard actions while utilizing a secure relational database on the backend. This case study details the application&apos;s functional design, product implementations, and user experience optimization strategies.
                </p>
              </div>
            </section>

            {/* 2. Core Platform Capabilities */}
            <section className="scroll-mt-24 p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] text-[15px] font-bold">2</span>
                Core Platform Capabilities
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {techStack.map((item) => (
                  <div key={item.tech} className="p-5 rounded-2xl glass-card hover:scale-[1.01] hover:border-[#6366f1]/30 transition duration-300 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">{item.layer}</span>
                      <span className="text-[11px] font-mono text-[#6366f1] bg-[#6366f1]/5 px-1.5 py-0.5 rounded border border-[#6366f1]/10">{item.version}</span>
                    </div>
                    <h4 className="text-[16px] font-bold text-[#18233f]">{item.tech}</h4>
                    <p className="text-[13px] leading-relaxed text-[#5b657c]">{item.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Core Product Features & Innovations */}
            <section className="scroll-mt-24 p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3 mb-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] text-[15px] font-bold">3</span>
                Core Product Features &amp; Innovations
              </h2>
              
              <div className="space-y-8">
                
                {/* 3.1 Rollover Engine */}
                <div className="p-5 sm:p-6 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[17px] font-bold text-[#18233f]">Automated Month Transition &amp; Cycle Rollover Engine</h3>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        Monzi implements a custom <strong>automated rollover engine</strong> running implicitly when a user signs in to the platform.
                      </p>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        When the system detects that the user&apos;s last reset month lags behind their current calendar month, it triggers a <strong>secure, atomic database transition</strong> that archives old transactions, aggregates statistics, captures historical budgets, and sets up a fresh monthly limit.
                      </p>
                      <div className="p-3 bg-[#6366f1]/5 border border-[#6366f1]/10 rounded-xl text-[13.5px] leading-relaxed text-[#505da2]">
                        <strong>Transaction Safety:</strong> The atomic transaction safety ensures that database operations complete successfully or revert completely, preventing partial or corrupt budget entries.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3.2 Client Cache */}
                <div className="p-5 sm:p-6 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[17px] font-bold text-[#18233f]">High-Performance Client-Side Cache Layer</h3>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        Uses a localized memory cache coupled with global state management to speed up page navigation and eliminate loading screen flickers.
                      </p>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        User actions and search filters are cached in memory. When a user creates, edits, or deletes an item, the cache instantly refreshes in the background to guarantee accuracy and visual responsiveness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3.3 Rate Limiter */}
                <div className="p-5 sm:p-6 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[17px] font-bold text-[#18233f]">Secure API &amp; Authentication Rate Limiting</h3>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        To protect user accounts and prevent misuse, Monzi implements secure rate limiting that blocks repetitive requests and suspicious login attempts, maintaining clean platform performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3.4 Heuristic AI */}
                <div className="p-5 sm:p-6 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[17px] font-bold text-[#18233f]">Automated Financial Insights Panel</h3>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        Runs an automated insights algorithm evaluating spending velocity, savings trends, and budget limits to guide financial health and issue warning alerts if spending exceeds set limits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3.5 Toast Alerts */}
                <div className="p-5 sm:p-6 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[17px] font-bold text-[#18233f]">Real-Time Category Budget Alerts</h3>
                      <p className="text-[14.5px] leading-[1.8] text-[#5b657c]">
                        Tracks transaction entries in real-time. If category spending thresholds exceed 100% (or cross 80% limits), users receive immediate visual warning alerts to prevent overspending.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. Security & Validation Practices */}
            <section className="scroll-mt-24 p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] text-[15px] font-bold">4</span>
                Security &amp; Validation Practices
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="text-[#6366f1] font-bold text-[17px] mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#6366f1] shadow-sm animate-pulse" />
                    Session Security
                  </div>
                  <p className="text-[13px] leading-[1.65] text-[#5b657c]">
                    All paths run security checks. Users can only view, create, or modify records belonging to their unique account.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="text-[#6366f1] font-bold text-[17px] mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#6366f1] shadow-sm animate-pulse" />
                    Form Verification
                  </div>
                  <p className="text-[13px] leading-[1.65] text-[#5b657c]">
                    All inputs undergo automatic verification, blocking invalid text entries and preventing zero or negative values.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition-all duration-300">
                  <div className="text-[#6366f1] font-bold text-[17px] mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#6366f1] shadow-sm animate-pulse" />
                    Precision Math
                  </div>
                  <p className="text-[13px] leading-[1.65] text-[#5b657c]">
                    Financial data is stored and calculated precisely to two decimal points to prevent mathematical discrepancies.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Scalability and Future Roadmap */}
            <section className="scroll-mt-24 p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] text-[15px] font-bold">5</span>
                Scalability and Future Roadmap
              </h2>
              <p className="text-[15.5px] leading-[1.8] text-[#5b657c] mb-6">
                Monzi is architected to transition from a single-instance project into an enterprise financial tool. Future milestones include:
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="p-5 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Phase 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-1">Distributed Session Support</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Replacing localized session tracking with a distributed system to support higher levels of user traffic scaling.
                  </p>
                </div>

                <div className="p-5 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Phase 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-1">Automatic Bank Integration</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Connecting with certified banking partners to pull real-time transactions and sort expenses automatically.
                  </p>
                </div>

                <div className="p-5 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Phase 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-1">Smart Receipt Scanning</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Extracting receipt total amounts and items automatically using secure image recognition systems.
                  </p>
                </div>

                <div className="p-5 rounded-[20px] glass-card shadow-sm hover:scale-[1.01] hover:border-[#6366f1]/30 transition duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Phase 4</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-1">Premium Feature Billing</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Automating subscription management and premium features activation based on payment cycles.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sticky Metadata Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="rounded-[24px] p-6 glass-card shadow-sm hover:border-[#6366f1]/30 transition duration-300">
              <h3 className="text-[14px] font-bold text-[#18233f] border-b border-slate-200/50 pb-3 mb-4">
                Project Details
              </h3>
              <div className="space-y-4 text-[13.5px]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Role</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">Lead Developer &amp; Architect</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">3 Months</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Database</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">Relational Database</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Framework</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">Next.js Framework</p>
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
              <h3 className="mt-1.5 text-[22px] font-bold text-[#18233f] tracking-tight">Voliz SaaS Engagement</h3>
            </div>
            <Link
              href="/case-studies/voliz"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3.5 text-[14px] font-semibold shadow-md transition duration-300 hover:-translate-y-0.5"
            >
              Read Next Case Study →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
