import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'NextHire AI Case Study – AI Resume Screening & Semantic Retrieval | Krunal Baldha',
  description:
    'Comprehensive real-world case studies demonstrating how NextHire AI leverages FAISS vector search and ATS candidate ranking to solve talent acquisition challenges.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icons/apple.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const architecturePhases = [
  {
    phase: 'Phase 1',
    title: 'Authentication & Access',
    desc: 'Secure role-based access control for recruiters and hiring managers.',
    color: '#6366f1',
  },
  {
    phase: 'Phase 2 & 3',
    title: 'Resume Parsing & Extraction',
    desc: 'Multi-format PDF/DOCX ingestion extracting skills, experience timeline, education, and contact metadata.',
    color: '#a78bfa',
  },
  {
    phase: 'Phase 4 & 5',
    title: 'ATS Matching & Ranking',
    desc: 'Deterministic keyword scoring combined with weighted multi-factor experience ranking engines.',
    color: '#ec4899',
  },
  {
    phase: 'Phase 6 & 7',
    title: 'Semantic AI & FAISS Vector Search',
    desc: 'High-dimensional vector embeddings enabling contextual semantic skill matching beyond exact keyword hits.',
    color: '#14b8a6',
  },
];

export default function NexthireCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] px-4 py-24 sm:px-5 lg:px-6 selection:bg-[#ec4899]/20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#ec4899]/4 blur-[160px]" />
        <div className="absolute top-[40%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#6366f1]/4 blur-[140px]" />
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
            NextHire AI · AI &amp; Talent Automation
          </p>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#18233f] sm:text-[46px] lg:text-[54px]">
            AI-Powered Resume Screening, ATS Matching &amp; Semantic Retrieval
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#5b657c] font-medium max-w-[840px]">
            Combining rule-based ATS matching, intelligent parsing workflows, React dashboards, and FAISS vector search to solve critical talent acquisition challenges across enterprise and agency environments.
          </p>

          {/* Key Metrics Grid in Hero */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Shortlist Time</span>
              <p className="mt-1 text-[22px] font-bold text-[#ec4899]">85% Reduction</p>
              <span className="text-[11px] text-[#64748b]">1–2 Days vs 14 Days</span>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Throughput</span>
              <p className="mt-1 text-[22px] font-bold text-[#a78bfa]">20x Faster</p>
              <span className="text-[11px] text-[#64748b]">1,000+ Resumes/Min</span>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Search Precision</span>
              <p className="mt-1 text-[22px] font-bold text-[#34d399]">94%</p>
              <span className="text-[11px] text-[#64748b]">FAISS Semantic Vector</span>
            </div>
            <div className="rounded-[20px] p-5 glass-card shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Offer Efficiency</span>
              <p className="mt-1 text-[22px] font-bold text-[#6366f1]">3:1 Ratio</p>
              <span className="text-[11px] text-[#64748b]">Interview-to-Offer</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {['AI Screening', 'FAISS Vector Search', 'ATS Matching', 'Semantic AI', 'React'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#ec4899] bg-[#ec4899]/5 border border-[#ec4899]/10 hover:bg-[#ec4899]/10 hover:border-[#ec4899]/20 transition-all duration-300 shadow-sm cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899] shadow-[0_0_6px_#ec4899]" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://nexthire.krunal.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white px-6 py-2.5 text-[13.5px] font-semibold shadow-md transition-all duration-300 hover:scale-[1.02]"
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

        {/* Hero Image Area */}
        <div className="mt-10 overflow-hidden rounded-[28px] p-3 sm:p-4 glass-card-strong border border-white/60 shadow-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center aspect-[16/10] md:aspect-[21/9] w-full">
          <div className="relative w-full h-full rounded-[14px] sm:rounded-xl overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] bg-slate-950 flex items-center justify-center transition duration-500 hover:scale-[1.002]">
            <div 
              className="absolute inset-0 opacity-40 blur-[60px] pointer-events-none"
              style={{
                background: `radial-gradient(circle, #ec4899 0%, transparent 70%)`
              }}
            />
            <div className="relative h-[85%] w-[85%] z-10">
              <Image
                src="/images/blogs/NextHire.png"
                alt="NextHire AI Case Study"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* System Architecture Section */}
        <section className="mt-16 p-6 sm:p-8 rounded-[24px] glass-card-strong border border-white/60 shadow-sm">
          <h2 className="text-[22px] font-bold text-[#18233f] flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ec4899]/10 text-[#ec4899] text-[14px] font-bold">⚡</span>
            NextHire AI Architecture Flow
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5b657c]">
            NextHire AI pairs deterministic keyword filtering with high-dimensional vector embeddings to deliver unbiased, context-aware candidate rankings.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {architecturePhases.map((item) => (
              <div key={item.phase} className="p-5 rounded-2xl glass-card border-slate-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">{item.phase}</span>
                  <h3 className="mt-2 text-[16px] font-bold text-[#18233f]" style={{ color: item.color }}>{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5b657c]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Detail Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-10">

            {/* Case Study 1 */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#ec4899]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ec4899]">
                  Case Study 1 · Enterprise
                </span>
                <span className="text-[12px] text-[#94a3b8]">Software &amp; Cloud Infrastructure</span>
              </div>
              <h2 className="mt-3 text-[22px] font-bold text-[#18233f]">
                Enterprise Tech Hiring at Scale (5,000+ Employees)
              </h2>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#5b657c]">
                <p>
                  <strong>Challenge:</strong> Overwhelmed by 1,500+ applicants per Senior Full-Stack Engineer role, causing recruiter burnout, delayed interviews, and loss of top candidates to competing offers.
                </p>
                <p>
                  <strong>Problem:</strong> Traditional keyword-based ATS tools filtered out qualified candidates using non-standard phrasing (e.g., &quot;Distributed Systems &amp; Kubernetes&quot; vs &quot;DevOps Container Orchestration&quot;), while passing unqualified resumes with keyword stuffing.
                </p>
              </div>

              {/* Implementation Flow */}
              <div className="mt-6 rounded-2xl bg-slate-900/90 p-5 text-white shadow-inner">
                <h4 className="text-[13px] font-mono text-[#ec4899] uppercase tracking-wider mb-3">Pipeline Flow</h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-[12px]">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">1,500+ Resumes Ingested</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">Batch Parsing &amp; JSON Profile</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">FAISS Vector Similarity</div>
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold">Top 25 Match Shortlist</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#ec4899]">82% Faster</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Shortlist time cut from 14 days to under 48 hours</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#34d399]">94% Accuracy</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">3x higher interview-to-offer ratio reported</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#6366f1]">&lt; 2 Hours</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Immediate outreach to top 5% candidate matches</p>
                </div>
              </div>
            </section>

            {/* Case Study 2 */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#6366f1]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#6366f1]">
                  Case Study 2 · Staffing Agency
                </span>
                <span className="text-[12px] text-[#94a3b8]">FinTech &amp; Data Science</span>
              </div>
              <h2 className="mt-3 text-[22px] font-bold text-[#18233f]">
                Accelerating Staffing Placements &amp; Talent Discovery
              </h2>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#5b657c]">
                <p>
                  <strong>Challenge:</strong> Agency recruiters spent 65% of working hours manually scanning candidate databases for urgent client requisitions.
                </p>
                <p>
                  <strong>Solution:</strong> Enabled natural language vector search across existing talent repositories. Recruiters can search: <em>&quot;Find senior data engineers with high-throughput pipeline experience in banking&quot;</em> without rigid Boolean constraints.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#6366f1]">4.5x Placements</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Shortlists delivered to clients in under 4 hours</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#34d399]">+38% Talent Pool</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Discovered hidden talent missing exact keywords</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#ec4899]">$350,000+</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Annual revenue increase from faster placements</p>
                </div>
              </div>
            </section>

            {/* Case Study 3 */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#14b8a6]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#14b8a6]">
                  Case Study 3 · Bias Reduction
                </span>
                <span className="text-[12px] text-[#94a3b8]">E-Commerce &amp; Retail Tech (800+ Employees)</span>
              </div>
              <h2 className="mt-3 text-[22px] font-bold text-[#18233f]">
                Reducing Hiring Bias &amp; Improving ATS Fairness
              </h2>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#5b657c]">
                <p>
                  <strong>Challenge:</strong> Manual resume reviews suffered from recency bias, prestige bias (over-indexing on university names), and inconsistent scoring across hiring managers.
                </p>
                <p>
                  <strong>Solution:</strong> De-coupled PII from qualification scores via anonymized blind screening, using objective matrix weightings and transparent visual match breakdowns.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#14b8a6]">+45% Diversity</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Broader candidate pools advancing to interviews</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#34d399]">91% Alignment</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Post-hire performance correlated with initial scores</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#a78bfa]">100% Audit</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Full compliance and decision transparency</p>
                </div>
              </div>
            </section>

            {/* Case Study 4 */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong hover:scale-[1.005] transition duration-300">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#a78bfa]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#a78bfa]">
                  Case Study 4 · Niche Tech
                </span>
                <span className="text-[12px] text-[#94a3b8]">Robotics &amp; Autonomous Vehicles</span>
              </div>
              <h2 className="mt-3 text-[22px] font-bold text-[#18233f]">
                Niche Engineering Talent Discovery (ROS2, SLAM, C++)
              </h2>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#5b657c]">
                <p>
                  <strong>Challenge:</strong> Standard ATS software failed to distinguish between candidates with shallow coursework vs deep production experience in specialized robotics domains.
                </p>
                <p>
                  <strong>Solution:</strong> Configured context-aware embeddings to capture project responsibilities and weighted practical engineering outputs above generic job titles.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#a78bfa]">70% Cost Reduction</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Replaced expensive headhunters with semantic discovery</p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-[20px] font-bold text-[#34d399]">14 Days Hire Time</span>
                  <p className="mt-1 text-[12px] text-[#5b657c]">Reduced from 60 days for Senior Systems Architects</p>
                </div>
              </div>
            </section>

            {/* Comparative Performance Table */}
            <section className="p-6 sm:p-8 rounded-[24px] glass-card-strong">
              <h3 className="text-[18px] font-bold text-[#18233f] mb-4">Performance Metrics Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px]">
                  <thead>
                    <tr className="border-b border-slate-200/60 text-[#94a3b8] uppercase text-[11px] font-bold">
                      <th className="pb-3">Metric</th>
                      <th className="pb-3">Before NextHire AI</th>
                      <th className="pb-3">With NextHire AI</th>
                      <th className="pb-3">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/40 text-[#475569]">
                    <tr>
                      <td className="py-3 font-semibold text-[#18233f]">Avg. Time to Shortlist</td>
                      <td className="py-3">12 – 14 Days</td>
                      <td className="py-3 text-indigo-600 font-medium">1 – 2 Days</td>
                      <td className="py-3 font-bold text-emerald-600">~85% Reduction</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#18233f]">Screening Throughput</td>
                      <td className="py-3">~50 Resumes/Day</td>
                      <td className="py-3 text-indigo-600 font-medium">~1,000+ Resumes/Min</td>
                      <td className="py-3 font-bold text-emerald-600">20x Acceleration</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#18233f]">Search Accuracy (Precision)</td>
                      <td className="py-3">~55% (Boolean)</td>
                      <td className="py-3 text-indigo-600 font-medium">94% (FAISS Vector)</td>
                      <td className="py-3 font-bold text-emerald-600">+39% Accuracy</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#18233f]">Interview-to-Offer Ratio</td>
                      <td className="py-3">8:1</td>
                      <td className="py-3 text-indigo-600 font-medium">3:1</td>
                      <td className="py-3 font-bold text-emerald-600">62.5% Gain</td>
                    </tr>
                  </tbody>
                </table>
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Product Role</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">Associate Product Manager</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Tech Stack</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[14px] leading-relaxed">
                    Python, FAISS Vector Search, React, NLP
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Timeline</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[15px]">4 Months</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Primary Impact</span>
                  <p className="mt-1.5 text-[#18233f] font-semibold text-[14px] leading-relaxed">
                    85% screening reduction &amp; 94% search accuracy
                  </p>
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
              <h3 className="mt-1.5 text-[22px] font-bold text-[#18233f] tracking-tight">Webmine Platform QA Strategy</h3>
            </div>
            <Link
              href="/case-studies/webmine"
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
