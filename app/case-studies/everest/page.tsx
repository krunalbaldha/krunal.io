import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Everest Case Study – QA Strategy & Automation | Krunal Baldha',
  description:
    'How I introduced structured QA processes and test automation workflows on the Everest platform to cut production defects and secure reliable release cycles.',
};

export default function EverestCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] px-4 py-24 sm:px-5 lg:px-6 selection:bg-[#14b8a6]/20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#14b8a6]/4 blur-[160px]" />
        <div className="absolute top-[40%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#a78bfa]/4 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px]">
        {/* Back link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] font-semibold text-[#475569] shadow-sm transition-all duration-300 hover:bg-[#14b8a6] hover:text-white hover:border-[#14b8a6] hover:scale-[1.02]"
        >
          ← Back to Portfolio
        </Link>

        {/* Header Hero Section */}
        <div className="mt-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#14b8a6]">
            Everest · Platform · Performance
          </p>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18233f] sm:text-[46px] lg:text-[54px]">
            Improving Product Quality with QA Strategy &amp; Automation
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#5b657c] font-medium max-w-[800px]">
            Transforming product quality validation by migrating critical user workflows from manual checks into automated verification checkpoints.
          </p>

          {/* Key Metrics Grid in Hero */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Defect Leakage</span>
              <p className="mt-1 text-[22px] font-bold text-[#14b8a6]">-52%</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
              <p className="mt-1 text-[22px] font-bold text-[#a78bfa]">5 Months</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Release Sprints</span>
              <p className="mt-1 text-[22px] font-bold text-[#34d399]">30% Faster</p>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Uptime</span>
              <p className="mt-1 text-[22px] font-bold text-[#e11d48]">99.9%</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {['QA Strategy', 'Automation', 'Reliability', 'Performance'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#14b8a6] bg-[#14b8a6]/5 border border-[#14b8a6]/10 hover:bg-[#14b8a6]/10 hover:border-[#14b8a6]/20 transition-all duration-300 shadow-sm cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] shadow-[0_0_6px_#14b8a6]" />
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
                background: `radial-gradient(circle, #14b8a6 0%, transparent 70%)`
              }}
            />
            <div className="relative h-[85%] w-[85%] z-10">
              <Image
                src="/images/blogs/3.png"
                alt="Everest Case Study"
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
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6] text-[15px] font-bold">1</span>
                The Challenge
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                Everest, a high-traffic operations platform, was encountering quality bottlenecks. Production releases were frequently delayed due to manual testing limitations, and post-release issues were impacting customer satisfaction. Release errors were increasing operational overhead.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Manual Bottlenecks</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Release sprints were delayed due to manual regression testing that took days to complete.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Defect Leakage</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Undetected bugs were frequently slipping into live builds, impacting customer trust.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card border-red-500/10 hover:border-red-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/5 px-2 py-1 rounded">Problem 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Long Feedback Loops</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Developers received bug reports days after code updates, slowing down defect fixes.
                  </p>
                </div>
              </div>
            </section>

            {/* My Role & Approach */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6] text-[15px] font-bold">2</span>
                My Role &amp; Approach
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                As the Quality &amp; Product Specialist, I formulated and executed a comprehensive testing overhaul. My approach shifted Everest from manual dependencies to automated quality validation. I focused on mapping critical user workflows, setting automated scripts for regression checkpoints, and integrating automatic testing directly into developer workflows.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#14b8a6] bg-[#14b8a6]/5 px-2 py-0.5 rounded border border-[#14b8a6]/10">Step 1</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Workflow Mapping</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Identified and isolated high-priority user journeys that must never break on live updates.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#14b8a6] bg-[#14b8a6]/5 px-2 py-0.5 rounded border border-[#14b8a6]/10">Step 2</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Script Migration</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Converted manual checklist scripts into automated code checks that run in seconds.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <span className="text-[11px] font-mono text-[#14b8a6] bg-[#14b8a6]/5 px-2 py-0.5 rounded border border-[#14b8a6]/10">Step 3</span>
                  <h4 className="text-[16px] font-bold text-[#18233f] mt-3">Developer Guardrails</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Integrated tests into code commits, alerting developers of errors before code review.
                  </p>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6] text-[15px] font-bold">3</span>
                The Solution
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.8] text-[#5b657c]">
                We established a dual-layered quality verification framework consisting of automated workflow tests and parallel sanity checks. Crucially, we set up automated safeguards that block updates when errors on high-priority paths occur, shifting testing into a continuous loop.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b8a6]/10 text-[#14b8a6] border border-[#14b8a6]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Workflow Verification</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Automated tests simulate user activities, checking logins, operations, and settings flows.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b8a6]/10 text-[#14b8a6] border border-[#14b8a6]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Sanity Smoke Checks</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Rapid tests run on every code build to verify that vital page components load successfully.
                  </p>
                </div>
                <div className="p-5 rounded-2xl glass-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b8a6]/10 text-[#14b8a6] border border-[#14b8a6]/20 shadow-sm mb-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#18233f]">Automated Safeguards</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">
                    Build validation pipelines automatically block code updates from deploying if any test fails.
                  </p>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6] text-[15px] font-bold">4</span>
                Results &amp; Impact
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#14b8a6]/15 hover:border-[#14b8a6]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Defect Leakage</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#14b8a6] tracking-tight leading-none">-52%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Reduction in live product errors and bug leakage after release updates.
                  </p>
                </div>

                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#14b8a6]/15 hover:border-[#14b8a6]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Release Sprints</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#34d399] tracking-tight leading-none">30% Faster</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Automated checks cut quality validation cycles from days down to under two hours.
                  </p>
                </div>

                <div className="relative overflow-hidden p-6 rounded-[22px] glass-card border-[#14b8a6]/15 hover:border-[#14b8a6]/30 hover:scale-[1.02] transition duration-300 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Uptime</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#14b8a6]/10 text-[#14b8a6]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-[38px] font-extrabold text-[#a78bfa] tracking-tight leading-none">99.9%</p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#5b657c]">
                    Ensured high system availability and stability across live web and mobile platforms.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Metadata Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="rounded-[24px] p-6 glass-card shadow-sm hover:border-[#14b8a6]/30 transition duration-300">
              <h3 className="text-[14px] font-bold text-[#18233f] border-b border-slate-200/50 pb-3 mb-4">
                Project Details
              </h3>
              <div className="space-y-4 text-[13.5px]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Role</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">QA &amp; Product Specialist</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">5 Months</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Team</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px] leading-relaxed">QA, DevOps, Backend</p>
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
              <h3 className="mt-1.5 text-[22px] font-bold text-[#18233f] tracking-tight">Monzi Personal Finance Platform</h3>
            </div>
            <Link
              href="/case-studies/monzi"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14b8a6] hover:bg-[#0d9488] text-white px-8 py-3.5 text-[14px] font-semibold shadow-md transition duration-300 hover:-translate-y-0.5"
            >
              Read Next Case Study →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
