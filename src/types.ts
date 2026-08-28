export interface StudioPhoto {
  id: string;
  url: string;
  thumbnail?: string;
  title: string;
  category:
    | 'wedding'
    | 'pre-wedding'
    | 'anniversary'
    | 'newborn'
    | 'fashion'
    | 'portrait'
    | 'portraits'
    | 'event'
    | 'events'
    | 'lifestyle';
  caption?: string;
  rotation?: string; // e.g. '-2deg', '1.5deg', '-1deg', '2.5deg'
  tapeType?: 'top' | 'corner' | 'left-corner' | 'none';
  aspect?: 'square' | 'portrait' | 'landscape' | 'tall';
}

export interface ServiceItem {
  id: string;
  title: string;
  categorySlug: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  startingPrice: string;
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle?: string;
  price: string;
  popular?: boolean;
  features: string[];
  duration: string;
  deliverables: string;
}

export interface InstagramReel {
  id: string;
  reelUrl: string;
  thumbnail: string;
  caption?: string;
  views?: string;
  date?: string;
}

export interface StudioInfo {
  brandName: string;
  brandSub: string;
  photographerName: string;
  tagline: string;
  bioHeadline: string;
  bioShort: string;
  bioFull: string[];
  philosophyHeadline: string;
  philosophyText: string;
  phone: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  location: string;
  address: string;
  businessHours: string;
  whatsappNumber: string;
  whatsappDefaultMsg: string;
  mapEmbedUrl: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
