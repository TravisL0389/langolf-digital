import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '@/data/site';

const FOOTER_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'The Lab', href: '/#the-lab' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="font-mono text-sm font-semibold tracking-[0.18em] text-ink">
              LANGOLF <span className="opacity-50">DIGITAL</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Ideas are cheap. I build the thing. Working products, prototypes, and experiments —
              tagged honestly, documented openly.
            </p>
            <p className="text-xs font-mono text-faint uppercase tracking-wider">
              {STUDIO_INFO.status}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:min-w-[320px]">
            <ul className="space-y-2.5">
              {FOOTER_LINKS.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.slice(2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2.5">
            <p className="font-mono text-xs uppercase tracking-wider text-faint">Direct</p>
            <a href={`mailto:${STUDIO_INFO.email}`} className="block text-sm text-muted hover:text-ink">
              {STUDIO_INFO.email}
            </a>
            <a
              href={STUDIO_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-muted hover:text-ink"
            >
              github.com/travislangolf
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-wider text-faint sm:flex-row sm:items-center sm:justify-between">
          <span suppressHydrationWarning>&copy; {year} {STUDIO_INFO.name}</span>
          <span>Built with Next.js · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
