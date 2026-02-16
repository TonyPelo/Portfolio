import React, { useEffect } from 'react';
import { Gamepad2, Hammer, Code, Monitor, Boxes, ArrowRight } from 'lucide-react';

const Jeu = ({ isDarkMode }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 title-main flex items-center justify-center gap-4">
            <Gamepad2 size={48} />
            GAME DESIGN
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-content">
            Conception d'environnements interactifs et Level Design sur moteurs de jeu.
          </p>
        </div>

        <div className="space-y-16">

            {/* --- PROJET : S&BOX --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* VISUEL */}
                <div className="bg-zinc-800 min-h-[300px] relative overflow-hidden group">
                   <img 
                     src="/images/S&BOX.png" 
                     alt="Level Design S&box" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                     onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.className += " flex items-center justify-center";
                        e.target.parentNode.innerHTML += '<div class="text-center p-4"><p class="text-orange-500 font-bold">Image S&box manquante</p><p class="text-xs">Ajoute sbox.webp dans public/images</p></div>';
                     }}
                   />
                   
                   <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-black/40 pointer-events-none">
                      {/* Pas d'icône centrale pour laisser voir l'image */}
                   </div>

                   <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 border-l-4 border-blue-500 backdrop-blur-sm">
                      <p className="text-white font-bold uppercase tracking-widest text-xs">Sandbox & Level Design</p>
                   </div>
                </div>

                {/* CONTENU */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500">
                      <Hammer size={14} /> Source 2 Engine
                    </span>
                    <span className="flex items-center gap-2 text-gray-400">
                      <Code size={14} /> C# & Lua
                    </span>
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    S&box (Facepunch)
                  </h2>
                  <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-wide">
                    Création de modes de jeu & Mapping
                  </h3>

                  <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>
                      <strong>Contexte :</strong> Participation à la création de contenu pour <strong>S&box</strong>, le successeur spirituel de Garry's Mod développé par Facepunch Studios. Exploration des capacités du moteur <strong>Source 2</strong>.
                    </p>

                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <p className="font-bold text-orange-500">Compétences techniques :</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Level Design :</strong> Conception de cartes (maps) optimisées avec l'éditeur <strong>Hammer</strong>.</li>
                        <li><strong>Scripting :</strong> Logique de jeu et interactions développées en C#.</li>
                        <li><strong>Éclairage & Rendu :</strong> Gestion des lumières dynamiques et des ambiances (Lighting).</li>
                        <li><strong>Optimisation :</strong> Gestion des ressources pour assurer la fluidité du moteur physique.</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Source 2", "Hammer Editor", "C#", "Game Logic", "Lighting", "3D Environment"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://sbox.facepunch.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                    >
                      <Boxes size={16} /> Voir le projet S&box
                      <ArrowRight size={16} />
                    </a>
                    <p className="mt-4 text-[10px] opacity-50 italic">
                      * S&box et le logo S&box sont des marques déposées de Facepunch Studios Ltd. Projet réalisé à but non lucratif / éducatif.
                    </p>
                  </div>

                </div>
              </div>
            </div>

        </div> 
      </div>
    </div>
  );
};

export default Jeu;