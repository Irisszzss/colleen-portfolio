"use client";
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Terminal, Cat, Sparkles } from 'lucide-react'; 

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const observer = useRef<IntersectionObserver | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const navItems = [
    { label: 'Profile', href: '/#about', id: 'about' },
    { label: 'Stack', href: '/#stack', id: 'stack' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Academic', href: '/#edu', id: 'edu' },
  ];

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
             setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -40% 0px', threshold: 0.1 } 
    );
    
    navItems.forEach((item) => {
      const targetId = item.href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) observer.current?.observe(el);
    });
    
    return () => observer.current?.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('/#', '');
    const isHomePage = location.pathname === '/';

    if (!isHomePage) {
      // If not on home, let the Link navigate naturally
      return; 
    }

    e.preventDefault();
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 90 : 130; 
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without reload
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[150] px-4 md:px-8 pt-4 md:pt-6 pointer-events-none">
        <nav className="max-w-5xl mx-auto flex justify-between items-center bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] shadow-[6px_6px_0px_0px_var(--card-shadow)] rounded-2xl h-[60px] md:h-[70px] pointer-events-auto overflow-hidden transition-all duration-500">
          <div className="flex items-center gap-3 h-full px-4 border-r-2 border-[color:var(--card-border)] bg-[color:var(--card-bg)] group cursor-default">
            <div className="w-9 h-9 bg-yellow-400 dark:bg-purple-600 border-2 border-[color:var(--card-border)] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_var(--card-shadow)] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
              <Terminal size={18} strokeWidth={3} className="text-[color:var(--text-color)]" />
            </div>
            <h1 className="hidden sm:block text-sm md:text-base font-black uppercase text-[color:var(--text-color)] tracking-tight">
              Colleen <span className="text-blue-600 dark:text-purple-400">Jones</span>
            </h1>
          </div>

          <div className="hidden md:flex h-full flex-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex-1 flex flex-col items-center justify-center transition-all duration-300 relative group
                    ${isActive ? 'bg-blue-600 dark:bg-purple-700 text-white' : 'hover:bg-yellow-400/80 dark:hover:bg-purple-600/50 text-[color:var(--text-color)]'}
                  `}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest z-10">{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-2 flex gap-1">
                       <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                       <Sparkles size={10} className="text-yellow-300 animate-pulse" />
                    </div>
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 px-5 bg-transparent border-l-2 border-[color:var(--card-border)] h-full">
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 cursor-pointer ${theme === 'dark' ? 'bg-purple-600 border-purple-400 shadow-[0px_0px_15px_rgba(168,85,247,0.6)]' : 'bg-white border-[#2B2B28] shadow-[4px_4px_0px_0px_#2B2B28] hover:translate-x-1 hover:translate-y-1 hover:shadow-none'}`}
            >
              <Cat size={22} className={theme === 'dark' ? "text-white fill-purple-700" : "text-[#2B2B28] fill-yellow-400/70"} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <div className="fixed bottom-6 left-0 w-full z-[150] px-6 md:hidden pointer-events-none">
        <nav className="max-w-sm mx-auto flex bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] p-1 rounded-2xl shadow-[6px_6px_0px_0px_var(--card-shadow)] pointer-events-auto overflow-hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex-1 text-center py-3 rounded-xl font-black text-[9px] uppercase transition-all duration-300 ${isActive ? 'bg-blue-600 dark:bg-purple-700 text-white shadow-[3px_3px_0px_0px_var(--card-shadow)] -translate-y-1' : 'text-[color:var(--text-color)] opacity-60'}`}
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