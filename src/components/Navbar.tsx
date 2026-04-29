"use client";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Terminal, Moon, Sun } from 'lucide-react'; 

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  const navItems = [
    { label: 'Profile', href: '/#about', id: 'about' },
    { label: 'Stack', href: '/#stack', id: 'stack' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Academic', href: '/#edu', id: 'edu' },
  ];

  // --- THEME ---
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  // --- SCROLL TRACKING (HIGH SENSITIVITY) ---
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveSection(item.id);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('/#', '');
    if (location.pathname !== '/') return; 

    e.preventDefault();
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 100; 
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(targetId);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[150] px-4 pt-4 pointer-events-none font-poppins">
        <nav className="max-w-5xl mx-auto flex justify-between items-center bg-[var(--card-bg)] border-[2.5px] border-[var(--card-border)] pointer-events-auto h-14 overflow-hidden shadow-[5px_5px_0px_0px_var(--card-shadow)] transition-all duration-300">
          
          <div className="h-full px-5 flex items-center border-r-[2.5px] border-[var(--card-border)] bg-yellow-400 dark:bg-purple-600">
            <Terminal size={18} strokeWidth={3} className="text-black dark:text-white" />
          </div>

          <div className="flex-1 h-full hidden md:flex items-stretch bg-neutral-100 dark:bg-neutral-800/30">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex-1 flex items-center justify-center text-[10px] font-black uppercase tracking-widest transition-all border-r-[2.5px] last:border-r-0 border-[var(--card-border)] group
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-[inset_0_4px_0_rgba(0,0,0,0.2)]' 
                      : 'bg-[var(--card-bg)] text-[var(--text-color)] hover:bg-yellow-400/20 dark:hover:bg-purple-600/20'}
                  `}
                >
                  <span className={isActive ? 'scale-110' : 'group-hover:translate-y-[-1px] transition-transform'}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          <button
            onClick={toggleTheme}
            className="h-full px-6 border-l-[2.5px] border-[var(--card-border)] flex items-center justify-center transition-colors hover:bg-pink-400 dark:hover:bg-pink-500 group"
          >
            {theme === 'dark' ? 
              <Sun size={18} className="text-[var(--text-color)] group-hover:text-black transition-colors" /> : 
              <Moon size={18} className="text-[var(--text-color)] group-hover:text-black transition-colors" />
            }
          </button>
        </nav>
      </header>

      <div className="fixed bottom-6 left-0 w-full z-[150] px-6 md:hidden">
        <nav className="max-w-xs mx-auto flex bg-[var(--card-bg)] border-[2.5px] border-[var(--card-border)] shadow-[5px_5px_0px_0px_var(--card-shadow)] overflow-hidden rounded-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex-1 py-3 text-center text-[8px] font-black uppercase tracking-tighter border-r-[2.5px] last:border-r-0 border-[var(--card-border)] transition-all
                  ${isActive 
                    ? 'bg-blue-600 text-white ring-inset ring-2 ring-black/10' 
                    : 'text-[var(--text-color)] active:bg-pink-400'}`}
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