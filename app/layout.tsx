import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeScript } from '@/components/ThemeScript';

const SITE_URL = 'https://langolfdigital.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'LANGOLF DIGITAL — Ideas Are Cheap. I Build The Thing.',
  description:
    'Portfolio of Travis Langolf — a self-taught digital product builder turning ideas into working software: AI products, business systems, automation, commerce, and 3D/AR experiments.',
  applicationName: 'LANGOLF DIGITAL',
  authors: [{ name: 'Travis Langolf' }],
  openGraph: {
    title: 'LANGOLF DIGITAL — Ideas Are Cheap. I Build The Thing.',
    description:
      'Self-taught digital product builder. AI products, business systems, automation, commerce, and 3D/AR experiments — built honestly.',
    url: SITE_URL,
    siteName: 'LANGOLF DIGITAL',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LANGOLF DIGITAL — Ideas Are Cheap. I Build The Thing.',
    description:
      'Self-taught digital product builder. AI products, business systems, automation, commerce, and 3D/AR experiments — built honestly.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' }
  ],
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}