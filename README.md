# LANGOLF DIGITAL

Portfolio of Travis Langolf — a self-taught digital product builder. Ideas are cheap; the work is the proof.

## Stack

- Next.js 15 (App Router, static output)
- React 19 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first, semantic light/dark theme tokens)
- `motion` for subtle entrance animations (respects `prefers-reduced-motion`)
- `lucide-react` icons

## Project registry

Every case study lives in `data/projects/*.ts` and is registered in `data/projects.ts`.
Routes (`/work/[slug]`), filters, sitemap, and Open Graph metadata all derive from the registry — no hardcoded project content in components.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Contact form

The contact form runs in prototype mode: submissions are validated locally and shown a receipt, but are not yet persisted. Wire-up point is `lib/contact.ts` (Supabase `contact_messages` insert is the intended path). No API keys are required to run the site.

## Environment variables

None required. See `.env.example` for the optional Supabase connection details.