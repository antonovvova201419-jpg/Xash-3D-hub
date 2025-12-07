import React from 'react';
import { Download, Box, Settings, Gamepad2, ChevronRight, Rocket } from 'lucide-react';
import { DownloadItem } from '../types';

interface DownloadCardProps {
  item: DownloadItem;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ item }) => {
  const isXash = item.type === 'xash';
  const isTornado = item.type === 'tornado';
  
  // Determine icon based on type
  const Icon = () => {
    if (isTornado) return <Rocket size={22} />;
    if (isXash) return <Box size={22} />;
    if (item.title.includes('Steam')) return <Settings size={22} />;
    return <Gamepad2 size={22} />;
  };

  // Determine gradient colors based on type
  const getGradient = () => {
    if (isTornado) return 'from-green-600 to-emerald-500';
    if (isXash) return 'from-orange-600 to-yellow-500';
    return 'from-yellow-600 to-amber-500';
  };

  const getIconStyles = () => {
    if (isTornado) return 'bg-gradient-to-br from-green-500/20 to-green-900/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]';
    if (isXash) return 'bg-gradient-to-br from-orange-500/20 to-orange-900/10 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)]';
    return 'bg-gradient-to-br from-yellow-500/20 to-yellow-900/10 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.15)]';
  };

  const getBadgeStyles = () => {
    if (isTornado) return 'bg-green-500/10 border-green-500/20 text-green-400';
    if (isXash) return 'bg-orange-500/10 border-orange-500/20 text-orange-400';
    return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400';
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center p-4 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-800/60 overflow-hidden"
    >
      {/* Hover Gradient Glow */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${getGradient()}`} 
      />
      
      {/* Icon Container */}
      <div className={`
        relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-5
        ${getIconStyles()}
        group-hover:scale-110 transition-transform duration-300 border border-white/5
      `}>
        <Icon />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0 relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-zinc-100 font-bold text-lg tracking-tight truncate group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <span className={`
            px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border
            ${getBadgeStyles()}
          `}>
            {item.version.toLowerCase().includes('release') ? item.version : `v${item.version}`}
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
        {isXash || isTornado ? <Download size={18} /> : <ChevronRight size={18} />}
      </div>
    </a>
  );
};
