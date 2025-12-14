export interface Project {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface Service {
  title: string;
  price?: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

export interface PricingItem {
  service: string;
  price: string;
}

export interface CursorState {
  active: boolean;
  text?: string;
}