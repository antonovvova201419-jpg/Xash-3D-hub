import React from 'react';
import { Ban, AlertTriangle } from 'lucide-react';

interface ClosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClosureModal: React.FC<ClosureModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl cursor-not-allowed">
      <div className="bg-[#09090b] border border-red-500/20 rounded-3xl shadow-[0_0_60px_rgba(220,38,38,0.2)] max-w-md w-full overflow-hidden relative">
        
        {/* Top Glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="p-8 flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.15)] border border-red-500/10">
            <Ban className="w-10 h-10 text-red-500" />
          </div>

          <h2 className="text-3xl font-black text-zinc-100 mb-2 uppercase tracking-tight">Сайт Закрыт</h2>
          
          <div className="w-full mt-6 bg-red-900/10 border border-red-500/10 rounded-xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2 text-red-400">
                <AlertTriangle size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Причина</span>
            </div>
            <p className="text-lg text-zinc-200 font-medium leading-relaxed">
              Поддержка проекта прекращена. Обновлений больше не будет.
            </p>
          </div>
          
          <div className="mt-8 flex gap-2 justify-center opacity-30">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
