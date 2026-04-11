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
    <div className="pop-reveal max-w-4xl mx-auto mb-10 px-2 sm:px-0">
      <div className="group bg-white border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1">
        
        {/* TOP BAR */}
        <div className="bg-black text-[#A8E6A0] px-4 py-1.5 flex justify-between items-center border-b-2 border-black text-[9px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" />
            <span className="truncate">Academic_Credential</span>
          </div>
          <span className="hidden xs:block">Official_Record</span>
        </div>

        {/* CONTENT AREA */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start text-center sm:text-left">
          
          {/* LOGO CONTAINER */}
          <div className="shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFFFED] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] transition-transform group-hover:rotate-2">
              {edu.logo ? (
                <img 
                  src={edu.logo} 
                  alt={edu.school} 
                  className="w-full h-full p-2 object-contain" 
                />
              ) : (
                <ShieldCheck size={40} className="text-black" />
              )}
            </div>
          </div>

          {/* TEXT AREA */}
          <div className="flex-1 space-y-3 w-full">
            <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight group-hover:text-pink-600 transition-colors">
              {edu.school === "BulSU" ? "Bulacan State University" : edu.school}
            </h4>
            
            <div className="space-y-1">
              <h5 className="text-xs sm:text-sm md:text-base font-black uppercase text-black/80">
                {edu.degree}
              </h5>
              <p className="text-[10px] sm:text-[11px] font-bold opacity-60 italic">
                // Timeline: {edu.year}
              </p>
            </div>

            {/* PROGRESSION BAR */}
            <div className="pt-4 border-t border-black/10">
              <div className="flex justify-between items-end mb-2 text-[9px] font-black uppercase">
                <span>Degree_Progression</span>
                <span className="text-pink-600">
                  {edu.progress && edu.progress < 100 ? `${edu.progress}% In Progress` : 'Degree Conferred'}
                </span>
              </div>
              <div className="h-3 bg-black/5 border-2 border-black relative overflow-hidden">
                <div 
                  className="h-full bg-black transition-all duration-1000" 
                  style={{ width: `${edu.progress ?? 100}%` }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AWARDS SECTION */}
      {edu.awards && edu.awards.length > 0 && (
        <div className="mt-4 relative pl-4 sm:pl-8">
          {/* Connector line */}
          <div className="absolute left-0 -top-6 bottom-0 w-0.5 border-l-2 border-dashed border-black/20 ml-px" />

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between bg-black text-[#A8E6A0] px-4 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3">
              <ShieldCheck 
                size={14} 
                className={`transition-colors ${isExpanded ? "text-pink-500" : "text-[#A8E6A0]"}`} 
              />
              {isExpanded ? "Minimize_Achievements" : "Academic_Honors_&_Awards"}
            </span>
            <ChevronRight size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-90 text-pink-500" : ""}`} />
          </button>

          {isExpanded && (
            <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
              {edu.awards.map((award) => (
                <div 
                  key={award.id} 
                  className="bg-white border-2 border-black p-3 sm:p-4 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFFFED] transition-colors"
                >
                  <div className="flex flex-col text-left space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black bg-pink-500 text-white px-1.5 py-0.5 italic">
                        {award.id}
                      </span>
                      <h5 className="text-[10px] sm:text-[11px] font-black uppercase text-black">
                        {award.title}
                      </h5>
                    </div>
                    <span className="text-[9px] font-bold opacity-50 uppercase flex items-center gap-1">
                      <Terminal size={10} /> {award.issuer}
                    </span>
                  </div>
                  
                  <div className="shrink-0">
                    <span className="inline-block text-[9px] font-black bg-black text-[#A8E6A0] px-2 py-1 italic shadow-[2px_2px_0px_0px_rgba(236,72,153,1)]">
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