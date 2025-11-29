import React from 'react';
import { Download, Box, Settings, Gamepad2, ChevronRight } from 'lucide-react';
import { DownloadItem } from '../types';

interface DownloadCardProps {
  item: DownloadItem;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ item }) => {
  const isXash = item.type === 'xash';
  const accentColor = isXash ? 'orange' : 'blue';

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center p-4 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-800/60 overflow-hidden"
    >
      {/* Hover Gradient Glow */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${isXash ? 'from-orange-600 to-red-600' : 'from-blue-600 to-cyan-600'}`} 
      />
      
      {/* Icon Container */}
      <div className={`
        relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-5
        ${isXash 
          ? 'bg-gradient-to-br from-orange-500/20 to-orange-900/10 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)]' 
          : 'bg-gradient-to-br from-blue-500/20 to-blue-900/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
        }
        group-hover:scale-110 transition-transform duration-300 border border-white/5
      `}>
        {isXash ? <Box size={22} /> : (item.title.includes('Steam') ? <Settings size={22} /> : <Gamepad2 size={22} />)}
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0 relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-zinc-100 font-bold text-lg tracking-tight truncate group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <span className={`
            px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border
            ${isXash 
              ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' 
              : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
            }
          `}>
            v{item.version}
          </span>
        </div>
        
        {item.description && (
          <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors truncate">
            {item.description}
          </p>
        )}
      </div>

      {/* Action Area */}
      <div className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 relative z-10">
        {isXash ? <Download size={18} /> : <ChevronRight size={18} />}
      </div>
    </a>
  );
};