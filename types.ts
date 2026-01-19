export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlight?: boolean;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer?: string; // Optional if you want to add issuer later
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  type: 'email' | 'linkedin' | 'phone' | 'github';
}