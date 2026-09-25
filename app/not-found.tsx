import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-faint">404</p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
        If you followed a link to a project, it may have been renamed. The rest of the site is
        very much alive.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/work"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80"
        >
          VIEW THE WORK
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-xs font-mono font-medium tracking-wider text-ink transition-colors hover:border-accent"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  );
}