import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'madeira' | 'aluminio' | 'pivotante' | 'interna';
  image: string;
  description: string;
  featured?: boolean;
  tags?: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

export interface CollectionItem {
  id: number;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        'shadow-intensity'?: string;
        poster?: string;
        exposure?: string;
        'environment-image'?: string;
        scale?: string; 
        'disable-zoom'?: boolean;
      }, HTMLElement>;
    }
  }
}