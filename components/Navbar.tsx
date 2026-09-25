'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import { SITE_NAV } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when navigation happens (covers back/forward too).
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock page scroll and dismiss on Escape while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/work' || href === '/about' || href === '/contact'
      ? href === '/work'
        ? pathname.startsWith('/work')
        : pathname === href
      : false;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-200',
        scrolled || mobileOpen
          ? 'border-line bg-canvas/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-3.5">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.18em] text-ink transition-opacity hover:opacity-70"
          aria-label="LANGOLF DIGITAL — home"
        >
          LANGOLF <span className="opacity-50">DIGITAL</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {SITE_NAV.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs font-mono tracking-widest uppercase transition-colors',
                isActive(link.href) ? 'text-ink' : 'text-muted hover:text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
          >
            Let&apos;s Build
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-line-strong"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-canvas"
          >
            <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-5 sm:px-8 py-4">
              <ul className="flex flex-col">
                {SITE_NAV.map((link) => (
                  <li key={link.label} className="border-b border-line last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 font-mono text-sm tracking-widest text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </li>
                ))}
                <li className="pt-4 pb-1">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
                  >
                    LET&apos;S BUILD <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}