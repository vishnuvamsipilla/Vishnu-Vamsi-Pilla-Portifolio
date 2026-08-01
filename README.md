# Portfolio — N S Vishnu Vamsi Pilla

Next.js 15 (App Router) + TypeScript. No CSS framework — plain CSS with custom
properties, so there's no build-time style dependency and nothing to purge.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy

Everything configurable lives in **`lib/config.ts`**:

| Field       | Status                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `siteUrl`   | ✅ `https://vishnu-vamsi-pilla-portifolio.vercel.app` — change if Vercel assigns a different URL or you add a custom domain.                                                  |
| `github`    | ✅ `github.com/vishnuvamsipilla` — pin 3 repos with READMEs so the link pays off.                                                                                  |
| `resume`    | ✅ `public/N_S_Vishnu_Vamsi_Resume.pdf` (the full-stack version).                                                                                                  |
| `email`     | ✅ Set.                                                                                                                                                            |
| `formspree` | ❌ **Still `YOUR_FORM_ID`.** Sign up at formspree.io, create a form, paste the ID — until then the contact form fails and falls back to showing the email address. |

Favicon is `app/icon.svg` — Next generates the `<link rel="icon">` from it. No
`favicon.ico` needed.

## Structure

```
app/
  layout.tsx            fonts (next/font), metadata, JSON-LD Person schema
  icon.svg              favicon
  page.tsx              composes the sections — server component
  globals.css           all styles, tokens at the top
  opengraph-image.tsx   generates the 1200x630 social card at build time
  twitter-image.tsx     re-exports the same card
components/
  Nav.tsx               client — scroll state
  Hero.tsx              server
  BuilderMock.tsx       server — pure CSS animation
  Stats.tsx             server
  Work.tsx              server
  Skills.tsx            server
  Experience.tsx        server
  ContactSection.tsx    server
  ContactForm.tsx       client — form state
  ScrollButton.tsx      client — smooth scroll
  RevealInit.tsx        client — one IntersectionObserver for the whole page
lib/
  config.ts             URLs and IDs
  data.ts               all copy and content
```

Only five components ship JavaScript. Everything else renders on the server.

## Editing content

All copy lives in `lib/data.ts` — stats, projects, skills, roles. Add a `url`
field to a project and it automatically renders as a linked card with a "Live"
badge; leave it off and it renders as a plain card.

## Checklist before sharing the link

- [ ] Open on a real phone, not just DevTools
- [ ] Tab through the whole page — focus rings should be visible everywhere
- [ ] Lighthouse 98+ (you claim sub-2s storefronts; your own site is the proof)
- [ ] Turn on OS reduced-motion and reload — everything still readable
- [ ] Submit the contact form once and confirm the email arrives
- [ ] Paste the URL into opengraph.xyz to check the social card

## Deploy

The repo is already initialised, committed, and pointed at
`github.com/vishnuvamsipilla/Vishnu-Vamsi-Pilla-Portifolio`. To publish:

```bash
git push -u origin main
```

Then import the repo into Vercel (it auto-detects Next.js — no build settings to
change). After the first deploy, check the assigned URL matches `siteUrl` in
`lib/config.ts`; if not, update it and push again. Then add Vercel Analytics and
submit to Google Search Console.
