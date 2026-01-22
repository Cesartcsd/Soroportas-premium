import { CollectionItem, FeatureItem } from './types';

export const BRAND_NAME = "Soroportas";
export const WHATSAPP_NUMBER = "5511999999999"; // Exemplo
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20portas.`;

export const HERO_CONTENT = {
  headline: "A porta certa muda o ambiente inteiro.",
  subheadline: "Portas de alto padrão com acabamento preciso e atendimento que ajuda você a escolher sem erro.",
  cta: "Falar com um especialista"
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'entrance',
    title: 'Entrada Principal',
    category: 'Primeira Impressão',
    description: 'Portas pivotantes e maciças que definem a personalidade da fachada.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'interior',
    title: 'Interiores & Privacidade',
    category: 'Conforto',
    description: 'Isolamento acústico e acabamento impecável para quartos e escritórios.',
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'social',
    title: 'Integração de Ambientes',
    category: 'Amplitude',
    description: 'Sistemas de correr e vidro para conectar sala, varanda e jardim.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2127&auto=format&fit=crop'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'material',
    title: 'Madeira Nobre Selecionada',
    description: 'Trabalhamos apenas com lotes certificados e secos em estufa, garantindo estabilidade dimensional e durabilidade por gerações.',
    iconName: 'TreeDeciduous'
  },
  {
    id: 'finish',
    title: 'Acabamento de Precisão',
    description: 'Vernizes de alta performance e lixamento técnico. O toque é acetinado e a proteção é absoluta contra intempéries.',
    iconName: 'Gem'
  },
  {
    id: 'installation',
    title: 'Vedação e Silêncio',
    description: 'Borrachas amortecedoras e sistemas de vedação que proporcionam conforto acústico e fechamento suave.',
    iconName: 'VolumeX'
  },
  {
    id: 'consultancy',
    title: 'Curadoria Técnica',
    description: 'Não vendemos apenas a porta. Analisamos sua planta e sugerimos a solução técnica ideal para evitar problemas futuros.',
    iconName: 'ClipboardCheck'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
];
