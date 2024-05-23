export interface CardData {
  title: string;
  href: string;
  image: string;
}

export const cardData: CardData[] = [
  {
    title: 'Facilities',
    href: '/campus/facilities',
    image: '/campus/eblock.jpg',
  },
  { title: 'Events', href: '/campus/events', image: '/campus/events.png' },
  { title: 'Clubs', href: '/campus/clubs', image: '/campus/velocity_lat.png' },
  {
    title: 'Institute Magazine',
    href: '/campus/institute-magazine',
    image: '/campus/magazin.png',
  },
];
