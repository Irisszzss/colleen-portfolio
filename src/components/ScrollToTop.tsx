"use client";
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) setShowScroll(true);
      else if (showScroll && window.scrollY <= 400) setShowScroll(false);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div 
      className={`fixed right-6 md:right-10 z-[110] transition-all duration-500 bottom-36 md:bottom-20 
        ${
          showScroll ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        }`}
    >
      <div className="group relative">
        {/* Tooltip - Using CSS variables for theme switching */}
        <span 
          style={{ 
            backgroundColor: 'var(--text-color)', 
            color: 'var(--bg-color)' 
          }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[8px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-[2px_2px_0px_0px_#4ade80]"
        >
          Go Up!
        </span>

        {/* The Main Button - Tied to your Nuclear Fix CSS variables */}
        <button
          onClick={scrollToTop}
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)',
            boxShadow: '4px 4px 0px 0px var(--card-shadow)'
          }}
          className="p-2.5 md:p-3 border-2 rounded-xl md:rounded-2xl hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-90 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronRight 
            size={22} 
            style={{ color: 'var(--text-color)' }}
            className="-rotate-90 stroke-[3px] group-hover:scale-110 transition-transform" 
          />
        </button>
      </div>
    </div>
  );
}