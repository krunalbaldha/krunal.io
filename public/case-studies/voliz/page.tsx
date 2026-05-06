import Link from 'next/link';

export default function VolizCaseStudy() {
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
            Voliz · SaaS · Engagement
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1d2333] sm:text-[40px] lg:text-[48px]">
            Increasing User Engagement through Data-Driven Product Decisions
          </h1>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {['Product Analytics', 'User Behavior', 'Engagement', 'UX'].map((tag) => (
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
           <div className="h-[300px] w-full rounded-[20px] bg-[rgba(99,102,241,0.05)] sm:h-[400px] lg:h-[500px] flex items-center justify-center p-6">
             <img src="/images/blogs/2.png" alt="Voliz Case Study" className="max-h-full w-auto object-contain drop-shadow-xl" />
           </div>
        </div>

        {/* Case Study Body */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
          <div className="space-y-10">
            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">The Challenge</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                Voliz faced stagnation in daily active user (DAU) growth. While user acquisition remained steady, long-term retention and meaningful engagement were dropping. We lacked clear insights into *where* users were falling off within the core product loops and *why* they weren't utilizing premium features.
              </p>
            </section>
            
            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">My Role & Approach</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                As the Product Manager, I initiated a deep dive into our product analytics using Mixpanel and Hotjar. I mapped out the entire user journey to identify critical friction points. By setting up targeted funnels, I discovered that a confusing navigation structure was burying high-value actions, leading to a significant drop-off early in the session.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">The Solution</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#5b657c]">
                Based on the data, I led a cross-functional initiative to revamp the core dashboard. We implemented a personalized "quick actions" menu based on user personas and simplified the main navigation. We also introduced timely, context-aware tooltips to guide users toward high-value features they had historically ignored.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-bold text-[#1d2333]">Results & Impact</h2>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] text-[#5b657c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>40% Boost in Feature Discovery:</strong> The new "quick actions" menu led to a massive increase in users exploring secondary features.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>18% Increase in DAU:</strong> Daily active user engagement improved significantly over the following quarter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6f8cff] font-bold mt-1">✓</span>
                  <span><strong>Enhanced Data Culture:</strong> The success of this initiative established a stronger data-first mindset within the broader engineering and design teams.</span>
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
               <p className="mt-2 text-[#1d2333] font-medium">2 Months</p>
             </div>
             <div className="rounded-[24px] p-6 glass-card border border-[#d8ddea]/50">
               <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6f8cff]">Team</h3>
               <p className="mt-2 text-[#1d2333] font-medium">Data Analytics, UI/UX, Engineering</p>
             </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 border-t border-[#d8ddea]/50 pt-10 pb-20 text-center">
            <h2 className="text-[24px] font-bold text-[#1d2333] mb-6">Ready to scale your user engagement?</h2>
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
