"use client";
import React from 'react';
import { ChevronLeft, ShieldAlert, PlayCircle, ArrowRight } from 'lucide-react';

// --- IMAGE IMPORTS ---
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

// --- VIDEO IMPORTS ---
import demo1 from '../assets/Projects/Derivifai/Deriv1vid.mp4';
import demo2 from '../assets/Projects/Derivifai/Deriv2vid.mp4';

interface GalleryProps {
  onBack: () => void;
}

const DerivifaiGallery = ({ onBack }: GalleryProps) => {
  const screenshots = [
    { src: deriv2, alt: "Main Dashboard" },
    { src: deriv3, alt: "Data Entry Screen" },
    { src: deriv4, alt: "AI Analysis View" },
    { src: deriv5, alt: "Market Scanner" },
    { src: deriv6, alt: "User Settings" },
    { src: deriv7, alt: "System Logs" },
    { src: deriv8, alt: "Prediction Charts" },
    { src: deriv9, alt: "Statistics Page" },
    { src: deriv10, alt: "Algorithm Settings" },
    { src: deriv11, alt: "Live Feed" },
  ];

  const videos = [
    { src: demo1, label: "AI in Action Demo" },
    { src: demo2, label: "OpenAI Data Processing" },
  ];

  return (
    <div className="min-h-screen bg-[#A8E6A0] p-4 sm:p-8 font-mono text-[#1D3D2A] relative overflow-x-hidden">
      {/* Background CRT Effect */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,118,0.02))] bg-[length:100%_4px,4px_100%]" />

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto mb-8 pt-4 relative z-50">
        <button 
          onClick={onBack} 
          className="bg-black text-[#A8E6A0] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-pink-500 hover:text-white transition-all flex items-center gap-2 uppercase font-black text-xs"
        >
          <ChevronLeft size={16} /> Back
        </button>
      </nav>

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 relative z-10">
        <div className="bg-white border-4 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 mb-4 text-slate-400 font-black uppercase text-[10px] tracking-widest">
            <ShieldAlert size={14} className="text-pink-600" /> 
            Project Archive // Derivifai
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">Derivifai</h1>
          <div className="h-2 w-32 bg-pink-500 mb-6" />
          <p className="text-sm md:text-lg font-bold text-slate-700 italic border-l-2 md:border-l-4 border-black pl-3 md:pl-4">
            This project used the OpenAI API to help users understand complex trading data. 
            Since the website is no longer live, this page shows how the AI analyzed the market 
            and how the app looked when it was running.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* VIDEO SECTION */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-black text-[#A8E6A0] px-3 py-1 font-black uppercase text-sm italic shadow-[3px_3px_0px_0px_rgba(236,72,153,1)]">
              Demos
            </div>
            <div className="h-[1px] bg-black flex-1 opacity-20" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((vid, index) => (
              <div key={index} className="bg-black border-4 border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-pink-600 text-[10px] text-white px-2 py-1 flex justify-between font-black mb-2 uppercase">
                  <span><PlayCircle size={12} className="inline mr-1" /> Clip {index + 1}</span>
                </div>
                <video controls className="w-full aspect-video bg-slate-900">
                  <source src={vid.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </section>

        {/* SCREENSHOT SECTION - Mobile Carousel */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
                <div className="bg-black text-[#A8E6A0] px-3 py-1 font-black uppercase text-sm italic shadow-[3px_3px_0px_0px_rgba(236,72,153,1)]">
                Gallery
                </div>
                <div className="h-[1px] bg-black flex-1 opacity-20" />
            </div>
            <div className="lg:hidden flex items-center gap-2 text-[10px] font-black uppercase animate-pulse">
                Swipe <ArrowRight size={12} />
            </div>
          </div>

          <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible gap-6 pb-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {screenshots.map((img, index) => (
              <div 
                key={index} 
                className="min-w-[85%] sm:min-w-[60%] lg:min-w-full snap-center bg-black border-4 border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="bg-[#1D3D2A] text-[10px] text-[#A8E6A0] px-2 py-1 flex justify-between border-b-2 border-black font-black mb-2 uppercase">
                  <span>Img_{index + 1}</span>
                </div>
                {/* Changed aspect-square to aspect-video for landscape layout */}
                <div className="aspect-video overflow-hidden bg-slate-900">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-20 pt-10 pb-20 relative z-10 border-t-4 border-black border-dotted text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {['OpenAI', 'PHP', 'JS', 'CSS'].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white border-2 border-black font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              {tech}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default DerivifaiGallery;