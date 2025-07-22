export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
}

export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}
