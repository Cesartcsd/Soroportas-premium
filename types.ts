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