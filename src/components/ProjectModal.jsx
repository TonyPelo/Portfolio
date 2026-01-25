import React from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 animate-in fade-in duration-200">
      <div className={`border-2 border-orange-500 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-orange-500/30 ${
        isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'
      }`}>
        <div className={`sticky top-0 border-b-2 border-orange-500/30 p-4 flex justify-between items-center z-10 ${
          isDarkMode ? 'bg-black/95' : 'bg-white/95'
        }`}>
          <div>
            <span className="text-orange-500 text-xs uppercase tracking-widest">Détails du projet</span>
            <h3 className={`text-xl font-bold uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 border border-orange-500/30 hover:border-orange-500 transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-600 hover:text-orange-500'
            }`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className={`relative h-64 sm:h-96 border-2 border-orange-500/30 mb-6 flex items-center justify-center bg-gradient-to-br ${
            isDarkMode ? 'from-orange-500/20 to-black' : 'from-orange-500/20 to-gray-100'
          }`}>
            <div className="text-8xl sm:text-9xl">{project.image}</div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-orange-500 text-xs uppercase tracking-widest">Catégorie</span>
              <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>{project.category}</p>
            </div>
            <div>
              <span className="text-orange-500 text-xs uppercase tracking-widest">Description</span>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
            </div>
            {project.tags && (
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-500 text-xs uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={`border-t-2 border-orange-500/30 p-4 ${isDarkMode ? 'bg-black/60' : 'bg-white/60'}`}>
          <button 
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 uppercase tracking-widest transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;