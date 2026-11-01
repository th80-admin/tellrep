# CLAUDE.md

Guidance for Claude Code in the TellRep website repository.

## Project

TellRep is a Swiss authorised representative (CH-REP) for IVD and medical device manufacturers. This is its marketing website: Astro 7, GSAP for scroll motion, self-hosted fonts, static output. Repo `th80-admin/tellrep`, branch `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

| Path | Content |
|---|---|
| `src/pages/index.astro` | Home, composed of the components below |
| `src/components/` | Hero (apple + crossbow bolt), Registry (swissdamed mock), Ticker, Services, LabelStory (sticky label sequence), Origins, Requirements, InsightsAbout, Analysis (form) |
| `src/data/content.js` | Swiss requirements, official sources, the three insight articles |
| `src/data/seo.js` | Organisation data, CH-REP guide FAQ, origin landing pages |
| `src/pages/ch-rep/` | `/ch-rep/` pillar guide and `/ch-rep/{china,korea,india,turkiye,eu-manufacturers}/` |
| `src/pages/swissdamed-registration.astro` | Deadline landing page |
| `src/layouts/Base.astro`, `Article.astro` | Head, header, footer, structured data |
| `src/scripts/motion.js` | All animations |
| `src/styles/global.css` | Brand tokens and shared components |

Edit copy in `content.js` / `seo.js` where it lives there, not in the templates.

## Fixed decisions (do not change without being asked)

- **Slogan:** "Your representative in Switzerland. On target." Never reword it.
- **Logo B2:** wordmark "TellRep" (Tell bold, Rep regular) + glossy red apple with graphite leaf, tagline "Swiss Authorised Representative" below. Header uses the compact version without the tagline. Dark and flat one-colour versions exist. No Swiss cross anywhere.
- **No TAmedics.** The name, its products and its warehouse never appear on the site (conflict of interest).
- **Team, not a person.** About speaks of "a team of specialists". Tim's name only appears in the imprint.
- **No prices** on the site or in the code (not even hidden). The form returns a Swiss to-do list and a package tier without an amount; the offer follows by email.
- **Independence sentence:** "We do not sell devices and take no commission from distributors." Never claim "we do not import" (the importer module exists).
- **Services:** core mandate cards plus optional modules (distributor introductions, storage in Switzerland, Swiss importer). The customer chooses; do not present them as a decision TellRep still has to make.
- **Placeholders** stay visible as placeholders until the real data exists: registered address, phone, commercial register, UID. Never invent them.

## Regulatory accuracy

TellRep sells regulatory reliability, so a wrong fact on its own site is worse than a missing one.
- Every legal statement cites its article (IvDO SR 812.219, MedDO SR 812.213, IVDR, MDR) and matches the official sources listed in `content.js`.
- Key dates: Switzerland third country for MD since 26 May 2021 and IVD since 26 May 2022; swissdamed device registration mandatory since 1 July 2026, transition until 31 December 2026; technical documentation to Swissmedic within 7 days; declarations and certificates kept 10 years.
- If you are not sure about a rule, say so in your reply and leave the page wording unchanged. Do not soften or extend legal requirements to make copy sound better.
- Open item: the language rule for professional-use IVD (Art. 15 IvDO) still needs checking against the ordinance text.

## Writing style

The site must read like a regulatory specialist wrote it, not like generated marketing copy. These rules apply to all visible text, titles, meta descriptions, alt texts, FAQ answers and JSON-LD.

**Language**
- English, British spelling: "authorised", "organisation", "labelling". Exceptions: "authorized" where it is deliberately included for search (CH-REP guide), and schema.org names (`Organization`).
- Short, plain sentences. One point per sentence. Address the reader as "you".

**Punctuation**
- No em or en dashes as sentence connectors (" — ", " – ", " - "). Use a full stop, comma or colon, or rewrite. Number ranges use "to" in text ("8 to 12 minutes").
- No exclamation marks. No emojis. Symbols that belong to the subject (⌛ on the label mock, ↗ for external links, CE) are fine.

**Banned words.** If you reach for one, write the concrete fact instead.
seamless, leverage, robust, streamline, cutting-edge, state of the art, world-class, comprehensive, tailored, end-to-end, hassle-free, peace of mind, unlock, empower, elevate, navigate (figuratively), journey, solution(s), holistic, effortless, game-changer, boost, trusted partner, one-stop shop, delve, crucial, vital.
"ensure" only where it quotes a legal obligation.

**Banned patterns**
- "In today's …", "Whether you're …", "Look no further", "We pride ourselves", "Rest assured", "Here's …", "Let's …".
- "Not just X, but Y" / "It's not X. It's Y." / "No X, no Y."
- Slogan triads ("Fast. Simple. Compliant.") and three adjectives in a row. The slogan above is the only staccato line on the site.
- Lists of three added for rhythm. List exactly as many items as are true.
- Rhetorical questions as headings.

**Concrete over adjectives**
- Each claim carries a number, an article, a date or a name: "within seven days on request", "Art. 44 IvDO", "until 31 December 2026".
- Never invent numbers, clients, testimonials, years of experience, certifications or partner logos.
- Headings say what the section contains. The tone may have dry wit ("and you can sleep", "You pay us, they do not."), at most one such line per section.

## Design

- Crisp studio white: pure white page (`--studio-0`), depth only through soft shadows (`--shadow-1/2/3`) and fine hairline borders on cards. No grey page backgrounds.
- One accent colour: red `--red #c8102e`. Ink `--ink #161b20`, secondary text `--slate`. No blue, no petrol, no green (keeps distance from TAmedics).
- Fonts: Schibsted Grotesk (display), Instrument Sans (text), IBM Plex Mono (data, article references, numbers).
- No horizontal lines between sections; the only full-width line is above the footer. Lines inside components (registry rows, to-do list) are fine.
- The apple with the bolt is the only playful element. Shadows obey physics: bolt and apple cast their shadows on the same floor.
- Product-style mocks (swissdamed window, label, form) instead of stock photos or illustrations. No glassmorphism, gradient blobs, glow, emoji icons or decorative 3D.
- Article references are shown as `.ref` mono chips.

## Motion

- All animation in `src/scripts/motion.js` with GSAP. No smooth-scroll libraries (Lenis was removed because layouts jumped on scroll up). The label story uses CSS `position: sticky`, not GSAP pinning.
- Every section must show its final state without JS and with `prefers-reduced-motion`.
- Scrolling up must not shift any layout. Check section positions before and after a full scroll when touching motion code.

## SEO

- One H1 per page, title ≤ 60 characters, unique meta description, canonical URL.
- Structured data in the layouts: Organization/ProfessionalService on every page, WebSite on home, FAQPage, BreadcrumbList, Article. FAQ JSON-LD must match the visible FAQ text.
- New public pages go into internal links (footer guides) and are picked up by `@astrojs/sitemap`. Imprint and privacy stay `noindex`.

## Before finishing a change

1. `npm run build` passes.
2. Scan the copy you changed for the banned words, patterns and dashes above, and fix every hit.
3. Check desktop and mobile (no horizontal scroll, chips not overlapping buttons).
4. Do not push or deploy without the user's OK.
