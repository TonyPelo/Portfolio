import React, { useEffect } from 'react';
import { Figma, Users, Calendar, ArrowRight, Youtube, Clapperboard, Video } from 'lucide-react';

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

        <div className="space-y-16"> {/* CONTENEUR DES PROJETS */}

            {/* --- PROJET 1 : THE LAST DROP (NOUVEAU) --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* VISUEL : VIDÉO YOUTUBE */}
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

                {/* CONTENU */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500">
                      <Calendar size={14} /> 2024 (SAE 302)
                    </span>
                    <span className="flex items-center gap-2 text-blue-400">
                      <Users size={14} /> Projet de Groupe
                    </span>
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    The Last Drop (O.N.G.)
                  </h2>
                  <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-wide">
                    Prévention & Stratégie Digitale
                  </h3>

                  <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>
                      <strong>Contexte :</strong> Création de la stratégie de communication numérique d'une ONG fictive luttant contre la banalisation de l'alcool. Notre but : accompagner sans culpabiliser et changer les mentalités en brisant les stéréotypes.
                    </p>
                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <p className="font-bold text-orange-500">Mes réalisations sur le projet :</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>UI/UX Design :</strong> Maquettage complet sur Figma d'un site web aux couleurs rassurantes avec une navigation orientée sur l'aide et l'écoute.</li>
                        <li><strong>Campagne Vidéo :</strong> Réalisation de courts-métrages mettant en scène des profils à succès (Prix Nobel, Champions) fiers de leur abstinence.</li>
                        <li><strong>Social Media :</strong> Stratégie de contenu ("Dire non, c’est déjà une victoire") et annonce du podcast <em>The Limpid Drop</em>.</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["UI/UX Design", "Figma", "Stratégie Digitale", "Montage Vidéo", "Direction Artistique"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a 
                      href="https://www.figma.com/proto/Y5zB2ESwqNzINVZuGG2pXq/Maquette---Wireframe?node-id=1-3&t=aUXrpMKzAguzAcQj-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                    >
                      <Figma size={16} /> Maquettes Figma
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PROJET 2 : ECO-TASTY --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* VISUEL */}
                <div className="bg-zinc-800 min-h-[300px] relative overflow-hidden group">
                   <img 
                     src="/images/Eco.webp" 
                     alt="Maquette Eco-Tasty" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.parentNode.style.backgroundColor = '#18181b';
                       e.target.parentNode.innerHTML += '<div class="absolute inset-0 flex items-center justify-center text-gray-500">Image non trouvée</div>';
                     }} 
                   />
                   
                   {/* Label en bas */}
                   <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 border-l-4 border-green-500 backdrop-blur-sm">
                      <p className="text-white font-bold uppercase tracking-widest text-xs">Maquette Application Mobile</p>
                   </div>
                </div>

                {/* CONTENU */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500">
                      <Calendar size={14} /> 2024 (BUT MMI)
                    </span>
                    <span className="flex items-center gap-2 text-blue-400">
                      <Users size={14} /> Projet de Groupe
                    </span>
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Eco-Tasty
                  </h2>
                  <h3 className="text-green-500 font-bold mb-6 text-sm uppercase tracking-wide">
                    Lutte contre le gaspillage alimentaire
                  </h3>

                  <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>
                      <strong>Contexte :</strong> Conception d'une solution numérique innovante répondant à une problématique écologique actuelle. L'application permet de scanner son frigo pour générer des recettes personnalisées et éviter le gaspillage.
                    </p>
                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <p className="font-bold text-orange-500">Mes réalisations sur le projet :</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Conception de l'architecture de l'information et des parcours utilisateurs (User Flow).</li>
                        <li>Création de maquettes interactives et prototypage haute-fidélité sur <strong>Figma</strong>.</li>
                        <li>Design de l'interface (UI) : choix typographiques, palette colorimétrique et composants graphiques.</li>
                        <li>Collaboration en équipe et itérations basées sur des tests utilisateurs.</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Figma", "UI Design", "UX Research", "Prototypage", "Travail Collaboratif"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://www.figma.com/proto/xYjT3zUiADgmM5jDIpdNzK/Eco-tasty?node-id=95-58&t=qRGgIEwKjz8v3FOs-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                    >
                      <Figma size={16} /> Voir la maquette
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PROJET 3 : INTERVIEW JESS ANDERSON --- */}
            <div className={`border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* VISUEL : VIDÉO YOUTUBE */}
                <div className="bg-zinc-800 min-h-[300px] relative group flex items-center justify-center">
                   <iframe 
                     className="w-full h-full aspect-video"
                     src="https://www.youtube.com/embed/qDnH75GaW-8" 
                     title="Interview Jess Anderson" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                </div>

                {/* CONTENU */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-orange-500">
                      <Calendar size={14} /> 2023 (BUT MMI)
                    </span>
                    <span className="flex items-center gap-2 text-blue-400">
                      <Users size={14} /> Projet de Groupe
                    </span>
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Interview : Jess Anderson
                  </h2>
                  <h3 className="text-purple-500 font-bold mb-6 text-sm uppercase tracking-wide">
                    Scénarisation, Tournage & Post-Production
                  </h3>

                  <div className={`space-y-6 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>
                      <strong>Contexte :</strong> Réalisation d'une interview promotionnelle fictive (1m30) pour un artiste imaginaire, "Jess Anderson". L'objectif était de créer un storytelling cohérent, de la genèse du personnage à la post-production finale.
                    </p>

                    <div className="border-l-2 border-orange-500/50 pl-4 space-y-2">
                      <p className="font-bold text-orange-500">Mes réalisations sur le projet :</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Scénarisation :</strong> Création de l'univers de l'artiste et rédaction du script de l'interview.</li>
                        <li><strong>Tournage :</strong> Gestion technique (caméra, lumière, son) et direction d'acteur en studio.</li>
                        <li><strong>Montage & Étalonnage :</strong> Post-production complète sur <strong>DaVinci Resolve</strong>.</li>
                        <li><strong>Motion Design :</strong> Création et incrustation d'éléments graphiques 2D animés (habillage, titrages) via <strong>Fusion</strong> et <strong>Illustrator</strong>.</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["DaVinci Resolve", "Fusion", "Illustrator", "Storytelling", "Tournage", "Montage Vidéo"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs border ${isDarkMode ? 'border-zinc-700 text-zinc-400' : 'border-gray-200 text-gray-500'}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://youtu.be/qDnH75GaW-8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                    >
                      <Youtube size={16} /> Voir sur YouTube
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

// Composant icône Megaphone
const MegaphoneIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
);

export default Communication;