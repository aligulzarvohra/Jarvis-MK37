# Aureal Studio — Premium Creative Studio Landing

A single-page, dark, premium creative-studio landing page built with
**React + Vite + Tailwind CSS + TypeScript**, animated with **GSAP** and
**Framer Motion**.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 (`tailwindcss-animate`)
- GSAP (+ ScrollTrigger)
- Framer Motion
- React Router

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Design system

- **Fonts** — Inter (body) and Instrument Serif italic (display), loaded from Google Fonts.
- **Forced dark theme** — no light mode. Colors are driven by HSL CSS custom
  properties (`--bg`, `--surface`, `--text`, `--muted`, `--stroke`, `--accent`)
  exposed to Tailwind as `bg`, `surface`, `text-primary`, `muted`, `stroke`, `accent`.
- **Accent gradient** — `linear-gradient(90deg, #C4A265 0%, #8B6F3E 100%)`,
  used on hover borders, progress bars, and highlights via the `.accent-gradient`
  utility and an animated `.gradient-border` mask.
- **Custom keyframes** — `scroll-down`, `word-fade-in`, `gradient-shift`.

## Sections

1. **Loading Screen** — `requestAnimationFrame` counter 000→100 over 2.5s,
   rotating words, and an accent progress bar.
2. **Hero** — GSAP entrance timeline (`name-reveal`, `blur-in`), cycling role
   word, floating navbar pill, and a scroll indicator.
3. **Selected Work** — 7/5/5/7 bento grid with halftone overlays and animated
   hover labels.
4. **What We Build** — four service cards with accent hover border and lift.
5. **Process** — sticky left column with GSAP ScrollTrigger cards on the right.
6. **Social Proof** — GSAP count-up stats and testimonial cards.
7. **Contact / Footer** — GSAP marquee, outlined type, mailto CTA, and a live
   availability indicator.

All motion is tuned to feel smooth on every breakpoint; the layout is fully
responsive from mobile to large desktop.
