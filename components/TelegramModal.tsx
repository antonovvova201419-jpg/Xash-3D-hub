import React from 'react';
import { Send, X, BellRing } from 'lucide-react';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubscribe = () => {
    window.open('https://t.me/sborki_CS', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#09090b] border border-zinc-800/80 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden relative group">
        
        {/* Glow effect */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-600/20 blur-[60px] rounded-full pointer-events-none"></div>

        <div className="p-8 flex flex-col items-center text-center relative z-10">
          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)] border border-green-500/20">
            <Send className="w-8 h-8 text-green-400 ml-1" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Не пропусти!</h2>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Подпишись на <span className="text-green-400 font-semibold">@sborki_CS</span> в Telegram для доступа к эксклюзивным обновлениям.
          </p>

          <div className="w-full space-y-3">
            <button
              onClick={handleSubscribe}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/20 active:scale-[0.98]"
            >
              <BellRing size={18} />
              Перейти в канал
            </button>
            
            <button
              onClick={onClose}
              className="w-full text-zinc-500 hover:text-zinc-300 text-sm font-medium py-3 transition-colors"
            >
              Нет, спасибо
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
