import React from 'react';
import { 
  Briefcase, 
  Code, 
  Award, 
  MapPin, 
  GraduationCap, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';

import { ThemeToggle } from './components/ThemeToggle';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Section } from './components/Section';
import { 
  PROFILE, 
  EXPERIENCE, 
  SKILLS, 
  CERTIFICATIONS, 
  PROJECTS, 
  EDUCATION, 
  SOCIAL_LINKS,
  getSocialIcon
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-apple-gray dark:bg-apple-dark transition-colors duration-300">
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
            K. Lisboa
          </a>
          <nav className="flex items-center gap-4">
             {/* Simple Desktop Nav - hidden on mobile to keep it ultra clean */}
            <div className="hidden sm:flex gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
              <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">Sobre</a>
              <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experiência</a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projetos</a>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero / About Section */}
        <Section id="about" className="fade-in-up">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                 Disponível para novos desafios
               </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Olá, eu sou o {PROFILE.name}.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light">
                {PROFILE.role}
              </p>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl">
              {PROFILE.bio}
            </p>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <MapPin size={16} />
              <span>{PROFILE.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target={link.type !== 'phone' && link.type !== 'email' ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all text-sm font-medium shadow-sm hover:shadow-md text-gray-700 dark:text-gray-200"
                >
                  {getSocialIcon(link.type)}
                  {link.label.replace('mailto:', '').replace('tel:', '').replace('https://', '')}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experiência Profissional">
          <div className="relative border-l border-gray-200 dark:border-zinc-800 ml-3 space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-gray-300 dark:bg-zinc-600 group-hover:bg-blue-500 transition-colors"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Briefcase size={16} className="text-blue-500" />
                  {job.companyUrl ? (
                    <a 
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  <span className="text-xs font-normal text-gray-400">• {job.duration}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Competências Técnicas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Tech Stack */}
             <div>
                <h3 className="flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white mb-4">
                  <Code size={20} className="text-blue-500"/>
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-transparent hover:border-gray-300 dark:hover:border-zinc-600 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
             </div>

             {/* Certifications & Education (Grouped for layout balance) */}
             <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white mb-4">
                    <Award size={20} className="text-yellow-500"/>
                    Certificações
                  </h3>
                  <ul className="space-y-3">
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert.name} className="flex flex-col">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{cert.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white mb-4">
                    <GraduationCap size={20} className="text-purple-500"/>
                    Formação
                  </h3>
                   <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{EDUCATION.institution}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{EDUCATION.degree}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{EDUCATION.period}</span>
                    </div>
                </div>
             </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projetos Destacados">
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project) => {
              const CardTag = project.link ? 'a' : 'div';
              return (
              <CardTag 
                key={project.id}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className={`group p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all hover:shadow-lg dark:hover:bg-zinc-800 block ${project.link ? 'cursor-pointer' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      <Terminal size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.highlight && (
                    <span className="px-2 py-1 text-xs font-bold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-md uppercase tracking-wider">
                      Destaque
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Visual indicator for interactivity */}
                  {project.link && (
                    <ArrowUpRight size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  )}
                </div>
              </CardTag>
            )})}
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-zinc-800 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Kadu Lisboa. Construído com leveza e precisão.</p>
        </footer>

        {/* Floating Action Button */}
        <WhatsAppButton />

      </main>
    </div>
  );
};

export default App;