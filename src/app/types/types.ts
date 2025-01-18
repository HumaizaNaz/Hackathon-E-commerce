// Example types.ts
export interface HeroSection {
    _type: 'hero';
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
  }
  
  export interface VitaSection {
    _type: 'vita';
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    price?: number;
  }
  