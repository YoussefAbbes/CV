# CV Portfolio — Improvement Plan

A list of improvements to be implemented on this React + Vite + Three.js portfolio project.

---

## 1. Critical Fixes

### 1.1 Fix Contact Form
- The form in `src/components/Contact.jsx` collects name, email, and message but `onSubmit` only calls `e.preventDefault()` — data goes nowhere
- Integrate a service like **EmailJS**, **Formspree**, or **Netlify Forms** so submitted messages actually reach the owner
- Add success/error feedback (toast or inline message) after submission

### 1.2 Replace Placeholder Email
- In `src/data/cv.js`, replace `youssef.abbes@example.com` with the real email address

### 1.3 Add Error Boundary
- Wrap the Three.js `<Canvas>` components (in `Hero.jsx` and `Contact.jsx`) in a React error boundary
- Show a graceful fallback if WebGL is not supported or crashes

---

## 2. Performance

### 2.1 Lazy-Load Three.js Scenes
- Use `React.lazy()` + `<Suspense>` to code-split the Hero and Contact 3D scenes
- This avoids loading ~150KB+ of Three.js before the text content can render

### 2.2 Consolidate or Remove Second WebGL Canvas
- Hero and Contact each create a separate `<Canvas>`, meaning two WebGL renderers run simultaneously
- On mobile this causes high GPU/battery usage and potential WebGL context loss
- Either remove the Contact particles on mobile, or merge both scenes into a single canvas

### 2.3 Fix Frame-Rate Dependent Animation
- In `src/components/Hero.jsx`, the `OrbitingTorus` component uses `rotation += 0.01` per frame
- This makes it spin 2.4x faster on 144Hz than on 60Hz
- Change to delta-based timing like the other components already do: `rotation += delta * rate`

### 2.4 Throttle Scroll Listener
- In `src/components/Nav.jsx`, the scroll handler fires `setState` on every scroll event with no throttle
- Wrap it in `requestAnimationFrame` or a throttle function

### 2.5 Add `prefers-reduced-motion` Support
- Users who enabled reduced motion in their OS still see all 3D animations and scroll effects
- Detect `prefers-reduced-motion: reduce` and disable or simplify animations accordingly

---

## 3. Accessibility (a11y)

### 3.1 Add `<label>` Elements to Form Inputs
- The contact form inputs use `placeholder` only — these disappear on focus, violating WCAG
- Add visible or visually-hidden `<label>` elements for each input

### 3.2 Add `aria-expanded` to Hamburger Button
- In `Nav.jsx`, the mobile menu toggle should have `aria-expanded={menuOpen}` to communicate state to screen readers

### 3.3 Mark Canvases as Decorative
- Add `aria-hidden="true"` to both Three.js `<Canvas>` wrappers since they are purely visual

### 3.4 Add Skip-to-Content Link
- Add a visually hidden link at the top of the page that becomes visible on focus and jumps to `#about` or a `#main-content` anchor

### 3.5 Fix Low Contrast Footer Text
- In `Contact.css`, the footer text uses `color: #555` on `#050510` background (~2.3:1 contrast)
- Increase to at least `#999` or higher to meet WCAG AA 4.5:1 minimum

---

## 4. SEO & Meta

