import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Voliz Case Study – Increasing User Engagement | Krunal Baldha',
  description:
    'How I leveraged product analytics and user behavior insights to optimize user journeys and boost engagement rates on the Voliz SaaS platform.',
};

export default function VolizCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] px-4 py-24 sm:px-5 lg:px-6 selection:bg-[#ec4899]/20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#ec4899]/4 blur-[160px]" />
        <div className="absolute top-[40%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#a78bfa]/4 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px]">
        {/* Back link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] font-semibold text-[#475569] shadow-sm transition-all duration-300 hover:bg-[#ec4899] hover:text-white hover:border-[#ec4899] hover:scale-[1.02]"
        >
          ← Back to Portfolio
        </Link>

        {/* Header Hero Section */}
        <div className="mt-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#ec4899]">
            Voliz · SaaS · Engagement
          </p>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18233f] sm:text-[46px] lg:text-[54px]">
            Increasing User Engagement through Data-Driven Product Decisions
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#5b657c] font-medium max-w-[800px]">
            Leveraging product analytics and user behavior insights to optimize user journeys and boost active response metrics.
          </p>

          {/* Key Metrics Grid in Hero */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Active Engagement</span>
              <p className="mt-1 text-[22px] font-bold text-[#ec4899]">+28%</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
              <p className="mt-1 text-[22px] font-bold text-[#a78bfa]">4 Months</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Completion Rate</span>
              <p className="mt-1 text-[22px] font-bold text-[#34d399]">+15%</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Creation Time</span>
              <p className="mt-1 text-[22px] font-bold text-[#e11d48]">&lt;45s</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {['Product Analytics', 'User Behavior', 'Engagement', 'UX'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#ec4899] bg-[#ec4899]/5 border border-[#ec4899]/10 hover:bg-[#ec4899]/10 hover:border-[#ec4899]/20 transition-all duration-300 shadow-sm cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899] shadow-[0_0_6px_#ec4899]" />
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
                background: `radial-gradient(circle, #ec4899 0%, transparent 70%)`
              }}
            />
            <div className="relative h-[85%] w-[85%] z-10">
              <Image
                src="/images/blogs/2.png"
                alt="Voliz Case Study"
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
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899] text-[15px] font-bold">1</span>
                The Challenge
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                Voliz, an interactive polling and feedback SaaS platform, was struggling to maintain consistent user engagement. Response rates were dropping, and users were finding the process of creating polls friction-filled. This resulted in low poll completion rates and user churn.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Engagement Decline</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Real-time polling response rates had dropped, causing survey creators to lose interest.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Creation Friction</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    The setup wizard was cluttered, requiring users to fill out complex forms for simple polls.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">High Drop-offs</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Users frequently abandoned the poll creation flow halfway through, increasing overall churn.
                  </p>
                </div>
              </div>
            </section>

            {/* My Role & Approach */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899] text-[15px] font-bold">2</span>
                My Role &amp; Approach
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                As the Associate Product Manager, I led the initiative to reverse this engagement decline. I focused on data-informed design, tracking user paths to identify exit points. By conducting customer interviews and analyzing group patterns, we uncovered that the workspace setup was too complex.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#ec4899] bg-[#ec4899]/5 px-2 py-0.5 rounded border border-[#ec4899]/10">Step 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">User Path Tracking</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Mapped user interaction data to pinpoint exactly which fields and forms caused users to exit.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#ec4899] bg-[#ec4899]/5 px-2 py-0.5 rounded border border-[#ec4899]/10">Step 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">User Segmenting</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Grouped user behaviors to separate casual survey creators from power-users.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#ec4899] bg-[#ec4899]/5 px-2 py-0.5 rounded border border-[#ec4899]/10">Step 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Customer Interviews</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Conducted feedback sessions with active users to validate form usability complaints.
                  </p>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899] text-[15px] font-bold">3</span>
                The Solution
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                We completely redesigned the poll creation workflow. We simplified the layout, reduced default options, and introduced instant templates. Furthermore, we integrated a conversational polling widget that worked directly within communication channels.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ec4899]/10 text-[#ec4899] border border-[#ec4899]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Progressive Workflow</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Hid advanced configurations behind progressive expanders, keeping the main flow clean.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ec4899]/10 text-[#ec4899] border border-[#ec4899]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Instant Templates</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Supplied one-click presets for common poll styles so users could start immediately.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ec4899]/10 text-[#ec4899] border border-[#ec4899]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">In-Chat Interaction</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Allowed respondents to vote directly within their active chat thread, avoiding page redirects.
                  </p>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899] text-[15px] font-bold">4</span>
                Results &amp; Impact
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#ec4899]/15 hover:border-[#ec4899]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">User Engagement</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#ec4899] tracking-tight leading-none">+28%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Increase in overall active polling engagement and response rates.
                  </p>
                </div>

                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#ec4899]/15 hover:border-[#ec4899]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Poll Completion</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#34d399] tracking-tight leading-none">+15%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Improvement in survey completion rates once started.
                  </p>
                </div>

                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#ec4899]/15 hover:border-[#ec4899]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Creation Time</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#a78bfa] tracking-tight leading-none">&lt;45s</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Average time to compile and launch a new interactive poll fell from 3 minutes.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Metadata Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="rounded-[24px] p-6 glass-card shadow-sm hover:border-[#ec4899]/30 transition duration-300">
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
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">4 Months</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Team</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px] leading-relaxed">Design, Dev, Analytics</p>
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
              <h3 className="mt-1.5 text-[22px] font-bold text-[#18233f] tracking-tight">Everest Platform QA Strategy</h3>
            </div>
            <Link
              href="/case-studies/everest"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white px-8 py-3.5 text-[14px] font-semibold shadow-md transition duration-300 hover:-translate-y-0.5"
            >
              Read Next Case Study →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
