# Youssef Portfolio

An interactive, multilingual personal portfolio built with **React**, **Three.js**, and **Framer Motion**.  
It presents projects, skills, experience, and contact details with animated UI, 3D effects, and responsive design.

## Secure Contact Form Setup (EmailJS)

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Fill your values in `.env`:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
3. Never commit `.env` (already ignored by `.gitignore`).

If EmailJS variables are missing, the form safely returns an error state instead of sending a request.

## Tech Stack

- React 18
- Vite 6
- Three.js + React Three Fiber + Drei
- Framer Motion
- Vitest + Testing Library
- ESLint + Prettier

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Scripts

```bash
npm run dev          # start dev server
npm run build        # production build
npm run preview      # preview production build
npm run test         # run tests once
npm run lint         # run eslint
npm run format:check # check formatting
```

## Project Structure

```text
src/
├── components/      # UI sections and visual components
├── data/cv.js       # main profile/CV content source
├── i18n/            # translation dictionaries + provider
├── utils/           # shared utilities (e.g. EmailJS config)
└── __tests__/       # unit/component tests
```

## Customization

Most portfolio content is centralized in `src/data/cv.js`:

- identity and bio
- skills
- experience
- education
- projects
- social links and contact info

## Deployment (GitHub Pages)

This repository uses a GitHub Actions workflow to deploy on pushes to `main`.

- Current Vite base path: `/CV/` (see `vite.config.js`)
- Current expected URL format: `https://<username>.github.io/CV/`

If you rename the GitHub repository, update `base` in `vite.config.js` to match the new repository path.


