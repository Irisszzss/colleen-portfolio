"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  FileText, Database, Globe, ArrowUpRight, ChevronRight, ChevronLeft,
  Code2, Monitor, Download, ShieldCheck, Clock, MapPin, Activity 
} from 'lucide-react';
import { Navbar, Loader, ScrollToTop, SkillCard, Footer, EducationCard } from '../components'; 
import { PORTFOLIO_DATA } from '../data/portfolio';
import DerivifaiGallery from '../components/DerivifaiGallery'; 
import DownloadModal from '../components/DownloadModal';

type PortfolioProject = (typeof PORTFOLIO_DATA)['projects'][number];

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home'); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { profile, languages, frameworks, developerTools, devOpsDeployment, projects, education } = PORTFOLIO_DATA;

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.pop-reveal, .card-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading, activePage]); // Re-run when page changes or loading finishes

  const scroll = (key: string, direction: 'left' | 'right') => {
    const container = scrollRefs.current[key];
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  if (activePage === 'derivifai') return <DerivifaiGallery onBack={() => setActivePage('home')} />;

  const techSections = [
    { label: "Programming", data: languages, icon: <Code2 size={14}/>, color: "text-blue-500", key: "lang" },
    { label: "Frameworks", data: frameworks, icon: <Database size={14}/>, color: "text-green-500", key: "frame" },
    { label: "Cloud & Ops", data: devOpsDeployment, icon: <Globe size={14}/>, color: "text-purple-500", key: "devops" },
    { label: "Tools", data: developerTools, icon: <Monitor size={14}/>, color: "text-yellow-600", key: "tools" }
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg-color)] text-[color:var(--text-color)] font-poppins selection:bg-[#2B2B28] selection:text-white pb-10 text-left transition-colors duration-500">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-20 space-y-10 overflow-x-hidden overflow-y-hidden mt-[30px]">
        
        {/* HERO SECTION - REVEAL UP */}
        <section id="about" className="scroll-mt-[200px] pop-reveal bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[32px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-[8px_8px_0px_0px_var(--card-shadow)] relative overflow-hidden transition-all select-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
          
          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[color:var(--card-bg)] border border-blue-600 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-[2px_2px_0px_0px_#2563eb]">
              <ShieldCheck size={14} /> {profile.title}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase text-[color:var(--text-color)]">
              {profile.name} <br className="block sm:hidden" /> 
              <span className="text-blue-600 lg:text-[color:var(--text-color)] lg:dark-stroke">{profile.lastName}</span>
            </h1>

            <p className="text-xs md:text-base text-[color:var(--text-color)]/80 max-w-xl leading-relaxed font-medium italic border-l-4 lg:border-l-2 border-yellow-400 pl-4">
              {profile.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href={profile.resumeUrl} target="_blank" className="flex items-center gap-2 bg-[#2B2B28] text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-[4px_4px_0px_0px_#3b82f6] active:translate-x-1 active:translate-y-1 active:shadow-none">
                <FileText size={14} /> Resume <ArrowUpRight size={12} />
              </a>
              <div className="relative group/cv">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#28292b] text-white text-[8px] font-black uppercase tracking-tighter rounded-md opacity-0 group-hover/cv:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-[3px_3px_0px_0px_#eab308] z-50">
                  Compiling... 
                </div>
                <button disabled className="flex items-center gap-2 bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] text-[color:var(--text-color)]/40 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest cursor-not-allowed transition-all grayscale opacity-60">
                  <Download size={14} /> CV
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-[32px] translate-x-2 translate-y-2 border-2 border-[color:var(--card-border)] -z-10" />
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-full lg:max-w-[280px] aspect-square bg-[color:var(--card-bg)] rounded-[32px] overflow-hidden border-2 border-[color:var(--card-border)] transition-transform group-hover:-rotate-2 duration-300">
                <img src={profile.avatar} className="w-full h-full object-cover" alt="Profile" />
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION - SLIDE FROM LEFT */}
        <section className="pop-reveal reveal-left grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Engineering", val: "Full-stack", icon: <Code2 size={18}/>, color: "bg-blue-100 text-blue-600" },
            { label: "Academic", val: "Graduating", icon: <Clock size={18}/>, color: "bg-yellow-100 text-yellow-700" },
            { label: "Efficiency", val: "Optimized", icon: <Activity size={18}/>, color: "bg-green-100 text-green-700" },
            { label: "Location", val: "Remote", icon: <MapPin size={18}/>, color: "bg-purple-100 text-purple-600" }
          ].map((stat, i) => (
            <div key={i} className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[20px] p-4 flex items-center gap-4 hover:shadow-[4px_4px_0px_0px_var(--card-shadow)] transition-all group">
              <div className={`shrink-0 w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center border-2 border-[color:var(--card-border)]/10 group-hover:rotate-3 transition-transform`}>
                {stat.icon}
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase opacity-40 block">{stat.label}</span>
                <h3 className="text-sm font-black tracking-tight text-[color:var(--text-color)]">{stat.val}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* TECH STACK SECTION - POP REVEAL */}
        <section id="stack" className="scroll-mt-[130px] space-y-6">
          {/* MAIN TECH STACK LABEL */}
          <div className="flex items-center gap-4">
              <h2 className="text-xl font-black uppercase italic border-b-2 border-yellow-400 w-fit pb-1 text-left">Tech Stack</h2>
            <div className="h-[2px] flex-1 bg-[color:var(--card-border)] opacity-10" />
          </div>

          {/* CATEGORY CARDS */}
          <div className="space-y-4">
            {techSections.map((cat) => (
              <div key={cat.key} className="card-reveal bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[32px] p-6 space-y-6 shadow-[6px_6px_0px_0px_var(--card-shadow)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[color:var(--text-color)]">
                    <span className={cat.color}>{cat.icon}</span> {cat.label}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => scroll(cat.key, 'left')} 
                      className="p-2 border-2 border-[color:var(--card-border)] rounded-full hover:bg-[color:var(--card-bg)] active:scale-90 transition-all cursor-pointer"
                    >
                      <ChevronLeft size={16}/>
                    </button>
                    <button 
                      onClick={() => scroll(cat.key, 'right')} 
                      className="p-2 border-2 border-[color:var(--card-border)] rounded-full bg-[#2B2B28] text-white active:scale-90 transition-all shadow-[2px_2px_0px_0px_#2B2B28] cursor-pointer"
                    >
                      <ChevronRight size={16}/>
                    </button>
                  </div>
                </div>
                
                <div 
                  ref={(el) => { scrollRefs.current[cat.key] = el; }} 
                  className="flex overflow-x-auto pb-6 gap-4 no-scrollbar scroll-smooth"
                >
                  {cat.data.map((item: any) => (
                    <div key={item.name} className="min-w-[140px] md:min-w-[160px]">
                      <SkillCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION - SLIDE FROM RIGHT */}
        <section id="projects" className="pop-reveal reveal-right space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black uppercase italic border-b-2 border-yellow-400 w-fit pb-1 text-left">Projects</h2>
            <div className="h-[2px] flex-1 bg-[color:var(--card-border)] opacity-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="group bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-4 flex flex-col hover:shadow-[8px_8px_0px_0px_var(--card-shadow)] transition-all cursor-pointer relative active:translate-x-1 active:translate-y-1 active:shadow-none" 
                onClick={() => (proj.id === 2 ? setActivePage('derivifai') : proj.id === 3 ? (setSelectedProject(proj), setIsModalOpen(true)) : window.open(proj.url, '_blank'))}
              >
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full border-2 border-[color:var(--card-border)] shadow-[2px_2px_0px_0px_var(--card-shadow)] z-20 group-hover:-rotate-6 transition-transform">View Project</div>
                <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] mb-4 shrink-0">
                  <img src={proj.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={proj.title} />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[color:var(--card-bg)] p-3 rounded-full border-2 border-[color:var(--card-border)] shadow-[4px_4px_0px_0px_var(--card-shadow)] scale-90 group-hover:scale-100 transition-transform">
                      <ArrowUpRight size={20} className="text-[color:var(--text-color)]" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col space-y-3">
                  <h4 className="font-black text-sm md:text-base uppercase tracking-tight group-hover:text-blue-600 transition-colors leading-none text-[color:var(--text-color)]">{proj.title}</h4>
                  <div className="bg-[color:var(--card-bg)] border border-[color:var(--card-border)]/50 rounded-xl p-3 h-full">
                    <p className="text-[11px] md:text-[12px] text-[color:var(--text-color)]/80 font-medium leading-relaxed text-justify">
                      <span className="text-blue-600 font-black mr-1 text-[10px] opacity-50 group-hover:opacity-100 tracking-tighter">&gt; INFO:</span>
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION - POP REVEAL */}
        <section id="edu" className="scroll-mt-[130px] pop-reveal space-y-6">
          <div className="flex items-center gap-4">
             <h2 className="text-xl font-black uppercase italic border-b-2 border-yellow-400 w-fit pb-1 text-left">Academic History</h2>
             <div className="h-0.5 flex-1 bg-[color:var(--card-border)] opacity-10" />
          </div>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={edu.eduId || idx} className="card-reveal">
                <EducationCard edu={edu} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject || ({} as PortfolioProject)} />
      <ScrollToTop />
    </div>
  );
}