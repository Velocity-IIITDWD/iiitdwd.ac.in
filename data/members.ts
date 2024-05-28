export type ClubName = 
  | 'Velocity'
  | 'Iridescence'
  | 'Return 0'
  | 'BlocSoc'
  | 'GDSC IIIT Dharwad'
  | 'E cell'
  | 'Inquizitive'
  | 'Iris'
  | 'DSAI Society'
  | 'Quantum Computing Club'
  | 'Techniosys'
  | 'Zeitgeist'
  | '440 Hz'
  | 'Dance Club'
  | 'Prabodhini'
  | 'Mosaic Club'
  | 'In Motion'
  | 'LimeLight';

export interface Member {
  name: string;
  position: string;
}

export interface Club {
  name: ClubName;
  aboutText: string;
  members: Member[];
  imagePath: string;
  instagram: string;
  linkedin: string;
  gmail: string;
}

const clubs: Club[] = [
  {
    name: 'Velocity',
    aboutText: 'It is the web development club of IIIT Dharwad. Its aim is to foster a community of developers and spread development culture and knowledge.At Velocity Club, our mission is to empower students with the knowledge and skills needed to excel in the field of web development. ',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/velocity.jpeg',
    instagram: 'https://www.instagram.com/velocity.iiitdwd?igsh=amRzdGpoOGlzbWNs',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Iridescence',
    aboutText: 'Iridescence is the official club of IIIT Dharwad for photography, videography and editing.This club serves as a creative hub for students who are passionate about capturing moments, telling stories through visuals, and honing their skills in various aspects of multimedia.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/Iridescence.jpg',
    instagram: 'https://www.instagram.com/iridescence.iiitdwd?igsh=bzBzbjQ3MDJjcnBq',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'GDSC IIIT Dharwad',
    aboutText: 'The Google Developer Student Club (GDSC) at IIIT Dharwad is an active and innovative student organization that aims to empower students with the knowledge and skills needed to thrive in the tech industry.The motto of this club is to -  Learn. Grow. Connect.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/gdsc.jpeg',
    instagram: 'https://www.instagram.com/gdsc_iiitdwd?igsh=ZnJlazVoMnJ2N2N0',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Return 0',
    aboutText: 'It is the competitive programming club of IIIT Dharwad. Its aim is to improve coding culture in our college. The club helps students develop problem solving skills by conducting regular contest discussions and problem solving sessions .',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/return0.jpeg',
    instagram: 'https://www.instagram.com/return0_iiitdwd?igsh=anFuZXl5cnNmZnJm',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'BlocSoc',
    aboutText: 'It is a club related to BlockChain development and Web3 Technology. The club aims to create a thriving community of students who are passionate about decentralized technologies, smart contracts, and the transformative potential of blockchain.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/blocsoc.jpeg',
    instagram: 'https://www.instagram.com/blocsoc.iiitdwd?igsh=azY3bHhnaHFyZ2M1',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  
  
  {
    name: 'E cell',
    aboutText: 'Community to promote entrepreneurship culture. On our way to build a network of students, mentors & entrepreneurs.We invite entrepreneurs and conduct several events, seminars, webinars and workshops for the students of and beyond our college',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/ecell.jpeg',
    instagram: 'https://www.instagram.com/ecell.iiitdwd?igsh=YXZremJ0M2gzZ2Qw',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Inquizitive',
    aboutText: 'The Official Quiz Club of IIIT Dharwad. We conduct trivia and technical quizzes for students of all years at our institute. We are a team of highly motivated individuals who actively foster the budding quizzing culture at IIIT Dharwad.It is dedicated to promoting intellectual curiosity, critical thinking, and knowledge sharing through the art of quizzing.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/inquizitive.jpeg',
    instagram: 'https://www.instagram.com/inquizitive.iiitdwd?igsh=MXEwMHZxdzNrYmRqdw==',
    linkedin:'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Iris',
    aboutText: 'Innovation & Robotics Club of IIIT Dharwad Students.Our club is dedicated to fostering a passion for robotics and providing students with hands-on experience in the field. We conduct regular workshops, competitions, and events to help students learn about the latest developments in robotics and explore the endless possibilities of this exciting field.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/iris.jpeg',
    instagram: 'https://www.instagram.com/iris_iiitdwd?igsh=MXhjNHMya2tzOWU0dw==',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'DSAI Society',
    aboutText: '"Bringing forth Data Scientists out of budding enthusiasts". Hustling forward with the goal of promoting Data Science culture among the students, and creating unprecedented Data Scientists. We believe that every student should have the opportunity to learn Data Science and develop a passion for it, and we aim to provide the best environment for it.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/dsai.jpeg',
    instagram: 'https://www.instagram.com/dsaisoc_iiitdwd?igsh=ajh3N2tzeHE5b3Rt',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Quantum Computing Club',
    aboutText: 'The Quantum Computing Club of IIIT Dharwad is a pioneering student organization dedicated to exploring the frontiers of quantum computing, a cutting-edge field poised to revolutionize technology and science. The club aims to educate, inspire, and engage students in the fascinating world of quantum mechanics and its applications in computing.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/quantumclub.jpeg',
    instagram: 'https://www.instagram.com/qciiitdwd?igsh=azZzd3RtMzhndGEx',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Techniosys',
    aboutText: 'Techniosys is the gaming club at IIIT Dharwad, dedicated to bringing together students with a shared passion for video games, e-sports, and the broader gaming culture.It organizes a wide range of activities and events.The club aims to promote teamwork, strategic thinking, and sportsmanship through organized gaming activities and events.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/techniosys.jpg',
    instagram: 'https://www.instagram.com/techniosys.iiitdwd?igsh=MWxjaWV0bWRjdGF4eA==',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Zeitgeist',
    aboutText: 'The Zeitgeist Club of IIIT Dharwad is a dynamic and intellectually stimulating student organization that caters to enthusiasts of literature, public speaking, and anchoring. This club serves as a vibrant platform for students to explore and express their literary talents, enhance their communication skills, and engage in creative discourse.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/zeigeist.jpg',
    instagram: 'https://www.instagram.com/zeitgeist_iiitdwd?igsh=MTljYzl6YmUzdjFjOA==',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Prabodhini',
    aboutText: 'The Prabodhini Club is a dynamic club of IIIT Dharwad is rooted in the rich heritage of Indian Knowledge systems . This club offers a unique opportunity for students to learn about teachings that have shaped Indian culture and learn from the profound teachings of the Vedas and dwelve into the deapths of ancient Indian philosophies, yoga and ayurveda.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/prabodhini.jpg',
    instagram: 'https://www.instagram.com/prabodhini_iiitdwd?igsh=Z2FqbDV6OXZ5NXAy',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Mosaic Club',
    aboutText: 'Mosaic, the Art Club of IIIT Dharwad, is dedicated to nurturing creativity and artistic expression. The club organizes a variety of activities, including painting, sketching, crafting etc. Mosaic provides a platform for students to explore different art forms, showcase their talents, and collaborate on creative projects, enriching the campus artistic landscape.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/mosaic.jpg',
    instagram: 'https://www.instagram.com/mosaic_iiitdwd?igsh=NDc5OGUxcDlocjJ4',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'In Motion',
    aboutText: 'In Motion, the film club of IIIT Dharwad, is a vibrant hub for cinephiles. Dedicated to celebrating the art of cinema, captivating film screenings, and insightful discussions. The club provides a platform for budding film enthusiasts to explore diverse genres,and engage in creating new content immersed in the world of filmography.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/inmotion.jpg',
    instagram: ' https://www.instagram.com/inmotion.iiitdwd?igsh=MXc0eHE2eDc5Ymt3eQ== ',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'LimeLight',
    aboutText: 'Limelight, the drama club of IIIT Dharwad, is not just about performances—its about the people who make them happen. From brainstorming sessions to late-night rehearsals, we pour our hearts into every production, creating something truly special that resonates with audiences and fosters a sense of belonging like no other. Here, creativity knows no bounds.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/drama.jpg',
    instagram: 'https://www.instagram.com/limelight.iiitdwd?igsh=aDVnamd4OG5peWx5',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: '440 Hz',
    aboutText: 'It is the SANGEET CLUB of our college. It is a hub for musically inclined students, providing a platform for them to explore, express, and enhance their musical talents. The club is known for its vibrant and inclusive atmosphere, welcoming musicians of all skill levels and backgrounds to come together and share their passion for music.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/music.png',
    instagram: 'https://www.instagram.com/440hz_iiitdwd?igsh=MTVuMWp4OTMxeGNkeQ==',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
  {
    name: 'Dance Club',
    aboutText: 'It is the official Dance club of IIIT Dharwad.Filled with the best dancers of our college, this club is dedicated to promoting dance as a form of artistic expression and physical fitness among its members. Known for its energetic atmosphere and inclusive environment, the club welcomes students of all skill levels, encouraging everyone to explore various dance styles and techniques. ',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/dance.png',
    instagram: 'https://www.instagram.com/velocity_iiitdh/',
    linkedin: 'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:velocity.iiitdh@gmail.com',
  },
];

export default clubs;