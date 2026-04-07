import React, { useEffect } from 'react';
import { Code2, Server, Database, ShoppingCart, ArrowRight } from 'lucide-react';

const Developpement = ({ isDarkMode }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 title-main flex items-center justify-center gap-4">
            <Code2 size={48} />
            DÉVELOPPEMENT WEB
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-content">
            Création d&apos;applications web sur-mesure, architecture back-end et optimisation SEO technique.
          </p>
        </div>

        <div className="space-y-16">

            {/* --- PROJET : FIGURA --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* VISUEL */}
                <div className="bg-zinc-800 min-h-[300px] relative overflow-hidden group">
                   
                   <img 
                     src="/images/figura.webp" 
                     alt="Site E-commerce Figura" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                     onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.className += " flex items-center justify-center bg-zinc-800";
                        e.target.parentNode.innerHTML += '<div class="text-center p-4"><p class="text-orange-500 font-bold">Image figura.webp manquante</p><p class="text-xs mt-2">Ajoute une capture du site dans public/images</p></div>';
                     }}
                   />
                   
                   <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 border-l-4 border-orange-500 backdrop-blur-sm">
                      <p className="text-white font-bold uppercase tracking-widest text-xs">Full-Stack & E-commerce</p>
                   </div>
                </div>

                {/* CONTENU */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500">
                      <Server size={14} /> PHP / Natif
                    </span>
                    <span className="flex items-center gap-2 text-gray-400">
                      <Database size={14} /> SQL
                    </span>
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Figura
                  </h2>
                  <h3 className="text-orange-500 font-bold mb-6 text-sm uppercase tracking-wide">
                    Plateforme E-commerce Premium &quot;From Scratch&quot;
                  </h3>

                  <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    
                    <p>
                      <strong>Contexte :</strong> Conception et développement intégral d&apos;une boutique en ligne sur-mesure ciblant des acheteurs de produits de luxe (paniers moyens &gt; 300€). L&apos;objectif était de maîtriser toute la chaîne technique, du serveur à l&apos;interface utilisateur.
                    </p>

                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <p className="font-bold text-orange-500">Mes réalisations techniques :</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Architecture Full-Stack :</strong> Développement de l&apos;interface (HTML5/CSS3/JS) et de la logique serveur en <strong>PHP</strong>.</li>
                        <li><strong>Base de données :</strong> Modélisation et requêtes <strong>SQL</strong> pour la gestion dynamique du catalogue, des stocks et des sessions sécurisées.</li>
                        <li><strong>Optimisation CRO :</strong> Programmation d&apos;un tunnel d&apos;achat &quot;sans friction&quot; permettant de commander en moins de 3 minutes.</li>
                        <li><strong>SEO Technique :</strong> Intégration du référencement au cœur du code (hiérarchie sémantique, balisage des médias, longue traîne).</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["PHP", "JavaScript", "SQL", "HTML/CSS", "SEO On-Page", "CRO", "E-commerce"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://figura.alwaysdata.net/Figura/index.php" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                    >
                      <ShoppingCart size={16} /> Visiter le site web
                      <ArrowRight size={16} />
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

export default Developpement;