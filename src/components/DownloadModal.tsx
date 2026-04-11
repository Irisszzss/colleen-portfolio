"use client";
import React from 'react';
import { X, Download, ShieldCheck, AlertTriangle } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm font-mono">
      <div className="bg-[#FFFFED] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Terminal Header */}
        <div className="bg-black text-white px-4 py-2 flex justify-between items-center border-b-4 border-black">
          <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#A8E6A0]" /> Request_Download.exe
          </span>
          <button 
            onClick={onClose} 
            className="hover:text-pink-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-left text-[#1D3D2A]">
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">
              Initialize {project?.title}?
            </h2>
            <div className="h-1 w-12 bg-black" />
          </div>

          <p className="text-sm font-bold opacity-80 leading-tight border-l-4 border-black pl-3 italic">
            "You are about to pull a local copy of the RootTool utility to your machine."
          </p>
          
          {/* Warning Box */}
          <div className="bg-pink-100 border-2 border-pink-500 p-3 flex gap-3 items-start shadow-[2px_2px_0px_0px_rgba(236,72,153,1)]">
            <AlertTriangle className="text-pink-600 shrink-0" size={18} />
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase leading-none text-pink-700">
                Requirement Error: JRE_MISSING?
              </p>
              <p className="text-[9px] font-bold text-pink-600/80 leading-tight">
                This is a Java-based application. Please ensure Java Runtime Environment (JRE) 17 or higher is installed to run the executable.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-3">
            <a 
              href={project?.downloadUrl} 
              download="RootTool.exe" // Forces the browser to name it this
              onClick={onClose}
              className="bg-[#A8E6A0] border-2 border-black py-3 text-sm font-black text-center uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="group-hover:bounce" /> Confirm_Download.exe
            </a>
            
            <button 
              onClick={onClose}
              className="text-[10px] font-black uppercase opacity-40 hover:opacity-100 transition-opacity hover:text-pink-600"
            >
              [ Abort_Handshake ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;