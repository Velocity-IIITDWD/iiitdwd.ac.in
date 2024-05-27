export interface CardData {
  title: string;
  href: string;
  image: string;
}

export const cardData: CardData[] = [
  {
    title: 'Facilities',
    href: '/facilities',
    image: '/campus/eblock.jpg',
  },
  { title: 'Events', href: '/events', image: '/campus/events.png' },
  { title: 'Clubs', href: '/clubs', image: '/campus/velocity_lat.png' },
  {
    title: 'Institute Magazine',
    href: '/magazine',
    image: '/Campus/magazine.png',
  },
];
