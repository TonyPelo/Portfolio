import React, { useEffect } from 'react';

const Mentions = ({ isDarkMode }) => {
  
  // Scroll en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-orange-500 title-main text-center">
          Mentions Légales & Confidentialité
        </h1>

        <div className={`p-8 border-2 border-orange-500/30 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
          
          {/* --- MENTIONS LÉGALES --- */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              1. Mentions Légales
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-content">
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Éditeur du site</h3>
                <p>
                  Ce site est édité par <strong>Azad Oztopal</strong>, étudiant en BUT MMI (Métiers du Multimédia et de l'Internet) à l'IUT de Bobigny (Université Paris 13).<br/>
                  Statut : Particulier / Étudiant.<br/>
                  Contact : Via le formulaire de contact du site.
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-bold mb-2">Hébergement</h3>
                <p>
                  Ce site est hébergé par :<br/>
                  
                  <em>( Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA)</em>
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-bold mb-2">Propriété Intellectuelle</h3>
                <p className="mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                
                {/* AJOUT SPÉCIFIQUE POUR S&BOX ET AUTRES MARQUES */}
                <h4 className="font-bold mb-1 text-xs uppercase tracking-wide opacity-80">Marques et Logos tiers</h4>
                <p>
                  Les marques citées (notamment <strong>S&box</strong>, <strong>Figma</strong>, <strong>Adobe</strong>) ainsi que leurs logos respectifs sont la propriété exclusive de leurs détenteurs (Facepunch Studios, Figma, Inc., Adobe Systems).<br/>
                  Leur utilisation sur ce site a pour unique but d'illustrer les compétences techniques et les outils utilisés, dans un cadre informatif et pédagogique.
                </p>
              </div>
            </div>
          </section>

          {/* SÉPARATEUR */}
          <div className="w-full h-px bg-orange-500/30 my-8"></div>

          {/* --- POLITIQUE DE CONFIDENTIALITÉ (RGPD) --- */}
          <section id="confidentialite">
            <h2 className={`text-2xl font-bold mb-6 uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              2. Politique de Confidentialité
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-content">
              <p>
                Azad Oztopal accorde une grande importance à la protection de votre vie privée. Cette section détaille comment sont gérées les données personnelles sur ce portfolio.
              </p>

              <div>
                <h3 className="text-orange-500 font-bold mb-2">Données collectées</h3>
                <p>
                  Les seules données personnelles collectées sur ce site sont celles que vous fournissez volontairement via le <strong>formulaire de contact</strong> :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nom</li>
                  <li>Adresse email</li>
                  <li>Contenu de votre message</li>
                </ul>
                <p className="mt-2">Ce site n'utilise pas de cookies publicitaires ou de traçage commercial.</p>
              </div>

              <div>
                <h3 className="text-orange-500 font-bold mb-2">Utilisation des données</h3>
                <p>
                  Ces données sont utilisées <strong>uniquement</strong> dans le but de répondre à votre demande de contact ou d'opportunité professionnelle (stage, alternance, freelance). Elles ne sont jamais cédées, vendues ou louées à des tiers.
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-bold mb-2">Service Tiers (EmailJS)</h3>
                <p>
                  Le formulaire de contact utilise le service technique <strong>EmailJS</strong> pour l'acheminement des messages. Ce service agit en tant que processeur de données pour transmettre votre email directement dans la boîte de réception de l'éditeur.
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-bold mb-2">Vos Droits</h3>
                <p>
                  Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. 
                  Pour exercer ce droit, il suffit d'envoyer un message via le formulaire de contact en précisant votre demande.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Mentions;