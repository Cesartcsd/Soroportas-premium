import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary !text-3xl">door_front</span>
              <span className="text-xl font-bold">Soroportas</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Excelência em portas de alto padrão para projetos que exigem o melhor. Desde 1998 transformando entradas em experiências.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Empresa</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Carreiras</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/architects" className="hover:text-primary transition-colors">Área do Arquiteto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Coleções</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/collection" className="hover:text-primary transition-colors">Pivotantes</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Painéis Ripados</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Portas de Correr</Link></li>
              <li><Link to="/technical" className="hover:text-primary transition-colors">Especificações</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span>
                contato@soroportas.com.br
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">call</span>
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span>
                Sorocaba, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2024 Soroportas Inc. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;