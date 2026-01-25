import React, { useEffect } from 'react';
import { Palette, Layers, Image as ImageIcon, Calendar, User, ArrowRight, PenTool } from 'lucide-react';

const Graphique = ({ isDarkMode }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 title-main flex items-center justify-center gap-4">
            <Palette size={48} />
            DESIGN GRAPHIQUE
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-content">
            Composition visuelle, mise en page et conception de supports imprimés.
          </p>
        </div>

        {/* --- PROJET 1 : ROMAN CIESLEWICZ --- */}
        <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* PARTIE GAUCHE : VISUEL */}
            <div className="bg-zinc-800 min-h-[500px] relative overflow-hidden group flex items-center justify-center p-8">
               
               {/* IMAGE DU PROJET */}
               <img 
                 src="/images/URSS.png" 
                 alt="Reproduction affiche Roman Cieslewicz - L'espace urbain en URSS" 
                 className="w-full h-auto max-h-[600px] object-contain shadow-2xl transition-transform duration-500 group-hover:scale-105"
                 onError={(e) => {
                   e.target.style.display = 'none'; 
                   e.target.parentNode.innerHTML += '<div class="text-gray-500 flex flex-col items-center"><span class="text-4xl">🖼️</span><span class="text-xs mt-2">Image non trouvée</span></div>';
                 }}
               />

               {/* Label discret en bas */}
               <div className="absolute bottom-4 left-4 bg-black/80 p-3 border-l-4 border-orange-500 backdrop-blur-sm">
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Affiche Culturelle</p>
               </div>
            </div>

            {/* PARTIE DROITE : CONTENU DÉTAILLÉ (Critères Jury) */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              
              {/* TAGS EN-TÊTE */}
              <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2 text-orange-500">
                  <Calendar size={14} /> 2024 (BUT MMI)
                </span>
                <span className="flex items-center gap-2 text-blue-400">
                  <User size={14} /> Projet Individuel
                </span>
              </div>

              <h2 className={`text-3xl font-bold mb-2 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                L'Espace Urbain en URSS
              </h2>
              <h3 className="text-orange-500 font-bold mb-6 text-sm uppercase tracking-wide">
                Reproduction d'affiche (Roman Cieslewicz)
              </h3>

              {/* DESCRIPTION & COMPÉTENCES */}
              <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                
                <p>
                  <strong>Contexte :</strong> Dans le cadre du module de Création Numérique, analyse graphique et reproduction fidèle de l'affiche de l'exposition "L'espace urbain en URSS" (Centre Pompidou, 1978) réalisée par le graphiste Roman Cieslewicz.
                </p>

                {/* Liste des tâches avec vocabulaire technique (Illustrator) */}
                <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                  <p className="font-bold text-orange-500">Compétences techniques mises en œuvre :</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Photomontage vectoriel :</strong> Intégration et détourage d'éléments photographiques (statue, architecture) via l'utilisation complexe de <em>masques d'écrêtage</em> sur Illustrator.</li>
                    <li><strong>Composition & Mise en page :</strong> Respect de la grille de composition originale et hiérarchisation des éléments visuels (style Constructiviste).</li>
                    <li><strong>Typographie :</strong> Gestion des graisses, des approches et de l'alignement pour reproduire la titraille impactante de l'œuvre originale.</li>
                    <li><strong>Gestion des calques :</strong> Organisation rigoureuse pour séparer les plans (Premier plan statue / Arrière-plan urbain).</li>
                  </ul>
                </div>

                {/* Mots-Clés / Outils */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Adobe Illustrator", "Masques d'écrêtage", "Mise en page", "Photomontage", "Print"].map((tag, i) => (
                    <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* BOUTON D'ACTION */}
              <div className="mt-8">
                <a 
                  href="/images/URSS.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-orange-500 hover:text-black text-white font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors border border-zinc-700"
                >
                  <ImageIcon size={16} /> Voir l'affiche HD
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Graphique;