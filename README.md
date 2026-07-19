# Farrukh Niaz — Portfolio

A personal portfolio for **Farrukh Niaz Khan**, Principal Software Engineer.
Built with [Next.js](https://nextjs.org) (App Router) and deployed on
[Vercel](https://vercel.com) at **farrukhniaz.vercel.app**.

## Tech

- Next.js 14 (App Router)
- React 18
- Zero-runtime CSS (single `globals.css`, dark / techy theme)
- Fully static — no backend required

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

All content lives in one file: [`lib/data.js`](lib/data.js) — profile,
skills, experience, projects, education and interests. Edit that file and the
whole site updates. No dates are shown anywhere by design.

## Your photo

Replace `public/profile.jpg` with your headshot (a square image, e.g.
520×520, works best). Keep the same filename and the site picks it up
automatically.

## Deploying to Vercel

1. Go to <https://vercel.com/new> and import this GitHub repository.
2. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
3. To use the `farrukhniaz.vercel.app` domain: open the project →
   **Settings → Domains** and make sure that domain is assigned (or set the
   project name to `farrukhniaz`).
4. Every push to the connected branch triggers an automatic redeploy.
