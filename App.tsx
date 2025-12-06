import React, { useState, useEffect } from 'react';
import { TelegramModal } from './components/TelegramModal';
import { DownloadCard } from './components/DownloadCard';
import { XASH_DOWNLOADS, OTHER_DOWNLOADS, TORNADO_DOWNLOADS } from './constants';
import { Gamepad2, Layers, Zap, Rocket, BookOpen, ExternalLink, FolderOpen, FileCheck } from 'lucide-react';

type Tab = 'fwgs' | 'tornado' | 'other' | 'guide';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('fwgs');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-orange-500 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className={`absolute top-[40%] left-[50%] -translate-x-1/2 w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px] transition-opacity duration-1000 ${activeTab === 'tornado' ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-[10%] left-[20%] w-[25%] h-[25%] bg-green-600/10 rounded-full blur-[120px] transition-opacity duration-1000 ${activeTab === 'guide' ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <TelegramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <header className="relative pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl shadow-orange-500/10 ring-1 ring-white/10">
            <Gamepad2 size={40} className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 tracking-tight mb-6">
            Xash3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Hub</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
            Ultimate repository for Xash3D FWGS engine versions and classic shooter clients.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-zinc-900/60 backdrop-blur-md rounded-xl border border-white/5 ring-1 ring-white/5 max-w-fit mx-auto">
            <button
              onClick={() => setActiveTab('fwgs')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'fwgs' 
                  ? 'bg-zinc-800 text-white shadow-lg ring-1 ring-white/10' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Zap size={16} className={activeTab === 'fwgs' ? 'text-orange-400' : ''} />
              FWGS
            </button>
            <button
              onClick={() => setActiveTab('tornado')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'tornado' 
                  ? 'bg-zinc-800 text-white shadow-lg ring-1 ring-white/10' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Rocket size={16} className={activeTab === 'tornado' ? 'text-purple-400' : ''} />
              Tornado
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'other' 
                  ? 'bg-zinc-800 text-white shadow-lg ring-1 ring-white/10' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Layers size={16} className={activeTab === 'other' ? 'text-blue-400' : ''} />
              Files
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'guide' 
                  ? 'bg-zinc-800 text-white shadow-lg ring-1 ring-white/10' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <BookOpen size={16} className={activeTab === 'guide' ? 'text-green-400' : ''} />
              Guide
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-2xl relative z-10 min-h-[400px]">
        
        {activeTab === 'fwgs' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 px-2 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Zap className="text-orange-500 w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">Xash3D Core</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {XASH_DOWNLOADS.map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tornado' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 px-2 mb-4">
               <div className="p-2 bg-purple-500/10 rounded-lg">
                <Rocket className="text-purple-500 w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">Tornado Engine</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {TORNADO_DOWNLOADS.map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-200/60 text-sm text-center">
              Official Release • Stable Build
            </div>
          </div>
        )}

        {activeTab === 'other' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 px-2 mb-4">
               <div className="p-2 bg-blue-500/10 rounded-lg">
                <Layers className="text-blue-500 w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">Modules & Tools</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {OTHER_DOWNLOADS.map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 px-2 mb-4">
               <div className="p-2 bg-green-500/10 rounded-lg">
                <BookOpen className="text-green-500 w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">Инструкция</h2>
            </div>

            {/* Resource Link */}
            <a 
              href="https://gamebanana.com/games/4254" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-white/5 hover:border-green-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-1 group-hover:text-green-300">Где скачать моды?</h3>
                  <p className="text-zinc-400 text-sm">Рекомендуем GameBanana - крупнейший архив модов для CS 1.6</p>
                </div>
                <ExternalLink className="text-zinc-500 group-hover:text-green-400 transition-colors" size={24} />
              </div>
            </a>

            {/* Steps */}
            <div className="space-y-4">
              
              {/* Path Info */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 flex items-start gap-4">
                <div className="p-2 bg-zinc-800 rounded-lg shrink-0">
                  <FolderOpen size={20} className="text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-200 text-sm mb-1">Корневая папка</h4>
                  <code className="text-xs bg-black/40 px-2 py-1 rounded text-orange-400 font-mono break-all">
                    /storage/emulated/0/xash/
                  </code>
                </div>
              </div>

              {/* Weapons */}
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-xs font-bold border border-green-500/20">1</span>
                  <h3 className="font-bold text-zinc-100">Оружие (Weapon Models)</h3>
                </div>
                <div className="space-y-2 pl-9">
                  <p className="text-sm text-zinc-400">Файлы с расширением <span className="text-zinc-200">.mdl</span> (например, <span className="italic">v_ak47.mdl</span>)</p>
                  <div className="text-xs flex items-center gap-2 text-zinc-500">
                    <FileCheck size={14} />
                    <span>Кидать в:</span>
                    <code className="bg-black/30 px-1.5 py-0.5 rounded text-zinc-300">xash/cstrike/models/</code>
                  </div>
                </div>
              </div>

              {/* Players */}
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-xs font-bold border border-green-500/20">2</span>
                  <h3 className="font-bold text-zinc-100">Игроки (Player Models)</h3>
                </div>
                <div className="space-y-2 pl-9">
                  <p className="text-sm text-zinc-400">Папки с именем персонажа (например, <span className="italic">arctic</span>, <span className="italic">sas</span>)</p>
                  <div className="text-xs flex items-center gap-2 text-zinc-500">
                    <FileCheck size={14} />
                    <span>Кидать в:</span>
                    <code className="bg-black/30 px-1.5 py-0.5 rounded text-zinc-300">xash/cstrike/models/player/</code>
                  </div>
                </div>
              </div>

              {/* Textures & Sprays */}
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-xs font-bold border border-green-500/20">3</span>
                  <h3 className="font-bold text-zinc-100">Спреи и Текстуры</h3>
                </div>
                <div className="space-y-2 pl-9">
                  <p className="text-sm text-zinc-400">Файл спрея <span className="text-zinc-200">tempdecal.wad</span> или текстуры <span className="text-zinc-200">.wad</span></p>
                  <div className="text-xs flex items-center gap-2 text-zinc-500">
                    <FileCheck size={14} />
                    <span>Кидать в:</span>
                    <code className="bg-black/30 px-1.5 py-0.5 rounded text-zinc-300">xash/cstrike/</code>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-4" />
            <p className="font-bold text-zinc-300 tracking-wider text-sm">2024 • XASHLAUNCHER</p>
            <p className="text-xs text-zinc-600 font-medium bg-zinc-900/50 px-3 py-1 rounded-full border border-white/5">
              ! These are not official clients
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
