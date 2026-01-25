import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Graphique from './pages/Graphique';
import Communication from './pages/Communication';
import Jeu from './pages/Jeu';
import Mentions from './pages/Mentions'; // 1. IMPORT AJOUTÉ

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 font-sans ${
        isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'
      }`}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&display=swap');
          h1, .title-main { font-family: 'Orbitron', sans-serif; }
          h2, h3, h4, .title-section, nav, button { font-family: 'Rajdhani', sans-serif; }
          p, .text-content { font-family: 'Share Tech Mono', monospace; }
        `}</style>

        <div 
          className="fixed inset-0 opacity-5 pointer-events-none bg-repeat z-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
          }}
        />

        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} scrolled={scrolled} />

        <main className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/graphique" element={<Graphique isDarkMode={isDarkMode} />} />
            <Route path="/communication" element={<Communication isDarkMode={isDarkMode} />} />
            <Route path="/jeu" element={<Jeu isDarkMode={isDarkMode} />} />
            <Route path="/mentions" element={<Mentions isDarkMode={isDarkMode} />} /> {/* 2. ROUTE AJOUTÉE */}
          </Routes>
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;