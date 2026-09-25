'use client';

import React, { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'langolf-theme';
const THEME_EVENT = 'langolf:theme';

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getServerSnapshot(): 'light' | 'dark' {
  return 'light';
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — class already applied */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink hover:border-line-strong focus-visible:outline-none"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}