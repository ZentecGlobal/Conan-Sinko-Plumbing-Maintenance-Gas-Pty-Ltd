# Media assets

Real photos live directly in these folders and are referenced from `app/` via
`next/image` (or a native `<video>` tag for clips) using the `/media/...`
public path. Folders with no real files yet still have a `.gitkeep` so the
empty structure stays reserved in git.

- `hero/` — homepage hero background image or video — **pending**, still a gradient placeholder (TODO in `app/page.tsx`)
- `gallery/` — homepage gallery strip — filled: `caravan-plumbing-lotus.webp` (services hub, Caravan Plumbing section, not the gallery itself). 3 of 6 gallery slots are still **pending** `MediaPlaceholder`s
- `team/` — photos of Conan Sinko / the team for the About page — **pending**, still a `MediaPlaceholder`
- `water-filters/` — `puretec-water-filter-unit.webp`, used on the services hub "Water Filtration Specialist" section
- `stormwater/` — `stormwater-pump-install.webp`, used on `app/services/stormwater-drainage/page.tsx`
- `blocked-drains/` — **reserved, not yet referenced anywhere** (do not wire up until real assets land)
- `bathrooms/` — `bathroom-reno-1.webp` (primary), `bathroom-freestanding-tub.webp` + `bathroom-reno-walkthrough.webp` (secondary), used on the services hub "Bathroom Renovation Plumbing" section; `smart-toilet-install.webp` (small, low-res) used only in the homepage gallery strip
- `before-after/` — `outdoor-copper-shower-tub.webp`, used in the homepage gallery strip
- `gas/` — `outdoor-gas-kitchen-build.webp`, used as the hero/poster image on `app/services/gas-lpg/page.tsx`
- `hot-water/` — `rinnai-hot-water-install.webp`, used on the services hub "Hot Water Systems" section
- `videos/` — `outdoor-gas-kitchen.mp4` (autoplay hero background loop, gas-lpg page), `hot-water-system-install.mp4` + `bathroom-walkthrough.mp4` (click-to-play via `ClickToPlayVideo`, services hub), `toilet-install.mp4` (small autoplay loop, homepage gallery strip)

## Logos

- `public/logos/logo-business-card-crop.webp` — the actual icon + wordmark logo
  lockup (dark card background, not transparent). Used in `Header.tsx` and
  `Footer.tsx`.
- `public/logos/logo-standalone.webp` — despite the name, this is the **full
  business card graphic** (logo + Conan's contact details + ACN/licence), not
  a standalone logo mark. Not currently used anywhere. If the client meant for
  this to be a plain logo file, ask them for a re-export — the filenames on
  these two assets appear to be swapped relative to their actual content.
- `public/logos/sinko-logo.svg` — original placeholder icon, no longer
  referenced now that the real logo lockup is in use. Safe to delete once
  confirmed unneeded.

## Performance notes

- Only `app/services/gas-lpg/page.tsx`'s hero image/video load eagerly. Every
  other `next/image` usage sets `loading="lazy"` explicitly.
- The two long-form videos (`hot-water-system-install.mp4` at ~6.5MB and
  `bathroom-walkthrough.mp4` at ~3.1MB) are click-to-play via
  `components/ClickToPlayVideo.tsx` — the `<video>` element isn't mounted
  until the user clicks, so neither file is fetched on initial page load.
- Estimated worst-case initial payload per page (JS bundle + eagerly-loaded
  media only, from file sizes — not a live DevTools capture):
  - `/services/gas-lpg`: ~1.1MB (108KB JS + 19KB logo + 160KB poster + ~833KB autoplay video)
  - `/services/stormwater-drainage`: ~0.8MB (114KB JS + 19KB logo + 661KB hero image, near the fold)
  - all other pages: under 150KB (JS + logo only — everything else is lazy or click-to-play)
  - all comfortably under the ~3MB budget.

Once a file is added to a still-pending folder, swap the corresponding
placeholder for a `next/image` (or `<video>`) tag pointing at `/media/...`.
