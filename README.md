# Axivore

Websites, web apps & AI automation for small and medium businesses in Germany.

**Live:** [axivore.io](https://axivore.io) · **Contact:** hello@axivore.io

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript, Tailwind CSS, Framer Motion
- [next-intl](https://next-intl.dev) — 6 languages (de, en, hr, ro, tr, it), German unprefixed at root
- [AI SDK](https://sdk.vercel.ai) + OpenAI — the `Axi` chat widget on the site
- [Resend](https://resend.com) — lead notification and contact emails
- Deployed on [Vercel](https://vercel.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/[locale]/        Locale-prefixed routes (leistungen, branchen, ratgeber, ...)
app/api/              Chat + contact route handlers (rate-limited, Zod-validated)
components/v2/        Current site components
lib/i18n.ts           Translations for all 6 locales
lib/rate-limit.ts      Per-IP rate limiting for public API routes
i18n/routing.ts        next-intl locale config
```

## Deploy

```bash
vercel --prod
```

Auto-deploys to production on every push to `main`.
