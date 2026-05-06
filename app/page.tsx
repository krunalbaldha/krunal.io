'use client'

import { useEffect, useState } from 'react';

import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WorkSection from '@/components/sections/WorkSection';
// import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import HighlightsSection from '@/components/sections/HighlightsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

const NAV_IDS = ['home', 'about', 'work', 'contact'] as const;

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Deepen header shadow once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link matching the visible section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Header activeSection={activeSection} scrolled={scrolled} />

      <main className="min-h-screen overflow-hidden bg-[#f3f5fb]">
        <HeroSection />
        <FeaturesSection />
        <WorkSection />
        {/* <CaseStudiesSection /> */}
        <HighlightsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
