# TellRep website: instructions for Claude Code

Static marketing site for TellRep, a Swiss authorised representative (CH-REP) for IVD and medical device
manufacturers. Audience: regulatory and export managers at foreign manufacturers. English only.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm audit        # must report 0 vulnerabilities before any commit that touches dependencies
```

## Stack (pinned, exact versions)

| Package | Role |
| --- | --- |
| astro 7 | Static site, scoped component CSS, no client framework |
| gsap 3 (incl. ScrollTrigger) | All animation. Free for commercial sites under the GSAP Standard License (Webflow). Do not remove GSAP notices from the bundle. |
| lenis 1 | Smooth wheel scrolling on desktop. Driven by the GSAP ticker in `src/scripts/motion.js`. Touch stays native. |
| @fontsource/* | Self hosted fonts. Never add Google Fonts or other third party requests. |
| @astrojs/sitemap | Sitemap |

There is no React. Do not add React, Vue, Tailwind, UI kits or animation libraries without asking Tim first.

## Structure

- `src/pages/` pages; `src/layouts/Base.astro` (head, SEO, header, footer), `src/layouts/Article.astro` (long-form pages)
- `src/components/` homepage sections; `src/data/content.js` (requirements, sources, insights), `src/data/seo.js` (schema, FAQ, origin pages)
- `src/scripts/motion.js` all motion; `src/styles/global.css` tokens and shared styles

## Design system: crisp studio white

- Background pure white. Tokens in `global.css` (`--studio-0/50/100`, `--hairline`, `--ink`, `--slate`, `--red`). Use tokens, never new hex values.
- One accent: TellRep red `#C8102E`, used sparingly (key word in a headline, primary button, the apple). No gradients on text, no second accent colour.
- Type: Schibsted Grotesk (display), Instrument Sans (body), IBM Plex Mono (legal references, data). No other families.
- No section divider lines. The only full-width line is the one above the footer. Cards may use a hairline border.
- The hero headline "Your representative in Switzerland. On target." and the apple with the crossbow bolt are the brand. Do not change them.
- Partner or distribution companies are never named on the site (conflict of interest). TellRep is independent: it sells no devices and takes no commission from distributors.

## Avoid AI slop

The site must look designed for this subject, not generated. Do not add:

- Aurora, mesh, noise or blob backgrounds, particle fields, glow orbs, grain overlays
- Gradient or shimmering text, "split text" blur-in on every heading, typewriter effects on headlines
- Custom cursors, magnetic buttons, click sparks, tilt cards, glassmorphism panels
- Emoji as icons, generic stock illustrations, icon-in-circle feature grids
- Marquees or counters beyond the existing ticker and the deadline countdown
- Filler copy ("seamless", "cutting-edge", "unlock", "elevate", "in today's fast-paced world")

Every visual must carry content from the regulatory world (labels, registries, references, deadlines).
One orchestrated motion moment per section at most; subtle reveals elsewhere.

## Motion rules

- Everything readable without JS: CSS shows final states; `.js` class enables entry states.
- Respect `prefers-reduced-motion` (no Lenis, no animation).
- Never use ScrollTrigger `pin`. Use CSS `position: sticky` (see `LabelStory.astro`). Pinning with Lenis caused layout jumps before.
- No layout shift: reserve space for text that animates in (`min-height`), animate `transform` and `opacity` only.
- No horizontal overflow at 390 px. Sections with off-canvas effects get `overflow-x: clip` (not `hidden`, which breaks sticky).
- After motion changes, check: section positions identical after scrolling down and back up; anchor links land 76 px below the top; `scrollWidth` equals viewport width on mobile.

## React Bits and other component catalogues

React Bits (reactbits.dev, MIT + Commons Clause) may be used as **inspiration only**:

- Never install the npm package named `react-bits`. It is not the official project.
- Do not add React to use a component. If Tim approves an effect, re-implement it in plain TypeScript with GSAP inside an Astro component, and read the source first.
- Most catalogue effects are on the "avoid" list above. Ask before using one.

## Dependencies

- Pin exact versions (`--save-exact`). Prefer releases at least 14 days old.
- Run `npm audit` after every change; fix before committing.
- No CDN scripts, no tracking, no analytics without a privacy review.

## Content and SEO

- Regulatory statements cite the article (IvDO, MedDO, IVDR, MDR) and stay cautious. No legal advice, no prices.
- Every page: one H1, title under ~60 characters, description ~150 characters, canonical, JSON-LD via `Base.astro`.
- New landing pages go into the sitemap automatically; link them from the footer or a related page.

## Commits

Small, descriptive commits on a branch; Tim merges to `main`.
