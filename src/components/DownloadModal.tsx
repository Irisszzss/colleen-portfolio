"use client";
import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, AlertCircle, FileText, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import navigate

interface Project {
  id?: number | string; // Added ID to check if it's RootTool
  title?: string;
  downloadUrl?: string;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, project }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-gutter', `${scrollbarWidth}px`);
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
    return () => document.body.classList.remove('modal-active');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-5 bg-[#2B2B28]/60 backdrop-blur-sm font-poppins"
      onClick={onClose} 
    >
      <div 
        className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] shadow-[8px_8px_0px_0px_var(--card-shadow)] rounded-[32px] max-w-sm w-full overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* HEADER BAR */}
        <div className="bg-[color:var(--card-bg)] px-6 py-4 flex justify-between items-center border-b-2 border-[color:var(--card-border)]">
          <div className="flex items-center gap-2 text-blue-600">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest text-[color:var(--text-color)]">Project Access</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-[color:var(--text-color)]/10 rounded-lg transition-colors text-[color:var(--text-color)]">
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-[color:var(--text-color)]">
              {project?.title}
            </h2>
            <div className="flex items-center gap-2">
               <FileText size={12} className="text-blue-600/50" />
               <span className="text-[9px] font-black uppercase tracking-widest italic text-[color:var(--text-color)]/40">
                 Select Execution Path...
               </span>
            </div>
          </div>

          <p className="text-xs font-medium text-[color:var(--text-color)]/70 leading-relaxed border-l-4 border-yellow-400 pl-4 italic">
            "Choose to view the project documentation/gallery or download the local binary."
          </p>
          
          <div className="bg-yellow-500/10 border-2 border-yellow-500/20 p-4 rounded-2xl flex gap-3 items-start shadow-[4px_4px_0px_0px_#facc15]">
            <AlertCircle className="text-yellow-500 shrink-0" size={20} />
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase leading-none text-yellow-600 dark:text-yellow-400">System Requirement</p>
              <p className="text-[9px] font-bold text-[color:var(--text-color)]/80 leading-tight">Requires **Java 17+** for local execution.</p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-4 space-y-3">
            {/* OPTION 1: VIEW GALLERY / PROJECT PAGE */}
            <button 
              onClick={() => {
                onClose();
                navigate('/roottool'); // Redirects to your gallery page
              }}
              className="w-full bg-white border-2 border-[color:var(--card-border)] py-4 rounded-2xl text-xs font-black text-black uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--card-shadow)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <LayoutGrid size={16} /> 
              View Gallery
            </button>

            {/* OPTION 2: DOWNLOAD */}
            <a 
              href={project?.downloadUrl} 
              download={`${project?.title || 'Project'}.exe`}
              onClick={onClose}
              className="w-full bg-blue-600 border-2 border-[color:var(--card-border)] py-4 rounded-2xl text-xs font-black text-white uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--card-shadow)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={16} className="group-hover:animate-bounce" /> 
              Confirm Download
            </a>
            
            <button onClick={onClose} className="w-full text-[10px] font-black uppercase text-[color:var(--text-color)]/40 hover:text-blue-600 transition-all pt-2">
              [ Cancel Request ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;