import type { Metadata } from "next";
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
  keywords: ["Product Manager", "SaaS", "Krunal Baldha", "Portfolio"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080B14] text-white">
        <Noise />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
