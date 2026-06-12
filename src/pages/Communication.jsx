import React, { useEffect } from 'react';
import { Figma, Users, Calendar, ArrowRight, Youtube } from 'lucide-react';

const Communication = ({ isDarkMode }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 title-main flex items-center justify-center gap-4">
            <MegaphoneIcon size={48} />
            COMMUNICATION
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-content">
            Stratégie de contenu, UI/UX Design et conception d'expériences numériques.
          </p>
        </div>

        <div className="space-y-16">

            {/* --- PROJET 1 : THE LAST DROP --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-zinc-800 min-h-[300px] relative group flex items-center justify-center border-b lg:border-b-0 lg:border-r border-orange-500/30">
                   <iframe 
                     className="w-full h-full aspect-video"
                     src="https://www.youtube.com/embed/wt8ckrZ3F7A" 
                     title="The Last Drop - Campagne Vidéo" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500"><Calendar size={14} /> 2025 (BUT MMI)</span>
                    <span className="flex items-center gap-2 text-blue-400"><Users size={14} /> Projet de Groupe</span>
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>The Last Drop (O.N.G.)</h2>
                  <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-wide">Prévention & Stratégie Digitale</h3>
                  <div className={`space-y-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p><strong>Contexte :</strong> Stratégie de communication pour une ONG luttant contre la banalisation de l'alcool.</p>
                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>UI/UX Design : Maquettage Figma (site web).</li>
                        <li>Vidéo : Réalisation de spots de sensibilisation.</li>
                        <li>Social Media : Podcast "The Limpid Drop".</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="https://www.figma.com/proto/Y5zB2ESwqNzINVZuGG2pXq/Maquette---Wireframe?node-id=1-3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors">
                      <Figma size={16} /> Figma <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PROJET 2 : ECO-TASTY --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-zinc-800 min-h-[300px] relative overflow-hidden group">
                   <img src="/images/Eco.webp" alt="Eco-Tasty" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 border-l-4 border-green-500 backdrop-blur-sm">
                      <p className="text-white font-bold uppercase tracking-widest text-xs">Maquette Mobile</p>
                   </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500"><Calendar size={14} /> 2024 (BUT MMI)</span>
                    <span className="flex items-center gap-2 text-blue-400"><Users size={14} /> Projet de Groupe</span>
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Eco-Tasty</h2>
                  <h3 className="text-green-500 font-bold mb-6 text-sm uppercase tracking-wide">Lutte contre le gaspillage</h3>
                  <div className={`space-y-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>Conception d'une application de recettes basées sur le contenu du frigo.</p>
                  </div>
                  <div className="mt-8">
                    <a href="https://www.figma.com/proto/xYjT3zUiADgmM5jDIpdNzK/Eco-tasty?node-id=95-58" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors">
                      <Figma size={16} /> Figma <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PROJET 3 : JESS ANDERSON --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-zinc-800 min-h-[300px] relative group flex items-center justify-center">
                   <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/qDnH75GaW-8" title="Jess Anderson" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500"><Calendar size={14} /> 2025 (BUT MMI)</span>
                    <span className="flex items-center gap-2 text-blue-400"><Users size={14} /> Projet de Groupe</span>
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Jess Anderson</h2>
                  <h3 className="text-purple-500 font-bold mb-6 text-sm uppercase tracking-wide">Interview & Post-Production</h3>
                  <div className={`space-y-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>Réalisation complète d'une interview fictive avec montage sur DaVinci Resolve.</p>
                  </div>
                  <div className="mt-8">
                    <a href="https://youtu.be/qDnH75GaW-8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors">
                      <Youtube size={16} /> YouTube <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const MegaphoneIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
);

export default Communication; 