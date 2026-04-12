"use client";
import { useState } from 'react';
import { Terminal, ChevronRight, ShieldCheck, GraduationCap, Star, Milestone } from 'lucide-react';

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

export default function EducationCard({ edu, isLast }: { edu: EducationEntry; isLast?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-8xl mx-auto px-4 select-none relative pb-12">
      
      {/* TIMELINE TRACK - The Vertical Line */}
      {!isLast && (
        <div className="absolute left-[34px] md:left-[54px] top-20 bottom-0 w-0.5 border-l-2 border-dashed border-[#2B2B28]/10" />
      )}

      {/* TIMELINE NODE - The Badge/Icon on the line */}
      <div className="absolute left-[22px] md:left-[42px] top-6 z-10">
        <div className="w-6 h-6 md:w-7 md:h-7 bg-[#facc15] border-2 border-[color:var(--card-border)] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_var(--card-shadow)] group-hover:scale-110 transition-transform">
          <Milestone size={12} className="text-[color:var(--text-color)]" />
        </div>
      </div>

      <div className="ml-10 md:ml-20">
        {/* MAIN BENTO BOX */}
        <div className="group bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[32px] shadow-[6px_6px_0px_0px_var(--card-shadow)] relative overflow-hidden transition-all hover:shadow-[8px_8px_0px_0px_var(--card-shadow)]">
          
          {/* HEADER BAR */}
          <div className="bg-[color:var(--card-bg)] px-5 py-3 flex justify-between items-center border-b-2 border-[color:var(--card-border)] text-[10px] font-black uppercase tracking-widest text-[color:var(--text-color)]/70">
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-blue-600" />
              <span>Academic Record</span>
            </div>
            <div className="flex items-center gap-1.5">
               <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${edu.progress && edu.progress < 100 ? 'bg-blue-500' : 'bg-green-500'}`} />
               <span className="text-blue-600">{edu.progress && edu.progress < 100 ? 'Active' : 'Verified'}</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
            
            {/* LOGO STICKER */}
            <div className="shrink-0 relative">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] flex items-center justify-center shadow-[4px_4px_0px_0px_var(--card-shadow)] transition-transform group-hover:-rotate-3">
                {edu.logo ? (
                  <img 
                    src={edu.logo} 
                    alt={edu.school} 
                    className="w-full h-full p-3 object-contain" 
                  />
                ) : (
                  <ShieldCheck size={32} className="text-[color:var(--text-color)]" />
                )}
              </div>
            </div>

            {/* TEXT AREA */}
            <div className="flex-1 space-y-4 w-full text-center md:text-left">
              <div className="space-y-1">
                <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight text-[color:var(--text-color)]">
                  {edu.school === "BulSU" ? "Bulacan State University" : edu.school}
                </h4>
                <p className="text-[11px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {edu.degree}
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[color:var(--card-bg)] border border-[color:var(--card-border)]/10 rounded-full text-[9px] font-black text-[color:var(--text-color)]/70 uppercase tracking-tighter">
                 Timeline // {edu.year}
              </div>

              {/* PROGRESSION BENTO */}
              <div className="pt-4 border-t border-[color:var(--card-border)]/50">
                <div className="flex justify-between items-end mb-2 text-[9px] font-black uppercase tracking-tight">
                  <span className="opacity-40">Degree_Progression</span>
                  <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
                    {edu.progress && edu.progress < 100 ? `${edu.progress}% Concluding` : 'Completed'}
                  </span>
                </div>
                <div className="h-3 bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-full relative overflow-hidden shadow-[2px_2px_0px_0px_var(--card-shadow)]">
                  <div 
                    className="h-full bg-blue-600 rounded-full border-r-2 border-[color:var(--card-border)] transition-all duration-1000" 
                    style={{ width: `${edu.progress ?? 100}%` }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AWARDS COLLAPSIBLE */}
        {edu.awards && edu.awards.length > 0 && (
          <div className="mt-4 pl-4 md:pl-8">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between bg-[color:var(--card-bg)] text-[color:var(--text-color)] px-4 py-3 border-2 border-[color:var(--card-border)] rounded-[20px] shadow-[4px_4px_0px_0px_#facc15] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3">
                <Star 
                  size={14} 
                  className={`transition-colors ${isExpanded ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                />
                {isExpanded ? "Hide Achievements" : "Academic Awards"}
              </span>
              <ChevronRight size={18} className={`transition-transform duration-300 ${isExpanded ? "rotate-90 text-blue-600" : "opacity-30"}`} />
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                {edu.awards.map((award) => (
                  <div 
                    key={award.id} 
                    className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#c2edc5] hover:bg-[color:var(--card-bg)] transition-colors"
                  >
                    <div className="flex flex-col space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <h5 className="text-[10px] md:text-[11px] font-black uppercase text-[color:var(--text-color)]">
                          {award.title}
                        </h5>
                      </div>
                      <span className="text-[8px] font-bold opacity-40 uppercase ml-4 flex items-center gap-1.5 text-[color:var(--text-color)]/75">
                        <Terminal size={10} className="text-blue-600" /> {award.issuer}
                      </span>
                    </div>
                    
                    <div className="bg-[#2B2B28] text-white text-[8px] font-black px-2.5 py-1.5 rounded-lg uppercase italic tracking-widest shadow-[2px_2px_0px_0px_#facc15]">
                      {award.date}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}