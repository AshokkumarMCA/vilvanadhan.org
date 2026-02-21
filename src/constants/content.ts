import type {
  Service,
  Deity,
  Event,
  Testimonial,
  BlogPost,
  NavLink,
  SocialLink,
} from '../types';
import { getUpcomingEvents, formatLongDate } from '../utils/lunarCalendar';

export const TEMPLE_INFO = {
  name: 'Sri Vilvanadha Ishwarar Temple',
  nameTamil: 'ஸ்ரீ வில்வநாதீஸ்வரர் திருக்கோவில்',
  location: 'Kilvillivalam',
  address:
    'கீழ்வில்லிவலம் - துணையம்பட்டு சாலை, கீழ்வில்லிவலம் கிராமம், வந்தவாசி, திருவண்ணாமலை மாவட்டம்.',
  addressEnglish:
    'Kilvillivalam to Thunayambattu Road, Kilvillivalam Village, Vandavasi, Thiruvannamalai District - 604 408.',
  phone: '+91 75581 10667',
  email: 'shreevilvanathaeeshwararcharit@gmail.com',
  openingHours: {
    weekdays: '6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM',
    weekends: '5:00 AM - 9:00 PM',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Deities', href: '#deities' },
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Daily Puja Services',
    description:
      'Experience divine blessings through our traditional daily puja ceremonies performed by experienced priests.',
  },
  {
    id: 2,
    title: 'Special Abhishekam',
    description:
      'Participate in sacred abhishekam rituals for Lord Shiva with holy water, milk, honey, and sacred offerings.',
  },
  {
    id: 3,
    title: 'Religious Ceremonies',
    description:
      'Conduct special ceremonies for weddings, birthdays, and other auspicious occasions at the temple premises.',
  },
];

export const DEITIES: Deity[] = [
  {
    name: 'Shiva',
    image: '/images/Shiva.png',
    description: 'Lord Vilvanadha Ishwarar - Main Deity',
  },
  {
    name: 'Parvati',
    image: '/images/Parvati.png',
    description: 'Goddess Parvati - Divine Consort',
  },
  {
    name: 'Ganesha',
    image: '/images/Ganesha.png',
    description: 'Lord Ganesha - Remover of Obstacles',
  },
  {
    name: 'Kartikeya',
    image: '/images/Kartikeya.png',
    description: 'Lord Murugan - God of War',
  },
];

/**
 * Get dynamic events with automatically updated dates
 * Dates are calculated based on lunar calendar
 */
export const getEvents = (): Event[] => {
  const upcomingEvents = getUpcomingEvents();

  return upcomingEvents.map((event, index) => ({
    id: index + 1,
    name: event.name,
    nameTamil: event.nameTamil,
    date: event.date,
    description:
      event.name === 'Pradosha Pooja'
        ? 'Join us for this special Trayodashi celebration with rituals, prayers, and prasad distribution.'
        : 'Full moon special puja with traditional rituals, abhishekam, and community feast.',
  }));
};

// Legacy export for backward compatibility
export const EVENTS: Event[] = getEvents();

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Praveenkumar',
    text: 'The spiritual guidance I received here transformed my life completely. The peaceful environment helps in connecting with the divine.',
  },
  {
    id: 2,
    name: 'Rakesh Kumar',
    text: "The temple has become my second home. The priest's knowledge and the community spirit make this place special.",
  },
];

/**
 * Get blog posts with dynamic dates
 * Posts are shown with dates relative to today
 */
export const getBlogPosts = (): BlogPost[] => {
  const today = new Date();

  // Post 1: Published 5 days ago
  const post1Date = new Date(today);
  post1Date.setDate(today.getDate() - 5);

  // Post 2: Published 12 days ago
  const post2Date = new Date(today);
  post2Date.setDate(today.getDate() - 12);

  return [
    {
      id: 1,
      title: 'Temple Reconstruction Progress Update',
      excerpt:
        'Witness the divine transformation as we rebuild this ancient sacred shrine. See the latest progress on our construction journey.',
      date: formatLongDate(post1Date),
      publishedDate: post1Date,
      slug: 'temple-reconstruction-progress',
    },
    {
      id: 2,
      title: 'Understanding Shiva: The Cosmic Deity',
      excerpt:
        'Explore the deep symbolism and spiritual significance of Lord Shiva in Hindu philosophy and temple traditions.',
      date: formatLongDate(post2Date),
      publishedDate: post2Date,
      slug: 'understanding-shiva-cosmic-deity',
    },
  ].sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()); // Most recent first
};

// Legacy export for backward compatibility
export const BLOG_POSTS: BlogPost[] = getBlogPosts();

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Facebook',
    url: import.meta.env.VITE_FACEBOOK_URL,
    icon: 'FB',
  },
  {
    platform: 'Instagram',
    url: import.meta.env.VITE_INSTAGRAM_URL,
    icon: 'IG',
  },
  {
    platform: 'YouTube',
    url: import.meta.env.VITE_YOUTUBE_URL,
    icon: 'YT',
  },
];
