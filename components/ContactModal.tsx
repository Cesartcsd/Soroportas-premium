import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const resetForm = () => {
    setFormState('idle');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-surface-dark w-full max-w-lg rounded-2xl shadow-2xl p-8 animate-slide-up overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors z-10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        {formState === 'success' ? (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-5xl">check</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Solicitação Enviada!</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs">
              Recebemos seus dados. Um de nossos consultores entrará em contato em breve.
            </p>
            <button 
              onClick={resetForm}
              className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/25"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Solicitar Orçamento</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Preencha seus dados e um de nossos especialistas entrará em contato em até 24h.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Nome Completo</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="Seu nome" required disabled={formState === 'submitting'} />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">E-mail</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="seu@email.com" required disabled={formState === 'submitting'} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Telefone</label>
                <input type="tel" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="(11) 99999-9999" required disabled={formState === 'submitting'} />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Mensagem</label>
                <textarea className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-24 resize-none disabled:opacity-50" placeholder="Conte um pouco sobre seu projeto..." disabled={formState === 'submitting'}></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg mt-2 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Solicitação'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;