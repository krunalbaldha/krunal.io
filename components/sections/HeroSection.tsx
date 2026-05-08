'use client'

import Magnetic from "@/components/ui/Magnetic";
import SmoothCounter from "@/components/ui/SmoothCounter";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-[72px]">

      {/* ── Page background depth orbs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[100px] h-[400px] w-[500px] rounded-full bg-[#c8d4ff]/50 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[30%] h-[300px] w-[500px] rounded-full bg-[#cdc5ff]/40 blur-3xl" />
        <div
          className="absolute left-0 top-0 h-full w-[260px] opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(99,120,255,0.18) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-14 pt-10 sm:px-5 md:min-h-[calc(100vh-72px)] md:grid-cols-[1fr_1fr] md:pb-10 md:pt-8 lg:px-6">

        {/* ════════ LEFT: Copy ════════ */}
        <div className="order-2 max-w-[500px] self-center pr-0 md:order-1 md:pr-6">

          {/* Live indicator */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] font-medium text-[#4a5d8f] glass-badge">
            <span className="relative flex h-[9px] w-[9px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
              <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#22c55e]" />
            </span>
            Available for Product &amp; SaaS Opportunities
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.30em] text-[#6f8cff] sm:text-[12px]">
            Associate Product Manager
          </p>

          <h1 className="max-w-[440px] text-[34px] font-bold leading-[1.07] tracking-[-0.03em] text-[#14213d] sm:text-[40px] md:text-[46px] lg:text-[52px]">
            Designing product direction.
          </h1>

          <p className="mt-3 max-w-[390px] text-[19px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#5f7fff] sm:text-[21px] md:text-[23px]">
            Shipping meaningful user experiences.
          </p>

          <p className="mt-3 max-w-[420px] text-[14px] leading-[1.9] text-[#5a6787] sm:text-[15px]">
            I build SaaS products from idea to launch. product strategy, user research,
            roadmap execution, and cross-functional delivery.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Magnetic>
              <button className="hover-gradient-border rounded-full px-7 py-3 text-[14px] font-semibold text-[#21304f] transition hover:scale-[1.02] glass-badge">
                <a href="#work">View Projects</a>
              </button>
            </Magnetic>
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-6 sm:gap-8">
            {[
              { value: 15, suffix: '+', label: 'Projects Delivered' },
              { value: 5, suffix: '★', label: 'Client Satisfaction' },
              { value: 2, suffix: '+', label: 'Years in Product' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div className="h-8 w-px bg-white/50" />}
                <div>
                  <p className="text-[22px] font-bold tracking-[-0.04em] text-[#17233f]">
                    <SmoothCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#6c7894]">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════ RIGHT: Hero Image + Floating Cards ════════ */}
        <div
          className="order-1 relative md:order-2"
          style={{ width: '100%', height: 'clamp(460px, 60vw, 600px)' }}
        >
          {/* ── Soft lavender glow behind the boy ── */}
          <div
            className="absolute"
            style={{
              inset: 0,
              background: 'radial-gradient(ellipse 70% 65% at 55% 60%, rgba(200,212,255,0.55) 0%, transparent 75%)',
              filter: 'blur(28px)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Dotted decorative arc (right edge) ── */}
          <svg
            className="absolute"
            style={{ right: '2%', top: '18%', width: '140px', height: '200px', opacity: 0.25 }}
            viewBox="0 0 140 200"
            fill="none"
          >
            <circle cx="120" cy="100" r="90" stroke="#6f8cff" strokeWidth="1" strokeDasharray="4 8" />
          </svg>

          {/* ── Beautiful flowing white line connecting elements ── */}
          <svg
            className="absolute pointer-events-none"
            style={{ inset: 0, width: '100%', height: '100%', zIndex: 5 }}
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            {/* Main sweeping curve */}
            <path
              d="M -20 150 C 150 450, 450 450, 620 100"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0px 2px 8px rgba(255,255,255,0.6))' }}
            />
            {/* Secondary subtle top curve */}
            <path
              d="M 100 -50 C 300 100, 550 50, 700 250"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* ── Pink 4-pointed sparkle star — bottom right ── */}
          <svg
            className="absolute float-delayed"
            style={{ right: '18%', bottom: '18%', width: '18px', height: '18px', animationDuration: '4s', zIndex: 6 }}
            viewBox="0 0 18 18" fill="none"
          >
            <path d="M9 0 C9 0 9.8 6 9 9 C8.2 12 9 18 9 18 C9 18 8.2 12 9 9 C9.8 6 9 0 9 0Z" fill="#f43f5e" />
            <path d="M0 9 C0 9 6 8.2 9 9 C12 9.8 18 9 18 9 C18 9 12 9.8 9 9 C6 8.2 0 9 0 9Z" fill="#f43f5e" />
          </svg>

          {/* ── Small dot cluster ── */}
          <div className="absolute left-[44%] top-[7%] h-[7px] w-[7px] rounded-full bg-[#a78bfa]/50 float" />
          <div className="absolute right-[30%] top-[22%] h-[5px] w-[5px] rounded-full bg-[#6f8cff]/40 float-delayed" />

          {/* ── Boy hero image ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Hero.png"
            alt="Product Manager illustration"
            className="select-none"
            draggable={false}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              height: '90%',
              width: 'auto',
              objectFit: 'contain',
              zIndex: 10,
              filter: 'drop-shadow(0 24px 48px rgba(82,100,210,0.18))',
            }}
          />

          {/* ════ CARD 1: Dribbble icon — top-left ════ */}
          {/*
            KEY FIX: The card wrapper must have NO background, border, or box-shadow.
            Only the inner circle div carries the pink gradient. This removes the
            visible white bounding box that was appearing around the icon.
          */}
          <div
            className="absolute float"
            style={{ left: '-6%', top: '27%', animationDuration: '6.8s', zIndex: 20 }}
          >
            {/* Pink gradient circle — no outer wrapper card */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg,#f05f8a 0%,#e83368 60%,#d4245a 100%)',
                boxShadow: '0 12px 32px rgba(220,50,100,0.45), 0 3px 8px rgba(220,50,100,0.25), 0 0 0 3px rgba(255,255,255,0.90)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Dribbble logo */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.6" />
                <path d="M4.93 5.5 C6.5 7.5 9 9 12 9.5 C15 10 18 9 19.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M2.1 13 C5 12.5 8.5 12.8 12 14 C15.5 15.2 18.5 16.5 21.5 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M12 2 C10.5 5.5 10 9 10.5 12 C11 15 12.5 18.5 14 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* ════ CARD 2: Customer Success badge — mid-right ════ */}
          <div
            className="absolute float-delayed"
            style={{ right: '-15%', top: '40%', animationDuration: '6.2s', zIndex: 10 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '18px',
                padding: '10px 14px',
                minWidth: '172px',
                boxShadow:
                  '0 4px 6px -1px rgba(82,100,210,0.06), 0 12px 24px -4px rgba(82,100,210,0.12), 0 24px 48px -12px rgba(82,100,210,0.08), inset 0 1px 1px rgba(255,255,255,0.98), inset 1px 0 1px rgba(255,255,255,0.6), inset -1px 0 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  backgroundImage: 'url(/images/krunal1.png)',
                  backgroundSize: '250%',
                  backgroundPosition: 'center 15%',
                  boxShadow: '0 0 0 2px rgba(255,255,255,1), 0 4px 10px rgba(0,0,0,0.1)',
                  backgroundColor: '#f0f0f0',
                }}
              />
              <div>
                <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.10em', color: '#94a3b8', lineHeight: 1, marginBottom: '6px' }}>
                  Customer Success
                </p>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                  <p style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em', color: '#1c2746' }}>
                    8.50%
                  </p>
                  <span
                    style={{
                      marginBottom: '2px',
                      padding: '2px 6px',
                      borderRadius: '100px',
                      fontSize: '10px',
                      fontWeight: 600,
                      color: 'white',
                      background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                      boxShadow: '0 2px 5px rgba(34,197,94,0.35)',
                      lineHeight: 1.2,
                    }}
                  >
                    ↑
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ════ CARD 3: Top Categories bar chart — bottom-left ════ */}
          <div
            className="absolute float"
            style={{ left: '-2%', bottom: '10%', animationDuration: '7s', animationDelay: '0.6s', zIndex: 20 }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '18px',
                padding: '12px 14px',
                minWidth: '186px',
                boxShadow:
                  '0 4px 6px -1px rgba(82,100,210,0.06), 0 12px 24px -4px rgba(82,100,210,0.12), 0 24px 48px -12px rgba(82,100,210,0.08), inset 0 1px 1px rgba(255,255,255,0.98), inset 1px 0 1px rgba(255,255,255,0.6), inset -1px 0 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              {/* Card header */}
              <div style={{ marginBottom: '14px' }}>
                <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', letterSpacing: '-0.01em' }}>Top Categories</p>
              </div>

              {/* Bar chart */}
              <div style={{ position: 'relative', height: '56px' }}>
                {/* Grid lines */}
                {[33, 66].map((pct) => (
                  <div
                    key={pct}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      bottom: `${pct}%`,
                      height: '1px',
                      background: 'rgba(148,163,184,0.15)',
                    }}
                  />
                ))}
                {/* Bars */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '0 4px' }}>
                  {[
                    { h: 50, color: 'linear-gradient(to top, #ffb8a0, #ffc8b0)' },
                    { h: 75, color: 'linear-gradient(to top, #ffb6c1, #ffcce0)' },
                    { h: 45, color: 'linear-gradient(to top, #f8d1ff, #eed4ff)' },
                    { h: 90, color: 'linear-gradient(to top, #ff7e5f, #ff416c)' },
                  ].map((bar, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                      <div
                        style={{
                          width: '100%',
                          height: `${bar.h}%`,
                          background: bar.color,
                          borderRadius: '4px 4px 2px 2px',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend — single line */}
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1px' }}>
                {[
                  { label: 'Category 1', color: '#ffb8a0' },
                  { label: 'Category 2', color: '#ffcce0' },
                  { label: 'Category 3', color: '#eed4ff' },
                  { label: 'Category 4', color: '#ff416c' },
                ].map((item) => (
                  <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '7px', fontWeight: 600, color: '#64748b' }}>
                    <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ════ CARD 4: Google icon — arc end, top-right ════ */}
          <div
            className="absolute float-delayed"
            style={{ right: '-5%', top: '20%', animationDuration: '5.2s', animationDelay: '1s', zIndex: 20 }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.8) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  '0 4px 6px -1px rgba(0,0,0,0.04), 0 12px 24px -4px rgba(0,0,0,0.10), 0 24px 48px -12px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.98), inset 1px 0 1px rgba(255,255,255,0.6), inset -1px 0 1px rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
