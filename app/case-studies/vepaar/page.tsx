import Link from 'next/link';

export const metadata = {
  title: 'Vepaar Case Study – Boosting Product Adoption | Krunal Baldha',
  description:
    'How I redesigned onboarding and simplified key user flows at Vepaar to reduce friction and improve activation, resulting in higher user retention and feature adoption.',
};

export default function VepaarCaseStudy() {
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
            Vepaar · SaaS · Growth
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1d2333] sm:text-[40px] lg:text-[48px]">
            Boosting Product Adoption with Onboarding &amp; UX Optimization
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Onboarding', 'UX Optimization', 'Activation', 'Retention'].map((tag) => (
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
          <div className="h-[300px] w-full rounded-[20px] bg-[rgba(99,102,241,0.06)] sm:h-[400px] lg:h-[500px] flex items-center justify-center p-6">
            <img src="/images/blogs/1.png" alt="Vepaar Case Study" className="max-h-full w-auto object-contain drop-shadow-xl" />
          </div>
        </div>

        {/* Case Study Body */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
          <div className="space-y-10">
            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">The Challenge</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                Vepaar, a growing SaaS platform, was experiencing high drop-off rates during the initial user onboarding flow. Users found the setup process overwhelming, leading to lower activation rates and delayed time-to-value for small and medium-sized businesses (SMBs).
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">My Role &amp; Approach</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                As the Product Manager, I led the redesign of the onboarding experience. My approach was focused on simplifying key user flows, reducing friction points, and guiding the user step-by-step to their &lsquo;Aha!&rsquo; moment faster. I leveraged product analytics and conducted user interviews to identify the exact drop-off points.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">The Solution</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                We introduced a progressive profiling onboarding flow, breaking down the complex setup into smaller, manageable steps. We also added in-app tooltips and a checklist to guide users. The redesign focused heavily on UX optimization, ensuring the interface was intuitive and welcoming.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">Results &amp; Impact</h2>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] text-[#5b657c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>35% Increase in Activation:</strong> Users completing the core setup flow increased significantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>20% Drop in Time-to-Value:</strong> SMBs were able to launch their stores faster.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>Higher Retention:</strong> Users who completed the new onboarding showed a 15% higher retention rate over 3 months.</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Role</h3>
              <p className="mt-2 text-[#1d2333] font-medium">Product Manager</p>
            </div>
            <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Timeline</h3>
              <p className="mt-2 text-[#1d2333] font-medium">3 Months</p>
            </div>
            <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Team</h3>
              <p className="mt-2 text-[#1d2333] font-medium">Design, Engineering, Data</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 border-t border-[#d8ddea]/50 pt-10 pb-20 text-center">
          <h2 className="text-[24px] font-bold text-[#1d2333] mb-6">Ready to improve your product?</h2>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-[#3d5aff] px-8 py-3 text-[15px] font-medium text-white transition hover:bg-[#2a45eb] shadow-[0_8px_20px_rgba(61,90,255,0.3)] hover:-translate-y-0.5"
          >
            Let&apos;s Discuss Similar Challenges
          </Link>
        </div>
      </div>
    </main>
  );
}
