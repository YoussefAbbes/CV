const cv = {
  name: 'Youssef Abbes',
  title: {
    en: '4th Year Engineering Student — Data Science & Full-Stack Developer',
    fr: 'Étudiant ingénieur en 4ème année — Data Science & Développeur Full-Stack',
    ar: 'طالب هندسة في السنة الرابعة — علوم البيانات ومطور Full-Stack',
  },
  email: 'abbes.youssef@esprit.tn',
  github: 'https://github.com/YoussefAbbes',
  linkedin: 'https://linkedin.com/in/youssefabbes',
  phone: '+216 56 207 742',
  location: {
    en: 'Tunis, Tunisia',
    fr: 'Tunis, Tunisie',
    ar: 'تونس، تونس',
  },
  status: {
    text: {
      en: 'Available for Hire',
      fr: 'Disponible pour embauche',
      ar: 'متاح للتوظيف',
    },
    available: true,
  },

  bio: {
    en: `I'm a 4th year engineering student at ESPRIT School of Engineering, specializing in Data Science. I build machine learning systems and full-stack web, mobile and AI applications. During my 2026 internship at TICOP I built a sales recommendation system with CatBoost and FastAPI, trained on 1.8M+ real transactions. I won 1st prize and 2nd place at ESPRIT's "Bal des Projets", and I'm vice-president of the BRAINIX AI club and IT lead of the student committee. I love turning complex data and problems into useful, well-designed products.`,
    fr: `Je suis étudiant en 4ème année d'ingénierie à ESPRIT School of Engineering, spécialisé en Data Science. Je conçois des systèmes de machine learning et des applications full-stack web, mobiles et IA. Lors de mon stage 2026 chez TICOP, j'ai développé un système de recommandation commerciale avec CatBoost et FastAPI, entraîné sur plus de 1,8 million de transactions réelles. Lauréat du 1er prix et de la 2ème place au « Bal des Projets » d'ESPRIT, je suis vice-président du club BRAINIX IA et responsable IT du comité étudiant. J'aime transformer des données et des problèmes complexes en produits utiles et soignés.`,
    ar: `أنا طالب في السنة الرابعة هندسة في مدرسة ESPRIT للهندسة، متخصص في علوم البيانات. أبني أنظمة تعلم الآلة وتطبيقات full-stack للويب والهاتف والذكاء الاصطناعي. خلال تربصي سنة 2026 في TICOP، طورت نظام توصيات للمبيعات باستخدام CatBoost وFastAPI، مدرّبًا على أكثر من 1.8 مليون معاملة حقيقية. فزت بالجائزة الأولى والمركز الثاني في "Bal des Projets" بـ ESPRIT، وأنا نائب رئيس نادي BRAINIX للذكاء الاصطناعي ومسؤول تقنية المعلومات في لجنة الطلبة. أحب تحويل البيانات والمشكلات المعقدة إلى منتجات مفيدة ومتقنة.`,
  },

  stats: [
    {
      label: {
        en: 'Engineering Year',
        fr: 'Année d\'ingénierie',
        ar: 'سنة الهندسة',
      },
      value: '4th',
    },
    {
      label: {
        en: 'Projects Built',
        fr: 'Projets réalisés',
        ar: 'مشاريع منجزة',
      },
      value: '10+',
    },
    {
      label: {
        en: 'Awards Won',
        fr: 'Prix remportés',
        ar: 'جوائز',
      },
      value: '2',
    },
  ],

  languages: [
    {
      name: { en: 'Arabic', fr: 'Arabe', ar: 'العربية' },
      level: { en: 'Native', fr: 'Langue maternelle', ar: 'اللغة الأم' },
      icon: '🇹🇳',
      color: '#ff006e',
    },
    {
      name: { en: 'French', fr: 'Français', ar: 'الفرنسية' },
      level: { en: 'Fluent (B2)', fr: 'Courant (B2)', ar: 'بطلاقة (B2)' },
      icon: '🇫🇷',
      color: '#00d4ff',
    },
    {
      name: { en: 'English', fr: 'Anglais', ar: 'الإنجليزية' },
      level: { en: 'Professional (B2)', fr: 'Professionnel (B2)', ar: 'مهني (B2)' },
      icon: '🇬🇧',
      color: '#7c3aed',
    },
    {
      name: { en: 'German', fr: 'Allemand', ar: 'الألمانية' },
      level: { en: 'Intermediate (B1)', fr: 'Intermédiaire (B1)', ar: 'متوسط (B1)' },
      icon: '🇩🇪',
      color: '#f59e0b',
    },
  ],

  learning: [
    {
      name: { en: 'System Design', fr: 'Architecture Système', ar: 'تصميم الأنظمة' },
      icon: '🏗️',
      color: '#00d4ff',
    },
    {
      name: { en: 'Machine Learning', fr: 'Apprentissage Automatique', ar: 'تعلم الآلة' },
      icon: '🤖',
      color: '#7c3aed',
    },
    {
      name: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps', ar: 'الحوسبة السحابية' },
      icon: '☁️',
      color: '#ff006e',
    },
  ],

  skills: [
    {
      category: {
        en: 'Data Science & ML',
        fr: 'Data Science & ML',
        ar: 'علوم البيانات وتعلم الآلة',
      },
      color: '#22c55e',
      items: [
        { name: 'Python', level: 90 },
        { name: 'pandas / NumPy', level: 85 },
        { name: 'scikit-learn', level: 80 },
        { name: 'CatBoost / LightGBM', level: 80 },
        { name: 'PyTorch', level: 65 },
        { name: 'OpenCV / MediaPipe', level: 70 },
        { name: 'RAG / LLM APIs', level: 75 },
        { name: 'Jupyter', level: 85 },
      ],
    },
    {
      category: {
        en: 'Frontend',
        fr: 'Frontend',
        ar: 'الواجهة الأمامية',
      },
      color: '#00d4ff',
      items: [
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 75 },
        { name: 'Next.js', level: 70 },
        { name: 'Three.js', level: 70 },
        { name: 'Framer Motion', level: 75 },
        { name: 'JavaFX', level: 85 },
      ],
    },
    {
      category: {
        en: 'Backend',
        fr: 'Backend',
        ar: 'الواجهة الخلفية',
      },
      color: '#7c3aed',
      items: [
        { name: 'Java', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'PHP / Symfony', level: 80 },
        { name: 'C / C++ (Qt)', level: 70 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Django', level: 65 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Supabase', level: 65 },
      ],
    },
    {
      category: {
        en: 'Mobile & Cross-Platform',
        fr: 'Mobile & Multi-plateforme',
        ar: 'الهاتف المحمول ومتعدد المنصات',
      },
      color: '#ff006e',
      items: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'Android', level: 75 },
        { name: 'iOS', level: 65 },
      ],
    },
    {
      category: {
        en: 'IDEs & Editors',
        fr: 'EDIs & Éditeurs',
        ar: 'بيئات التطوير المتكاملة',
      },
      color: '#f59e0b',
      items: [
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'Fleet', level: 75 },
        { name: 'Qt Creator', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Antigravity', level: 85 },
      ],
    },
    {
      category: {
        en: 'DevOps & Tools',
        fr: 'DevOps & Outils',
        ar: 'أدوات التطوير والنشر',
      },
      color: '#10b981',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Maven', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 75 },
      ],
    },
    {
      category: {
        en: 'AI Tools',
        fr: 'Outils IA',
        ar: 'أدوات الذكاء الاصطناعي',
      },
      color: '#8b5cf6',
      items: [
        { name: 'Claude', level: 90 },
        { name: 'ChatGPT', level: 90 },
        { name: 'Copilot', level: 85 },
        { name: 'Gemini', level: 85 },
      ],
    },
  ],

  experience: [
    {
      role: {
        en: 'Data Science Intern — Sales Recommendation System',
        fr: 'Stagiaire Data Science — Système de recommandation commerciale',
        ar: 'متربص في علوم البيانات — نظام توصيات المبيعات',
      },
      company: 'TICOP',
      period: 'Jul — Aug 2026',
      description: {
        en: 'Built an end-to-end recommendation system for an auto spare-parts distributor, helping each sales rep know which clients to contact and which articles to offer. Built the data pipeline from Microsoft Dynamics NAV (1.8M+ ledger rows, 52K articles, 6.3K clients), trained two CatBoost models with leak-free rolling chronological backtests (repurchase AUC 0.77 with precision@30 nearly 2× the baseline; new-article adoption AUC 0.87), and delivered them as a typed FastAPI REST service with 280+ automated tests and anonymised fixtures.',
        fr: 'Conception d\'un système de recommandation de bout en bout pour un distributeur de pièces de rechange automobiles, aidant chaque commercial à savoir quels clients contacter et quels articles proposer. Construction du pipeline de données depuis Microsoft Dynamics NAV (1,8M+ lignes, 52K articles, 6,3K clients), entraînement de deux modèles CatBoost validés par backtests chronologiques glissants sans fuite de données (rachat : AUC 0,77, precision@30 près de 2× la référence ; adoption de nouveaux articles : AUC 0,87), et livraison sous forme d\'API REST FastAPI typée avec plus de 280 tests automatisés et des données anonymisées.',
        ar: 'بناء نظام توصيات متكامل لموزع قطع غيار السيارات يساعد كل مندوب مبيعات على معرفة العملاء الذين يجب الاتصال بهم والمنتجات التي يجب اقتراحها. إنشاء خط معالجة البيانات من Microsoft Dynamics NAV (أكثر من 1.8 مليون سطر، 52 ألف منتج، 6.3 ألف عميل)، تدريب نموذجين CatBoost مع اختبارات زمنية متدحرجة بدون تسرب للبيانات (إعادة الشراء: AUC 0.77 ودقة@30 تقارب ضعف خط الأساس؛ تبني منتجات جديدة: AUC 0.87)، وتسليمهما كخدمة REST بـ FastAPI مع أكثر من 280 اختبارًا آليًا وبيانات مجهولة الهوية.',
      },
    },
    {
      role: {
        en: 'Full-Stack Developer — PIDEV 3A (Academic Project)',
        fr: 'Développeur Full-Stack — PIDEV 3A (Projet académique)',
        ar: 'مطور Full-Stack — PIDEV 3A (مشروع أكاديمي)',
      },
      company: 'ESPRIT School of Engineering',
      period: '2025 — 2026',
      description: {
        en: 'Developed EL-Firma, a comprehensive farm management desktop application with JavaFX. Integrated AI features including facial recognition, voice commands, chatbot assistance, and DNA-based gender prediction. Implemented Stripe payments, interactive maps, and real-time dashboards.',
        fr: 'Développement d\'EL-Firma, une application desktop complète de gestion agricole avec JavaFX. Intégration de fonctionnalités IA incluant la reconnaissance faciale, les commandes vocales, l\'assistance par chatbot et la prédiction de genre basée sur l\'ADN. Mise en place des paiements Stripe, cartes interactives et tableaux de bord en temps réel.',
        ar: 'تطوير EL-Firma، تطبيق سطح مكتب شامل لإدارة المزارع باستخدام JavaFX. دمج ميزات الذكاء الاصطناعي بما في ذلك التعرف على الوجه، الأوامر الصوتية، المساعد الآلي، والتنبؤ بالجنس بناءً على الحمض النووي. تنفيذ مدفوعات Stripe، خرائط تفاعلية، ولوحات معلومات في الوقت الفعلي.',
      },
    },
    {
      role: {
        en: 'Intern — Business Development & Marketing',
        fr: 'Stagiaire — Développement Commercial & Marketing',
        ar: 'متربص — تطوير الأعمال والتسويق',
      },
      company: 'Green Pharma',
      period: '2024 — 2025',
      description: {
        en: 'Developed marketing strategies for the "Bambini" range (maternity & baby products) in a 690M USD parapharmaceutical market. Took part in the North-West Parapharmaceutical Days and ran a competitive SWOT analysis of 60+ companies active in Tunisia. Delivered recommendations on targeted digital marketing, a loyalty program, product visibility and partnerships with pediatric clinics.',
        fr: 'Développement et mise en œuvre de stratégies marketing pour la gamme « Bambini » (produits maternité & bébés) dans un marché parapharmaceutique de 690M USD. Participation aux Journées Parapharmaceutiques du Nord-Ouest et analyse SWOT concurrentielle (60+ entreprises actives sur le marché tunisien). Recommandations stratégiques : marketing digital ciblé, programme de fidélité, visibilité produit et partenariats avec cliniques pédiatriques.',
        ar: 'تطوير وتنفيذ استراتيجيات تسويقية لمجموعة "Bambini" (منتجات الأمومة والرضع) في سوق شبه صيدلاني بقيمة 690 مليون دولار. المشاركة في الأيام شبه الصيدلانية للشمال الغربي وإجراء تحليل SWOT تنافسي لأكثر من 60 شركة ناشطة في تونس. تقديم توصيات حول التسويق الرقمي الموجه، برنامج الولاء، ظهور المنتج والشراكات مع عيادات طب الأطفال.',
      },
    },
  ],

  education: [
    {
      degree: {
        en: 'Engineering Degree in Computer Science — Data Science (4th Year)',
        fr: 'Diplôme d\'ingénieur en informatique — Data Science (4ème année)',
        ar: 'شهادة هندسة في علوم الحاسوب — علوم البيانات (السنة الرابعة)',
      },
      school: 'ESPRIT School of Engineering — Tunisia',
      period: '2022 — Present',
      description: {
        en: 'Currently in the 4th year of the engineering program, specializing in Data Science: machine learning, deep learning, big data and data engineering, on top of a strong full-stack software engineering foundation.',
        fr: 'Actuellement en 4ème année du cycle ingénieur, spécialité Data Science : machine learning, deep learning, big data et data engineering, sur une solide base en génie logiciel full-stack.',
        ar: 'حاليًا في السنة الرابعة من برنامج الهندسة، تخصص علوم البيانات: تعلم الآلة، التعلم العميق، البيانات الضخمة وهندسة البيانات، إلى جانب أساس قوي في هندسة البرمجيات full-stack.',
      },
    },
    {
      degree: {
        en: 'Baccalaureate — Mathematics',
        fr: 'Baccalauréat — Mathématiques',
        ar: 'البكالوريا — رياضيات',
      },
      school: 'Lycée Kheireddine — Tunisia',
      period: '2018 — 2022',
      description: {
        en: 'Mathematics track.',
        fr: 'Section Mathématiques.',
        ar: 'شعبة الرياضيات.',
      },
    },
  ],

  achievements: [
    {
      title: {
        en: '1st Prize — Bal des Projets ESPRIT',
        fr: '1er Prix — Bal des Projets ESPRIT',
        ar: 'الجائزة الأولى — Bal des Projets ESPRIT',
      },
      event: 'LogiXpress — ESPRIT School of Engineering',
      year: '2024',
      description: {
        en: 'First place for LogiXpress, an AI-powered logistics management web platform (Symfony) with a chatbot, facial recognition and eco-friendly route prediction.',
        fr: 'Premier prix pour LogiXpress, une plateforme web de gestion logistique (Symfony) intégrant un chatbot IA, la reconnaissance faciale et la prédiction écologique d\'itinéraires.',
        ar: 'المركز الأول عن LogiXpress، منصة ويب لإدارة اللوجستيك (Symfony) مدعومة بالذكاء الاصطناعي مع روبوت محادثة، التعرف على الوجه، والتنبؤ البيئي بالمسارات.',
      },
      icon: '🏆',
    },
    {
      title: {
        en: '2nd Place — Bal des Projets ESPRIT',
        fr: '2ème Place — Bal des Projets ESPRIT',
        ar: 'المركز الثاني — Bal des Projets ESPRIT',
      },
      event: 'Waveworx — ESPRIT School of Engineering',
      year: '2024',
      description: {
        en: 'Second place for Waveworx, a C++/Qt desktop application for maritime maintenance with anomaly detection, predictive analysis and simulated Arduino sensors.',
        fr: 'Deuxième place pour Waveworx, une application de bureau C++/Qt pour la maintenance maritime avec détection d\'anomalies, analyse prédictive et capteurs Arduino simulés.',
        ar: 'المركز الثاني عن Waveworx، تطبيق سطح مكتب C++/Qt للصيانة البحرية مع كشف الحالات الشاذة، التحليل التنبؤي، وحساسات Arduino محاكاة.',
      },
      icon: '🥈',
    },
    {
      title: {
        en: 'Bal des Projets ESPRIT — Participant',
        fr: 'Bal des Projets ESPRIT — Participant',
        ar: 'Bal des Projets ESPRIT — مشارك',
      },
      event: 'ESPRIT School of Engineering',
      year: '2023',
      description: {
        en: 'Presented a 3D game built in C with SDL on Linux.',
        fr: 'Présentation d\'un jeu 3D développé en C avec SDL sous Linux.',
        ar: 'تقديم لعبة ثلاثية الأبعاد مطورة بلغة C باستخدام SDL على Linux.',
      },
      icon: '🎮',
    },
  ],

  activities: [
    {
      role: {
        en: 'Vice-President — BRAINIX AI Club',
        fr: 'Vice-Président — Club BRAINIX IA',
        ar: 'نائب رئيس — نادي BRAINIX للذكاء الاصطناعي',
      },
      organization: 'ESPRIT School of Engineering',
      period: '2024 — 2025',
      description: {
        en: 'Vice-president of BRAINIX, ESPRIT\'s artificial intelligence student club, for the 2024/2025 term.',
        fr: 'Vice-président de BRAINIX, le club étudiant d\'intelligence artificielle d\'ESPRIT, pour le mandat 2024/2025.',
        ar: 'نائب رئيس BRAINIX، نادي الطلبة للذكاء الاصطناعي في ESPRIT، خلال عهدة 2024/2025.',
      },
    },
    {
      role: {
        en: 'IT Lead — Student Committee',
        fr: 'Responsable IT — Comité des Étudiants',
        ar: 'مسؤول تقنية المعلومات — لجنة الطلبة',
      },
      organization: 'ESPRIT School of Engineering',
      period: '2024 — 2025',
      description: {
        en: 'In charge of IT and digital tools for the ESPRIT student committee during the 2024/2025 term.',
        fr: 'Responsable de l\'informatique et des outils numériques du comité des étudiants d\'ESPRIT pour le mandat 2024/2025.',
        ar: 'مسؤول عن تقنية المعلومات والأدوات الرقمية للجنة طلبة ESPRIT خلال عهدة 2024/2025.',
      },
    },
  ],

  attestations: [
    {
      title: {
        en: 'ESPRIT Attestation',
        fr: 'Attestation ESPRIT',
        ar: 'شهادة ESPRIT',
      },
      image: 'https://i.ibb.co/q6vP91S/attestationdeparticipation.png',
    },
    {
      title: {
        en: 'Academic Certificate',
        fr: 'Certificat académique',
        ar: 'شهادة أكاديمية',
      },
      image: 'https://i.ibb.co/jvwfn2v0/participation.png',
    },
    {
      title: {
        en: 'Achievement Certificate',
        fr: 'Certificat de réussite',
        ar: 'شهادة إنجاز',
      },
      image: 'https://i.ibb.co/DDs1c6bc/premierprix.png',
    },
  ],

  projects: [
    {
      title: {
        en: 'LiftBuddy — AI Fitness Coach (Work in Progress)',
        fr: 'LiftBuddy — Coach fitness IA (En cours de développement)',
        ar: 'LiftBuddy — مدرب لياقة بالذكاء الاصطناعي (قيد التطوير)',
      },
      description: {
        en: 'A mobile training app for beginners, currently in development. Its core is an on-device AI form check: the camera tracks body pose in real time, counts reps and flags technique mistakes, with video never leaving the phone. Around it: an offline-first workout logger, beginner programs, adaptive progression, progress charts, nutrition with AI food-photo recognition, and recipes.',
        fr: 'Une application mobile d\'entraînement pour débutants, en cours de développement. Son cœur est une vérification de posture par IA sur l\'appareil : la caméra suit la posture en temps réel, compte les répétitions et signale les erreurs techniques, sans que la vidéo ne quitte le téléphone. Autour : un journal d\'entraînement offline-first, des programmes débutants, une progression adaptative, des graphiques de progrès, la nutrition avec reconnaissance d\'aliments par photo et des recettes.',
        ar: 'تطبيق تدريب للهاتف موجه للمبتدئين، قيد التطوير حاليًا. جوهره فحص وضعية الجسم بالذكاء الاصطناعي على الجهاز: تتتبع الكاميرا وضعية الجسم في الوقت الفعلي، تعد التكرارات وتنبه إلى الأخطاء التقنية، دون أن يغادر الفيديو الهاتف. وحوله: سجل تمارين يعمل دون اتصال، برامج للمبتدئين، تقدم تكيفي، رسوم بيانية للتقدم، تغذية مع التعرف على الطعام بالصور، ووصفات.',
      },
      tech: ['Flutter', 'Dart', 'ML Kit Pose', 'MediaPipe', 'Python', 'Riverpod', 'Drift (SQLite)', 'Firebase Auth', 'Appwrite'],
      link: '',
      demo: '',
      color: '#dc2626',
      features: [
        {
          en: 'Real-time AI form check with rep counting (on-device)',
          fr: 'Vérification de posture IA en temps réel avec comptage des répétitions (sur l\'appareil)',
          ar: 'فحص الوضعية بالذكاء الاصطناعي في الوقت الفعلي مع عد التكرارات (على الجهاز)',
        },
        {
          en: 'Offline-first workout logger and beginner programs',
          fr: 'Journal d\'entraînement offline-first et programmes débutants',
          ar: 'سجل تمارين يعمل دون اتصال وبرامج للمبتدئين',
        },
        {
          en: 'Adaptive progression engine',
          fr: 'Moteur de progression adaptative',
          ar: 'محرك تقدم تكيفي',
        },
        {
          en: 'Nutrition tracking with AI food-photo recognition',
          fr: 'Suivi nutritionnel avec reconnaissance d\'aliments par photo',
          ar: 'تتبع التغذية مع التعرف على الطعام بالصور',
        },
        {
          en: 'Progress charts, streaks and weekly recap',
          fr: 'Graphiques de progrès, séries et bilan hebdomadaire',
          ar: 'رسوم بيانية للتقدم، سلاسل وملخص أسبوعي',
        },
      ],
      challenges: {
        en: 'Making pose-based form analysis reliable on a phone: the angle and rep-counting logic is prototyped and tuned in Python with MediaPipe on real video clips, then ported to Dart so it runs fully on-device and offline.',
        fr: 'Rendre l\'analyse de posture fiable sur un téléphone : la logique d\'angles et de comptage est prototypée et calibrée en Python avec MediaPipe sur de vraies vidéos, puis portée en Dart pour fonctionner entièrement sur l\'appareil et hors ligne.',
        ar: 'جعل تحليل الوضعية موثوقًا على الهاتف: يتم نمذجة منطق الزوايا وعد التكرارات وضبطه بلغة Python مع MediaPipe على مقاطع فيديو حقيقية، ثم نقله إلى Dart ليعمل بالكامل على الجهاز ودون اتصال.',
      },
      architecture: {
        en: 'Flutter app with Riverpod state management and a local Drift (SQLite) database for offline-first sync, ML Kit pose detection behind an abstraction layer, Firebase Auth, and Appwrite serverless functions for AI food recognition.',
        fr: 'Application Flutter avec gestion d\'état Riverpod et base locale Drift (SQLite) pour une synchronisation offline-first, détection de posture ML Kit derrière une couche d\'abstraction, Firebase Auth, et fonctions serverless Appwrite pour la reconnaissance d\'aliments.',
        ar: 'تطبيق Flutter مع إدارة الحالة Riverpod وقاعدة بيانات محلية Drift (SQLite) للمزامنة دون اتصال، كشف الوضعية ML Kit خلف طبقة تجريد، مصادقة Firebase، ودوال Appwrite بدون خادم للتعرف على الطعام.',
      },
      images: [],
    },
    {
      title: {
        en: 'Synapse — Enterprise RAG Document Engine',
        fr: 'Synapse — Moteur de documents RAG pour entreprise',
        ar: 'Synapse — محرك مستندات RAG للمؤسسات',
      },
      description: {
        en: 'A production-ready RAG engine for chatting with your PDFs. Built with Next.js 14, FastAPI, Qdrant, and Gemini/OpenAI. Fully containerized and built for scale with semantic search, vector embeddings, and intelligent document retrieval.',
        fr: 'Un moteur RAG prêt pour la production pour discuter avec vos PDF. Développé avec Next.js 14, FastAPI, Qdrant et Gemini/OpenAI. Entièrement conteneurisé et conçu pour l\'échelle avec recherche sémantique, embeddings vectoriels et récupération intelligente de documents.',
        ar: 'محرك RAG جاهز للإنتاج للمحادثة مع ملفات PDF الخاصة بك. مبني بـ Next.js 14 وFastAPI وQdrant وGemini/OpenAI. مُحوسَب بالكامل ومصمم للتوسع مع البحث الدلالي، تضمينات المتجهات، واسترجاع المستندات الذكي.',
      },
      tech: ['Next.js', 'FastAPI', 'Python', 'Qdrant', 'Docker', 'PostgreSQL', 'LangChain', 'Gemini AI', 'TypeScript'],
      link: 'https://github.com/YoussefAbbes/Synapse-Entreprise-RAG-Document-Engine',
      demo: '',
      color: '#8b5cf6',
      features: [
        {
          en: 'PDF document parsing and chunking',
          fr: 'Analyse et segmentation de documents PDF',
          ar: 'تحليل وتقسيم مستندات PDF',
        },
        {
          en: 'Semantic search with vector embeddings',
          fr: 'Recherche sémantique avec embeddings vectoriels',
          ar: 'البحث الدلالي مع تضمينات المتجهات',
        },
        {
          en: 'RAG-powered conversational AI',
          fr: 'IA conversationnelle alimentée par RAG',
          ar: 'ذكاء اصطناعي محادثاتي مدعوم بـ RAG',
        },
        {
          en: 'Document management with MinIO',
          fr: 'Gestion de documents avec MinIO',
          ar: 'إدارة المستندات مع MinIO',
        },
        {
          en: 'Fully containerized with Docker',
          fr: 'Entièrement conteneurisé avec Docker',
          ar: 'مُحوسَب بالكامل مع Docker',
        },
      ],
      challenges: {
        en: 'Optimizing vector search performance for large document collections while maintaining context relevance across multi-turn conversations and handling various PDF formats reliably.',
        fr: 'Optimiser les performances de recherche vectorielle pour de grandes collections de documents tout en maintenant la pertinence du contexte à travers des conversations multi-tours et en gérant de manière fiable divers formats PDF.',
        ar: 'تحسين أداء البحث المتجه لمجموعات المستندات الكبيرة مع الحفاظ على ملاءمة السياق عبر المحادثات متعددة الدورات والتعامل بشكل موثوق مع تنسيقات PDF المختلفة.',
      },
      architecture: {
        en: 'Microservices architecture with Next.js frontend, FastAPI backend, Qdrant vector database, PostgreSQL for metadata, MinIO for object storage, and LangChain for RAG orchestration.',
        fr: 'Architecture microservices avec frontend Next.js, backend FastAPI, base de données vectorielle Qdrant, PostgreSQL pour les métadonnées, MinIO pour le stockage d\'objets, et LangChain pour l\'orchestration RAG.',
        ar: 'هندسة الخدمات الصغرى مع واجهة Next.js أمامية، خلفية FastAPI، قاعدة بيانات Qdrant المتجهة، PostgreSQL للبيانات الوصفية، MinIO لتخزين الكائنات، وLangChain لتنسيق RAG.',
      },
      images: [],
    },
    {
      title: {
        en: 'Autonomous Market — Crypto Analytics Platform',
        fr: 'Autonomous Market — Plateforme d\'analyse crypto',
        ar: 'Autonomous Market — منصة تحليل العملات المشفرة',
      },
      description: {
        en: 'A full-stack crypto analytics platform that combines real-time market data, AI sentiment analysis, and ML price forecasting in one interactive dashboard. Features ARIMA and LSTM models for price prediction, integrated with n8n for workflow automation.',
        fr: 'Une plateforme d\'analyse crypto full-stack qui combine des données de marché en temps réel, une analyse de sentiment par IA et des prévisions de prix par ML dans un tableau de bord interactif. Comprend des modèles ARIMA et LSTM pour la prédiction de prix, intégré avec n8n pour l\'automatisation des workflows.',
        ar: 'منصة تحليل العملات المشفرة full-stack تجمع بين بيانات السوق في الوقت الفعلي، تحليل المشاعر بالذكاء الاصطناعي، والتنبؤ بالأسعار بتعلم الآلة في لوحة تحكم تفاعلية واحدة. تتضمن نماذج ARIMA وLSTM للتنبؤ بالأسعار، مدمجة مع n8n لأتمتة سير العمل.',
      },
      tech: ['React', 'Python', 'PyTorch', 'PostgreSQL', 'Docker', 'n8n', 'ARIMA', 'LSTM', 'Machine Learning'],
      link: 'https://github.com/YoussefAbbes/Autonomous-Market',
      demo: '',
      color: '#10b981',
      features: [
        {
          en: 'Real-time cryptocurrency market data',
          fr: 'Données de marché crypto en temps réel',
          ar: 'بيانات سوق العملات المشفرة في الوقت الفعلي',
        },
        {
          en: 'AI-powered sentiment analysis',
          fr: 'Analyse de sentiment par IA',
          ar: 'تحليل المشاعر بالذكاء الاصطناعي',
        },
        {
          en: 'LSTM and ARIMA price forecasting',
          fr: 'Prévision de prix LSTM et ARIMA',
          ar: 'التنبؤ بالأسعار بـ LSTM وARIMA',
        },
        {
          en: 'n8n workflow automation',
          fr: 'Automatisation des workflows n8n',
          ar: 'أتمتة سير العمل n8n',
        },
        {
          en: 'Interactive analytics dashboard',
          fr: 'Tableau de bord analytique interactif',
          ar: 'لوحة تحكم تحليلية تفاعلية',
        },
      ],
      challenges: {
        en: 'Training accurate LSTM models on volatile cryptocurrency data while integrating multiple data sources (market data, social sentiment, news) and providing real-time predictions through the dashboard.',
        fr: 'Entraîner des modèles LSTM précis sur des données de crypto-monnaie volatiles tout en intégrant plusieurs sources de données (données de marché, sentiment social, actualités) et en fournissant des prédictions en temps réel via le tableau de bord.',
        ar: 'تدريب نماذج LSTM دقيقة على بيانات العملات المشفرة المتقلبة مع دمج مصادر بيانات متعددة (بيانات السوق، المشاعر الاجتماعية، الأخبار) وتوفير التنبؤات في الوقت الفعلي عبر لوحة التحكم.',
      },
      architecture: {
        en: 'React dashboard frontend, Python backend with PyTorch for ML models, PostgreSQL for time-series data, Docker for containerization, and n8n for automating data pipelines.',
        fr: 'Frontend de tableau de bord React, backend Python avec PyTorch pour les modèles ML, PostgreSQL pour les données de séries temporelles, Docker pour la conteneurisation, et n8n pour automatiser les pipelines de données.',
        ar: 'واجهة لوحة تحكم React أمامية، خلفية Python مع PyTorch لنماذج ML، PostgreSQL لبيانات السلاسل الزمنية، Docker للحوسبة، وn8n لأتمتة خطوط أنابيب البيانات.',
      },
      images: [],
    },
    {
      title: {
        en: 'HelpDesk AI — Smart Support Ticket System',
        fr: 'HelpDesk AI — Système intelligent de tickets de support',
        ar: 'HelpDesk AI — نظام ذكي لتذاكر الدعم',
      },
      description: {
        en: 'An AI-powered helpdesk / CRM built with Django REST Framework and React. Every new ticket is analysed asynchronously by Hugging Face NLP models that detect customer sentiment, auto-categorise the ticket and draft a suggested reply for agents, with role-based access and a business intelligence dashboard.',
        fr: 'Un helpdesk / CRM propulsé par l\'IA, développé avec Django REST Framework et React. Chaque nouveau ticket est analysé de façon asynchrone par des modèles NLP Hugging Face qui détectent le sentiment du client, catégorisent automatiquement le ticket et rédigent une réponse suggérée pour les agents, avec contrôle d\'accès par rôles et tableau de bord BI.',
        ar: 'نظام مكتب مساعدة / CRM مدعوم بالذكاء الاصطناعي مبني بـ Django REST Framework وReact. يتم تحليل كل تذكرة جديدة بشكل غير متزامن بنماذج Hugging Face للغة الطبيعية التي تكشف مشاعر العميل، تصنف التذكرة تلقائيًا وتقترح ردًا للوكلاء، مع تحكم في الوصول حسب الأدوار ولوحة ذكاء أعمال.',
      },
      tech: ['Django REST', 'Python', 'React', 'Celery', 'Redis', 'PostgreSQL', 'Hugging Face', 'Tailwind CSS', 'Docker'],
      link: 'https://github.com/YoussefAbbes/HelpDesk-Project',
      demo: '',
      color: '#06b6d4',
      features: [
        {
          en: 'Sentiment analysis of every ticket (RoBERTa)',
          fr: 'Analyse de sentiment de chaque ticket (RoBERTa)',
          ar: 'تحليل مشاعر كل تذكرة (RoBERTa)',
        },
        {
          en: 'Zero-shot auto-categorisation (BART-MNLI)',
          fr: 'Catégorisation automatique zero-shot (BART-MNLI)',
          ar: 'تصنيف تلقائي بدون أمثلة (BART-MNLI)',
        },
        {
          en: 'AI-drafted reply suggestions for agents (FLAN-T5)',
          fr: 'Réponses suggérées par IA pour les agents (FLAN-T5)',
          ar: 'ردود مقترحة بالذكاء الاصطناعي للوكلاء (FLAN-T5)',
        },
        {
          en: 'Role-based access: customer, agent, admin (JWT)',
          fr: 'Accès par rôles : client, agent, admin (JWT)',
          ar: 'وصول حسب الأدوار: عميل، وكيل، مسؤول (JWT)',
        },
        {
          en: 'BI dashboard: volume trends, sentiment, resolution time, agent workload',
          fr: 'Tableau de bord BI : tendances, sentiment, temps de résolution, charge des agents',
          ar: 'لوحة ذكاء أعمال: اتجاهات الحجم، المشاعر، وقت الحل، عبء عمل الوكلاء',
        },
      ],
      challenges: {
        en: 'Running three transformer models on every ticket without slowing down the app: inference runs in Celery workers with Redis as the broker, so the API responds instantly and AI insights appear as soon as they are ready.',
        fr: 'Exécuter trois modèles transformers sur chaque ticket sans ralentir l\'application : l\'inférence tourne dans des workers Celery avec Redis comme broker, l\'API répond instantanément et les analyses IA apparaissent dès qu\'elles sont prêtes.',
        ar: 'تشغيل ثلاثة نماذج transformer على كل تذكرة دون إبطاء التطبيق: يتم الاستدلال في عمال Celery مع Redis كوسيط، فتستجيب الواجهة البرمجية فورًا وتظهر تحليلات الذكاء الاصطناعي بمجرد جاهزيتها.',
      },
      architecture: {
        en: 'React (Vite, Tailwind, Zustand, Recharts) frontend talking to a Django REST Framework API with JWT auth; Celery workers and Redis for asynchronous NLP inference; PostgreSQL database; everything orchestrated with Docker Compose.',
        fr: 'Frontend React (Vite, Tailwind, Zustand, Recharts) communiquant avec une API Django REST Framework authentifiée par JWT ; workers Celery et Redis pour l\'inférence NLP asynchrone ; base PostgreSQL ; le tout orchestré avec Docker Compose.',
        ar: 'واجهة React (Vite وTailwind وZustand وRecharts) تتواصل مع واجهة Django REST Framework بمصادقة JWT؛ عمال Celery وRedis للاستدلال غير المتزامن؛ قاعدة بيانات PostgreSQL؛ وكل ذلك منسق بـ Docker Compose.',
      },
      images: [],
    },
    {
      title: {
        en: 'LogiXpress — AI Logistics Platform (1st Prize)',
        fr: 'LogiXpress — Plateforme logistique IA (1er Prix)',
        ar: 'LogiXpress — منصة لوجستية بالذكاء الاصطناعي (الجائزة الأولى)',
      },
      description: {
        en: 'An intelligent logistics management web platform that won 1st prize at ESPRIT\'s Bal des Projets 2024. Includes an AI chatbot, facial recognition, eco-friendly route prediction, and responsive front-office and back-office interfaces.',
        fr: 'Une plateforme web intelligente de gestion logistique, lauréate du 1er prix au Bal des Projets ESPRIT 2024. Intègre un chatbot IA, la reconnaissance faciale, la prédiction écologique d\'itinéraires et des interfaces front-office et back-office responsives.',
        ar: 'منصة ويب ذكية لإدارة اللوجستيك فازت بالجائزة الأولى في Bal des Projets ESPRIT 2024. تتضمن روبوت محادثة بالذكاء الاصطناعي، التعرف على الوجه، التنبؤ البيئي بالمسارات، وواجهات أمامية وخلفية متجاوبة.',
      },
      tech: ['Symfony', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
      link: '',
      demo: '',
      color: '#eab308',
      features: [
        {
          en: 'AI chatbot assistant',
          fr: 'Assistant chatbot IA',
          ar: 'مساعد روبوت محادثة بالذكاء الاصطناعي',
        },
        {
          en: 'Facial recognition login',
          fr: 'Connexion par reconnaissance faciale',
          ar: 'تسجيل الدخول بالتعرف على الوجه',
        },
        {
          en: 'Eco-friendly route prediction',
          fr: 'Prédiction écologique d\'itinéraires',
          ar: 'التنبؤ البيئي بالمسارات',
        },
        {
          en: 'Responsive front-office and back-office',
          fr: 'Front-office et back-office responsives',
          ar: 'واجهات أمامية وخلفية متجاوبة',
        },
      ],
      images: [],
    },
    {
      title: {
        en: 'Waveworx — Maritime Maintenance App (2nd Place)',
        fr: 'Waveworx — Application de maintenance maritime (2ème Place)',
        ar: 'Waveworx — تطبيق الصيانة البحرية (المركز الثاني)',
      },
      description: {
        en: 'A C++/Qt desktop application for maritime maintenance that took 2nd place at ESPRIT\'s Bal des Projets 2024. Manages interventions, contracts and invoices, with anomaly detection, predictive analysis and simulated Arduino sensors.',
        fr: 'Une application de bureau C++/Qt pour la maintenance maritime, 2ème place au Bal des Projets ESPRIT 2024. Gestion des interventions, contrats et factures, avec détection d\'anomalies, analyse prédictive et capteurs Arduino simulés.',
        ar: 'تطبيق سطح مكتب C++/Qt للصيانة البحرية حصل على المركز الثاني في Bal des Projets ESPRIT 2024. يدير التدخلات والعقود والفواتير، مع كشف الحالات الشاذة، التحليل التنبؤي، وحساسات Arduino محاكاة.',
      },
      tech: ['C++', 'Qt', 'Arduino', 'SQL'],
      link: '',
      demo: '',
      color: '#0ea5e9',
      features: [
        {
          en: 'Intervention, contract and invoice management',
          fr: 'Gestion des interventions, contrats et factures',
          ar: 'إدارة التدخلات والعقود والفواتير',
        },
        {
          en: 'Anomaly detection and predictive analysis',
          fr: 'Détection d\'anomalies et analyse prédictive',
          ar: 'كشف الحالات الشاذة والتحليل التنبؤي',
        },
        {
          en: 'Simulated Arduino sensors',
          fr: 'Capteurs Arduino simulés',
          ar: 'حساسات Arduino محاكاة',
        },
      ],
      images: [],
    },
    {
      title: {
        en: 'EL-Firma — Farm Management System',
        fr: 'EL-Firma — Système de gestion agricole',
        ar: 'EL-Firma — نظام إدارة المزارع',
      },
      description: {
        en: 'A comprehensive full-stack desktop application for integrated farm management built as part of PIDEV 3A at ESPRIT. Features AI-powered facial recognition, voice commands, chatbot assistance, DNA-based gender prediction, Stripe payments, interactive maps, real-time dashboards, and multi-factor authentication.',
        fr: 'Une application desktop full-stack complète pour la gestion agricole intégrée, développée dans le cadre du PIDEV 3A à ESPRIT. Comprend la reconnaissance faciale par IA, les commandes vocales, l\'assistance par chatbot, la prédiction de genre basée sur l\'ADN, les paiements Stripe, les cartes interactives, les tableaux de bord en temps réel et l\'authentification multi-facteurs.',
        ar: 'تطبيق سطح مكتب شامل full-stack لإدارة المزارع المتكاملة، تم تطويره كجزء من PIDEV 3A في ESPRIT. يتضمن التعرف على الوجه بالذكاء الاصطناعي، الأوامر الصوتية، المساعد الآلي، التنبؤ بالجنس بناءً على الحمض النووي، مدفوعات Stripe، خرائط تفاعلية، لوحات معلومات في الوقت الفعلي، والمصادقة متعددة العوامل.',
      },
      tech: ['Java 21', 'JavaFX', 'MySQL', 'OpenCV', 'Stripe API', 'Maven'],
      link: 'https://github.com/Ikam2/Esprit-PIDEV-3A3--2026-ELFIRMA',
      demo: '',
      color: '#00d4ff',
      features: [
        {
          en: 'AI-powered facial recognition login',
          fr: 'Connexion par reconnaissance faciale IA',
          ar: 'تسجيل الدخول بالتعرف على الوجه بالذكاء الاصطناعي',
        },
        {
          en: 'Voice command navigation',
          fr: 'Navigation par commandes vocales',
          ar: 'التنقل بالأوامر الصوتية',
        },
        {
          en: 'Chatbot assistance',
          fr: 'Assistance par chatbot',
          ar: 'المساعدة عبر روبوت المحادثة',
        },
        {
          en: 'Stripe payment integration',
          fr: 'Intégration des paiements Stripe',
          ar: 'دمج مدفوعات Stripe',
        },
        {
          en: 'Interactive map dashboards',
          fr: 'Tableaux de bord avec cartes interactives',
          ar: 'لوحات معلومات بخرائط تفاعلية',
        },
        {
          en: 'DNA-based gender prediction',
          fr: 'Prédiction de genre basée sur l\'ADN',
          ar: 'التنبؤ بالجنس بناءً على الحمض النووي',
        },
      ],
      challenges: {
        en: 'Integrating multiple AI services (facial recognition via OpenCV, voice commands, DNA prediction) into a single JavaFX desktop application while maintaining performance and a clean UX.',
        fr: 'Intégration de multiples services IA (reconnaissance faciale via OpenCV, commandes vocales, prédiction ADN) dans une seule application desktop JavaFX tout en maintenant les performances et une UX soignée.',
        ar: 'دمج خدمات ذكاء اصطناعي متعددة (التعرف على الوجه عبر OpenCV، الأوامر الصوتية، التنبؤ بالحمض النووي) في تطبيق سطح مكتب JavaFX واحد مع الحفاظ على الأداء وتجربة مستخدم نظيفة.',
      },
      architecture: {
        en: 'Layered MVC architecture with JavaFX frontend, service layer for business logic, and MySQL persistence. OpenCV and external APIs wrapped in dedicated service classes.',
        fr: 'Architecture MVC en couches avec frontend JavaFX, couche de services pour la logique métier et persistance MySQL. OpenCV et les API externes encapsulés dans des classes de service dédiées.',
        ar: 'هندسة MVC متعددة الطبقات مع واجهة JavaFX أمامية، طبقة خدمات لمنطق الأعمال، وتخزين MySQL. OpenCV والواجهات البرمجية الخارجية مغلفة في فئات خدمة مخصصة.',
      },
      images: [],
    },
    {
      title: {
        en: 'EspritSphere — Campus Management Platform',
        fr: 'EspritSphere — Plateforme de gestion du campus',
        ar: 'EspritSphere — منصة إدارة الحرم الجامعي',
      },
      description: {
        en: 'A robust, cross-platform application built with Flutter and Firebase to centralize student life at Esprit University. Empowers the campus community to seamlessly manage club memberships, organize university events, and reserve movie seats via an interactive seat-map.',
        fr: 'Une application multiplateforme robuste développée avec Flutter et Firebase pour centraliser la vie étudiante à l\'Université Esprit. Permet à la communauté du campus de gérer facilement les adhésions aux clubs, d\'organiser des événements universitaires et de réserver des places de cinéma via une carte de sièges interactive.',
        ar: 'تطبيق قوي متعدد المنصات مبني بـ Flutter وFirebase لمركزية حياة الطلاب في جامعة Esprit. يمكّن مجتمع الحرم الجامعي من إدارة عضويات النوادي بسلاسة، تنظيم الأحداث الجامعية، وحجز مقاعد السينما عبر خريطة مقاعد تفاعلية.',
      },
      tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'GitHub'],
      link: 'https://github.com/YoussefAbbes/EspritSphere-Project',
      demo: 'https://espritsphere-youssefabbes.netlify.app',
      color: '#f59e0b',
      features: [
        {
          en: 'Club membership management',
          fr: 'Gestion des adhésions aux clubs',
          ar: 'إدارة عضويات النوادي',
        },
        {
          en: 'University event organization',
          fr: 'Organisation d\'événements universitaires',
          ar: 'تنظيم الأحداث الجامعية',
        },
        {
          en: 'Interactive movie seat reservation',
          fr: 'Réservation de sièges de cinéma interactive',
          ar: 'حجز مقاعد السينما التفاعلية',
        },
        {
          en: 'Cross-platform: iOS, Android, and Web',
          fr: 'Multi-plateforme : iOS, Android et Web',
          ar: 'متعدد المنصات: iOS وAndroid والويب',
        },
      ],
      challenges: {
        en: 'Building a seamless seat-map UI for movie reservations that works across all platforms while handling real-time seat availability updates through Firestore.',
        fr: 'Créer une interface de carte de sièges fluide pour les réservations de cinéma qui fonctionne sur toutes les plateformes tout en gérant les mises à jour de disponibilité des sièges en temps réel via Firestore.',
        ar: 'بناء واجهة سلسة لخريطة المقاعد لحجوزات السينما تعمل عبر جميع المنصات مع التعامل مع تحديثات توفر المقاعد في الوقت الفعلي عبر Firestore.',
      },
      architecture: {
        en: 'Flutter frontend with Firebase Authentication, Firestore for real-time data synchronization, and Cloud Functions for business logic.',
        fr: 'Frontend Flutter avec Firebase Authentication, Firestore pour la synchronisation des données en temps réel, et Cloud Functions pour la logique métier.',
        ar: 'واجهة Flutter أمامية مع مصادقة Firebase، Firestore لمزامنة البيانات في الوقت الفعلي، وCloud Functions لمنطق الأعمال.',
      },
      images: [],
    },
    {
      title: {
        en: 'LammaPlay — Multiplayer Quiz Platform',
        fr: 'LammaPlay — Plateforme de quiz multijoueur',
        ar: 'LammaPlay — منصة اختبارات متعددة اللاعبين',
      },
      description: {
        en: 'A real-time multiplayer quiz game platform supporting live gameplay, custom quiz creation with image support, dynamic scoring with streak bonuses, and live leaderboards. Built with Flutter and Firebase, targeting Android, iOS, and Web.',
        fr: 'Une plateforme de jeu de quiz multijoueur en temps réel supportant le gameplay en direct, la création de quiz personnalisés avec support d\'images, le scoring dynamique avec bonus de série, et les classements en direct. Développée avec Flutter et Firebase, ciblant Android, iOS et Web.',
        ar: 'منصة ألعاب اختبارات متعددة اللاعبين في الوقت الفعلي تدعم اللعب المباشر، إنشاء اختبارات مخصصة مع دعم الصور، التسجيل الديناميكي مع مكافآت السلسلة، ولوحات المتصدرين المباشرة. مبنية بـ Flutter وFirebase، تستهدف Android وiOS والويب.',
      },
      tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'ImgBB API'],
      link: 'https://github.com/YoussefAbbes/LammaPlay',
      demo: '',
      color: '#7c3aed',
      features: [
        {
          en: 'Real-time multiplayer gameplay with session codes',
          fr: 'Gameplay multijoueur en temps réel avec codes de session',
          ar: 'لعب جماعي في الوقت الفعلي مع رموز الجلسات',
        },
        {
          en: 'Custom quiz creation with image support',
          fr: 'Création de quiz personnalisés avec support d\'images',
          ar: 'إنشاء اختبارات مخصصة مع دعم الصور',
        },
        {
          en: 'Dynamic scoring with streak bonuses',
          fr: 'Scoring dynamique avec bonus de série',
          ar: 'تسجيل نقاط ديناميكي مع مكافآت السلسلة',
        },
        {
          en: 'Live leaderboards and results',
          fr: 'Classements et résultats en direct',
          ar: 'لوحات المتصدرين والنتائج المباشرة',
        },
        {
          en: 'Cross-platform: Android, iOS, and Web',
          fr: 'Multi-plateforme : Android, iOS et Web',
          ar: 'متعدد المنصات: Android وiOS والويب',
        },
      ],
      challenges: {
        en: 'Implementing real-time synchronization across multiple players using Firestore listeners while handling edge cases like disconnections, late joins, and score disputes.',
        fr: 'Implémentation de la synchronisation en temps réel entre plusieurs joueurs à l\'aide des listeners Firestore tout en gérant les cas limites comme les déconnexions, les connexions tardives et les litiges de score.',
        ar: 'تنفيذ المزامنة في الوقت الفعلي عبر لاعبين متعددين باستخدام مستمعي Firestore مع التعامل مع الحالات الحدية مثل انقطاع الاتصال، الانضمام المتأخر، والنزاعات في النقاط.',
      },
      architecture: {
        en: 'Flutter frontend with Provider state management, Firebase Authentication for user management, Firestore for real-time data sync, and Cloud Storage for quiz images via ImgBB API.',
        fr: 'Frontend Flutter avec gestion d\'état Provider, Firebase Authentication pour la gestion des utilisateurs, Firestore pour la synchronisation des données en temps réel, et Cloud Storage pour les images de quiz via l\'API ImgBB.',
        ar: 'واجهة Flutter أمامية مع إدارة الحالة بـ Provider، مصادقة Firebase لإدارة المستخدمين، Firestore لمزامنة البيانات في الوقت الفعلي، وCloud Storage لصور الاختبارات عبر واجهة ImgBB البرمجية.',
      },
      images: [],
    },
    {
      title: {
        en: 'Portfolio Website',
        fr: 'Site web Portfolio',
        ar: 'موقع المحفظة الشخصية',
      },
      description: {
        en: 'This immersive 3D portfolio website built with React, Three.js, and Framer Motion. Features particle effects, parallax scrolling, glassmorphism design, and smooth scroll-triggered animations.',
        fr: 'Ce site portfolio 3D immersif construit avec React, Three.js et Framer Motion. Comprend des effets de particules, du défilement parallaxe, un design glassmorphisme et des animations fluides déclenchées par le défilement.',
        ar: 'موقع محفظة ثلاثي الأبعاد غامر مبني بـ React وThree.js وFramer Motion. يتضمن تأثيرات الجسيمات، التمرير المتوازي، تصميم glassmorphism، ورسوم متحركة سلسة تُفعّل بالتمرير.',
      },
      tech: ['React', 'Three.js', 'Framer Motion', 'Vite', 'CSS'],
      link: 'https://github.com/YoussefAbbes/CV',
      demo: 'https://youssefabbes.github.io/CV/',
      color: '#ff006e',
      features: [
        {
          en: '3D particle effects and parallax scrolling',
          fr: 'Effets de particules 3D et défilement parallaxe',
          ar: 'تأثيرات جسيمات ثلاثية الأبعاد وتمرير متوازي',
        },
        {
          en: 'Glassmorphism design with blur effects',
          fr: 'Design glassmorphisme avec effets de flou',
          ar: 'تصميم glassmorphism مع تأثيرات الضبابية',
        },
        {
          en: 'Scroll-triggered Framer Motion animations',
          fr: 'Animations Framer Motion déclenchées par le défilement',
          ar: 'رسوم متحركة Framer Motion تُفعّل بالتمرير',
        },
        {
          en: 'Responsive design for all devices',
          fr: 'Design responsive pour tous les appareils',
          ar: 'تصميم متجاوب لجميع الأجهزة',
        },
        {
          en: 'Accessibility: skip links, ARIA labels, reduced motion support',
          fr: 'Accessibilité : liens de saut, labels ARIA, support du mouvement réduit',
          ar: 'إمكانية الوصول: روابط التخطي، تسميات ARIA، دعم تقليل الحركة',
        },
      ],
      challenges: {
        en: 'Balancing visual richness (Three.js 3D scenes, particle systems) with performance across devices, especially mobile browsers with limited GPU resources.',
        fr: 'Équilibrer la richesse visuelle (scènes 3D Three.js, systèmes de particules) avec les performances sur tous les appareils, en particulier les navigateurs mobiles avec des ressources GPU limitées.',
        ar: 'الموازنة بين الثراء البصري (مشاهد Three.js ثلاثية الأبعاد، أنظمة الجسيمات) والأداء عبر الأجهزة، خاصة متصفحات الهاتف المحمول ذات موارد GPU المحدودة.',
      },
      architecture: {
        en: 'React SPA with Vite bundler, Three.js scenes lazy-loaded via React.lazy() and wrapped in ErrorBoundary components, Framer Motion for declarative animations, and a single cv.js data source.',
        fr: 'SPA React avec le bundler Vite, scènes Three.js chargées paresseusement via React.lazy() et encapsulées dans des composants ErrorBoundary, Framer Motion pour les animations déclaratives, et une source de données unique cv.js.',
        ar: 'تطبيق React أحادي الصفحة مع حزمة Vite، مشاهد Three.js محملة بشكل كسول عبر React.lazy() ومغلفة في مكونات ErrorBoundary، Framer Motion للرسوم المتحركة التصريحية، ومصدر بيانات cv.js واحد.',
      },
      images: [],
    },
    {
      title: {
        en: 'Line-Following Robot',
        fr: 'Robot suiveur de ligne',
        ar: 'روبوت تتبع الخط',
      },
      description: {
        en: 'An autonomous robot that follows a line drawn on the ground, using infrared sensors and an Arduino microcontroller programmed in C.',
        fr: 'Un robot autonome capable de suivre une ligne tracée au sol, grâce à des capteurs infrarouges et un microcontrôleur Arduino programmé en C.',
        ar: 'روبوت مستقل قادر على تتبع خط مرسوم على الأرض، باستخدام حساسات الأشعة تحت الحمراء ومتحكم Arduino مبرمج بلغة C.',
      },
      tech: ['Arduino', 'C', 'Embedded', 'IR Sensors'],
      link: '',
      demo: '',
      color: '#64748b',
      features: [],
      images: [],
    },
  ],

  blog: [
    {
      id: 'ai-javafx',
      title: {
        en: 'Integrating AI into JavaFX Desktop Applications',
        fr: 'Intégrer l\'IA dans les applications desktop JavaFX',
        ar: 'دمج الذكاء الاصطناعي في تطبيقات JavaFX المكتبية',
      },
      excerpt: {
        en: 'How I integrated facial recognition, voice commands, and chatbot assistance into a JavaFX desktop app for my engineering project at ESPRIT.',
        fr: 'Comment j\'ai intégré la reconnaissance faciale, les commandes vocales et l\'assistance par chatbot dans une application desktop JavaFX pour mon projet d\'ingénierie à ESPRIT.',
        ar: 'كيف قمت بدمج التعرف على الوجه، الأوامر الصوتية، والمساعد الآلي في تطبيق JavaFX مكتبي لمشروعي الهندسي في ESPRIT.',
      },
      content: {
        en: `When building EL-Firma for my PIDEV 3A project, the biggest challenge was making AI features feel native in a desktop application. Here's what I learned:

Facial Recognition with OpenCV: We wrapped OpenCV's Java bindings in a dedicated service class, capturing frames from the webcam and running Haar cascade classifiers. The key was keeping the detection loop off the JavaFX application thread to avoid UI freezing.

Voice Commands: We used a speech-to-text API running in a background thread. Commands are parsed against a predefined grammar and dispatched to the appropriate controller action. The tricky part was handling microphone permissions across different OS environments.

Chatbot Integration: We integrated a conversational AI endpoint that processes natural language queries about farm data. The chatbot runs asynchronously, streaming responses back to the UI through Platform.runLater() callbacks.

The architecture lesson: wrap each AI service in its own service class with a clean interface, handle threading carefully, and always provide graceful fallbacks when AI services are unavailable.`,
        fr: `Lors du développement d'EL-Firma pour mon projet PIDEV 3A, le plus grand défi était de rendre les fonctionnalités IA naturelles dans une application desktop. Voici ce que j'ai appris :

Reconnaissance Faciale avec OpenCV : Nous avons encapsulé les bindings Java d'OpenCV dans une classe de service dédiée, capturant les images de la webcam et exécutant les classificateurs Haar cascade. La clé était de garder la boucle de détection en dehors du thread JavaFX pour éviter le gel de l'interface.

Commandes Vocales : Nous avons utilisé une API de reconnaissance vocale dans un thread en arrière-plan. Les commandes sont analysées selon une grammaire prédéfinie et envoyées à l'action du contrôleur approprié.

Intégration du Chatbot : Nous avons intégré un endpoint d'IA conversationnelle qui traite les requêtes en langage naturel sur les données agricoles. Le chatbot fonctionne de manière asynchrone, renvoyant les réponses à l'interface via des callbacks Platform.runLater().

La leçon d'architecture : encapsuler chaque service IA dans sa propre classe avec une interface propre, gérer soigneusement le threading, et toujours prévoir des solutions de repli.`,
        ar: `عند بناء EL-Firma لمشروع PIDEV 3A، كان التحدي الأكبر جعل ميزات الذكاء الاصطناعي تبدو طبيعية في تطبيق سطح المكتب. إليكم ما تعلمته:

التعرف على الوجه مع OpenCV: قمنا بتغليف ربط Java لـ OpenCV في فئة خدمة مخصصة، التقاط الإطارات من كاميرا الويب وتشغيل مصنفات Haar cascade. المفتاح كان إبقاء حلقة الكشف بعيدة عن خيط تطبيق JavaFX لتجنب تجميد الواجهة.

الأوامر الصوتية: استخدمنا واجهة تحويل الكلام إلى نص في خيط خلفي. يتم تحليل الأوامر وفقًا لقواعد محددة مسبقًا وإرسالها إلى إجراء وحدة التحكم المناسب.

دمج روبوت المحادثة: قمنا بدمج نقطة نهاية ذكاء اصطناعي محادثاتي تعالج الاستعلامات باللغة الطبيعية حول بيانات المزرعة. يعمل الروبوت بشكل غير متزامن، مع إعادة الاستجابات إلى الواجهة عبر Platform.runLater().

الدرس المعماري: تغليف كل خدمة ذكاء اصطناعي في فئتها الخاصة مع واجهة نظيفة، والتعامل بحذر مع الخيوط، وتوفير حلول بديلة دائمًا.`,
      },
      date: '2025-12-15',
      readTime: 5,
      tags: ['Java', 'JavaFX', 'AI', 'OpenCV'],
      color: '#00d4ff',
    },
    {
      id: '3d-portfolio',
      title: {
        en: 'Building an Immersive 3D Portfolio with Three.js and React',
        fr: 'Construire un portfolio 3D immersif avec Three.js et React',
        ar: 'بناء محفظة ثلاثية الأبعاد غامرة بـ Three.js وReact',
      },
      excerpt: {
        en: 'Lessons learned from creating a visually rich portfolio that balances Three.js 3D effects with performance and accessibility.',
        fr: 'Leçons tirées de la création d\'un portfolio visuellement riche qui équilibre les effets 3D Three.js avec les performances et l\'accessibilité.',
        ar: 'الدروس المستفادة من إنشاء محفظة غنية بصريًا توازن بين تأثيرات Three.js ثلاثية الأبعاد والأداء وإمكانية الوصول.',
      },
      content: {
        en: `When I decided to build my portfolio with Three.js, I knew it had to be more than just eye candy. Here are the key decisions that shaped the result:

Lazy Loading 3D Scenes: Each Three.js scene (hero particles, contact, parallax background) is loaded with React.lazy() and wrapped in Suspense + ErrorBoundary. This means the main content renders instantly while 3D loads in the background.

Performance Budgets: On mobile, I reduce particle counts, lower the device pixel ratio, and skip the most expensive effects. The useScrollProgress hook uses requestAnimationFrame throttling to prevent scroll jank.

Accessibility First: All 3D canvases have aria-hidden="true" since they're decorative. I added prefers-reduced-motion support that disables animations entirely. Skip links let keyboard users bypass the hero section.

The Glassmorphism Design: The glass-card effect uses backdrop-filter: blur() with carefully chosen rgba backgrounds. The trick is layering multiple transparent borders to create depth without relying on heavy shadows.

Result: Lighthouse scores above 90 for performance and 100 for accessibility, while still looking visually distinctive.`,
        fr: `Quand j'ai décidé de construire mon portfolio avec Three.js, je savais qu'il devait être plus que simplement beau. Voici les décisions clés qui ont façonné le résultat :

Chargement paresseux des scènes 3D : Chaque scène Three.js est chargée avec React.lazy() et enveloppée dans Suspense + ErrorBoundary. Le contenu principal s'affiche instantanément pendant que la 3D charge en arrière-plan.

Budgets de performance : Sur mobile, je réduis le nombre de particules, diminue le ratio de pixels et saute les effets les plus coûteux. Le hook useScrollProgress utilise le throttling requestAnimationFrame.

Accessibilité d'abord : Tous les canvas 3D ont aria-hidden="true". J'ai ajouté le support prefers-reduced-motion qui désactive entièrement les animations.

Le design Glassmorphisme : L'effet carte en verre utilise backdrop-filter: blur() avec des fonds rgba soigneusement choisis.

Résultat : Scores Lighthouse supérieurs à 90 pour la performance et 100 pour l'accessibilité.`,
        ar: `عندما قررت بناء محفظتي بـ Three.js، علمت أنها يجب أن تكون أكثر من مجرد مظهر جميل. إليكم القرارات الرئيسية:

التحميل الكسول للمشاهد ثلاثية الأبعاد: يتم تحميل كل مشهد Three.js بـ React.lazy() ملفوفًا في Suspense + ErrorBoundary. المحتوى الرئيسي يظهر فورًا بينما تُحمّل الرسومات ثلاثية الأبعاد في الخلفية.

ميزانيات الأداء: على الهاتف المحمول، أقلل عدد الجسيمات وأخفض نسبة بكسل الجهاز. يستخدم hook useScrollProgress تحديد معدل requestAnimationFrame.

إمكانية الوصول أولاً: جميع لوحات canvas ثلاثية الأبعاد لديها aria-hidden="true". أضفت دعم prefers-reduced-motion الذي يعطل الرسوم المتحركة بالكامل.

تصميم Glassmorphism: يستخدم تأثير البطاقة الزجاجية backdrop-filter: blur() مع خلفيات rgba مختارة بعناية.

النتيجة: درجات Lighthouse فوق 90 للأداء و100 لإمكانية الوصول.`,
      },
      date: '2025-11-28',
      readTime: 4,
      tags: ['React', 'Three.js', 'Performance', 'A11y'],
      color: '#7c3aed',
    },
  ],
};

export default cv;
