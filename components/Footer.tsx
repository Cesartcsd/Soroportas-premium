import React from 'react';
import { BRAND_NAME, WHATSAPP_LINK } from '../constants';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold mb-6">{BRAND_NAME}</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Soluções premium em portas de madeira. Unimos a marcenaria tradicional à precisão industrial para entregar certeza e sofisticação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-primary">Navegação</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Modelos</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Projetos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-primary">Atendimento</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-1">Horário</p>
                  <p className="text-sm text-gray-300">Segunda a Sexta: 09h às 18h</p>
                  <p className="text-sm text-gray-300">Sábado: 09h às 13h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-white mb-1">Showroom</p>
                  <p className="text-sm text-gray-300">Atendimento presencial apenas com hora marcada.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com foco em qualidade.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;