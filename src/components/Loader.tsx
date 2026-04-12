"use client";
import { useState, useEffect } from 'react';
import { Cpu, Sparkles, Star, Heart } from 'lucide-react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Fetching_Magic");

  const cutesyStatuses = [
    "Fetching_Magic",
    "Polishing_Pixels",
    "Loading_Vibes",
    "Syncing_Colors",
    "Finalizing_Sparkles"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + (Math.floor(Math.random() * 12) + 4), 100);
      });
    }, 250);

    const statusInterval = setInterval(() => {
      setStatus(cutesyStatuses[Math.floor(Math.random() * cutesyStatuses.length)]);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-[color:var(--bg-color)] text-[color:var(--text-color)] flex flex-col items-center justify-center font-poppins overflow-hidden transition-colors duration-500">
      
      {/* FLOATING SPARKLES (GLITTER) */}
      <Sparkles className="absolute top-1/4 left-1/4 text-yellow-400 dark:text-yellow-300 opacity-30 animate-pulse" size={40} />
      <Star className="absolute bottom-1/4 right-1/4 text-blue-500 dark:text-cyan-300 opacity-20 animate-bounce" size={32} />
      <Heart className="absolute top-1/3 right-10 text-pink-500 dark:text-fuchsia-300 opacity-20 rotate-12" size={24} />

      {/* ICON STICKER */}
      <div className="relative mb-10">
        <div className="w-16 h-16 bg-yellow-400 dark:bg-purple-600 border-2 border-[color:var(--card-border)] rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_var(--card-shadow)] animate-bounce">
          <Cpu size={32} className="text-[#2B2B28] dark:text-white" />
        </div>
        
        {/* DECORATIVE POPS */}
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-2 border-[color:var(--card-border)] flex items-center justify-center shadow-[2px_2px_0px_0px_var(--card-shadow)]">
          <Star size={10} className="text-white fill-white" />
        </div>
        <div className="absolute -bottom-2 -left-6 w-4 h-4 rounded-full bg-[color:var(--card-bg)] dark:bg-purple-400 border-2 border-[color:var(--card-border)] shadow-[2px_2px_0px_0px_var(--card-shadow)]" />
      </div>

      {/* TYPOGRAPHY */}
      <div className="text-center space-y-6 w-full max-w-xs px-4">
        <div className="space-y-1.5 text-[color:var(--text-color)]">
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Almost <span className="text-blue-600 dark:text-purple-400">There!</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase opacity-50 tracking-[0.2em] text-[color:var(--text-color)]">
              <Sparkles size={12} className="text-yellow-500 dark:text-yellow-300 animate-spin" /> {status}
            </div>
          </div>
        </div>

        {/* NEO-BRUTALIST PROGRESS BAR */}
        <div className="relative pt-2">
          <div className="h-5 w-full bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_var(--card-shadow)]">
            <div 
              className="h-full bg-blue-600 dark:bg-purple-500 transition-all duration-500 ease-out border-r-2 border-[color:var(--card-border)]" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          {/* PERCENTAGE TAG */}
          <div className="absolute -right-2 -top-4 bg-yellow-400 dark:bg-purple-600 border-2 border-[color:var(--card-border)] px-2 py-0.5 rounded-lg shadow-[3px_3px_0px_0px_var(--card-shadow)] -rotate-6">
             <span className="text-[10px] font-black text-[#2B2B28] dark:text-white">
              {progress}%
            </span>
          </div>
        </div>

        {/* MINI DOCK STATUS */}
        <div className="flex justify-center items-center gap-2 py-2">
           {[...Array(5)].map((_, i) => (
             <div 
               key={i} 
               className={`w-2.5 h-2.5 rounded-full border-2 border-[color:var(--card-border)] transition-all duration-300 ${
                 progress >= (i + 1) * 20 
                   ? 'bg-blue-600 dark:bg-purple-400 scale-125 shadow-[1px_1px_0px_0px_var(--card-shadow)]' 
                   : 'bg-[color:var(--card-bg)]'
               }`} 
             />
           ))}
        </div>
      </div>
    </div>
  );
}