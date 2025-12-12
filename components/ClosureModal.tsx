import React from 'react';
import { Ban } from 'lucide-react';

interface ClosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClosureModal: React.FC<ClosureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#09090b] border border-red-500/20 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden relative group">
        
        {/* Glow effect */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 blur-[60px] rounded-full pointer-events-none"></div>

        <div className="p-8 flex flex-col items-center text-center relative z-10">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)] border border-red-500/20">
            <Ban className="w-8 h-8 text-red-500" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Сайт закрыт</h2>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Поддержка проекта прекращена. Обновлений больше не будет.
          </p>

          <button
            onClick={onClose}
            className="w-full bg-red-900/20 hover:bg-red-900/40 text-red-200 border border-red-500/20 font-semibold py-3.5 px-4 rounded-xl transition-all duration-200"
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};