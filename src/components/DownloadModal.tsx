"use client";
import React, { useEffect } from 'react';
import { X, Download, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

interface Project {
  title?: string;
  downloadUrl?: string;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, project }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }

    return () => {
      document.body.classList.remove('modal-active');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-5 bg-[#2B2B28]/60 backdrop-blur-sm font-poppins">
      <div className="bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] shadow-[8px_8px_0px_0px_var(--card-shadow)] rounded-[32px] max-w-sm w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* HEADER BAR */}
        <div className="bg-[color:var(--card-bg)] px-6 py-4 flex justify-between items-center border-b-2 border-[color:var(--card-border)]">
          <div className="flex items-center gap-2 text-blue-600">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest text-[color:var(--text-color)]">Secure_Download</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 hover:bg-[color:var(--text-color)]/10 rounded-lg transition-colors text-[color:var(--text-color)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-[color:var(--text-color)]">
              Prepare <span className="text-blue-600">{project?.title}</span>?
            </h2>
            <div className="flex items-center gap-2">
               <FileText size={12} className="text-blue-600/50" />
               <span className="text-[9px] font-black uppercase tracking-widest italic text-[color:var(--text-color)]/40">
                 Requesting_Access_Permission...
               </span>
            </div>
          </div>

          <p className="text-xs font-medium text-[color:var(--text-color)]/70 leading-relaxed border-l-4 border-yellow-400 pl-4 italic">
            "You are about to download a local copy of this file. Please ensure you have the necessary environment to run this application."
          </p>
          
          {/* WARNING BOX - Fixed for Dark Mode */}
          <div className="bg-yellow-500/10 border-2 border-yellow-500/20 p-4 rounded-2xl flex gap-3 items-start shadow-[4px_4px_0px_0px_#facc15]">
            <AlertCircle className="text-yellow-500 shrink-0" size={20} />
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase leading-none text-yellow-600 dark:text-yellow-400">
                System_Requirement
              </p>
              <p className="text-[9px] font-bold text-[color:var(--text-color)]/80 leading-tight">
                This application requires **Java 17 or higher**. Please verify that your system is updated before opening the file.
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-4 space-y-4">
            <a 
              href={project?.downloadUrl} 
              download={`${project?.title || 'Project'}.exe`}
              onClick={onClose}
              className="w-full bg-blue-600 border-2 border-[color:var(--card-border)] py-4 rounded-2xl text-xs font-black text-white uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--card-shadow)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={16} className="group-hover:animate-bounce" /> 
              Confirm_Download
            </a>
            
            <button 
              onClick={onClose}
              className="w-full text-[10px] font-black uppercase text-[color:var(--text-color)]/40 hover:text-blue-600 hover:opacity-100 transition-all"
            >
              [ Cancel_Request ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;