import React from 'react';
import { Gamepad2, ArrowRight, ExternalLink, Layers, Box } from 'lucide-react';

const Jeu = ({ isDarkMode }) => {
  // Liste des projets (Uniquement S&box maintenant)
  const projects = [
    {
      title: "S&box",
      category: "Level Design / Source 2",
      description: "Exploration du moteur Source 2 de Valve. Création de maps interactives, gestion de la physique et scripting en C# pour des modes de jeu communautaires. Travail approfondi sur l'éclairage et l'ambiance.",
      image: "/images/S&BOX.png", // Image générique S&box (tu peux remettre la tienne)
      tags: ["Source 2", "Hammer Editor", "C#", "Mapping"],
      link: "https://sbox.facepunch.com/"
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* En-tête de la page */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 title-main flex items-center justify-center gap-4">
            <Gamepad2 size={48} className="animate-bounce" />
            GAME DESIGN
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-content">
            Conception d'environnements virtuels et de mécaniques de jeu.
            Focus sur l'expérience utilisateur et l'immersion.
          </p>
        </div>

        {/* CONTAINER DES PROJETS (Centré) */}
        <div className="flex flex-col items-center justify-center">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group w-full max-w-3xl border-2 border-orange-500/30 overflow-hidden transition-all hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] ${
                isDarkMode ? 'bg-zinc-900' : 'bg-white'
              }`}
            >
              {/* Image du projet */}
              <div className="h-64 sm:h-80 bg-zinc-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Si tu as une image locale, remplace project.image par ton import */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge Catégorie */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border border-orange-500 bg-black text-orange-500`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed text-content ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-3 py-1 border ${
                      isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-600'
                    }`}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bouton Lien */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Voir le projet <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Jeu;