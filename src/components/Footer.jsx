import React from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORT Link

const Footer = ({ isDarkMode, scrollToTop }) => {
  const handleScrollTop = () => {
    if (scrollToTop) {
      scrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t-2 py-8 mt-16 transition-colors duration-300 ${
      isDarkMode ? 'border-orange-500/30 bg-black' : 'border-orange-500/30 bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        
        {/* LOGO CLIQUABLE */}
        <div className="text-center">
          <button 
            onClick={handleScrollTop}
            className="text-orange-500 text-2xl mb-1 hover:opacity-80 transition-opacity cursor-pointer font-bold"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            title="Retour en haut"
          >
            <span className="text-3xl">λ</span>zad Oztopal<span className="text-orange-500">.</span>
          </button>
          <p className={`text-xs uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            Portfolio 2026 
          </p>
        </div>

        <div className={`w-24 h-px ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}></div>

        {/* LIENS ACTIFS */}
        <div className={`flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-center ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
           <span>© 2026 Azad Oztopal. Tous droits réservés.</span>
           
           <span className="hidden md:inline">•</span>
           
           {/* LIEN VERS MENTIONS LEGALES */}
           <Link to="/mentions" className="cursor-pointer hover:text-orange-500 transition-colors">
             Mentions Légales
           </Link>
           
           <span className="hidden md:inline">•</span>
           
           {/* LIEN VERS POLITIQUE (Même page, section ancre si besoin, ou juste la page globale) */}
           <Link to="/mentions" className="cursor-pointer hover:text-orange-500 transition-colors">
             Politique de confidentialité
           </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;