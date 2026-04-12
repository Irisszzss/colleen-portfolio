"use client";
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) setShowScroll(true);
      else if (showScroll && window.pageYOffset <= 400) setShowScroll(false);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div 
      className={`fixed right-6 md:right-10 z-[110] transition-all duration-500 bottom-20 ${
        showScroll ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-50 pointer-events-none'
      }`}
    >
      <div className="group relative">
        {/* Cutesy Tooltip */}
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#2B2B28] text-white text-[8px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-[3px_3px_0px_0px_#c2edc5]">
          Go Up!
        </span>

        {/* The Main Button */}
        <button
          onClick={scrollToTop}
          className="bg-yellow-400 border-2 border-[#2B2B28] p-3 rounded-2xl shadow-[6px_6px_0px_0px_#2B2B28] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-white active:scale-90 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ChevronRight 
            size={24} 
            className="-rotate-90 text-[#2B2B28] stroke-[3px] group-hover:scale-125 transition-transform" 
          />
        </button>
      </div>
    </div>
  );
}