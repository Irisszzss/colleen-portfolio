"use client";
import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center font-mono text-[#A8E6A0] p-4 md:p-6 overflow-hidden">
      
      {/* CRT SCANLINE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[size:100%_2px,3px_100%]" />

      {/* --- HEADER --- */}
      <div className="mb-8 md:mb-12 flex flex-col items-center gap-2 text-center w-full max-w-[90vw]">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping" />
          <div className="text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-50 text-white">
            Secure Boot Sequence
          </div>
        </div>
        {/* Adjusted text size for mobile and allowed word breaking for long names */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tighter break-words w-full">
          Establishing<span className="text-white block sm:inline">_COLLEEN_JONES</span><span className="text-pink-500">.EXE</span>
        </h2>
      </div>

      {/* --- PROGRESS BAR --- */}
      <div className="relative group w-full flex flex-col items-center">
        {/* Changed w-64 to w-full with a max-width for responsiveness */}
        <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-md h-8 md:h-10 border-2 md:border-4 border-[#A8E6A0] p-1 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] md:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] bg-black">
          <div 
            className="h-full bg-[#A8E6A0] transition-all duration-300 ease-out relative overflow-hidden" 
            style={{ 
                width: `${progress}%`,
                backgroundImage: 'linear-gradient(90deg, transparent 80%, #000 80%)',
                backgroundSize: '12px 100%' // Adjusted block size for better fit
            }} 
          />
        </div>
        
        {/* DYNAMIC COUNTER - Positioned relative to the bar container */}
        <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-md flex justify-between mt-2">
          <div className="text-[9px] md:text-[10px] font-black text-white/20 italic tracking-widest">
            {progress === 100 ? "CORE_READY" : "EXECUTING..."}
          </div>
          <div className="text-[9px] md:text-[10px] font-black text-pink-500 italic">
            LOAD_STATE: {progress}%
          </div>
        </div>
      </div>

      {/* --- STATUS TERMINAL --- */}
      <div className="mt-16 md:mt-12 flex flex-col items-center overflow-hidden h-5 w-full max-w-[280px] md:max-w-[320px]">
        <div className="text-[9px] md:text-[11px] uppercase font-bold tracking-[0.1em] md:tracking-[0.2em] animate-[status_5s_infinite] flex flex-col items-center w-full">
          <span className="h-5 flex items-center justify-center whitespace-nowrap text-white/40">
            [0x00F1] Decrypting Manifest... OK
          </span>
          <span className="h-5 flex items-center justify-center whitespace-nowrap text-pink-500">
            Mounting Virtual Environment...
          </span>
          <span className="h-5 flex items-center justify-center whitespace-nowrap text-[#A8E6A0]">
            Optimizing Interface Assets...
          </span>
          <span className="h-5 flex items-center justify-center whitespace-nowrap font-black">
            Authentication Verified.
          </span>
        </div>
      </div>

      <style>{`
        @keyframes status {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-20px); }
          50%, 70% { transform: translateY(-40px); }
          75%, 95% { transform: translateY(-60px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}