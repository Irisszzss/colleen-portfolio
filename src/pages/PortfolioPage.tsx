"use client";
import { useState, useEffect } from 'react';
import { Globe, FileText, Database, Activity, ChevronRight, Download } from 'lucide-react';

import { 
  Navbar, 
  Footer, 
  Loader, 
  EducationCard, 
  SkillCard, 
  ScrollToTop 
} from '../components';

import { PORTFOLIO_DATA } from '../data/portfolio';

type PortfolioProject = (typeof PORTFOLIO_DATA)['projects'][number];

// Page and Modal Imports
import DerivifaiGallery from '../pages/DerivifaiGallery'; 
import DownloadModal from '../components/DownloadModal';

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home'); 
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedDownloadProject, setSelectedDownloadProject] = useState<PortfolioProject | null>(null);

  const { profile, languages, frameworks, developerTools, devOpsDeployment, projects, education } = PORTFOLIO_DATA;

  useEffect(() => {
    if (loading || activePage !== 'home') return;
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
        else entry.target.classList.remove('reveal-visible');
      });
    }, observerOptions);

    const targets = document.querySelectorAll('.pop-reveal, .card-reveal');
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [loading, activePage]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectAction = (proj: typeof projects[number]) => {
    if (proj.id === 2) {
      setActivePage('derivifai');
    } else if (proj.id === 3) {
      setSelectedDownloadProject(proj);
      setIsDownloadModalOpen(true);
    } else {
      window.open(proj.url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) return <Loader />;

  if (activePage === 'derivifai') {
    return <DerivifaiGallery onBack={() => setActivePage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#A8E6A0] p-2 sm:p-4 font-mono text-[#1D3D2A] relative overflow-x-hidden 
      bg-[linear-gradient(90deg,rgba(29,61,42,0.03)_1px,transparent_1px),repeating-linear-gradient(0deg,rgba(0,0,0,0.01)_0px,rgba(0,0,0,0.01)_1px,transparent_1px,transparent_4px)] 
      bg-[size:30px_100%,100%_4px]">
      
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,118,0.02))] bg-[length:100%_4px,4px_100%]" />

      <Navbar />

      <main className="max-w-5xl mx-auto space-y-20 md:space-y-28 relative z-10 pt-24 pb-16 text-left">
        
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch mt-5">
          <div className="pop-reveal reveal-left md:col-span-8 bg-[#FFFFED] border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden">
            <div className="bg-black text-white px-3 py-1 flex justify-between items-center border-b-2 md:border-b-4 border-black">
              <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Activity size={12} className="text-[#A8E6A0]" /> User_Profile
              </span>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" />
            </div>

            <div className="p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 flex-1 text-left">
              <div className="relative shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-[#D4FCD1] border-2 md:border-4 border-black flex items-center justify-center relative z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-5xl">
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-pink-500 border border-black px-1.5 py-0.5 font-black text-white uppercase text-[10px] z-20 italic">
                  LVL.{profile.lvl}
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                  {profile.name} <span className="text-pink-500">{profile.lastName}</span>
                </h2>
                <div className="h-1 w-12 bg-black" />
                <p className="text-sm md:text-sm leading-tight font-bold opacity-80 italic border-l-2 border-black pl-3">
                  "{profile.bio}"
                </p>
                <div className="mt-4 pt-3 border-t border-black/10">
                  <p className="text-[11px] md:text-[12px] font-medium leading-relaxed text-[#1D3D2A]/80">
                    <span className="font-black text-pink-600 tracking-tighter mr-1">// BRIEFING:</span> 
                    {profile.briefing}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="pop-reveal reveal-right bg-white border-2 md:border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-between group overflow-hidden">
              <div className="space-y-4">
                <h3 className="font-black text-[11px] border-b border-black pb-2 uppercase tracking-widest text-pink-500 flex items-center gap-2">
                  <Database size={12} className="group-hover:rotate-12 transition-transform" /> Candidate_Manifest
                </h3>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-black uppercase">
                  <div className="bg-black text-[#A8E6A0] p-1.5 border border-black flex flex-col">
                    <span className="opacity-50 text-[8px]">Affiliation</span> ICpEP.se R3 MEMBER
                  </div>
                  <div className="bg-black/5 p-1.5 border border-black/10 flex flex-col">
                    <span className="opacity-50 text-[8px]">Class</span> 2022_2026
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-black opacity-40 uppercase tracking-[0.2em]">Technical_Trajectory:</span>
                  <ul className="text-[10px] font-black uppercase space-y-2">
                    <li className="flex items-center gap-2.5 group/item">
                      <div className="w-1.5 h-1.5 bg-pink-500 group-hover/item:scale-125 transition-transform" /> 
                      [01] Reactive_Interface_Design
                    </li>
                    <li className="flex items-center gap-2.5 group/item">
                      <div className="w-1.5 h-1.5 bg-black group-hover/item:scale-125 transition-transform" /> 
                      [02] Scalable_API_Architecture
                    </li>
                    <li className="flex items-center gap-2.5 group/item">
                      <div className="w-1.5 h-1.5 bg-pink-500 group-hover/item:scale-125 transition-transform" /> 
                      [03] Full_Stack_Integration
                    </li>
                  </ul>
                </div>
              </div>
              <a href={profile.resumeUrl} target='_blank' className="bg-[#FFFF00] border-2 border-black py-2.5 text-[11px] font-black text-center uppercase mt-6 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group/btn">
                <span className="relative z-10 flex items-center justify-center gap-2 italic">
                  <FileText size={14} /> Download Resume
                </span>
              </a>
              <button
                disabled
                className="w-full bg-[#ace66f] border-2 border-black py-2.5 text-[11px] font-black text-center uppercase mt-6 relative overflow-visible shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-70 cursor-not-allowed animate-pulse
                  after:content-[''] after:absolute after:inset-0 after:z-[-1] after:scale-110"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 italic pointer-events-none">
                  <FileText size={14} /> Download CV (Under Construction)
                </span>
                
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)] pointer-events-none" />
              </button>
            </div>
          </aside>

          {/* SYSTEM STATUS TRAY */}
          <div className="md:col-span-12 pop-reveal flex flex-col md:flex-row items-stretch gap-0 border-2 md:border-4 border-black bg-[#050505] text-[#A8E6A0] shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] h-12 md:h-10 overflow-hidden mt-2 group/tray">
            <div className="px-4 flex items-center bg-pink-500 text-black font-black text-[11px] uppercase italic border-r-2 border-black shrink-0 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 animate-pulse" />
              <span className="relative z-10 flex items-center gap-2">
                <Activity size={12} strokeWidth={3} /> Core_Kernel.bin
              </span>
            </div>
            <div className="flex-1 relative flex items-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[size:100%_2px,3px_100%] z-20" />
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-10" />
              <div className="whitespace-nowrap animate-marquee flex items-center gap-16 text-[10px] md:text-[11px] font-mono font-black tracking-[0.15em] opacity-90 uppercase">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">[0x00F1]</span>
                  <span>CPU_LOAD: <span className="text-pink-500">14.2%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping" />
                  <span>RAM_ALLOC: <span className="text-white">1024MB / 4096MB</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/30">IP_ADDR:</span>
                  <span className="bg-[#A8E6A0] text-black px-1 leading-none">192.168.1.104</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>THREAD_ACTIVE: <span className="text-pink-500 italic">"IRISS_V2.5"</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/30">LOC:</span>
                  <span>LAT_14.85 // LONG_120.81</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center px-4 bg-black/50 border-l-2 border-white/10 gap-2">
              <span className="text-[9px] font-black opacity-40">BR: 244kbps</span>
              <div className="flex gap-0.5">
                  <div className="w-1 h-3 bg-[#A8E6A0] opacity-20" />
                  <div className="w-1 h-3 bg-[#A8E6A0] opacity-40" />
                  <div className="w-1 h-3 bg-[#A8E6A0] opacity-60" />
                  <div className="w-1 h-3 bg-pink-500" />
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="stack" className="space-y-12">
          <div className="pop-reveal flex items-center gap-4 border-b-2 border-black pb-4">
            <div className="bg-black text-[#A8E6A0] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]">
              <h3 className="text-xl md:text-2xl font-black uppercase italic">Tech_Stack</h3>
            </div>
            <div className="flex-1 h-1 bg-black/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1D3D2A] w-[99%] animate-load" />
            </div>
          </div>
          <div className="space-y-16">
            <div className="relative">
              <div className="pop-reveal reveal-left flex items-center gap-3 mb-6 group">
                <div className="bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(236,72,153,1)] group-hover:bg-pink-500 transition-colors">01</div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] italic">Core_Languages</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                {languages.map((item, idx) => (
                  <div key={idx} className="card-reveal" style={{ transitionDelay: `${idx * 40}ms` }}>
                    <SkillCard item={item} index={idx} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="pop-reveal reveal-left flex items-center gap-3 mb-6 group">
                <div className="bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(236,72,153,1)] group-hover:bg-pink-500 transition-colors">02</div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] italic">Frameworks</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                {frameworks.map((item, idx) => (
                  <div key={idx} className="card-reveal" style={{ transitionDelay: `${idx * 40}ms` }}>
                    <SkillCard item={item} index={idx} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="pop-reveal reveal-left flex items-center gap-3 mb-6 group">
                <div className="bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(236,72,153,1)] group-hover:bg-pink-500 transition-colors">03</div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] italic">Developer_Tools</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                {developerTools.map((item, idx) => (
                  <div key={idx} className="card-reveal" style={{ transitionDelay: `${idx * 40}ms` }}>
                    <SkillCard item={item} index={idx} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="pop-reveal reveal-left flex items-center gap-3 mb-6 group">
                <div className="bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(236,72,153,1)] group-hover:bg-pink-500 transition-colors">04</div>
                <h4 className="text-sm font-black uppercase tracking-[0.2em] italic">DevOps_&_Deployment</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                {devOpsDeployment.map((item, idx) => (
                  <div key={idx} className="card-reveal" style={{ transitionDelay: `${idx * 40}ms` }}>
                    <SkillCard item={item} index={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-10">
          <div className="pop-reveal flex items-center gap-4">
            <div className="bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] flex items-center gap-3">
              <Globe size={16} className="text-pink-500 animate-spin-slow" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic">Projects_Log</h3>
            </div>
            <div className="h-[1px] bg-black flex-1 opacity-20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={proj.id} className="card-reveal h-full" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="group bg-white border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col h-full overflow-hidden text-left">
                  <div className="bg-black text-[#A8E6A0] text-[8px] font-black px-3 py-1 flex justify-between border-b-2 border-black">
                    <span>UNIT: 0{proj.id} // SECURE</span>
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(236,72,153,1)]" />
                  </div>
                  <div className="h-28 md:h-32 bg-black relative overflow-hidden border-b-2 border-black">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 animate-scan pointer-events-none" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-black uppercase mb-1 tracking-tighter group-hover:text-pink-600 transition-colors">{proj.title}</h4>
                    <div className="relative bg-[#F8F8F8] border-l-2 border-black p-2 mb-4 flex-1">
                      <p className="text-[10px] font-bold opacity-70 leading-tight italic">// {proj.desc}</p>
                    </div>
                    
                    <button 
                      onClick={() => handleProjectAction(proj)}
                      className="bg-black text-[#A8E6A0] text-[9px] font-black py-2.5 uppercase tracking-widest text-center border-2 border-black hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      {proj.id === 2 ? "Access_Archive" : proj.id === 3 ? "Download_Utility" : "Establish_Connection"} 
                      {proj.id === 3 ? <Download size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC LOG */}
        <section id="edu" className="space-y-10 md:space-y-12">
          <div className="pop-reveal flex items-center gap-4 group">
            <div className="flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <Database size={18} className="text-pink-500 shrink-0" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic text-[#A8E6A0]">Academic_Log</h3>
            </div>
            <div className="h-[1px] bg-black flex-1 opacity-20" />
          </div>

          {education.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </section>
      </main>

      {/* DOWNLOAD MODAL */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
        project={selectedDownloadProject || {}} 
      />

      <Footer /> 
      <ScrollToTop />
    </div>
  );
}