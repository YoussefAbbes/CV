# Youssef Abbes — Portfolio

A 3D, animated portfolio built with React, Vite, React Three Fiber, Drei, and Framer Motion. It showcases projects, achievements, and education with smooth scroll-triggered animations, responsive layouts, and accessible navigation.

## Live Demo
- https://youssefabbes.github.io/CV/

## Features
- Immersive hero and contact sections rendered with React Three Fiber and Drei, lazy-loaded for performance
- Smooth parallax backgrounds and Framer Motion section reveals
- Content-driven UI: all copy, links, and stats live in `src/data/cv.js`
- Accessible experience: skip-to-content link, keyboard-friendly navigation, and labeled contact form
- SEO-ready: meta tags, favicon, sitemap, and robots.txt included

## Requirements
- Node.js 18+ and npm

## Quick Start
```bash
npm install
npm run dev
```
Visit http://localhost:5173/ in your browser.

## Scripts
- `npm run dev` – start the Vite dev server
- `npm run build` – create a production build in `dist/`
- `npm run preview` – preview the production build locally

## Environment Variables
The contact form posts to Formspree.
1) Copy `.env.example` to `.env`
2) Set your Formspree ID (the part after `/f/`):
```
VITE_FORMSPREE_ID=your_form_id_here
```
Without this value the form will show an error state on submit.

## Edit the Content & Repo Details
- **Profile & sections:** Update all text, links, skills, experience, education, achievements, attestations, and projects in `src/data/cv.js`.
- **Contact links:** The email, GitHub, and LinkedIn icons pull from `src/data/cv.js`; keep those fields current.
- **Meta/SEO:** Update the `<title>`, `description`, `og:*`, and `twitter:*` tags in `index.html`, especially `og:url`, when deploying to your own domain.
- **Branding:** Replace `public/favicon.svg` with your icon.
- **Robots/Sitemap:** If you host on a different domain, update the URLs in `public/robots.txt` and `public/sitemap.xml`.
- **Project links:** In `src/data/cv.js`, adjust any repository or demo URLs (e.g., the Portfolio project entry) to point to your fork or deployment.

## Project Structure
```
src/
├── App.jsx                  # Page layout and section order
├── main.jsx                 # Entry point
├── index.css                # Global styles
├── data/
│   └── cv.js                # All portfolio content (edit this first)
└── components/
    ├── Nav.jsx              # Sticky nav with hamburger + skip link
    ├── Hero.jsx             # Hero section with 3D scene (HeroScene)
    ├── About.jsx            # Bio and stats
    ├── Skills.jsx           # Skills grid
    ├── Experience.jsx       # Timeline of roles
    ├── Education.jsx        # Education timeline
    ├── Achievements.jsx     # Highlights and awards
    ├── Attestations.jsx     # Certificates gallery
    ├── Projects.jsx         # Project cards
    ├── Contact.jsx          # Contact form + social links + 3D scene
    ├── ParallaxBackground.jsx # Background particles
    └── ErrorBoundary.jsx    # Graceful fallback for 3D scenes
```

## Deployment
- **Vercel:** Import the repo, add `VITE_FORMSPREE_ID` in Project Settings → Environment Variables, and deploy. `vercel.json` handles SPA routing.
- **Static hosting / GitHub Pages:** `npm run build` then upload the `dist/` folder. Be sure to update `index.html` meta tags and `public/robots.txt`/`sitemap.xml` with your production URL.

## License
MIT
