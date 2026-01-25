import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Sun, Moon, Linkedin, Mail } from 'lucide-react';

const Header = ({ isDarkMode, toggleTheme, scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Fonction pour remonter en haut de page lors du clic
  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode ? 'bg-black/95 shadow-lg shadow-orange-500/20' : 'bg-white/95 shadow-lg shadow-orange-500/20'
        : isDarkMode ? 'bg-black/80' : 'bg-white/80'
    }`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b-2 ${
        isDarkMode ? 'border-orange-500/30' : 'border-orange-500/50'
      }`}>
        {/* LOGO (Avec Police Orbitron) */}
        <Link 
          to="/" 
          onClick={handleNavClick}
          style={{ fontFamily: "'Orbitron', sans-serif" }} 
          className={`text-xl sm:text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity cursor-pointer ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <span className="text-orange-500 text-2xl sm:text-3xl">λ</span>
          <span className="hidden sm:inline">zad Oztopal</span>
          <span className="sm:hidden">O.</span>
          <span className="text-orange-500">.</span>
        </Link>

        {/* NAVIGATION DROITE */}
        <nav className="flex items-center gap-2 sm:gap-4">
          
          {/* Menu Réalisations */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center gap-1 sm:gap-2 uppercase tracking-widest text-xs sm:text-sm border px-2 sm:px-4 py-2 transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-orange-500 border-orange-500/30 hover:border-orange-500'
                  : 'text-gray-700 hover:text-orange-500 border-orange-500/50 hover:border-orange-500'
              }`}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
              <span className="hidden sm:inline">Projets</span>
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className={`absolute top-full right-0 mt-2 w-48 border-2 border-orange-500/50 shadow-xl ${
                isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'
              }`}>
                {['Graphique', 'Communication', 'Jeu'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 text-sm uppercase tracking-wide border-b last:border-0 hover:text-orange-500 transition-colors ${
                      isDarkMode ? 'text-gray-300 border-orange-500/20 hover:bg-orange-500/10' : 'text-gray-700 border-orange-500/20 hover:bg-orange-500/10'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* NOUVEAU : Onglet Contact */}
          <a
            href="/#contact"
            className={`flex items-center gap-1 sm:gap-2 uppercase tracking-widest text-xs sm:text-sm border px-2 sm:px-4 py-2 transition-colors ${
              isDarkMode 
                ? 'text-gray-300 hover:text-orange-500 border-orange-500/30 hover:border-orange-500'
                : 'text-gray-700 hover:text-orange-500 border-orange-500/50 hover:border-orange-500'
            }`}
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Contact</span>
          </a>

          {/* Bouton CV */}
          <a
            href="/CV-Azad-Oztopal.pdf"
            download
            className={`flex items-center gap-1 sm:gap-2 uppercase tracking-widest text-xs sm:text-sm border px-2 sm:px-4 py-2 transition-colors ${
              isDarkMode 
                ? 'text-gray-300 hover:text-orange-500 border-orange-500/30 hover:border-orange-500'
                : 'text-gray-700 hover:text-orange-500 border-orange-500/50 hover:border-orange-500'
            }`}
          >
            <Download size={16} />
            <span className="hidden sm:inline">CV</span>
          </a>

          {/* NOUVEAU : Logo LinkedIn (Bouton Carré) */}
          <a
            href="https://www.linkedin.com/in/azad-oztopal/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 border transition-colors ${
              isDarkMode 
                ? 'text-orange-500 border-orange-500/30 hover:bg-orange-500/10'
                : 'text-orange-500 border-orange-500/50 hover:bg-orange-500/10'
            }`}
          >
            <Linkedin size={18} />
          </a>

          {/* Bouton Thème */}
          <button
            onClick={toggleTheme}
            className={`p-2 border transition-colors ${
              isDarkMode 
                ? 'text-orange-500 border-orange-500/30 hover:bg-orange-500/10'
                : 'text-orange-500 border-orange-500/50 hover:bg-orange-500/10'
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;