import React from 'react';

interface SectionProps {
  title?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, id, children, className = "" }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
          {title}
        </h2>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};