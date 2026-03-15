const cv = {
  name: 'Youssef Abbes',
  title: 'Full-Stack Developer & Creative Technologist',
  email: 'youssef.abbes@example.com',
  github: 'https://github.com/YoussefAbbes',
  linkedin: 'https://linkedin.com/in/youssefabbes',

  bio: `I'm a passionate full-stack developer with a knack for building immersive digital experiences. Over the past several years I've shipped production apps spanning real-time dashboards, e-commerce platforms, and AI-powered tools. I thrive at the intersection of design and engineering — crafting interfaces that are both beautiful and blazing fast. When I'm not coding you'll find me contributing to open-source projects or experimenting with creative coding and generative art.`,

  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Shipped', value: '30+' },
    { label: 'Happy Clients', value: '20+' },
  ],

  skills: [
    {
      category: 'Frontend',
      color: '#00d4ff',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    },
    {
      category: 'Backend',
      color: '#7c3aed',
      items: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'REST APIs'],
    },
    {
      category: 'DevOps',
      color: '#ff006e',
      items: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Terraform', 'Nginx'],
    },
    {
      category: 'Tools',
      color: '#f59e0b',
      items: ['Git', 'Figma', 'VS Code', 'Postman', 'Jira', 'Linux'],
    },
  ],

  experience: [
    {
      role: 'Senior Frontend Engineer',
      company: 'TechNova Inc.',
      period: '2023 — Present',
      description:
        'Lead the frontend architecture for a SaaS analytics platform serving 50k+ users. Migrated the legacy codebase to React 18 with TypeScript, reducing bundle size by 40% and improving Lighthouse scores to 95+.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Craft Studio',
      period: '2021 — 2023',
      description:
        'Built end-to-end web applications for agency clients including e-commerce stores, booking systems, and real-time collaboration tools. Worked with React, Node.js, and PostgreSQL.',
    },
    {
      role: 'Frontend Developer',
      company: 'StartUp Labs',
      period: '2020 — 2021',
      description:
        'Developed responsive UI components and design systems for early-stage startups. Implemented complex animations and interactive data visualizations using D3.js and Three.js.',
    },
    {
      role: 'Junior Developer',
      company: 'WebWorks Agency',
      period: '2019 — 2020',
      description:
        'Contributed to client websites and internal tools. Gained foundational skills in HTML, CSS, JavaScript, and modern frameworks while working in an agile team environment.',
    },
  ],

  education: [
    {
      degree: 'Master of Computer Science',
      school: 'University of Tunis El Manar',
      period: '2017 — 2019',
      description:
        'Specialized in software engineering and distributed systems. Graduated with honors and completed a thesis on real-time collaborative web applications.',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Tunis El Manar',
      period: '2014 — 2017',
      description:
        'Studied algorithms, data structures, databases, and web development fundamentals. Participated in competitive programming and open-source projects.',
    },
  ],

  projects: [
    {
      title: 'NebulaBoard',
      description:
        'A real-time collaborative whiteboard app with AI-powered diagram generation. Features live cursors, sticky notes, and infinite canvas.',
      tech: ['React', 'WebSocket', 'Canvas API', 'OpenAI'],
      link: 'https://github.com/YoussefAbbes/nebulaboard',
      color: '#00d4ff',
    },
    {
      title: 'ShopStream',
      description:
        'Modern headless e-commerce storefront with blazing-fast page loads, dynamic filtering, and Stripe integration for payments.',
      tech: ['Next.js', 'Shopify API', 'Tailwind', 'Stripe'],
      link: 'https://github.com/YoussefAbbes/shopstream',
      color: '#7c3aed',
    },
    {
      title: 'DevPulse',
      description:
        'Developer productivity dashboard that aggregates GitHub stats, CI/CD pipelines, and code review metrics into one beautiful interface.',
      tech: ['React', 'Node.js', 'GitHub API', 'Chart.js'],
      link: 'https://github.com/YoussefAbbes/devpulse',
      color: '#ff006e',
    },
    {
      title: 'CloudDeploy CLI',
      description:
        'An open-source CLI tool that simplifies deploying apps to AWS, GCP, and Azure with a single configuration file and one command.',
      tech: ['Node.js', 'AWS SDK', 'Docker', 'Terraform'],
      link: 'https://github.com/YoussefAbbes/clouddeploy',
      color: '#f59e0b',
    },
  ],
};

export default cv;
