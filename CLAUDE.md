# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint validation
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** with TypeScript, Tailwind CSS v4, and GSAP animations.

- `app/page.tsx` — Main resume page (single long page with Work, Skills, Education, Contact sections). All resume content (job history, skills, contact info) is hard-coded directly in this file.
- `app/portfolio/page.tsx` — Portfolio page wrapping the PDF viewer
- `app/layout.tsx` — Root layout; configures Loram (local) and DM Sans (Google) fonts as CSS variables
- `app/globals.css` — Tailwind v4 theme inline config; defines color scheme, dark mode via `.dark` class

### Component Patterns

All interactive components use `'use client'`. Key components:

- **`FadeInSection`** — Intersection Observer-based scroll reveal wrapper; accepts a `delay` prop for stagger sequencing
- **`AnimatedHeading`** — GSAP letter-by-letter entrance + cursor-repel hover effect
- **`AnimatedDecorativeShape`** — GSAP SVG path-draw animation
- **`PDFViewerClient`** — Dynamically imported (`ssr: false`) to prevent SSR issues with react-pdf; includes page nav, zoom, keyboard/swipe navigation

### Styling

Two-color scheme: beige (`#F5F5DC`) + blue (`#3E5AAD`) in light mode; dark navy + beige in dark mode. Theme persisted via localStorage, toggled with `.dark` class on `<html>`. Tailwind breakpoints follow mobile-first convention.

### Animations

GSAP handles heading letter animations and SVG drawing. CSS transitions + Intersection Observer handle scroll-triggered fade-ins via `FadeInSection`. These two systems work independently and are not coordinated.
