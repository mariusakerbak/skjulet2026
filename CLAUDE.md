# Skjulet Website

## Project
Band website for Skjulet. Norwegian storytelling band, cinematic/film poster aesthetic.

## Stack
- Next.js (App Router)
- Tailwind CSS
- Sanity v3 + next-sanity
- Plain JavaScript — no TypeScript

## Design
- Font: Open Sans (bold for headings, regular for body)
- Background: #1a1a18 (near-black olive)
- Accent: #d4782a (ember/amber)
- Secondary surface: #1e3535 (deep teal)
- Text: #f0e8c8 (off-white)
- Aesthetic: dark, cinematic, film poster — no gradients, no glows, no light backgrounds

## Assets
- Logo: skjulet_logo_hvit.svg (white wordmark, use on all dark surfaces)
- Hero: FINAL_HERO.webp

## Conventions
- Component files in /src/components
- Sanity queries in /src/lib/sanity.js
- No TypeScript — keep all files .jsx and .js

## Sanity content types
- concert: date, venue, city, ticketUrl (optional)
  - Query pattern: fetch next upcoming concert where date > now(), limit 1