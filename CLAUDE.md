# Zweedser

Nederlandstalige website om mensen te helpen Zweeds te leren. Gebouwd vanuit Höör, Skåne.

## Tech Stack

- **SolidJS** (TypeScript) — UI framework
- **Vite** — dev server & bundler
- **Tailwind CSS v4** + **DaisyUI v5** — styling
- **@solidjs/router** — client-side routing
- **Biome** — linter & formatter (tabs, recommended rules)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run check` — biome lint & format check
- `npm run check:fix` — auto-fix lint & format issues

## Project Structure

```
src/
├── index.tsx          — app entry point
├── index.css          — Tailwind imports + custom theme colors
├── App.tsx            — Router with 3 routes (/, /about, /contact)
├── pages/
│   ├── Home.tsx       — landing page (assembles all sections)
│   ├── About.tsx      — over ons pagina
│   └── Contact.tsx    — contact pagina (reuses ContactSection)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── FalsefriendsSection.tsx
│   ├── MapSection.tsx
│   ├── CoursesSection.tsx
│   └── ContactSection.tsx
public/
└── images/            — static images (served at /images/*)
```

## Conventions

- Language: all UI text is in **Dutch (Nederlands)**
- Formatter: **tabs** for indentation (biome config)
- Use SolidJS `<For>` for list rendering (not `.map()`)
- Section layout pattern: full-width `<section>` with `max-w-[800px] mx-auto px-4` inner container
- Custom colors defined in `@theme` block in index.css: `forest`, `forest-light`, `meadow`, `meadow-light`, `cream`
