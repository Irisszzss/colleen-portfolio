"use client";
import { useLayoutEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldAlert, Layout, Terminal, Cpu, Code2, Monitor } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

import root1 from '../assets/Projects/RootTool/r1.png';
import root2 from '../assets/Projects/RootTool/r2.png';
import root3 from '../assets/Projects/RootTool/r3.png';
import root4 from '../assets/Projects/RootTool/r4.png';

const RootToolGallery = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { label: "Environment", tech: "Java 17+", icon: <Cpu size={14} /> },
    { label: "Language", tech: "Java / Swing", icon: <Terminal size={14} /> },
    { label: "UI", tech: "FlatLaf", icon: <Layout size={14} /> },
    { label: "Build", tech: "Maven", icon: <Code2 size={14} /> },
  ];

  const screenshots = [
    { src: root1, alt: "S1" },
    { src: root2, alt: "S2" },
    { src: root3, alt: "S3" },
    { src: root4, alt: "S4" },
  ];

  return (
    <>
      <div className="min-h-screen bg-[color:var(--bg-color)] p-6 sm:p-10 font-poppins text-[color:var(--text-color)] selection:bg-[#2B2B28] selection:text-white">
        
        {/* NAVIGATION */}
        <nav className="max-w-6xl mx-auto mb-8 mt-6">
          <button 
            onClick={() => navigate('/#projects')}
            className="bg-[color:var(--card-bg)] text-[color:var(--text-color)] px-5 py-2.5 border-2 border-[color:var(--card-border)] rounded-xl shadow-[4px_4px_0px_0px_var(--card-shadow)] hover:bg-yellow-400 dark:hover:bg-blue-600 hover:shadow-none active:translate-y-1 transition-all flex items-center gap-2 uppercase font-black text-[10px] tracking-widest"
          >
            <ChevronLeft size={16} /> Back
          </button>
        </nav>

        {/* HEADER */}
        <header className="max-w-6xl mx-auto mb-12">
          <div className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-8 shadow-[6px_6px_0px_0px_var(--card-shadow)] hover:shadow-none transition-all duration-300">
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-black uppercase text-[9px] tracking-widest">
              <ShieldAlert size={14} /> System_File // RootTool
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none text-[color:var(--text-color)]">
              RootTool<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xs md:text-sm font-medium text-[color:var(--text-color)]/80 italic border-l-4 border-blue-600 pl-4 max-w-2xl">
            A numerical methods application built with Java and Java Swing, featuring a custom-engineered UI focused on dynamic matrix operations and data visualization.
            </p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto space-y-12">
          {/* ARCHITECTURE GRID */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600 font-black uppercase text-[10px] tracking-widest">
              <Code2 size={16} /> Architecture
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((item, i) => (
                <div key={i} className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-2xl p-4 shadow-[4px_4px_0px_0px_var(--card-shadow)] flex flex-col gap-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-none">
                  <div className="flex items-center gap-2 text-blue-600 uppercase font-black text-[8px] tracking-tighter">
                    {item.icon} {item.label}
                  </div>
                  <span className="text-xs md:text-sm font-bold uppercase truncate">{item.tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SCREENSHOT GRID */}
            <section className="space-y-6 pb-12">
            <div className="flex items-center gap-3 text-yellow-600 font-black uppercase text-[10px] tracking-widest">
                <Monitor size={16} /> Screenshots
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((img, i) => (
                <div 
                    key={i} 
                    className="group relative bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-2 shadow-[6px_6px_0px_0px_var(--card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_var(--card-shadow)]"
                >
                    {/* Removed aspect-[16/10] and changed bg to a subtle neutral to handle different image sizes */}
                    <div className="relative rounded-[18px] overflow-hidden border-2 border-[color:var(--card-border)] bg-[#1a1a1a] flex items-center justify-center">
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        /* Changed object-cover to object-contain to ensure the full image is visible */
                        className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 ease-in-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                </div>
                ))}
            </div>
            </section>
        </main>
        
        <ScrollToTop />
      </div>
    </>
  );
};

export default RootToolGallery;