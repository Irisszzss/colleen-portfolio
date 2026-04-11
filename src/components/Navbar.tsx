"use client";
import { useState, useEffect, useRef } from 'react';
import { Terminal, Activity } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const observer = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { label: 'Profile', href: '#about', id: 'about' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Credentials', href: '#edu', id: 'edu' },
  ];

  useEffect(() => {
    // 1. Handle Scroll Fallback (Fixes mobile sticking at top)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('about');
      }
    };

    // 2. Intersection Observer Logic
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Use a smaller intersection ratio for mobile reliability
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // rootMargin ignores the very top/bottom to focus on the center "reading zone"
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.5] 
      }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.current?.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-3 md:px-8 pt-4 md:pt-6">
        <nav className="max-w-5xl mx-auto flex justify-between items-center bg-[#1D3D2A]/95 backdrop-blur-md text-[#A8E6A0] border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono h-[56px] md:h-[64px] overflow-hidden">
          
          {/* BRANDING */}
          <div className="flex items-center gap-3 h-full px-4 border-r-2 md:border-r-4 border-black bg-black/20 group">
            <div className="w-8 h-8 bg-pink-500 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-3 transition-transform">
              <Terminal size={16} strokeWidth={3} className="text-black" />
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-[13px] md:text-lg font-black uppercase tracking-tight text-white">
                Colleen <span className="text-pink-500">Jones</span>
              </h1>
              <span className="text-[7px] md:text-[9px] font-black opacity-50 uppercase tracking-[0.2em]">Computer_Engineer</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex h-full items-stretch flex-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id}
                  href={item.href}
                  onClick={() => handleClick(item.id)}
                  className={`flex-1 flex items-center justify-center border-r-2 border-black/10 transition-all duration-200 relative group
                    ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-[#A8E6A0] hover:text-[#1D3D2A]'}
                  `}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1 h-1/2 bg-white transition-all" />
                  )}
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 h-full px-4 md:px-6 border-l-2 md:border-l-4 border-black bg-black/30">
            <Activity size={18} className="text-pink-500 animate-pulse" />
          </div>
        </nav>
      </header>

      {/* MOBILE NAV DOCK */}
      <div className="fixed bottom-6 left-0 w-full z-[100] px-6 md:hidden">
        <nav className="max-w-md mx-auto flex justify-around items-center bg-[#1D3D2A] border-2 border-black p-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id}
                href={item.href} 
                onClick={() => handleClick(item.id)}
                className={`flex-1 text-center py-2 font-black text-[10px] uppercase transition-colors
                  ${isActive ? 'bg-pink-500 text-white' : 'text-[#A8E6A0]'}
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}