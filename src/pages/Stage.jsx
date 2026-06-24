import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Globe, Instagram, Calendar, MapPin, MonitorSmartphone, Palette, X, Lightbulb, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Stage = ({ isDarkMode }) => {
  const navigate = useNavigate();
  
  // État pour gérer l'image affichée en grand
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`animate-in fade-in duration-500 min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      
      {/* BOUTON RETOUR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <button 
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-orange-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          <ArrowLeft size={16} /> Retour à l'accueil
        </button>
      </div>

      {/* EN-TÊTE DE LA PAGE */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-orange-500 text-orange-500 text-xs uppercase tracking-widest bg-orange-500/10 rounded-full">
          <Calendar size={14} /> Stage de fin d'études • 2025
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 title-main">
          L'OPTICIENNE DE ROMAINVILLE
        </h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed text-content flex items-center justify-center gap-2">
          <MapPin size={18} className="text-orange-500" /> Romainville, France
        </p>
      </header>

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">

        {/* SECTION 1 : LE SITE WEB */}
        <section className={`border-2 border-orange-500/30 overflow-hidden ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-orange-500/30">
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <MonitorSmartphone size={32} />
                <h2 className={`text-2xl font-bold uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Développement Web
                </h2>
              </div>
              <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-wide">
                CMS WordPress & Elementor
              </h3>
              <div className={`space-y-4 leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  Conception et développement complet du site vitrine de la boutique. L'objectif était de créer une plateforme moderne, fluide et responsive pour mettre en valeur les services et les collections de l'opticienne.
                </p>
                <ul className="list-disc pl-4 space-y-2 mt-4 text-orange-500/80 font-bold">
                  <li><span className={isDarkMode ? 'text-gray-300 font-normal' : 'text-gray-700 font-normal'}>Mise en place de l'hébergement et configuration du CMS WordPress.</span></li>
                  <li><span className={isDarkMode ? 'text-gray-300 font-normal' : 'text-gray-700 font-normal'}>Design et intégration des pages via le constructeur Elementor.</span></li>
                  <li><span className={isDarkMode ? 'text-gray-300 font-normal' : 'text-gray-700 font-normal'}>Implémentation d'un système de messagerie et de prise de rendez-vous (RDV).</span></li>
                  <li><span className={isDarkMode ? 'text-gray-300 font-normal' : 'text-gray-700 font-normal'}>Optimisation SEO et responsive design (Mobile/Desktop).</span></li>
                </ul>
              </div>
              <div className="mt-8">
                <a 
                  href="https://opticienne-romainville.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 uppercase tracking-widest text-xs transition-colors"
                >
                  <Globe size={16} /> Visiter le site web
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            
            {/* Visuel illustratif du site */}
            <div className="bg-zinc-800 min-h-[300px] relative flex items-center justify-center p-8">
              <div className="text-center">
                <Globe size={64} className="mx-auto text-orange-500/50 mb-4" />
                <p className="font-mono text-orange-500/70">opticienne-romainville.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : CRÉATION DE CONTENU INSTAGRAM */}
        <section className={`border-2 border-orange-500/30 p-8 md:p-10 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
          <div className="flex items-center gap-3 mb-4 text-orange-500">
            <Palette size={32} />
            <h2 className={`text-2xl font-bold uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Création de Contenus & Social Media
            </h2>
          </div>
          <h3 className="text-purple-500 font-bold mb-8 text-sm uppercase tracking-wide">
            Direction Artistique Instagram
          </h3>
          
          <p className={`mb-10 max-w-3xl leading-relaxed text-content text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Pour dynamiser la communication digitale de la boutique, j'ai conçu plusieurs séries de visuels pour Instagram. L'enjeu était de mettre en valeur les modèles phares (Andybrook, Prada, Ray-Ban, Carrera) avec une identité visuelle élégante et cohérente. Cliquez sur les images pour les agrandir.
          </p>

          {/* GRILLE DES 4 AFFICHES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="group relative overflow-hidden border border-orange-500/20 shadow-lg cursor-pointer"
              onClick={() => setSelectedImage('/images/ANDYBROOK.webp')}
            >
              <img src="/images/ANDYBROOK.webp" alt="Post Instagram Andybrook" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-black/80 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-orange-500 font-bold text-xs uppercase text-center flex items-center justify-center gap-2"><Instagram size={14}/> Andybrook</p>
              </div>
            </div>
            
            <div 
              className="group relative overflow-hidden border border-orange-500/20 shadow-lg cursor-pointer"
              onClick={() => setSelectedImage('/images/PRADA.webp')}
            >
              <img src="/images/PRADA.webp" alt="Post Instagram Prada" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-black/80 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-orange-500 font-bold text-xs uppercase text-center flex items-center justify-center gap-2"><Instagram size={14}/> Prada</p>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden border border-orange-500/20 shadow-lg cursor-pointer"
              onClick={() => setSelectedImage('/images/RAYBAN.webp')}
            >
              <img src="/images/RAYBAN.webp" alt="Post Instagram Ray-Ban" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-black/80 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-orange-500 font-bold text-xs uppercase text-center flex items-center justify-center gap-2"><Instagram size={14}/> Ray-Ban</p>
              </div>
            </div>

            {/* NOUVELLE IMAGE : CARRERA */}
            <div 
              className="group relative overflow-hidden border border-orange-500/20 shadow-lg cursor-pointer"
              onClick={() => setSelectedImage('/images/CARRERA.webp')}
            >
              <img src="/images/CARRERA.webp" alt="Post Instagram Carrera" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full bg-black/80 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-orange-500 font-bold text-xs uppercase text-center flex items-center justify-center gap-2"><Instagram size={14}/> Carrera</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : BILAN ET COMPÉTENCES ACQUISES */}
        <section className={`border-2 border-orange-500/30 p-8 md:p-10 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
          <div className="flex items-center gap-3 mb-8 text-orange-500">
            <Lightbulb size={32} />
            <h2 className={`text-2xl font-bold uppercase title-section ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ce que j'ai appris lors de ce stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Carte 1 */}
            <div className={`p-6 border ${isDarkMode ? 'border-zinc-700 bg-zinc-800/50' : 'border-orange-500/10 bg-orange-500/5'}`}>
              <h3 className="text-orange-500 font-bold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <Palette size={18} /> Direction Artistique
              </h3>
              <p className={`text-sm leading-relaxed text-content ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Pour la gestion des réseaux sociaux, mon rôle s'est concentré sur la direction artistique et la conception de contenus visuels haut de gamme. J'ai élaboré des campagnes digitales spécialement pensées pour Instagram afin de promouvoir les collections de lunettes de créateurs. En utilisant Figma de manière avancée, j'ai réalisé un important travail de post-production : détourage minutieux des montures, intégration dans des décors réalistes, gestion technique de la profondeur de champ et ajustements colorimétriques. L'enjeu majeur a été d'appliquer les codes visuels stricts du luxe (hiérarchie épurée, typographie précise) tout en intégrant l'identité de l'enseigne locale.
              </p>
            </div>

            {/* Carte 2 */}
            <div className={`p-6 border ${isDarkMode ? 'border-zinc-700 bg-zinc-800/50' : 'border-blue-500/10 bg-blue-500/5'}`}>
              <h3 className="text-blue-500 font-bold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <Globe size={18} /> Stratégie Digitale
              </h3>
              <p className={`text-sm leading-relaxed text-content ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Ma mission a également comporté un axe technique central avec la création intégrale de leur site internet sous WordPress. L'objectif était de construire une véritable vitrine en ligne reflétant parfaitement le positionnement qualitatif des produits proposés en magasin. J'ai pris en charge la production et l'intégration de contenus multimédias, et j'ai implémenté divers systèmes interactifs (comme la messagerie et la prise de rendez-vous). En appliquant mes compétences en UX/UI design, j'ai rendu la navigation fluide et esthétique, assurant une cohérence globale avec les réseaux sociaux.
              </p>
            </div>

            {/* Carte 3 */}
            <div className={`p-6 border ${isDarkMode ? 'border-zinc-700 bg-zinc-800/50' : 'border-green-500/10 bg-green-500/5'}`}>
              <h3 className="text-green-500 font-bold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <Users size={18} /> Immersion & Équipe
              </h3>
              <p className={`text-sm leading-relaxed text-content ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Enfin, ce stage a été une véritable immersion dans la vie d'un commerce indépendant, me permettant de lier mes compétences techniques à une réalité de terrain. J'ai travaillé en collaboration directe avec la directrice et les opticiennes, ce qui m'a permis de comprendre les enjeux commerciaux de la boutique pour les retranscrire efficacement en solutions numériques. Ma communication avec l'ensemble de l'équipe n'a cessé de s'améliorer tout au long du stage, me permettant d'ajuster mes propositions créatives aux attentes précises d'une clientèle locale et exigeante.
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* MODALE POUR AFFICHER L'IMAGE EN GRAND */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Vue agrandie" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl border-2 border-orange-500/30"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default Stage;