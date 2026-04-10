"use client";
import { useState } from 'react';
import { Terminal, ChevronRight, ShieldCheck } from 'lucide-react';

type Award = {
  id: string;
  title: string;
  issuer: string;
  date: string;
};

type EducationEntry = {
  eduId: string;
  school: string;
  logo?: string;
  degree: string;
  year: string;
  progress?: number;
  awards?: Award[];
};

export default function EducationCard({ edu }: { edu: EducationEntry }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pop-reveal reveal-left max-w-4xl mx-auto mb-10 px-2 sm:px-0">
      <div className="group bg-white border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
        
        {/* TOP BAR - Responsive text scaling */}
        <div className="bg-black text-[#A8E6A0] px-3 sm:px-4 py-1.5 flex justify-between items-center border-b-2 border-black text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full animate-pulse" />
            <span className="truncate max-w-37.5 sm:max-w-none">NODE_ID: {edu.eduId}</span>
          </div>
          <span className="hidden xs:block">Verified_Credential</span>
        </div>

        {/* CONTENT AREA - Swaps from column (mobile) to row (tablet+) */}
        <div className="p-4 sm:p-5 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
          
          {/* LOGO CONTAINER - Centered on mobile */}
          <div className="shrink-0 relative">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFFFED] border-2 sm:border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] group-hover:rotate-3 transition-transform relative overflow-hidden">
              {edu.logo ? (
                <div className="w-full h-full p-2 relative z-10">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.school} logo`} 
                    className="w-full h-full object-contain group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_3px)] pointer-events-none" />
                </div>
              ) : (
                <ShieldCheck size={40} className="text-black relative z-10" />
              )}
              <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_0)] bg-size-[4px_4px] opacity-10" />
            </div>
          </div>

          {/* TEXT AREA - Centered text on mobile, left-aligned on tablet+ */}
          <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left w-full">
            <div>
              <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight group-hover:text-pink-600 transition-colors">
                {edu.school === "BulSU" ? "Bulacan State University" : edu.school}
              </h4>
            </div>
            
            <div className="space-y-1">
              <h5 className="text-xs sm:text-sm md:text-base font-black uppercase text-black/80 leading-snug">
                {edu.degree}
              </h5>
              <p className="text-[10px] sm:text-[11px] font-bold opacity-60 italic leading-tight max-w-xl mx-auto sm:mx-0">
                // Timeline: {edu.year}
              </p>
            </div>

            {/* PROGRESSION BAR */}
            <div className="pt-3 sm:pt-4 border-t border-black/10">
              <div className="flex justify-between items-end mb-2 text-[9px] sm:text-[10px] font-black uppercase tracking-tighter">
                <span>System_Progression</span>
                <span className="text-pink-600">Status: {edu.progress && edu.progress < 100 ? `${edu.progress}% In Progress` : 'Completed'}</span>
              </div>
              <div className="h-3 sm:h-4 bg-black/5 border-2 border-black relative overflow-hidden">
                <div className="h-full bg-black" style={{ width: `${edu.progress ?? 100}%` }}>
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,#A8E6A0_50%,transparent_100%)] bg-size-[200%_100%] animate-[scan_3s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AWARDS SECTION - Adjusted connector line and layout for small screens */}
      {edu.awards && edu.awards.length > 0 && (
        <div className="mt-4 relative pl-4 sm:pl-6 md:pl-8">
          {/* Connector line - Hidden on very small screens if necessary, or kept for style */}
          <div className="absolute left-0 -top-6 bottom-0 w-0.5 bg-black/20 border-l-2 border-dashed border-black/30 ml-px sm:ml-0.5" />

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between bg-black text-[#A8E6A0] px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(236,72,153,1)] sm:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group relative"
          >
            {/* Visual Indicator Line */}
            <div className="absolute -left-4 sm:-left-6 md:-left-8 top-1/2 w-4 sm:w-6 md:w-8 h-0.5 bg-black/20" />
            
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-tight sm:tracking-[0.15em] flex items-center gap-2 sm:gap-3 truncate pr-2">
              <ShieldCheck 
                size={14} 
                className={`shrink-0 transition-colors duration-300 ${isExpanded ? "text-pink-500" : "text-[#A8E6A0]"}`} 
              />
              <span className="truncate">{isExpanded ? "Terminate_Manifest_View" : "Fetch_Academic_Awards"}</span>
            </span>
            <ChevronRight size={16} className={`shrink-0 transition-transform duration-500 ${isExpanded ? "rotate-90 text-pink-500" : ""}`} />
          </button>

          {isExpanded && (
            <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-3 duration-500">
              {edu.awards.map((award) => (
                <div 
                  key={award.id} 
                  className="bg-white border-2 border-black p-3 sm:p-4 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFFFED] transition-colors group/item"
                >
                  <div className="flex flex-col text-left space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[8px] sm:text-[9px] font-black bg-pink-500 text-white px-1.5 py-0.5 italic shrink-0">
                        {award.id}
                      </span>
                      <h5 className="text-[10px] sm:text-[11px] md:text-xs font-black uppercase text-black group-hover/item:text-pink-600 transition-colors leading-tight">
                        {award.title}
                      </h5>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold opacity-50 uppercase flex items-center gap-1">
                      <Terminal size={10} className="shrink-0" /> {award.issuer}
                    </span>
                  </div>
                  
                  <div className="w-full xs:w-auto text-left xs:text-right shrink-0 border-t xs:border-t-0 border-black/5 pt-2 xs:pt-0">
                    <span className="inline-block text-[9px] sm:text-[10px] font-black bg-black text-[#A8E6A0] px-2 py-1 italic shadow-[2px_2px_0px_0px_rgba(236,72,153,1)]">
                      {award.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}