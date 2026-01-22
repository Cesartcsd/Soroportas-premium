export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
}
