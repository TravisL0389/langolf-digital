import { themeInitScript } from '@/lib/theme';

/**
 * Sets the theme class on <html> before first paint to avoid a flash of the
 * wrong color scheme. Rendered synchronously in <head>.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeInitScript() }}
    />
  );
}