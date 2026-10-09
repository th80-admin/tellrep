# TellRep website

Swiss authorised representative (CH-REP) for IVD and medical device manufacturers. Static site built with Astro, GSAP ScrollTrigger and Lenis.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Structure

| Path | Content |
| --- | --- |
| `src/pages/index.astro` | Home page, composed of the sections below |
| `src/components/` | Hero, Registry mock, Ticker, Services, LabelStory (pinned scroll story), Origins, Requirements, Insights/About, Analysis form |
| `src/data/content.js` | Swiss requirements, official sources and the three insight articles. Edit texts here. |
| `src/pages/insights/[slug].astro` | Article pages, generated from `content.js` |
| `src/scripts/motion.js` | All animations. Respects `prefers-reduced-motion`; without JS every section shows its final state. |
| `src/styles/global.css` | Brand tokens (studio whites, ink, red #C8102E) and shared components |

## Analysis form

The form builds the Swiss to-do list in the browser. No prices are in the code: the quote is sent by email after review.

Set a form endpoint in `.env` (see `.env.example`):

```
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_FORM_KEY=your-access-key
```

Without an endpoint the form runs in preview mode and sends nothing. Formspree works too (endpoint only, no key).

## Deploy

Any static host works. Two options:

* **Infomaniak** (Swiss hosting): `npm run build`, upload `dist/` to the web space.
* **Vercel or Netlify**: import the repository, framework preset Astro, add the two environment variables.

## SEO

* Landing pages: `/ch-rep/` (pillar guide with FAQ), `/swissdamed-registration/`, `/ch-rep/{china,korea,india,turkiye,eu-manufacturers}/` (data in `src/data/seo.js`)
* Structured data: Organization and ProfessionalService on every page, WebSite on home, FAQPage, BreadcrumbList, Article
* `sitemap-index.xml` (generated), `robots.txt`, canonical URLs, Open Graph image `public/og.png`
* Fonts are self hosted (no Google Fonts request)
* After go live: verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap, add the registered address to `org` in `seo.js`

## Before go live

- [ ] Register tellrep.ch and point DNS to the host
- [ ] Fill placeholders: registered address, phone, commercial register, UID (imprint, footer, label mock)
- [ ] Form service key in the environment
- [ ] Review privacy notice; consider self hosting the Google Fonts
- [ ] Double check the language rule for professional use IVD (Art. 15 IvDO) wording
