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
2. Replace `YOUR_FORM_ID` in `src/components/Contact.jsx` with your Formspree form ID

## Customization

All portfolio content is centralized in **`src/data/cv.js`**. Edit this file to update your name, bio, skills, experience, education, projects, and contact info.

## Deployment

### GitHub Pages (Automated)

This repository is configured for automated deployment to GitHub Pages using GitHub Actions.

**Setup Steps:**

1. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Under "Source", select **GitHub Actions**

2. **Push to main branch**:
   - The workflow will automatically build and deploy your site
   - View the deployment progress in the "Actions" tab

3. **Access your site**:
   - Your site will be available at: `https://youssefabbes.github.io/CV/`
   - The base path `/CV/` is configured in `vite.config.js`

**Manual Deployment:**

If you prefer manual deployment or want to deploy to other platforms:

```bash
npm run build
# Deploy the contents of the `dist/` folder to:
# - GitHub Pages (commit dist/ to gh-pages branch)
# - Netlify (drag & drop dist/ folder)
# - Vercel (connect your repo or upload dist/)
```

**Alternative Hosting:**
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your GitHub repo for instant deployments
- **Custom Server**: Upload the `dist/` folder to any static web server

## License

MIT
