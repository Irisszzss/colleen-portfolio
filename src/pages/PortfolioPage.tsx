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

// Page and Modal Imports
import DerivifaiGallery from '../pages/DerivifaiGallery'; 
import DownloadModal from '../components/DownloadModal';

type PortfolioProject = (typeof PORTFOLIO_DATA)['projects'][number];

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home'); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const { 
    profile, 
    languages, 
    frameworks, 
    developerTools, 
    devOpsDeployment, 
    projects, 
    education 
  } = PORTFOLIO_DATA;

  useEffect(() => {
    if (loading || activePage !== 'home') return;
    
    const observerOptions = { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        } else {
          entry.target.classList.remove('reveal-visible');
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.pop-reveal, .card-reveal');
      targets.forEach((t) => observer.observe(t));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [loading, activePage]);

  // Loading Timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectAction = (proj: PortfolioProject) => {
    if (proj.id === 2) {
      setActivePage('derivifai');
    } else if (proj.id === 3) {
      setSelectedProject(proj);
      setIsModalOpen(true);
    } else {
      window.open(proj.url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) return <Loader />;

  if (activePage === 'derivifai') {
    return <DerivifaiGallery onBack={() => setActivePage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#A8E6A0] p-3 sm:p-4 font-mono text-[#1D3D2A] relative overflow-x-hidden 
      bg-[linear-gradient(90deg,rgba(29,61,42,0.02)_1px,transparent_1px),linear-gradient(rgba(29,61,42,0.02)_1px,transparent_1px)] 
      bg-[size:40px_40px]">
      
      <Navbar />

      <main className="max-w-5xl mx-auto space-y-24 md:space-y-32 relative z-10 pt-28 ">
        
        {/* PROFESSIONAL SUMMARY SECTION */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-stretch scroll-mt-32">
          {/* PROFILE CARD */}
          <div className="pop-reveal reveal-left order-1 md:col-span-8 bg-[#FFFFED] border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden">
            <div className="bg-black text-white px-4 py-2 flex justify-between items-center border-b-2 border-black">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-[#A8E6A0]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Professional_Summary</span>
              </div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            </div>

            <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-8 flex-1 text-center md:text-left">
              <div className="relative shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] overflow-hidden group/avatar">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/avatar:scale-110 group-hover/avatar:-rotate-3"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-black text-white border border-black px-2 py-0.5 font-black text-[9px] uppercase">
                  Class_2026
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                    {profile.name} <span className="text-pink-500">{profile.lastName}</span>
                  </h2>
                  <div className="inline-block px-2 py-0.5 bg-black text-[#A8E6A0] text-[10px] font-black uppercase italic">
                    Computer Engineering Student
                  </div>
                </div>
                <p className="text-sm font-bold opacity-80 italic border-l-2 border-pink-500 pl-4 leading-tight">
                  "{profile.bio}"
                </p>
              </div>
            </div>
          </div>

          {/* CREDENTIALS SIDEBAR */}
          <aside className="pop-reveal reveal-right order-2 md:col-span-4 h-full">
            <div className="pop-reveal bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col overflow-hidden">
              <div className="bg-[#A8E6A0] border-b-2 border-black px-4 py-2 flex items-center justify-between">
                <h3 className="font-black text-[11px] uppercase flex items-center gap-2 text-black">
                  <Database size={14} /> Core_Credentials
                </h3>
              </div>
              <div className="p-5 flex-1 flex flex-col space-y-6">
                <div className="grid grid-cols-2 gap-2 text-[10px] font-black uppercase">
                  <div className="bg-[#FFFFED] p-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col">
                    <span className="opacity-50 text-[7px] mb-1">Affiliation</span>
                    <span className="text-[9px]">ICpEP.se R3</span>
                  </div>
                  <div className="bg-black text-white p-2 border border-black flex flex-col">
                    <span className="opacity-50 text-[7px] mb-1">Status</span>
                    <span className="text-[9px]">Honors_Grad</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-black opacity-40 uppercase block border-b border-black/10 pb-1">Specialization</span>
                  <ul className="text-[11px] font-black uppercase space-y-3">
                    {['Reactive UI', 'API Architecture', 'Full-Stack'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-pink-500 border border-black group-hover:rotate-45 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 mt-auto space-y-3">
                  <a 
                    href={profile.resumeUrl} 
                    target='_blank' 
                    className="w-full bg-[#FFFF00] border-2 border-black py-2.5 text-[11px] font-black text-center uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 italic"
                  >
                    <FileText size={14} /> View_Resume.pdf
                  </a>

                  <div className="relative group">
                    <button
                      disabled
                      className="w-full bg-black/5 border-2 border-black py-2.5 text-[10px] font-black text-center uppercase opacity-60 cursor-not-allowed overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 text-black/60 italic">
                        <Download size={14} /> Download_CV.exe (WIP)
                      </span>
                      
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_0)] bg-[size:4px_4px]" />
                    </button>
        
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-2 py-1 uppercase font-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-black shadow-[2px_2px_0px_0px_rgba(236,72,153,1)]">
                      Status: Compiling_Assets...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* TECH STACK SECTION */}
        <section id="stack" className="space-y-12 scroll-mt-32">
          <div className="pop-reveal flex items-center gap-4 border-b-2 border-black pb-4">
            <div className="bg-black text-[#A8E6A0] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]">
              <h3 className="text-xl md:text-2xl font-black uppercase italic">Technical_Stack</h3>
            </div>
            <div className="flex-1 h-[2px] bg-black/10" />
          </div>

          <div className="space-y-16">
            {[
              { label: "Core_Languages", data: languages, id: "01" },
              { label: "Frameworks_&_Libraries", data: frameworks, id: "02" },
              { label: "Developer_Tools", data: developerTools, id: "03" },
              { label: "DevOps_&_Deployment", data: devOpsDeployment, id: "04" },
            ].map((section) => (
              <div key={section.id} className="relative">
                <div className="pop-reveal flex items-center gap-3 mb-6">
                  <div className="bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center">
                    {section.id}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest italic">{section.label}</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                  {section.data.map((item, idx) => (
                    <div key={idx} className="card-reveal">
                      <SkillCard item={item} index={idx} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-10 scroll-mt-32">
          <div className="pop-reveal flex items-center gap-4">
            <div className="bg-black text-white px-5 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] flex items-center gap-3">
              <Globe size={18} className="text-pink-500" />
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight italic">Project_Archive</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="card-reveal h-full group/container">
                <div className="group bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col h-full overflow-hidden">
                  <div className="h-40 bg-[#F0F0F0] relative overflow-hidden border-b-2 border-black">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col space-y-3 text-left">
                    <h4 className="text-lg font-black uppercase tracking-tighter group-hover:text-pink-600 transition-colors">{proj.title}</h4>
                    <p className="text-[11px] font-bold text-black/70 italic flex-1">// {proj.desc}</p>
                    <button onClick={() => handleProjectAction(proj)} className="w-full bg-black text-[#A8E6A0] text-[10px] font-black py-3 uppercase border-2 border-black hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2">
                      {proj.id === 2 ? "View Gallery" : proj.id === 3 ? "Download .Exe" : "Access Project"} 
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC LOG SECTION */}
        <section id="edu" className="space-y-10 scroll-mt-32">
          <div className="pop-reveal flex items-center gap-4">
            <div className="flex items-center gap-3 bg-black text-white px-5 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]">
              <Database size={18} className="text-pink-500" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic text-[#A8E6A0]">Academic_History</h3>
            </div>
          </div>
          {education.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </section>
      </main>

      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject || {}} 
      />

      <Footer /> 
      <ScrollToTop />
    </div>
  );
}