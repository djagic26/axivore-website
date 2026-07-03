@AGENTS.md

# Axivore — Project Context

## Stack
- Next.js 16.2.6 (App Router, Turbopack)
- TypeScript, Tailwind CSS, Framer Motion
- Vercel (produkcija), port 3000/3001 lokalno

## Struktura
```
app/
  layout.tsx          ← metadata, OpenGraph, globalni layout
  page.tsx            ← landing page (sve sekcije)
  favicon.ico         ← custom Axivore favicon
  icon.svg            ← SVG icon za browser tab
  opengraph-image.tsx ← OG image za social sharing (edge runtime)
  impressum/
    page.tsx          ← Impressum stranica (live)
components/
  Header.tsx, Footer.tsx, Hero.tsx, Services.tsx, ...
lib/
  i18n.ts             ← prijevodi (de, en, hr, ro, tr, it)
  LanguageContext.tsx
  ThemeContext.tsx
public/
  axivore-icon.svg
```

## Deploy
```bash
vercel --prod
```
Automatski se linkuje na axivore.io.

## Branding
- **Boje:** Background #050507, Dark #0C0C0F, Accent #A09AFF, Secondary #7B72E8, Border #4A4866
- **Font:** Geist Sans
- **Logo:** Ljubičasti "A" sa zvijezdom na crnoj podlozi (`public/icon.png`, komponenta `AxivoreLogo`)
- **Tagline:** Precision · Disruption · Direction

## Kontakt / Legal
- Email: hello@axivore.io
- Adresa (Impressum): Rotweg 172, 70437 Stuttgart
- Steuernummer: dodati nakon Gewerbe potvrde (maj/juni 2026)
- Datenschutz: napraviti nakon Gewerbe potvrde

## Višejezičnost
Stranica ima 6 jezika. Prijevodi su u `lib/i18n.ts`.
Uvijek dodaj prijevode za SVE jezike kad dodaješ novi tekst.
Jezici: de (default), en, hr, ro, tr, it.
Detekcija jezika: `navigator.language` (lib/LanguageContext.tsx) — auto-prebacivanje po jeziku browsera.

## Poznati TODO
- [ ] Datenschutz stranica (čeka Gewerbe)
- [ ] Steuernummer u Impressum (čeka poštom)
- [ ] `html lang` atribut dinamički (trenutno hardcoded "de")
- [ ] Obrisati placeholder fajlove iz /public (vercel.svg, next.svg, itd.)
