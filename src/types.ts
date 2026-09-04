export type ThemeMode = 'dark-neon' | 'dark-slate' | 'light-minimal' | 'emerald-glow';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI Product Design' | 'Content Creation' | 'Prompt UX & Tools' | 'Brand & Content';
  image: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  completionYear: string;
  client?: string;
  duration?: string;
  keyFeatures: string[];
  architecture: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    iconName: string;
    tag: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Freelance' | 'Contract' | 'Studio / Contract';
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  startingPrice: string;
  features: string[];
  popular?: boolean;
}

export interface EstimatorState {
  projectType: string;
  features: string[];
  designLevel: string;
  timeline: string;
  estimatedCostMin: number;
  estimatedCostMax: number;
  estimatedDays: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
