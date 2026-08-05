import type { Metadata } from 'next';

export const metadata: Metadata = {
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

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
