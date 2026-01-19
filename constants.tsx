import { Experience, Project, Education, Certification, SocialLink } from './types';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';
import React from 'react';

export const PROFILE = {
  name: "Kadu Lisboa",
  role: "Software Engineer",
  location: "Itu, SP",
  bio: "Engenheiro de Software com mais de 4 anos de experiência em sistemas críticos e soluções web. Especialista em resolver problemas complexos com simplicidade e elegância técnica. Apaixonado por construir software robusto que impacta positivamente a vida das pessoas.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "kadulisboa301@icloud.com", href: "mailto:kadulisboa301@icloud.com", type: 'email' },
  { label: "linkedin.com/in/kadulisboa", href: "https://linkedin.com/in/kadulisboa", type: 'linkedin' },
  { label: "github.com/kadulisboa", href: "https://github.com/kadulisboa", type: 'github' },
  { label: "+55 (11) 94286-7792", href: "tel:+5511942867792", type: 'phone' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'jd',
    role: "Junior Software Engineer",
    company: "Banco John Deere",
    period: "Jun 2021 - Presente",
    duration: "4 anos 8 meses",
    description: "Atuação no desenvolvimento e manutenção de sistemas críticos de crédito do Banco John Deere. Foco em otimização de performance back-end, integração de sistemas complexos e garantia de alta disponibilidade para operações financeiras globais."
  },
  {
    id: 'lisboatech',
    role: "Founder & Full Stack Engineer",
    company: "Lisboa Tech",
    companyUrl: "https://lisboatech.com.br",
    period: "Jan 2022 - Presente",
    duration: "Projetos Sob Demanda",
    description: "Empreendimento focado em soluções digitais para o mercado imobiliário e construção civil. Desenvolvimento de sites institucionais e sistemas de backoffice personalizados para construtoras e imobiliárias. Responsável pela idealização e construção do ObraLog, uma solução SaaS nascida para resolver gargalos reais de comunicação e gestão de obras."
  },
  {
    id: 'genia',
    role: "Desenvolvedor Web",
    company: "Agência Gênia",
    period: "Out 2017 - Mai 2021",
    duration: "3 anos 8 meses",
    description: "Desenvolvimento full-stack de soluções web customizadas, lojas virtuais e sites institucionais. Implementação de estratégias de SEO on-page e otimização de performance para clientes de diversos segmentos."
  }
];

export const EDUCATION: Education = {
  institution: "Fatec Itu",
  degree: "Análise e Desenvolvimento de Sistemas",
  period: "2019 - 2021"
};

export const SKILLS = [
  "Java (Spring)",
  "PHP",
  "Laravel",
  "JavaScript (Node.js)",
  "React / Frontend",
  "AWS",
  "Terraform",
  "Docker",
  "GitHub Actions",
  "Oracle",
  "SQL",
  "API REST",
  "Jira",
  "Git"
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Docker", description: "Criação, gerenciamento e orquestração de containers para ambientes escaláveis." },
  { name: "SEO", description: "Otimização técnica de sites para motores de busca e performance web." }
];

export const PROJECTS: Project[] = [
  {
    id: 'obralog',
    title: "ObraLog",
    description: "Sistema robusto de backup e gerenciamento de mensagens do WhatsApp. Desenvolvido para garantir a integridade e recuperação de dados de comunicação empresarial.",
    techStack: ["Java", "Spring Boot", "Database Management"],
    highlight: true,
    link: "https://obralog.lisboatech.com.br"
  }
];

// Helper to map social type to icon
export const getSocialIcon = (type: SocialLink['type']) => {
    switch(type) {
        case 'email': return <Mail size={18} />;
        case 'linkedin': return <Linkedin size={18} />;
        case 'phone': return <Phone size={18} />;
        case 'github': return <Github size={18} />;
        default: return <Mail size={18} />;
    }
};