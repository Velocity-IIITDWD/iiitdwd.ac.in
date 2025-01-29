// Import StaticImageData type
import { StaticImageData } from 'next/image';

import eblockImage from '@/assets/campus/eblock.jpg';
import eventsImage from '@/assets/campus/events.png';
import velocityLogo from '@/assets/campus/velocitylogo.png';
import magazineImage from '@/assets/campus/magazine.png';

export interface CardData {
  title: string;
  href: string;
  imageUrl: string|StaticImageData ;
}

export const cardData: CardData[] = [
  {
    title: 'Facilities',
    href: '/facilities',
    imageUrl: eblockImage,
  },
  { 
    title: 'Events', 
    href: '/events', 
    imageUrl: eventsImage,
  },
  { 
    title: 'Clubs', 
    href: '/clubs', 
    imageUrl: velocityLogo,
  },
  {
    title: 'Institute Magazine',
    href: '/magazine',
    imageUrl: magazineImage,
  },
];
