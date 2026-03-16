# Youssef Abbes — Portfolio

A modern, animated portfolio website built with **React**, **Three.js**, and **Framer Motion**. Features interactive 3D scenes, smooth scroll animations, and a responsive dark-themed design.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Fast build tool with HMR
- **Three.js** / **React Three Fiber** / **Drei** — 3D graphics and helpers
- **Framer Motion** — Animations and transitions
- **CSS** — Custom styles with glassmorphism and gradients

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview   # preview the production build
```

## Project Structure

```
src/
├── App.jsx            # Root component
├── main.jsx           # Entry point
├── index.css          # Global styles
├── data/
│   └── cv.js          # All portfolio content (edit this to update your CV)
└── components/
    ├── Nav.jsx        # Fixed navigation with mobile hamburger menu
    ├── Hero.jsx       # Full-screen hero with 3D background
    ├── About.jsx      # Bio and stats section
    ├── Skills.jsx     # Skill categories grid
    ├── Experience.jsx # Work experience timeline
    ├── Education.jsx  # Education timeline
    ├── Projects.jsx   # Project showcase cards
    └── Contact.jsx    # Contact form, social links, and footer
```

## Contact Form

The contact form uses [Formspree](https://formspree.io) to deliver messages. To configure it:

1. Create a free Formspree account and form
2. Copy your Form ID (the part after `/f/` in the endpoint URL)
3. Create a `.env` file from the provided template and set your ID:
   ```bash
   cp .env.example .env
   # Then edit .env and replace the placeholder value
   ```
4. When deploying to Vercel, add `VITE_FORMSPREE_ID` as an environment variable in **Project Settings → Environment Variables** in the Vercel dashboard

## Customization

All portfolio content is centralized in **`src/data/cv.js`**. Edit this file to update your name, bio, skills, experience, education, projects, and contact info.

## Deployment

This site is configured for **Vercel** deployment. A `vercel.json` is included for proper SPA routing. Import the repository in the [Vercel dashboard](https://vercel.com/new) and it will be deployed automatically.

For other static hosts:

```bash
npm run build
# Deploy the contents of the `dist/` folder
```

## License

MIT
