import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-surface-dark w-full max-w-lg rounded-2xl shadow-2xl p-8 animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Solicitar Orçamento</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Preencha seus dados e um de nossos especialistas entrará em contato em até 24h.
        </p>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso! Entraremos em contato."); onClose(); }}>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Nome Completo</label>
            <input type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Seu nome" required />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">E-mail</label>
            <input type="email" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="seu@email.com" required />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Telefone</label>
            <input type="tel" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="(11) 99999-9999" required />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wider">Mensagem</label>
            <textarea className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-24 resize-none" placeholder="Conte um pouco sobre seu projeto..." ></textarea>
          </div>

          <button type="submit" className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg mt-2 transition-colors shadow-lg shadow-primary/25">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;