import { Heart, Terminal, Activity } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { label: 'Profile', href: '#about', code: '01' },
    { label: 'Stack', href: '#stack', code: '03' },
    { label: 'Projects', href: '#projects', code: '02' },
    { label: 'Credentials', href: '#edu', code: '04' },
  ];

  return (
    <>
      {/* --- TOP BAR (Branding & Status) --- */}
      <header className="fixed top-0 left-0 w-full z-[100] px-2 md:px-8 pt-4 md:pt-10">
        <nav className="max-w-5xl mx-auto flex justify-between items-center bg-[#1D3D2A]/95 backdrop-blur-md text-[#A8E6A0] border-[3px] md:border-[4px] border-black p-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-mono h-[56px] md:h-[64px] relative">
          
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#A8E6A0_3px)] bg-[size:100%_4px] overflow-hidden" />

          {/* LEFT: BRANDING */}
          <div className="flex items-center gap-2 md:gap-3 h-full px-3 md:px-4 border-r-[3px] md:border-r-[4px] border-black bg-black/30 group">
            <div className="relative shrink-0">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-pink-500 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Terminal size={14} strokeWidth={3} className="text-black" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-[12px] md:text-base font-black tracking-tight text-white whitespace-nowrap">
                Iriss<span className="text-pink-500">.SYS</span>
              </h1>
              <span className="text-[7px] md:text-[9px] font-black opacity-50 uppercase tracking-[0.1em] mt-0.5">Node_Active</span>
            </div>
          </div>

          {/* CENTER: DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex h-full items-stretch flex-1">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="flex-1 flex flex-col justify-center items-center border-r-2 border-black/20 hover:bg-[#A8E6A0] hover:text-[#1D3D2A] transition-all relative group"
              >
                <div className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-6 transition-all duration-300 z-50 pointer-events-none">
                  <Heart size={16} className="fill-pink-500 text-pink-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.15em] relative z-10">{item.label}</span>
                <span className="text-[9px] font-bold opacity-40 mt-0.5 uppercase tracking-tighter">0{item.code}.EXE</span>
              </a>
            ))}
          </div>

          {/* RIGHT: STATUS */}
          <div className="flex items-center gap-2 md:gap-4 h-full px-3 md:px-5 border-l-[3px] md:border-l-[4px] border-black bg-black/40">
            <div className="hidden sm:flex flex-col items-end">
              <div className="flex gap-0.5 md:gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-1 md:w-1.5 h-2 md:h-2.5 border border-black ${i < 5 ? 'bg-[#A8E6A0]' : 'bg-pink-500 animate-pulse'}`} />
                ))}
              </div>
              <span className="text-[7px] md:text-[9px] font-black opacity-40 uppercase tracking-widest">Buffer</span>
            </div>
            <Activity size={18} className="text-pink-500 animate-pulse shrink-0" />
          </div>
        </nav>
      </header>

      {/* --- MOBILE DOCK (Fixed at Bottom) --- */}
      <div className="fixed bottom-4 left-0 w-full z-[100] px-4 md:hidden">
        <nav className="max-w-md mx-auto flex justify-around items-center bg-[#1D3D2A] border-[3px] border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="flex flex-col items-center justify-center p-2 text-[#A8E6A0] active:bg-pink-500 active:text-black transition-colors rounded-sm"
            >
              <span className="text-[9px] font-black uppercase tracking-tighter">{item.label}</span>
              <span className="text-[7px] font-bold opacity-50 uppercase">0{item.code}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}