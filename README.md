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

## Customization

All portfolio content is centralized in **`src/data/cv.js`**. Edit this file to update your name, bio, skills, experience, education, projects, and contact info.

## Deployment

This site can be deployed to GitHub Pages, Netlify, Vercel, or any static hosting:

```bash
npm run build
# Deploy the contents of the `dist/` folder
```

## License

MIT
