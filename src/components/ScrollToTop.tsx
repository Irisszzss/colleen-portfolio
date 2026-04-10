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
    <button
      onClick={scrollToTop}
      className={`fixed right-6 md:right-8 z-[110] flex flex-col items-center gap-1 transition-all duration-300 ${
        showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } bottom-24 md:bottom-8`}
    >
      <div className="bg-pink-500 border-2 md:border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-[#FFFF00]">
        <ChevronRight size={24} className="-rotate-90 text-black stroke-[3px]" />
      </div>
    </button>
  );
}