const STORAGE_KEY = 'langolf-theme';

export function getStoredTheme(): 'light' | 'dark' | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

export function resolveTheme(): 'light' | 'dark' {
  const stored = getStoredTheme();
  if (stored) return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Inline script injected into <head> to set the theme class before first paint. */
export function themeInitScript() {
  return `(function () {
  try {
    var key = '${STORAGE_KEY}';
    var stored = null;
    try { stored = window.localStorage.getItem(key); } catch (e) {}
    var dark = null;
    if (stored === 'dark' || stored === 'light') {
      dark = stored === 'dark';
    } else {
      dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(dark ? 'dark' : 'light');
  } catch (e) {}
})();`;
}