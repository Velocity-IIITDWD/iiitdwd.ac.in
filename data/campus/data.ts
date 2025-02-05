export interface CardData {
  title: string;
  href: string;
  imageUrl: string;
}

export const cardData: CardData[] = [
  {
    title: 'Facilities',
    href: '/facilities',
    imageUrl: '/images/eblock.jpg',
  },
  { 
    title: 'Events', 
    href: '/events', 
    imageUrl: '/images/events.png',
  },
  { 
    title: 'Clubs', 
    href: '/clubs', 
    imageUrl: '/images/velocitylogo.png',
  },
  {
    title: 'Institute Magazine',
    href: '/magazine',
    imageUrl: '/images/magazine.png',
  },
];
