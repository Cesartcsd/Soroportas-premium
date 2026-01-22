import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../types';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark, onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links: NavLink[] = [
    { label: 'Início', path: '/' },
    { label: 'Coleção', path: '/collection' },
    { label: 'Técnica', path: '/technical' },
    { label: 'Projetos', path: '/projects' },
    { label: 'Arquitetos', path: '/architects' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-bold' : 'text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary';
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-background-dark/90 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-8 text-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined !text-4xl">door_front</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Soroportas</h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-medium transition-colors ${isActive(link.path)}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined text-xl">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>

              <button 
                onClick={onOpenContact}
                className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
              >
                Orçamento
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 dark:text-white"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-700 shadow-xl animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-slate-100 dark:border-white/5 ${isActive(link.path)}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Modo Escuro</span>
              <button 
                onClick={toggleTheme}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${isDark ? 'bg-primary' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isDark ? 'translate-x-6' : ''}`} />
              </button>
            </div>
            <button 
              onClick={() => {
                onOpenContact();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 w-full h-12 rounded-lg bg-primary text-white font-bold"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;