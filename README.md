# NYU Shanghai Robotics Club Website

Source for the club website, built with [React](https://react.dev/) and
[TypeScript](https://www.typescriptlang.org/) on [Vite](https://vitejs.dev/).
Deployed to GitHub Pages at <https://www.nyushrobotics.club/>.

## Project structure

```
.
├── public/            # static assets copied as-is
│   ├── images/        # WebP images (originals live outside the repo, see Assets)
│   ├── videos/        # re-encoded hero videos + poster frames
│   └── fonts/         # self-hosted Archivo variable font
├── src/
│   ├── components/    # shared UI (header, footer, hero, entry, record row…)
│   ├── data/          # events.ts, media.ts — content lives here
│   ├── pages/         # one file per route
│   ├── i18n/          # en.json / zh.json + i18next setup
│   ├── hooks/         # usePageTitle
│   ├── styles.css     # the single stylesheet, bundled by Vite
│   └── main.tsx       # entry point
├── index.html
└── package.json
```

## Development

```bash
npm install      # install deps
npm run dev      # dev server with HMR
npm run build    # production build
npm run preview  # preview the production build
```

## Design system

The visual language is taken from **real robotics and engineering company sites**
(Boston Dynamics, RoboMaster) rather than from generic landing-page conventions.
The shared grammar of that genre is:

- **Full-bleed media leads.** The hero is video or a large photo, ~76vh tall, and the
  imagery carries the page. Text is the supporting layer, not the structure.
- **A quiet top bar.** Logo + four links. It becomes translucent-black with a hairline
  only after you scroll. No CTA clutter.
- **Type does the shouting.** Headings are large, heavy and tightly tracked
  (weight 700, `letter-spacing: -0.032em`); body copy stays calm at 17px/1.65.
- **Structure is white space plus a 1px hairline.** Not outlined boxes, not cards.
- **One accent colour, used twice.** `--accent` (the club mark's violet, flattened)
  appears on interactive text and on *awarded* results. Nothing else is coloured.
- **Pill buttons.** White pill on dark, exactly as both reference sites do it.

### Rules to keep

| Don't | Do |
| --- | --- |
| gradient accents, glows, `background-clip: text` headings | flat ink on near-black |
| glassmorphism panels | flat `--bg-2` / `--surface` |
| emoji as icons (🥈 🥉) | the award named in the accent colour |
| all-caps tracked eyebrows above headings | heading alone |
| tinted purple "fake black" | neutral near-black `#0b0c0e` |
| outlined 2px boxes around content blocks | white space + hairline |
| numbered markers, `→` appended to links, `A · B · C` meta | plain sentences |
| fade-and-slide-up on every section | one hero entrance, nothing else |

`prefers-reduced-motion` disables the hero animation and pauses the autoplaying video.

### Type

One variable family, **Archivo** (`public/fonts/archivo-latin.woff2`, 88 KB):
headings at normal width / 700; body at 100% / 400; dates and counts at 88% width with
`tabular-nums`. Load the *standard* axis file — the weight-only build silently drops
the width axis.

Self-host it. Do **not** switch to the Google Fonts CDN: it is unreliable from mainland
China, which is most of the club's audience. CJK falls back to the system stack.

### Accessibility

Every text/background pair meets WCAG AA (≥ 4.5:1), including hover states and the
darkest surface (`--surface`). If you change a background, re-check `--text-3` — it is
the tightest pair in the palette.

## Details worth not breaking

- Each route sets its own `document.title` via `usePageTitle()`.
- Route chunks are lazy, so the `<Suspense>` fallback matters. Don't turn it into
  an empty div.
- GitHub Pages is static hosting with **no server-side rewrite**. Deep links work
  because the build emits a real file for every route:
  `dist/<route>/index.html` (plus `dist/404.html` for anything else). Only having
  `404.html` is not enough — the page renders, but the server answers **HTTP 404**,
  so search engines treat every subpage as missing.
  **Adding a route means adding it to `ROUTES` in `vite.config.ts`**, or it will 404
  in production. CI checks each one on every build.
- Unknown URLs are served `404.html` with a genuine 404 status; `NotFound` also
  injects `<meta name="robots" content="noindex">` as a second line of defence.
- URLs are canonical **with a trailing slash** (`/events/`); `/events` gets a 301
  from Pages. `public/sitemap.xml` must match.
- Event images ship two sizes (`-700.webp` + full) wired through `srcSet` in
  `Entry.tsx` / `RecordRow.tsx`. Regenerate the small variant for new photos.
- The NYU Shanghai logo in `public/images/` is the **white** version. On the light
  header it is inverted with `filter: brightness(0)`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages.

`vite.config.ts` emits `dist/<route>/index.html` for every route in `ROUTES`, plus
`dist/404.html`. Without it GitHub returns its own 404 for deep links like `/events`.
**Do not remove the `spa-static-routes` plugin, and keep its `ROUTES` list in sync
with `App.tsx`.**

## Assets

| Folder | Before | After |
| --- | --- | --- |
| `public/images` | 114 MB | 3.3 MB |
| `public/videos` | 93 MB | 9.8 MB |
| `public/fonts` | — | 88 KB (one variable file) |

Originals are kept **outside** the repository, in
`../NYUSH-Robotics-Club-assets-original/`. When adding a photo:

```bash
# event photo: max width 1400, plus a 700px card variant
cwebp -q 80 -resize 1400 0 new.jpg -o public/images/new.webp
cwebp -q 79 -resize 700 0 new.jpg -o public/images/new-700.webp
```

Hero video: 1600 px wide, H.264, CRF 26–30, no audio, plus a poster frame.

```bash
ffmpeg -i in.mp4 -vf scale=1600:-2 -c:v libx264 -preset slow -crf 28 \
  -pix_fmt yuv420p -an -movflags +faststart public/videos/out.mp4
ffmpeg -i public/videos/out.mp4 -frames:v 1 public/videos/out-poster.webp
```

## Internationalization

`src/i18n/en.json` and `zh.json`. Missing keys fall back to English silently, so
**keep both files in sync** — a missing translation does not error, it just shows
English.

## RoboMaster results

The honours on `/robomaster-team` come from the official announcements:

- [RMUL 2026 award list](https://www.robomaster.com/zh-CN/resource/pages/announcement/1913)
- [RMUL 2026 individual robot awards](https://www.robomaster.com/zh-CN/resource/pages/announcement/1916)
- [RMUL 2026 entry list](https://www.robomaster.com/zh-CN/resource/pages/announcement/1904)

## License

Intended for the NYU Shanghai Robotics Club; no license specified yet.
