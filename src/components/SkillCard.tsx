"use client";

import { useState } from 'react';

type SkillCardItem = {
  name: string;
  slug: string;
  color: string;
};

export default function SkillCard({ item }: { item: SkillCardItem }) {
  const [iconError, setIconError] = useState(false);
  const iconUrl = `https://cdn.simpleicons.org/${item.slug}/${item.color.replace('#', '')}`;

  return (
    <div className="group bg-[color:var(--card-bg)] border-2 border-[color:var(--card-border)] rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--card-shadow)]">
      
      {/* ICON AREA */}
      <div 
        className="aspect-square flex items-center justify-center p-6 transition-colors"
        style={{ backgroundColor: `${item.color}15` }}
      >
        {!iconError ? (
          <img
            src={iconUrl}
            alt={item.name}
            className="w-10 h-10 object-contain transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12"
            onError={() => setIconError(true)}
          />
        ) : (
          <span className="font-black text-xs uppercase" style={{ color: item.color }}>
            {item.name.slice(0, 2)}
          </span>
        )}
      </div>

      {/* LABEL AREA */}
      <div className="p-3 border-t-2 border-[color:var(--card-border)] bg-[color:var(--card-bg)] text-center">
        <h4 className="text-[11px] font-black text-[color:var(--text-color)] uppercase tracking-tight truncate">
          {item.name}
        </h4>
      </div>
    </div>
  );
}