"use client";

import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FileText, Database, Globe, ArrowUpRight, ChevronRight, ChevronLeft,
  Code2, Monitor, Download, ShieldCheck, Clock, MapPin, Activity, Layout 
} from 'lucide-react';
import { Loader, SkillCard, EducationCard } from '../components'; 
import { PORTFOLIO_DATA } from '../data/portfolio';

const DownloadModal = lazy(() => import('../components/DownloadModal'));

type PortfolioProject = (typeof PORTFOLIO_DATA)['projects'][number];

export default function PortfolioPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { profile, languages, frameworks, developerTools, devOpsDeployment, projects, education } = PORTFOLIO_DATA;

  useEffect(() => {
    if (loading) return;

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
  }, [loading]);

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

  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const isMobile = window.innerWidth < 768;
            // Set this to match your Navbar height exactly
            const offset = isMobile ? 80 : 100; 

            // Get absolute position relative to document
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    }
  }, [loading, location.hash]);

  if (loading) return <Loader />;

  const techSections = [
    { label: "Programming", data: languages, icon: <Code2 size={14}/>, color: "text-blue-500", key: "lang" },
    { label: "Frameworks", data: frameworks, icon: <Database size={14}/>, color: "text-green-500", key: "frame" },
    { label: "Cloud & Ops", data: devOpsDeployment, icon: <Globe size={14}/>, color: "text-purple-500", key: "devops" },
    { label: "Tools", data: developerTools, icon: <Monitor size={14}/>, color: "text-yellow-600", key: "tools" }
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg-color)] text-[color:var(--text-color)] font-poppins selection:bg-[#2B2B28] selection:text-white pb-10 text-left transition-colors duration-500">

      <main className="max-w-5xl mx-auto px-6 pt-20 space-y-10 overflow-x-hidden overflow-y-hidden mt-[30px]">
        
        <section id="about" className="scroll-mt-[130px] pop-reveal bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[32px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-[8px_8px_0px_0px_var(--card-shadow)] relative overflow-hidden transition-all select-none">
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
              <a 
                href={profile.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2B2B28] text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-[4px_4px_0px_0px_#3b82f6] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <FileText size={14} /> Resume <ArrowUpRight size={12} />
              </a>

              <a 
                href={profile.cvUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent border-2 border-[#eab308] text-[color:var(--text-color)] px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-black transition-all shadow-[4px_4px_0px_0px_#eab308] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <Download size={14} /> CV
              </a>
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

        <section className="pop-reveal grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "Engineering", val: "Full-stack", icon: <Code2 size={16}/>, color: "text-blue-500" },
            { label: "Academic", val: "Graduating", icon: <Clock size={16}/>, color: "text-yellow-500" },
            { label: "Efficiency", val: "Optimized", icon: <Activity size={16}/>, color: "text-green-500" },
            { label: "Location", val: "Remote", icon: <MapPin size={16}/>, color: "text-purple-500" }
          ].map((stat, i) => (
            <div key={i} className="bg-[var(--card-bg)] border-[2.5px] border-[var(--card-border)] rounded-[20px] p-3 flex items-center gap-3 hover:shadow-[4px_4px_0px_0px_var(--card-shadow)] transition-all cursor-default group">
              
              <div className={`${stat.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>

              <div className="leading-tight">
                <span className="text-[8px] font-black uppercase opacity-40 block tracking-widest">{stat.label}</span>
                <h3 className="text-[11px] font-black uppercase text-[var(--text-color)]">{stat.val}</h3>
              </div>
            </div>
          ))}
        </section>

        <section id="stack" className="scroll-mt-[130px] space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black uppercase italic border-b-2 border-yellow-400 w-fit pb-1 text-left">Tech Stack</h2>
            <div className="h-[2px] flex-1 bg-[color:var(--card-border)] opacity-10" />
          </div>
          <div className="space-y-4">
            {techSections.map((cat) => (
              <div key={cat.key} className="card-reveal bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[32px] p-6 space-y-6 shadow-[6px_6px_0px_0px_var(--card-shadow)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[color:var(--text-color)]">
                    <span className={cat.color}>{cat.icon}</span> {cat.label}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => scroll(cat.key, 'left')} className="p-2 border-2 border-[color:var(--card-border)] rounded-full hover:bg-[color:var(--card-bg)] active:scale-90 transition-all cursor-pointer"><ChevronLeft size={16}/></button>
                    <button onClick={() => scroll(cat.key, 'right')} className="p-2 border-2 border-[color:var(--card-border)] rounded-full bg-[#2B2B28] text-white active:scale-90 transition-all shadow-[2px_2px_0px_0px_#2B2B28] cursor-pointer"><ChevronRight size={16}/></button>
                  </div>
                </div>
                <div ref={(el) => { scrollRefs.current[cat.key] = el; }} className="flex overflow-x-auto pb-6 gap-4 no-scrollbar scroll-smooth">
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

        <section id="projects" className="scroll-mt-[130px] pop-reveal reveal-right space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black uppercase italic border-b-2 border-yellow-400 w-fit pb-1 text-left">Projects</h2>
            <div className="h-[2px] flex-1 bg-[color:var(--card-border)] opacity-10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="group bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] p-4 flex flex-col hover:shadow-[8px_8px_0px_0px_var(--card-shadow)] transition-all relative active:translate-x-1 active:translate-y-1 active:shadow-none"
                onClick={() => {
                  if (proj.id !== 2 && proj.id !== 3) {
                    window.open(proj.url, '_blank');
                  } else if (proj.id === 2) {
                    navigate('/derivifai');
                  }
                }}
              >
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full border-2 border-[color:var(--card-border)] shadow-[2px_2px_0px_0px_var(--card-shadow)] z-20 group-hover:-rotate-6 transition-transform">
                  {proj.id === 3 ? 'Multi Action' : 'View Project'}
                </div>

                <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] mb-4 shrink-0">
                  <img src={proj.image} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={proj.title} />
                  
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4 z-30">
                    {proj.id === 3 ? (
                      <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); navigate('/roottool'); }}
                          className="w-full bg-yellow-400 text-black font-black py-2 rounded-lg border-2 border-black flex items-center justify-center gap-2 hover:scale-105 transition-transform text-[10px] uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <Layout size={14} /> View Gallery
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(proj); setIsModalOpen(true); }}
                          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border-2 transition-all hover:scale-105 text-[10px] font-black uppercase
                            bg-[#F5F5DC] text-black border-black shadow-[4px_4px_0px_0px_black]
                            dark:bg-white dark:text-black dark:border-white dark:shadow-[4px_4px_0px_0px_white]"
                        >
                          <Download size={14} /> Download Tool
                        </button>
                      </>
                    ) : (
                      <div className="bg-[color:var(--card-bg)] p-3 rounded-full border-2 border-[color:var(--card-border)] shadow-[4px_4px_0px_0px_var(--card-shadow)] scale-90 group-hover:scale-100 transition-transform">
                        <ArrowUpRight size={20} className="text-[color:var(--text-color)]" />
                      </div>
                    )}
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

        <section id="edu" className="scroll-mt-[130px] pop-reveal space-y-6 pt-4">
          <div className="flex items-center gap-4">
             <h2 className="text-xl font-black uppercase italic border-b-2 border-yellow-400 w-fit pb-1 text-left">Academic History</h2>
             <div className="h-0.5 flex-1 bg-[color:var(--card-border)] opacity-10" />
          </div>
          <div className="space-y-1">
            {education.map((edu, idx) => (
              <div key={edu.eduId || idx} className="card-reveal">
                <EducationCard edu={edu} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Suspense fallback={null}>
        {isModalOpen && (
          <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject || ({} as PortfolioProject)} />
        )}
      </Suspense>
    </div>
  );
}