### 4.1 Add Meta Tags
- Add to `index.html`:
  - `<meta name="description" content="...">`
  - Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
  - Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`
  - `<meta name="theme-color" content="#050510">`

### 4.2 Add Favicon
- Create and add a favicon (`favicon.ico` and/or `favicon.svg`) with a `<link rel="icon">` in `index.html`

### 4.3 Add `robots.txt` and `sitemap.xml`
- Place a `robots.txt` in `public/` allowing crawlers
- Add a basic `sitemap.xml` pointing to the site URL

---

## 5. Code Quality

### 5.1 Add TypeScript
- The project already has `@types/react` and `@types/react-dom` installed but unused
- Add a `tsconfig.json` and rename `.jsx` files to `.tsx`
- Add type definitions for the `cv.js` data structure

### 5.2 Convert to CSS Modules
- Rename all `.css` files to `.module.css` (Vite supports this out of the box)
- Update imports in each component from `import './X.css'` to `import styles from './X.module.css'`
- Replace string class names with `styles.className`

### 5.3 Remove `!important` Overrides
- In `src/components/Experience.css`, 4 `!important` declarations are used for mobile styles
- Restructure the base CSS so mobile rules can override without `!important`

### 5.4 Use Stable Keys in Experience
- In `src/components/Experience.jsx`, array index is used as `key` in the `.map()` loop
- Replace with `key={job.company}` or `key={job.role}` for a stable identifier

### 5.5 Remove Unused `@types` Packages (if not adding TypeScript)
- If TypeScript is not being added, remove `@types/react` and `@types/react-dom` from `devDependencies`

---

## 6. Developer Experience

### 6.1 Add ESLint + Prettier
- Install and configure ESLint (with `eslint-plugin-react`, `eslint-plugin-react-hooks`)
- Install and configure Prettier
- Add npm scripts: `"lint": "eslint src"`, `"format": "prettier --write src"`

### 6.2 Add Pre-Commit Hooks
- Install Husky + lint-staged
- Run linting and formatting automatically on staged files before each commit

### 6.3 Add Tests
- Install **Vitest** + **React Testing Library** for component unit tests
- Add at least smoke tests for each component rendering without errors
- Optionally add **Playwright** for E2E tests
- Add npm script: `"test": "vitest"`

### 6.4 Improve README.md
- Add: project description, screenshot/demo link, tech stack, setup instructions (`npm install` + `npm run dev`), build instructions, deployment info

---

## 7. Feature Additions

### 7.1 Resume/PDF Download
- Add a downloadable resume PDF (place in `public/` folder)
- Add a download button in the Hero or Nav section

### 7.2 Education Section
- Add an `education` array to `src/data/cv.js`
- Create a new `Education.jsx` component with a similar timeline layout to Experience
- Add it to `App.jsx` between Experience and Projects

### 7.3 Light/Dark Theme Toggle
- Add a theme toggle button in the Nav
- Use CSS custom properties for all colors so they can be switched
- Persist the preference in `localStorage`

### 7.4 Internationalization (i18n)
- Add support for English and French (or other languages)
- Extract all text strings to locale files
- Add a language switcher in the Nav

---

## Summary Table

| # | Task | Priority | Impact |
|---|------|----------|--------|
| 1.1 | Fix contact form | Critical | Users are misled |
| 1.2 | Replace placeholder email | Critical | Broken contact |
| 1.3 | Add error boundary | High | Crash prevention |
| 2.1 | Lazy-load Three.js | High | Performance |
| 2.2 | Consolidate WebGL canvases | High | Mobile performance |
| 2.3 | Fix frame-rate animation | Medium | Consistency |
| 2.4 | Throttle scroll listener | Low | Minor perf |
| 2.5 | Reduced motion support | Medium | Accessibility + perf |
| 3.1 | Form labels | High | WCAG compliance |
| 3.2 | aria-expanded on hamburger | Medium | Screen readers |
| 3.3 | aria-hidden on canvases | Medium | Screen readers |
| 3.4 | Skip-to-content link | Medium | Keyboard navigation |
| 3.5 | Fix footer contrast | Medium | WCAG compliance |
| 4.1 | Meta tags | High | SEO / link previews |
| 4.2 | Favicon | High | Branding |
| 4.3 | robots.txt + sitemap | Low | SEO |
| 5.1 | TypeScript | Medium | Code quality |
| 5.2 | CSS Modules | Medium | Style scoping |
| 5.3 | Remove !important | Low | CSS quality |
| 5.4 | Stable keys | Low | React best practice |
| 6.1 | ESLint + Prettier | Medium | Code consistency |
| 6.2 | Pre-commit hooks | Low | Automation |
| 6.3 | Tests | Medium | Reliability |
| 6.4 | Improve README | Low | Documentation |
| 7.1 | Resume download | High | Core feature |
| 7.2 | Education section | Medium | Content completeness |
| 7.3 | Theme toggle | Low | User preference |
| 7.4 | i18n | Low | Reach |
