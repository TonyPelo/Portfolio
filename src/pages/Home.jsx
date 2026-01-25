import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, Linkedin, Palette, Gamepad2, Megaphone, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Home = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(null);
  
  // États pour le scroll
  const [isPaused, setIsPaused] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- LISTE DES COMPÉTENCES (LOGOS) ---
  const skills = [
    { name: 'Figma', img: '/logos/Figma.png' },
    { name: 'HTML', img: '/logos/HTML.png' },
    { name: 'CSS', img: '/logos/CSS.png' },
    { name: 'React', img: '/logos/React.png' },
    { name: 'Photoshop', img: '/logos/Photoshop.png' },
    { name: 'Illustrator', img: '/logos/illustrator.png' },
    { name: 'C#', img: '/logos/C.png' }, // Vérifie bien si ton fichier s'appelle C.png ou C#.png
    { name: 'MariaDB', img: '/logos/MariaDB.png' }, 
  ];

  const categories = [
    { title: "Graphique", icon: <Palette size={40} />, path: "/graphique", desc: "Identité visuelle, UI Design & Print" },
    { title: "Jeu Vidéo", icon: <Gamepad2 size={40} />, path: "/jeu", desc: "Game Design, Level Design & Source 2" },
    { title: "Communication", icon: <Megaphone size={40} />, path: "/communication", desc: "Stratégie digitale & Création de contenu" }
  ];

  // --- SCROLL VERS CONTACT ---
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // --- LOGIQUE SCROLL AUTOMATIQUE ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId;
    const speed = 1; 
    const step = () => {
      if (!isPaused && !isDown && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
           scrollContainer.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };
    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDown]); 

  // --- GESTION SOURIS ---
  const handleMouseDown = (e) => { setIsDown(true); setIsPaused(true); setStartX(e.pageX - scrollRef.current.offsetLeft); setScrollLeft(scrollRef.current.scrollLeft); };
  const handleMouseLeave = () => { setIsDown(false); setIsPaused(false); };
  const handleMouseUp = () => { setIsDown(false); };
  const handleMouseMove = (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - scrollRef.current.offsetLeft; const walk = (x - startX) * 2; scrollRef.current.scrollLeft = scrollLeft - walk; };
  const handleMouseEnter = () => { setIsPaused(true); };

  return (
    <div className="animate-in fade-in duration-500">
      {/* SECTION HERO & PRÉSENTATION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mb-12 sm:mb-16">
          <div className="relative mx-auto lg:mx-0">
            
            {/* CERCLE PHOTO DE PROFIL */}
            <div className={`w-64 h-64 rounded-full border-4 border-orange-500 shadow-lg shadow-orange-500/50 overflow-hidden flex items-center justify-center ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
              <img 
                src="/images/profil.png" 
                alt="Portrait Azad" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si l'image ne charge pas, on remet l'émoji en secours
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="text-6xl">👤</div>';
                }}
              />
            </div>
            
            <div className="absolute bottom-2 left-48 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-lg shadow-orange-500/50">λ</div>
          </div>

          <div className="max-w-md">
            <h3 className="text-orange-500 uppercase tracking-widest text-xs border-l-4 border-orange-500 pl-3 mb-3 title-section">Projet Phare</h3>
            <div onClick={() => navigate('/jeu')} className={`border-2 border-orange-500/30 overflow-hidden hover:border-orange-500 transition-all hover:shadow-xl hover:shadow-orange-500/20 group cursor-pointer ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
              <div className={`h-32 bg-gradient-to-br flex items-center justify-center text-5xl border-b-2 border-orange-500/30 group-hover:border-orange-500 transition-colors ${isDarkMode ? 'from-orange-500/20 to-black' : 'from-orange-500/20 to-gray-100'}`}>🎮</div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 bg-orange-500 animate-pulse"></div><span className="text-orange-500 uppercase text-xs tracking-widest">Jeu</span></div>
                <h4 className={`text-base font-bold mb-2 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Game Design</h4>
                <p className={`text-xs mb-3 text-content leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Conception de jeux interactifs.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* PRESENTATION TEXTE - VERSION JURY */}
        <div className={`border-2 border-orange-500/30 p-6 sm:p-8 relative shadow-xl shadow-orange-500/10 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
          <div className={`absolute -top-3 left-4 sm:left-8 px-3 py-1 border border-orange-500 text-orange-500 text-xs uppercase tracking-widest ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>Présentation</div>
          
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
             Designer d'Expérience & Développeur Front-End
          </h2>
          
          <div className={`leading-relaxed mb-4 text-sm sm:text-base text-content ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="mb-4 leading-relaxed border-l-2 border-orange-500 pl-3">
              <span className={`font-bold block text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
                BUT2 Métiers du Multimédia et de l'Internet (MMI)
              </span>
              <span className="block text-orange-500 font-bold">IUT de Bobigny</span>
              <span className="italic">Parcours Stratégie de communication numérique et Design d'expérience.</span>
            </p>

            <p className="mb-4 leading-relaxed">
              Passionné par la création d'expériences digitales uniques, je combine design graphique et développement web pour donner vie à des projets innovants.
            </p>
            
            <p className="mb-4 leading-relaxed">
              Mon approche allie esthétique industrielle et fonctionnalité moderne. Spécialisé dans la communication visuelle, le développement front-end et le game design, j'apporte une vision créative et technique à chaque projet.
            </p>
            
            <p className="font-bold text-orange-500 uppercase tracking-wide">
               ⚡ Recherche de stage : Avril à Juin 2026.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION DOMAINES D'EXPERTISE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
         <h3 className="text-orange-500 uppercase tracking-widest text-sm border-l-4 border-orange-500 pl-4 mb-8">Domaines d'expertise</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <div key={index} onClick={() => navigate(cat.path)} className={`group border-2 border-orange-500/30 p-8 cursor-pointer transition-all hover:border-orange-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 relative overflow-hidden ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
                 <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300"></div>
                 <div className="text-orange-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                 <h4 className={`text-xl font-bold uppercase mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cat.title}</h4>
                 <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cat.desc}</p>
                 <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Découvrir <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-2 transition-transform"/></div>
              </div>
            ))}
         </div>
      </section>

      {/* SECTION SKILLS (IMAGES) */}
      <section className={`border-y-2 border-orange-500/30 py-12 my-16 relative ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-orange-500 uppercase tracking-widest text-sm border-l-4 border-orange-500 pl-4 mb-8">Compétences Techniques</h3>
          <div className="relative">
            <div ref={scrollRef} className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide cursor-grab ${isDown ? 'cursor-grabbing active' : ''}`} style={{ scrollBehavior: 'auto', userSelect: 'none' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
              
              {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                <div key={index} className={`flex-shrink-0 w-64 border-2 border-orange-500/30 p-6 text-center hover:border-orange-500 transition-all group ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
                  
                  <div className="h-16 flex items-center justify-center mb-4">
                     <img 
                       src={skill.img} 
                       alt={skill.name} 
                       className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                       onError={(e) => {e.target.style.display='none'}}
                     />
                  </div>

                  <div className={`uppercase tracking-wide text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      </section>

      {/* SECTION CONTACT */}
      <ContactSection isDarkMode={isDarkMode} />
    </div>
  );
};

// --- COMPOSANT CONTACT ---
const ContactSection = ({ isDarkMode }) => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'service_zqv8qoh';
    const TEMPLATE_ID = 'template_kec5uqj';
    const PUBLIC_KEY = 'fTTlqeIiEVbvo4BTh';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className={`border-2 border-orange-500/30 p-6 sm:p-8 relative shadow-xl shadow-orange-500/10 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className={`absolute -top-3 left-8 px-3 py-1 border border-orange-500 text-orange-500 text-xs uppercase tracking-widest ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>Contact</div>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <h3 className={`text-xl mb-4 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Envoyer un message</h3>
            
            <input name="user_name" type="text" required placeholder="Nom" className={`w-full border border-orange-500/30 p-3 outline-none ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`} />
            <input name="user_email" type="email" required placeholder="Email" className={`w-full border border-orange-500/30 p-3 outline-none ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`} />
            <input name="subject" type="text" required placeholder="Objet" className={`w-full border border-orange-500/30 p-3 outline-none ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`} />
            <textarea name="message" rows="4" required placeholder="Message" className={`w-full border border-orange-500/30 p-3 outline-none ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}></textarea>
            
            <p className={`text-[10px] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
               En envoyant ce message, vous acceptez que vos coordonnées soient utilisées pour vous recontacter.
            </p>

            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'success'}
              className={`w-full font-bold py-3 uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                status === 'success' ? 'bg-green-500 text-white' : 
                status === 'error' ? 'bg-red-500 text-white' :
                'bg-orange-500 hover:bg-orange-600 text-black'
              }`}
            >
              {status === 'sending' ? 'Envoi en cours...' : 
               status === 'success' ? <><CheckCircle size={18}/> Message Envoyé</> : 
               status === 'error' ? <><AlertCircle size={18}/> Erreur</> : 
               <><Mail size={18} /> Envoyer</>
              }
            </button>
          </form>
          
          <div className="space-y-6">
             <h3 className={`text-xl mb-4 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Informations</h3>
             <a href="https://www.linkedin.com/in/azad-oztopal/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 border border-orange-500/30 p-4 transition-all hover:border-orange-500 hover:bg-orange-500/5 cursor-pointer ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <div className="p-3 bg-orange-500/10 rounded-full text-orange-500"><Linkedin size={24} /></div>
                <div>
                  <div className="text-orange-500 text-xs uppercase font-bold tracking-widest mb-1">Linkedin</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>linkedin.com/in/azad-oztopal</p>
                </div>
             </a>
             <div className={`flex items-center gap-4 border border-orange-500/30 p-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <div className="p-3 bg-orange-500/10 rounded-full text-orange-500"><Phone size={24} /></div>
                <div>
                  <div className="text-orange-500 text-xs uppercase font-bold tracking-widest mb-1">Téléphone</div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>+33 07 67 24 28 21</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;