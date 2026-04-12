"use client";
import { useLayoutEffect } from 'react'; 
import { ChevronLeft, ShieldAlert, Layout, Video } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

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

interface GalleryProps {
  onBack: () => void;
}

const DerivifaiGallery = ({ onBack }: GalleryProps) => {
  // FIXED: Automatically scroll to top synchronously before the user sees the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-[color:var(--bg-color)] p-6 sm:p-10 font-poppins text-[color:var(--text-color)] selection:bg-[#2B2B28] selection:text-white">
      
      {/* SIMPLE BACK BUTTON */}
      <nav className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={onBack} 
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
            Project_Archive // Derivifai
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none text-[color:var(--text-color)]">
            Derivifai<span className="text-blue-600 dark:text-purple-500">.</span>
          </h1>
          <p className="text-xs md:text-sm font-medium text-[color:var(--text-color)]/80 italic border-l-4 border-yellow-400 pl-4 max-w-2xl">
            OpenAI-powered market analysis tool. Website inactive; gallery serves as interface documentation.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        
        {/* VIDEOS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-blue-600 dark:text-purple-400 font-black uppercase text-[10px] tracking-widest">
            <Video size={16} /> Video_Artifacts
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
            <Layout size={16} /> UI_Screenshots
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
  );
};

export default DerivifaiGallery;