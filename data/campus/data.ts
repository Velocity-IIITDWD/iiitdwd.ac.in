// Import StaticImageData type
import { StaticImageData } from 'next/image';

import eblockImage from '@/assets/campus/eblock.jpg';
import eventsImage from '@/assets/campus/events.png';
import velocityLogo from '@/assets/campus/velocitylogo.png';
import magazineImage from '@/assets/campus/magazine.png';

export interface CardData {
  title: string;
  href: string;
  image: string | StaticImageData;
}

export const cardData: CardData[] = [
  {
    title: 'Facilities',
    href: '/facilities',
    image: eblockImage,
  },
  { 
    title: 'Events', 
    href: '/events', 
    image: eventsImage,
  },
  { 
    title: 'Clubs', 
    href: '/clubs', 
    image: velocityLogo,
  },
  {
    title: 'Institute Magazine',
    href: '/magazine',
    image: magazineImage,
  },
];
