import React, { useEffect } from 'react';
import { Gamepad2, Hammer, Code, Boxes, ArrowRight } from 'lucide-react';

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
            Conception d'environnements interactifs, Game Logic et Level Design.
          </p>
        </div>

        <div className="space-y-16">

            {/* --- PROJET : RETRY (S&BOX) --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* VISUEL */}
                <div className="bg-zinc-800 min-h-[300px] relative overflow-hidden group">
                   <img 
                     src="/images/S&BOX.png" 
                     alt="Projet Retry sur S&box" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                     onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.className += " flex items-center justify-center bg-zinc-800";
                        e.target.parentNode.innerHTML += '<div class="text-center p-4"><p class="text-orange-500 font-bold">Image S&BOX.png manquante</p></div>';
                     }}
                   />
                   
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
                      <Code size={14} /> C#
                    </span>
                  </div>

                  {/* TITRE MODIFIÉ */}
                  <h2 className={`text-3xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Retry
                  </h2>
                  <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-wide">
                    Projet de jeu développé sur S&box
                  </h3>

                  <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    
                    {/* CONTEXTE MODIFIÉ */}
                    <p>
                      <strong>Contexte :</strong> Développement de <strong>"Retry"</strong>, un projet interactif conçu intégralement au sein de la plateforme S&box (par Facepunch Studios). L'objectif était d'exploiter les outils du moteur Source 2 pour créer une expérience de jeu personnalisée.
                    </p>

                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <p className="font-bold text-orange-500">Mes réalisations sur ce projet :</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Level Design :</strong> Architecture et construction de la carte (map) via l'éditeur <strong>Hammer</strong>.</li>
                        <li><strong>Game Logic (Scripting) :</strong> Programmation des mécaniques de jeu et de la boucle de gameplay en <strong>C#</strong>.</li>
                        <li><strong>Intégration :</strong> Mise en place des assets, de l'éclairage dynamique et de la physique du moteur Source 2.</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Source 2", "Hammer Editor", "C#", "Level Design", "Game Loop"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LIEN MODIFIÉ */}
                  <div className="mt-8">
                    <a 
                      href="https://sbox.facepunch.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                    >
                      <Boxes size={16} /> Site officiel de S&box
                      <ArrowRight size={16} />
                    </a>
                    <p className="mt-4 text-[10px] opacity-50 italic">
                      * Projet "Retry" conçu sur la plateforme S&box. S&box et le logo S&box sont des marques déposées de Facepunch Studios Ltd.
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