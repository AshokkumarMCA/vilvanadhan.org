export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Deity {
  name: string;
  image: string;
  description?: string;
}

export interface Event {
  id: number;
  name: string;
  nameTamil: string;
  date: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string; // Formatted display date
  publishedDate: Date; // Actual date object for calculations
  slug?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
