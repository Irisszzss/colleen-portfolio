"use client";
import React, { useState } from 'react';

export default function SkillCard({ item, index }) {
  const [iconError, setIconError] = useState(false);
  const iconUrl = `https://cdn.simpleicons.org/${item.slug}/${item.color.replace('#', '')}`;
  const fallbackText = item.name
    .split(/\s|\//)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="group relative bg-white border-2 sm:border-4 border-black p-3 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair h-full text-left">
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-pink-500 animate-pulse" />
      </div>
      <div className={`mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 mx-auto ${item.bg} border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all p-1.5 sm:p-2`}>
        {!iconError ? (
          <img
            src={iconUrl}
            alt={item.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            onError={() => setIconError(true)}
          />
        ) : (
          <svg viewBox="0 0 48 48" className="w-full h-full" role="img" aria-label={item.name}>
            <rect width="48" height="48" fill="transparent" />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-[11px] font-black" fill={item.color}>
              {fallbackText}
            </text>
          </svg>
        )}
      </div>
      <div className="border-t-2 border-black pt-2 text-center uppercase tracking-tighter truncate">
        <span className="text-[7px] sm:text-[8px] font-black opacity-30 block tracking-widest">MOD_{index.toString().padStart(3, '0')}</span>
        <h4 className="text-[9px] sm:text-[10px] md:text-xs font-black group-hover:text-pink-600 transition-colors">{item.name}</h4>
      </div>
    </div>
  );
}