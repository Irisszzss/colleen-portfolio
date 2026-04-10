import { Terminal, ShieldCheck, Cpu, Globe, Hash } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      name: "github", 
      href: "https://github.com/Irisszzss", 
      label: "Github",
      path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
    },
    { 
      name: "linkedin", 
      href: "https://www.linkedin.com/in/colleen-iris-jones-b57018372/", 
      label: "LinkedIn",
      path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
    },
    { 
      name: "facebook", 
      href: "https://www.facebook.com/ColleenIris.Jones", 
      label: "FB_Social",
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    },
  ];

  return (
    <footer className="pb-8 md:pb-16 max-w-5xl mx-auto px-4 font-mono select-none">
      
      {/* --- HEADER DIVIDER --- */}
      <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-10 opacity-30">
        <div className="h-[2px] bg-black flex-1" />
        <Terminal size={14} className="text-pink-500" />
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
          End_Of_Transmission // {new Date().toLocaleTimeString()}
        </span>
        <div className="h-[2px] bg-black flex-1" />
      </div>

      {/* --- MAIN CONSOLE GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-[3px] md:border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* LEFT: VALIDATION & SECURITY */}
        <div className="md:col-span-4 bg-black p-4 md:p-6 flex flex-row md:flex-col justify-between items-center md:items-start gap-4 border-b-[3px] md:border-b-0 md:border-r-4 border-black relative group">
          <div className="absolute inset-0 bg-[#A8E6A0]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="flex items-center gap-2 bg-[#1D3D2A] text-[#A8E6A0] px-3 py-1.5 border border-[#A8E6A0]/40 shadow-[2px_2px_0px_0px_rgba(168,230,160,0.2)]">
            <ShieldCheck size={14} className="animate-pulse" />
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-tighter">Identity_Secured</span>
          </div>
          
          <div className="flex-1 md:w-full">
            <div className="flex justify-between text-[8px] md:text-[10px] text-white/50 font-black uppercase mb-1.5">
              <span className="flex items-center gap-1"><Hash size={10}/> Encryption</span>
              <span className="text-pink-500">AES_256_PRO</span>
            </div>
            <div className="h-1.5 bg-white/10 w-full overflow-hidden border border-white/5">
              <div className="h-full bg-[#A8E6A0] w-[85%] animate-[pulse_2s_infinite]" />
            </div>
          </div>
        </div>

        {/* CENTER: CORE BUILD DATA */}
        <div className="hidden md:flex md:col-span-3 p-4 flex-col items-center justify-center bg-[#FFFFED] border-r-4 border-black group cursor-help">
          <div className="text-center space-y-1 relative">
            <div className="flex items-center justify-center gap-2 text-black/90">
              <Cpu size={14} className="group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-[11px] font-black uppercase">Build_v2.6.4</span>
            </div>
            <div className="h-[1px] w-full bg-black/10" />
            <span className="text-[8px] font-bold text-pink-600 block uppercase tracking-widest opacity-70 group-hover:opacity-100">
              Kernel: Stable
            </span>
          </div>
        </div>

        {/* RIGHT: EXTERNAL ACCESS NODES */}
        <div className="md:col-span-5 p-4 md:p-6 flex items-center justify-around md:justify-center gap-3 md:gap-5 bg-white">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 transition-all duration-300"
            >
              <div className="relative p-2.5 border-2 border-black bg-white group-hover:bg-black group-hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                <div className="w-4 h-4 md:w-5 md:h-5">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-full h-full fill-black group-hover:fill-[#A8E6A0] transition-colors" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.path} />
                  </svg>
                </div>
              </div>
              <span className="text-[7px] md:text-[9px] font-black uppercase text-black/40 group-hover:text-pink-600 tracking-tighter transition-colors">
                [0x0{i + 1}] {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* --- FOOTER LOGS --- */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <div className="flex items-center gap-4 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-black/50">
           <span className="flex items-center gap-1"><Globe size={12}/> Global_Access: OK</span>
           <span className="w-1.5 h-1.5 rounded-full bg-[#A8E6A0] animate-ping" />
        </div>

        <div className="space-y-1 md:text-right">
          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-black/80">
            © {new Date().getFullYear()} <span className="text-pink-500">COLL_IRIS.SYS</span> // ALL_RIGHTS_RESERVED
          </p>
          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-tight text-black/40 italic">
            Engineered by Colleen Jones
          </p>
        </div>
      </div>
    </footer>
  );
}