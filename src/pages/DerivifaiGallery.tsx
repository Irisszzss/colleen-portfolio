"use client";
import { useLayoutEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ChevronLeft, ShieldAlert, Layout, Video, Terminal, Cpu, Code2, Globe } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';

// --- IMAGE ASSET IMPORTS ---
import deriv2 from '../assets/Projects/Derivifai/deriv2.png';
import deriv3 from '../assets/Projects/Derivifai/deriv3.png';
import deriv4 from '../assets/Projects/Derivifai/deriv4.png';
import deriv5 from '../assets/Projects/Derivifai/deriv5.png';
import deriv6 from '../assets/Projects/Derivifai/deriv6.png';
import deriv7 from '../assets/Projects/Derivifai/deriv7.png';
import deriv8 from '../assets/Projects/Derivifai/deriv8.png';
import deriv9 from '../assets/Projects/Derivifai/deriv9.png';
import deriv10 from '../assets/Projects/Derivifai/deriv10.png';
import deriv11 from '../assets/Projects/Derivifai/deriv11.png';

// --- VIDEO ASSET IMPORTS ---
import demo1 from '../assets/Projects/Derivifai/Deriv1vid.mp4';
import demo2 from '../assets/Projects/Derivifai/Deriv2vid.mp4';

const DerivifaiGallery = () => {
  const navigate = useNavigate(); // Initialize the router navigation

  // Automatically scroll to top synchronously before the user sees the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { label: "Backend", tech: "PHP", icon: <Terminal size={14} /> },
    { label: "AI Engine", tech: "OpenAI API", icon: <Cpu size={14} /> },
    { label: "Frontend", tech: "HTML5 / CSS3", icon: <Globe size={14} /> },
    { label: "Logic", tech: "JavaScript", icon: <Code2 size={14} /> },
  ];

  const screenshots = [
    { src: deriv2, alt: "Dashboard" }, { src: deriv3, alt: "Entry" },
    { src: deriv4, alt: "AI View" }, { src: deriv5, alt: "Scanner" },
    { src: deriv6, alt: "Settings" }, { src: deriv7, alt: "Logs" },
    { src: deriv8, alt: "Charts" }, { src: deriv9, alt: "Stats" },
    { src: deriv10, alt: "Algo" }, { src: deriv11, alt: "Feed" },
  ];

  const videos = [
    { src: demo1, label: "AI Demo" },
    { src: demo2, label: "Data Proc" },
  ];

  return (
    <>
      {/* Navbar sits at the top level */}
      <Navbar />

      <div className="min-h-screen bg-[color:var(--bg-color)] p-6 sm:p-10 font-poppins text-[color:var(--text-color)] selection:bg-[#2B2B28] selection:text-white">
        
        {/* BACK BUTTON - Updated to use React Router navigate */}
        <nav className="max-w-6xl mx-auto mb-8 mt-20">
          <button 
            onClick={() => navigate('/')} // Navigates back to your home/portfolio route
            className="bg-[color:var(--card-bg)] text-[color:var(--text-color)] px-5 py-2.5 border-2 border-[color:var(--card-border)] rounded-xl shadow-[4px_4px_0px_0px_var(--card-shadow)] hover:bg-yellow-400 dark:hover:bg-purple-600 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 uppercase font-black text-[10px] tracking-widest"
          >
            <ChevronLeft size={16} /> Back
          </button>
        </nav>

        {/* HEADER BENTO */}
        <header className="max-w-6xl mx-auto mb-12">
          <div className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-8 shadow-[6px_6px_0px_0px_var(--card-shadow)]">
            <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-purple-400 font-black uppercase text-[9px] tracking-widest">
              <ShieldAlert size={14} /> 
              Project Archive // Derivifai
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none text-[color:var(--text-color)]">
              Derivifai<span className="text-blue-600 dark:text-purple-500">.</span>
            </h1>
            <p className="text-xs md:text-sm font-medium text-[color:var(--text-color)]/80 italic border-l-4 border-yellow-400 pl-4 max-w-2xl">
              An OpenAI-powered calculus engine built with PHP and JavaScript. While the site is inactive, this gallery documents the UI and the tool's ability to solve complex derivatives using AI.
            </p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto space-y-12">
          
          {/* TECH STACK SECTION */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-black uppercase text-[10px] tracking-widest">
              <Code2 size={16} /> Tech Stack
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((item, i) => (
                <div key={i} className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-2xl p-4 shadow-[4px_4px_0px_0px_var(--card-shadow)] flex flex-col gap-1 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-purple-400 uppercase font-black text-[8px] tracking-tighter">
                    {item.icon} {item.label}
                  </div>
                  <span className="text-xs md:text-sm font-bold uppercase truncate">{item.tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* VIDEOS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600 dark:text-purple-400 font-black uppercase text-[10px] tracking-widest">
              <Video size={16} /> Videos
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {videos.map((vid, i) => (
                <div key={i} className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-2 shadow-[6px_6px_0px_0px_var(--card-shadow)]">
                  <div className="rounded-[18px] overflow-hidden border-2 border-[color:var(--card-border)] aspect-video bg-black">
                    <video controls className="w-full h-full"><source src={vid.src} type="video/mp4" /></video>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SCREENSHOTS */}
          <section className="space-y-6 pb-12">
            <div className="flex items-center gap-3 text-yellow-600 dark:text-yellow-400 font-black uppercase text-[10px] tracking-widest">
              <Layout size={16} /> UI Screenshots
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((img, i) => (
                <div key={i} className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-2 shadow-[6px_6px_0px_0px_var(--card-shadow)] group transition-all hover:-translate-y-1">
                  <div className="aspect-video rounded-[18px] overflow-hidden border-2 border-[color:var(--card-border)] bg-[color:var(--card-bg)]">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
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

export default DerivifaiGallery;