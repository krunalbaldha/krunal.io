'use client'

import { useState } from 'react';
import Magnetic from '@/components/ui/Magnetic';
import { Button } from '@/components/ui/button';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 sm:px-5 lg:px-6 ${
          scrolled ? 'pt-3' : 'pt-4'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full px-4 py-3 transition-all duration-300 glass-vibrancy sm:px-5 lg:px-6 ${
            scrolled ? 'scrolled' : ''
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d8ddea] bg-white text-[15px] font-semibold text-[#5a5cff] shadow-sm transition hover:scale-105 sm:h-[40px] sm:w-[40px] sm:text-[16px]"
              aria-label="Go to homepage"
            >
              KB
            </a>
            <a
              href="#home"
              className="text-[17px] font-semibold text-[#0f172a] transition hover:text-[#5a5cff] sm:text-[18px]"
            >
              Krunal
            </a>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 text-[15px] font-medium text-[#475569] md:flex lg:gap-1.5"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={href}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-1.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#eef2ff] to-[#e8ecff] font-semibold text-[#3d5aff] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(99,102,241,0.15)] ring-1 ring-indigo-200/70'
                      : 'text-[#475569] hover:bg-[#f4f6ff] hover:text-[#3d5aff]'
                  }`}
                >
                  {/* Active dot indicator */}
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'scale-100 bg-[#5f7fff] opacity-100 shadow-[0_0_6px_2px_rgba(95,127,255,0.45)]'
                        : 'scale-0 bg-[#5f7fff] opacity-0'
                    }`}
                  />
                  {label}
                </a>
              );
            })}
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:block">
            <Magnetic>
              <Button variant="premiumSolid" size="sm" asChild className="rounded-full">
                <a href="#contact">
                  Let&apos;s Connect
                </a>
              </Button>
            </Magnetic>
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8ddea] bg-white shadow-sm transition hover:bg-[#f0f4ff] md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="relative flex h-4 w-4 flex-col items-center justify-center gap-[4.5px]">
              <span
                className={`block h-[1.5px] w-4 rounded-full bg-[#1e293b] transition-all duration-300 ${
                  mobileOpen ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 rounded-full bg-[#1e293b] transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 rounded-full bg-[#1e293b] transition-all duration-300 ${
                  mobileOpen ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="mobile-menu-open mx-auto mt-2 max-w-[1200px] rounded-[22px] p-3 glass-vibrancy md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, href, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={href}
                    onClick={closeMobile}
                    className={`flex items-center gap-2.5 rounded-[14px] px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#eef2ff] to-[#e8ecff] font-semibold text-[#3d5aff]'
                        : 'text-[#475569] hover:bg-[#f4f6ff] hover:text-[#3d5aff]'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        isActive ? 'bg-[#5f7fff]' : 'bg-[#cbd5e1]'
                      }`}
                    />
                    {label}
                  </a>
                );
              })}
              {/* CTA in mobile menu */}
              <Button variant="premiumSolid" size="default" asChild className="w-full mt-1 rounded-full">
                <a href="#contact" onClick={closeMobile}>
                  Let&apos;s Connect
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
