export interface LocalizedString {
  en: string;
  fr: string;
  ar: string;
}

export interface Status {
  text: LocalizedString;
  available: boolean;
}

export interface Stat {
  label: LocalizedString;
  value: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: LocalizedString;
  color: string;
  items: SkillItem[];
}

export interface Experience {
  role: LocalizedString;
  company: string;
  period: string;
  description: LocalizedString;
}

export interface Education {
  degree: LocalizedString;
  school: string;
  period: string;
  description: LocalizedString;
}

export interface Achievement {
  title: LocalizedString;
  event: string;
  year: string;
  description: LocalizedString;
  icon: string;
}

export interface Attestation {
  title: LocalizedString;
  image: string;
}

export interface Project {
  title: LocalizedString;
  description: LocalizedString;
  tech: string[];
  link: string;
  demo: string;
  color: string;
  features: LocalizedString[];
  challenges: LocalizedString;
  architecture: LocalizedString;
  images: string[];
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  date: string;
  readTime: number;
  tags: string[];
  color: string;
}

export interface Testimonial {
  name: string;
  role: LocalizedString;
  quote: LocalizedString;
  avatar: string;
  relationship: LocalizedString;
}

export interface CV {
  name: string;
  title: LocalizedString;
  email: string;
  github: string;
  linkedin: string;
  status: Status;
  bio: LocalizedString;
  stats: Stat[];
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  attestations: Attestation[];
  projects: Project[];
  blog: BlogPost[];
  testimonials: Testimonial[];
}
