const cv = {
  name: 'Youssef Abbes',
  title: '3rd Year Engineering Student — Full-Stack Developer',
  email: 'youssef.abbes@esprit.tn',
  github: 'https://github.com/YoussefAbbes',
  linkedin: 'https://linkedin.com/in/youssefabbes',

  bio: `I'm a 3rd year engineering student at ESPRIT School of Engineering, passionate about building full-stack applications with modern technologies. I specialize in Java, JavaFX, Flutter, and web development. I won the "Bal de Projet" award for Best Web Project among 2nd year students at ESPRIT — a recognition that fuels my drive to keep pushing boundaries. From AI-powered farm management systems to real-time multiplayer quiz platforms, I love turning complex problems into elegant, user-friendly solutions.`,

  stats: [
    { label: 'Engineering Year', value: '3rd' },
    { label: 'Projects Built', value: '5+' },
    { label: 'Award Won', value: '🏆' },
  ],

  skills: [
    {
      category: 'Frontend',
      color: '#00d4ff',
      items: ['React', 'JavaFX', 'HTML/CSS', 'Three.js', 'Framer Motion', 'FXML'],
    },
    {
      category: 'Backend',
      color: '#7c3aed',
      items: ['Java', 'Node.js', 'Python', 'Spring Boot', 'REST APIs', 'MySQL'],
    },
    {
      category: 'Mobile & Cross-Platform',
      color: '#ff006e',
      items: ['Flutter', 'Dart', 'Firebase', 'Android', 'iOS', 'Responsive Design'],
    },
    {
      category: 'Tools & Technologies',
      color: '#f59e0b',
      items: ['Git', 'Maven', 'Docker', 'VS Code', 'Figma', 'Linux'],
    },
  ],

  experience: [
    {
      role: 'Full-Stack Developer — PIDEV 3A',
      company: 'ESPRIT School of Engineering',
      period: '2025 — 2026',
      description:
        'Developed EL-Firma, a comprehensive farm management desktop application with JavaFX. Integrated AI features including facial recognition, voice commands, chatbot assistance, and DNA-based gender prediction. Implemented Stripe payments, interactive maps, and real-time dashboards.',
    },
    {
      role: 'Mobile Developer — LammaPlay',
      company: 'Personal Project',
      period: '2025',
      description:
        'Built a real-time multiplayer quiz game platform using Flutter and Firebase. Implemented live gameplay with session codes, dynamic scoring with streak bonuses, and real-time leaderboards. Deployed on Android, iOS, and Web.',
    },
    {
      role: 'Award-Winning Web Developer — Bal de Projet',
      company: 'ESPRIT School of Engineering',
      period: '2024',
      description:
        'Won the "Bal de Projet" award for Best Web Project among all 2nd year engineering students. Demonstrated strong web development skills and creative problem-solving in a competitive university-wide showcase.',
    },
  ],

  education: [
    {
      degree: 'Engineering Degree in Computer Science (3rd Year)',
      school: 'ESPRIT School of Engineering — Tunisia',
      period: '2023 — Present',
      description:
        'Currently in the 3rd year of the engineering program, specializing in software engineering. Studying advanced algorithms, distributed systems, AI/ML, and full-stack development. Won the Bal de Projet award for Best Web Project in 2nd year.',
    },
  ],

  achievements: [
    {
      title: 'Bal de Projet — Best Web Project',
      event: 'ESPRIT School of Engineering',
      year: '2024',
      description: 'Won first place for Best Web Project among all 2nd year engineering students at ESPRIT university-wide project showcase.',
      icon: '🏆',
    },
  ],

  attestations: [
    {
      title: 'ESPRIT Attestation',
      image: 'https://github.com/user-attachments/assets/5f335bea-3c49-4985-8b52-2b4a8cf6d8ef',
    },
    {
      title: 'Academic Certificate',
      image: 'https://github.com/user-attachments/assets/84d5ce6c-726f-4373-8f35-0dcf47164b8a',
    },
    {
      title: 'Achievement Certificate',
      image: 'https://github.com/user-attachments/assets/b58f0de4-e2fd-46d0-9e97-06ebf0fd57f9',
    },
  ],

  projects: [
    {
      title: 'EL-Firma — Farm Management System',
      description:
        'A comprehensive full-stack desktop application for integrated farm management built as part of PIDEV 3A at ESPRIT. Features AI-powered facial recognition, voice commands, chatbot assistance, DNA-based gender prediction, Stripe payments, interactive maps, real-time dashboards, and multi-factor authentication.',
      tech: ['Java 21', 'JavaFX', 'MySQL', 'OpenCV', 'Stripe API', 'Maven'],
      link: 'https://github.com/Ikam2/Esprit-PIDEV-3A3--2026-ELFIRMA',
      color: '#00d4ff',
    },
    {
      title: 'LammaPlay — Multiplayer Quiz Platform',
      description:
        'A real-time multiplayer quiz game platform supporting live gameplay, custom quiz creation with image support, dynamic scoring with streak bonuses, and live leaderboards. Built with Flutter and Firebase, targeting Android, iOS, and Web.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'ImgBB API'],
      link: 'https://github.com/YoussefAbbes/LammaPlay',
      color: '#7c3aed',
    },
    {
      title: 'Portfolio Website',
      description:
        'This immersive 3D portfolio website built with React, Three.js, and Framer Motion. Features particle effects, parallax scrolling, glassmorphism design, and smooth scroll-triggered animations.',
      tech: ['React', 'Three.js', 'Framer Motion', 'Vite', 'CSS'],
      link: 'https://github.com/YoussefAbbes/CV',
      color: '#ff006e',
    },
  ],
};

export default cv;
