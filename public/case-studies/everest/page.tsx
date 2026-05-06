import Link from 'next/link';

export default function EverestCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f3f5fb] px-4 py-24 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1000px]">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border border-[#d8ddea] bg-white px-4 py-2 text-[14px] font-medium text-[#475569] shadow-sm transition hover:bg-[#f0f4ff] hover:text-[#3d5aff]"
        >
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mt-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8cff]">
            Everest · Platform · Performance
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1d2333] sm:text-[40px] lg:text-[48px]">
            Improving Product Quality with QA Strategy & Automation
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {['QA Strategy', 'Automation', 'Reliability', 'Performance'].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1.5 text-[12px] text-[#647086] glass-badge bg-white/50 border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image / Content Area */}
        <div className="mt-10 overflow-hidden rounded-[28px] p-2 glass-card-strong">
          <div className="h-[300px] w-full rounded-[20px] bg-[rgba(99,102,241,0.04)] sm:h-[400px] lg:h-[500px] flex items-center justify-center p-6">
            <img src="/images/blogs/3.png" alt="Everest Case Study" className="max-h-full w-auto object-contain drop-shadow-xl" />
          </div>
        </div>

        {/* Case Study Body */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
          <div className="space-y-10">
            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">The Challenge</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                Everest, a high-traffic platform, was suffering from inconsistent release cycles and frequent production bugs. The lack of a unified QA strategy meant that manual testing was creating major bottlenecks, delaying critical feature launches and negatively impacting system reliability for end-users across web and mobile platforms.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">My Role & Approach</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                I stepped in to overhaul the QA process from the ground up. My goal was to shift from a reactive testing model to a proactive, automated approach. I audited the existing testing workflows, collaborated with engineering leads to define quality gates, and championed the integration of automated end-to-end (E2E) testing into our CI/CD pipelines.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">The Solution</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                We established a structured QA framework encompassing both automated test coverage for core flows and exploratory testing for edge cases. I worked closely with SDETs (Software Development Engineers in Test) to implement tools like Cypress and Selenium. We also created standardized bug reporting templates and instituted a regular triage process to prioritize high-impact fixes.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">Results & Impact</h2>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] text-[#5b657c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>50% Reduction in Production Bugs:</strong> Critical defects reaching production were cut in half within the first three months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>Faster Release Cycles:</strong> Automated testing reduced manual QA time by 40%, enabling faster and more reliable deployment schedules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>Increased Team Confidence:</strong> Engineers gained confidence in their code, knowing the automated suite provided a strong safety net before merging.</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Role</h3>
              <p className="mt-2 text-[#1d2333] font-medium">QA / Product Manager</p>
            </div>
            <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Timeline</h3>
              <p className="mt-2 text-[#1d2333] font-medium">4 Months</p>
            </div>
            <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Team</h3>
              <p className="mt-2 text-[#1d2333] font-medium">Engineering, QA/SDET</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 border-t border-[#d8ddea]/50 pt-10 pb-20 text-center">
          <h2 className="text-[24px] font-bold text-[#1d2333] mb-6">Need to improve your release reliability?</h2>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-[#3d5aff] px-8 py-3 text-[15px] font-medium text-white transition hover:bg-[#2a45eb] shadow-[0_8px_20px_rgba(61,90,255,0.3)] hover:-translate-y-0.5"
          >
            Let's Discuss Similar Challenges
          </Link>
        </div>
      </div>
    </main>
  );
}
