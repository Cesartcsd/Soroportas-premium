import React from 'react';
import { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote?: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, isOpen, onClose, onRequestQuote }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-surface-dark w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row animate-slide-up overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-200 min-h-[300px]">
           <img 
             src={project.image} 
             alt={project.title} 
             className="absolute inset-0 w-full h-full object-cover"
           />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">
                  Destaque
                </span>
            )}
            {project.tags?.map((tag, idx) => (
                <span key={idx} className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{project.title}</h2>
          
          <div className="w-16 h-1 bg-primary mb-8"></div>

          <div className="prose dark:prose-invert">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {project.description}
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Este projeto exemplifica a excelência técnica da Soroportas. 
                Combinando materiais de alta resistência com um design que valoriza a arquitetura do ambiente, 
                esta peça não é apenas uma passagem, mas uma declaração de estilo e segurança.
            </p>
          </div>
          
          <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/10">
             <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Destaques do Projeto</h4>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400 mb-8">
               <li className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                 Acabamento Artesanal
               </li>
               <li className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                 Ferragens Ocultas
               </li>
               <li className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                 Isolamento Acústico
               </li>
               <li className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                 Design Personalizado
               </li>
             </ul>

             {onRequestQuote && (
                <button 
                onClick={() => { onClose(); onRequestQuote(); }}
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-primary hover:text-slate-900 dark:hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                <span className="material-symbols-outlined">request_quote</span>
                Solicitar Orçamento para este Modelo
                </button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;