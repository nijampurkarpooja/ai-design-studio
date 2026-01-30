# Demo — Lumen

A Next.js marketing site for **Lumen**, an AI-first design studio. The site presents the studio’s value proposition, services, process, portfolio, team, and insights with a data-driven homepage and supporting pages.
This project is currently deployed using vercel at [https://ai-design-studio-chi.vercel.app/](https://ai-design-studio-chi.vercel.app/).

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** (animations)
- **Fonts:** Geist, Geist Mono, Syne (via `next/font`)

## Project structure

- **`app/`** — Routes and app-level layout (header, footer, background, global styles)
- **`app/page.tsx`** — Homepage composition (Hero, Intro, Services, Process, AI Vision, Portfolio, Stats, Social Proof, Team, Insights)
- **`app/contact/`**, **`app/services/`** — Contact and Services pages
- **`components/homepage/`** — Homepage section components
- **`app/components/`** — Shared UI (layout, background, buttons, cards, etc.)
- **`lib/constants/homepage-data.ts`** — Homepage copy and data
- **`types/homepage.ts`** — TypeScript types for homepage data
