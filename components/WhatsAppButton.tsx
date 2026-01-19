import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react'; // Using Lucide icon for cleaner look if available, otherwise sticking to SVG

export const WhatsAppButton: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show the bubble after 2.5 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Message Bubble Wrapper */}
      <div 
        className={`
          pointer-events-auto
          mb-3 mr-1
          transform transition-all duration-500 ease-out origin-bottom-right
          ${showBubble ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 px-5 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 max-w-[220px]">
          <p className="text-sm font-medium leading-relaxed">
            Olá! 👋 <br/>
            Vamos conversar sobre seu projeto?
          </p>
          
          {/* Close button (optional interaction, appearing on hover) */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              setShowBubble(false);
            }}
            className={`absolute -top-2 -left-2 bg-gray-200 dark:bg-zinc-700 rounded-full p-1 text-xs text-gray-500 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          {/* The "Tail" pointing to the button */}
          <div className="absolute -bottom-[6px] right-5 w-4 h-4 bg-white dark:bg-zinc-800 transform rotate-45 border-r border-b border-gray-100 dark:border-zinc-700"></div>
        </div>
      </div>

      {/* Minimalist Floating Action Button */}
      <a
        href="https://wa.me/5511942867792"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Conversar no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};