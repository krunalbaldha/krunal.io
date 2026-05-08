'use client'

import Magnetic from '@/components/ui/Magnetic';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

interface HeaderProps {
  activeSection: string;
  scrolled: boolean;
}

export default function Header({ activeSection, scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 sm:px-5 lg:px-6 ${scrolled ? 'pt-3' : 'pt-4'
        }`}
    >
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full px-4 py-3 transition-all duration-300 glass-vibrancy sm:px-5 lg:px-6 ${scrolled ? 'scrolled' : ''
          }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d8ddea] bg-white text-[15px] font-semibold text-[#5a5cff] shadow-sm sm:h-[40px] sm:w-[40px] sm:text-[16px]">
            <a href="#home">KB</a>
          </div>
          <span className="text-[17px] font-semibold text-[#0f172a] sm:text-[18px]">
            <a href="#home">Krunal</a>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-[15px] font-medium text-[#475569] md:flex lg:gap-1.5">
          {navLinks.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={`relative flex items-center gap-1.5 rounded-full px-4 py-1.5 transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-br from-[#eef2ff] to-[#e8ecff] font-semibold text-[#3d5aff] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(99,102,241,0.15)] ring-1 ring-indigo-200/70'
                  : 'text-[#475569] hover:bg-[#f4f6ff] hover:text-[#3d5aff]'
                  }`}
              >
                {/* Active dot indicator */}
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${isActive
                    ? 'scale-100 bg-[#5f7fff] opacity-100 shadow-[0_0_6px_2px_rgba(95,127,255,0.45)]'
                    : 'scale-0 bg-[#5f7fff] opacity-0'
                    }`}
                />
                {label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <Magnetic>
          <button className="hover-gradient-border rounded-full border border-[#d8ddea] bg-white px-4 py-2 text-[13px] font-medium text-black shadow-sm transition hover:bg-[#f0f4ff] hover:border-indigo-200 hover:text-[#3d5aff] sm:px-5 sm:text-[14px]">
            <a href="#contact">Let&apos;s Connect</a>
          </button>
        </Magnetic>
      </div>
    </header>
  );
}
