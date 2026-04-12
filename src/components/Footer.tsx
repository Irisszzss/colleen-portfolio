"use client";
import { Send, Sparkles, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      name: "github", 
      href: "https://github.com/Irisszzss", 
      label: "GitHub",
      color: "hover:bg-[#facc15]", 
      text: "text-yellow-600",
      path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" 
    },
    { 
      name: "linkedin", 
      href: "https://www.linkedin.com/in/colleen-iris-jones-b57018372/", 
      label: "LinkedIn",
      color: "hover:bg-[#4ade80]", 
      text: "text-green-600",
      path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" 
    },
    { 
      name: "facebook", 
      href: "https://www.facebook.com/ColleenIris.Jones", 
      label: "Facebook",
      color: "hover:bg-[#c084fc]", 
      text: "text-purple-600",
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
    },
  ];

  return (
    <footer className="max-w-5xl mx-auto px-6 pb-3 select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 border-2 border-[color:var(--card-border)] bg-[color:var(--card-bg)] shadow-[8px_8px_0px_0px_var(--card-shadow)] rounded-[32px] overflow-hidden transition-colors duration-500">
        
        {/* Connect Bento */}
        <div className="p-8 md:col-span-5 flex flex-col justify-center items-center md:items-start gap-4 border-b-2 md:border-b-0 md:border-r-2 border-[color:var(--card-border)] bg-[color:var(--card-bg)]">
          <div className="flex items-center gap-2 bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] px-4 py-2 rounded-2xl shadow-[4px_4px_0px_0px_var(--card-shadow)] transition-all">
            <Send size={16} className="text-blue-600" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[color:var(--text-color)]">Keep in Touch</span>
          </div>
          <p className="text-[10px] font-bold uppercase opacity-40 flex items-center gap-2 tracking-[0.2em] text-[color:var(--text-color)]">
            <Sparkles size={12} className="text-yellow-500" /> Open for Collaboration
          </p>
        </div>

        {/* Icons Bento */}
        <div className="p-8 md:col-span-7 flex items-center justify-around bg-[color:var(--card-bg)] flex-wrap gap-4">
          {/* Email - Blue */}
          <a href="mailto:jonescolleeniris08@outlook.com" className="group flex flex-col items-center gap-2">
            <div className="p-4 border-2 border-[color:var(--card-border)] rounded-2xl transition-all hover:bg-[#3b82f6] hover:shadow-[4px_4px_0px_0px_var(--card-shadow)] hover:-translate-y-1 active:translate-y-0 active:shadow-none shadow-none">
              <Mail size={24} className="text-[color:var(--text-color)] group-hover:text-white transition-colors" />
            </div>
            <span className="text-[9px] font-black uppercase text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a>

          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" className="group flex flex-col items-center gap-2">
              {/* FIXED: Changed border and shadow to use theme variables */}
              <div className={`p-4 border-2 border-[color:var(--card-border)] rounded-2xl transition-all hover:-translate-y-1 active:translate-y-0 shadow-none ${social.color} hover:shadow-[4px_4px_0px_0px_var(--card-shadow)]`}>
                {/* FIXED: Changed fill to use text-color variable */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 transition-colors group-hover:fill-[#2B2B28]" style={{ fill: 'var(--text-color)' }}>
                  <path d={social.path} />
                </svg>
              </div>
              <span className={`text-[9px] font-black uppercase ${social.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Attribution */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-black uppercase opacity-40 px-2 tracking-widest text-[color:var(--text-color)]">
        <span>Region_III // PH</span>
        <span>© {new Date().getFullYear()} Colleen Jones</span>
      </div>
    </footer>
  );
}