// Import StaticImageData type
import { StaticImageData } from 'next/image';

import eblockImage from '@/assets/campus/eblock.jpg';
import piblockImage from '@/assets/campus/piblock.jpg';
import boyshostelImage from '@/assets/campus/boyshostel.jpg';
import girlshostelImage from '@/assets/campus/girlshostel.jpg';
import healthblockImage from '@/assets/campus/healthblock.jpg';

export interface Facility {
  title: string;
  blockName: string;
  items: string[];
  imageUrl: string | StaticImageData; // Update the type here
}

export const facilities: Facility[] = [
  {
    title: 'Academic Block',
    blockName: 'e block',
    items: [
      'The Academic Building, called the e Block, has eliminated departmental boundaries, where faculty, technical staff, and laboratories across departments are interspersed by design to naturally promote and nurture information exchange and collaboration.',
      'IIIT Dharwad has created a new modular space which can be easily converted to an 80-seater classroom (unlike the 60-seater) with multiple alternative seating arrangements, several different laboratory configurations, and other team spaces, thereby optimizing energy efficiency and ventilation.',
      'Classrooms are indeed quite large and naturally well-lit.',
      'There are two 120-seater and one 240-seater classrooms available for organizing workshops, conferences, and hackathons with facilities for live streaming.',
      'The e Block has laboratories that are established with the latest computing equipment for hands-on learning.',
      'A well-stocked textbook library in the e Block provides a 24/7 automated self-service facility for students to borrow and return books at any time.',
    ],
    imageUrl: eblockImage, // Use the imported image
  },
  {
    title: 'Main Block',
    blockName: 'π block',
    items: [
      'The Main Building, referred to as the π Block, houses the boardroom, chairperson, director, and registrar offices, recruitment, research, collaboration, incubation, and knowledge sharing spaces.',
      'It also houses the Multi-Function Hall, called the m Block, that can be converted into an auditorium or an indoor basketball court as needed.',
      'The π Block also has a Knowledge Resource Center and an incubation space.',
    ],
    imageUrl: piblockImage, // Use the imported image
  },
  {
    title: "Boys Hostel",
    blockName: 'b block',
    items: [
      'The Boys Hostel, referred to as the b Block, has about 200 rooms spread over 6 floors.',
      'It features a spacious Dining Hall and a Common Room for reading, games, activities, etc.',
      'Both the Dining Hall and the Common Room are of double height to give them excellent light and ventilation apart from a grand look.',
      'All rooms will be equipped with new furniture.',
    ],
    imageUrl: boyshostelImage, // Use the imported image
  },
  {
    title: "Girls Hostel",
    blockName: 'g block',
    items: [
      'The Infosys Foundation Girls Hostel, referred to as the g Block, built by Infosys Foundation as a gift for IIIT Dharwad has about one hundred rooms.',
      'It features a spacious Dining Hall and a Common Room for reading, games, activities, etc.',
      'Both the Dining Hall and the Common Room are of double height to give them excellent light and ventilation apart from a grand look.',
      'All rooms will be equipped with new furniture.',
    ],
    imageUrl: girlshostelImage, // Use the imported image
  },
  {
    title: 'Health and Fitness Block',
    blockName: 'h block',
    items: [
      'The Health and Fitness Block, called the h Block, has spaces for a wellness center, pharmacy, gymnasium, yoga room, activity/club rooms, music room, canteen, e-Bank, salon, and a small shop for essential supplies.',
      'The h Block can be used for small gatherings, music, and digital screening.',
      'The canteen has both indoor and outdoor seating.',
    ],
    imageUrl: healthblockImage, // Use the imported image
  },
];
