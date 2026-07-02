import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import CursorGlow from "@/components/ui/CursorGlow";
import Noise from "@/components/ui/Noise";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Krunal Baldha — Associate Product Manager",
  description:
    "Results-driven Associate Product Manager with 2+ years of experience delivering SaaS products end-to-end. I turn problems into scalable solutions that users love and businesses grow with.",
  keywords: ["Product Manager", "SaaS", "Krunal Baldha", "Portfolio", "APM"],
  openGraph: {
    title: "Krunal Baldha — Associate Product Manager",
    description: "Product Manager building delightful, high-impact SaaS products.",
    type: "website",
  },
  icons: {
    icon: "images/icons/apple.png",
    apple: "images/icons/apple.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#d8e5ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*
          Fixed gradient background — composited by the GPU as its own layer.
          Using a separate fixed div instead of background-attachment:fixed on body
          eliminates scroll jank: the browser never needs to repaint the background
          on scroll, it simply composites this layer against the scrolling content.
        */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            backgroundColor: '#d9e3ff',
            backgroundImage: [
              'radial-gradient(ellipse 90% 70% at 10% 5%, rgba(180,205,255,0.90) 0%, transparent 55%)',
              'radial-gradient(ellipse 65% 55% at 88% 15%, rgba(210,195,255,0.80) 0%, transparent 50%)',
              'radial-gradient(ellipse 55% 45% at 55% 90%, rgba(190,215,255,0.75) 0%, transparent 55%)',
              'radial-gradient(ellipse 45% 40% at 2%  78%, rgba(195,230,255,0.65) 0%, transparent 50%)',
              'radial-gradient(ellipse 40% 35% at 70% 55%, rgba(220,200,255,0.50) 0%, transparent 45%)',
              'linear-gradient(150deg, #d8e5ff 0%, #e5eaff 35%, #e1e6ff 65%, #ecdeff 100%)',
            ].join(','),
            // will-change:transform promotes this to its own GPU compositing layer
            willChange: 'transform',
          }}
        />

        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-xl focus:bg-[#5f7fff] focus:px-5 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Noise />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
