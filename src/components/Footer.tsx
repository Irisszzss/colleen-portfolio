"use client";
import { Send, Sparkles, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: "GH", href: "https://github.com/Irisszzss", color: "hover:bg-[#facc15]", path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" },
    { name: "LI", href: "https://www.linkedin.com/in/colleenirisjones/", color: "hover:bg-[#4ade80]", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
    { name: "FB", href: "https://www.facebook.com/ColleenIris.Jones", color: "hover:bg-[#c084fc]", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  ];

  return (
    <footer className="max-w-5xl mx-auto px-4 pb-20 select-none font-black">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between border-[3px] border-[var(--card-border)] bg-[var(--card-bg)] shadow-[6px_6px_0px_0px_var(--card-shadow)] rounded-2xl md:rounded-full px-6 py-3 transition-all duration-500 gap-4">
        
        {/* Left Branding:
            - HIDDEN ON MOBILE (hidden)
            - VISIBLE ON DESKTOP (md:flex)
        */}
        <div className="hidden md:flex items-center gap-3">
          <div className="p-2 bg-blue-600 border-2 border-black dark:border-white rounded-xl shadow-[3px_3px_0px_0px_var(--card-shadow)]">
            <Send size={16} className="text-white animate-bounce" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-tighter text-[var(--text-color)]">Colleen Jones</span>
            <span className="text-[8px] uppercase opacity-50 flex items-center gap-1 tracking-widest text-[var(--text-color)]">
              <Sparkles size={10} className="text-yellow-500" /> Collaboration
            </span>
          </div>
        </div>

        {/* Social Links:
            - ALWAYS VISIBLE (flex)
            - Centered on mobile, Right-aligned on desktop
        */}
        <div className="flex items-center gap-3 md:gap-5">
          <a href="mailto:jonescolleeniris08@outlook.com" className="group">
             <div className="p-2 border-2 border-[var(--card-border)] rounded-lg transition-all hover:bg-blue-600 hover:shadow-[3px_3px_0px_0px_var(--card-shadow)] shadow-none">
              <Mail size={18} className="text-[var(--text-color)] group-hover:text-white" />
            </div>
          </a>

          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" className="group">
              <div className={`p-2 border-2 border-[var(--card-border)] rounded-lg transition-all ${social.color} hover:shadow-[3px_3px_0px_0px_var(--card-shadow)] shadow-none`}>
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] transition-colors fill-[var(--text-color)] group-hover:fill-black">
                  <path d={social.path} />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Attribution */}
      <div className="mt-4 flex justify-between items-center text-[9px] uppercase opacity-30 tracking-[0.2em] text-[var(--text-color)] px-4">
        <span>Region III // PH</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}