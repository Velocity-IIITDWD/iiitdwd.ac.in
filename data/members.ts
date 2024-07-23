export type ClubName =
  | 'Velocity'
  | 'Iridescence'
  | 'Return 0'
  | 'BlocSoc'
  | 'GDSC IIIT Dharwad'
  | 'E cell'
  | 'IEEE SB & CS'
  | 'Inquizitive'
  | 'IRIS'
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
  isTechnical: boolean;
  instagram?: string;
  linkedin?: string;
  gmail: string;
  gmail2?: string;
  website?: string;
  github?: string;
  twitter?: string;
  linktree?: string;
}

const clubs: Club[] = [
  {
    name: 'Velocity',
    aboutText:
      "Velocity is the development club of IIIT Dharwad aiming to cultivate and foster a development culture among all the students. The club encompasses a community that allows everyone to participate and grow together. Velocity has held many events and workshops to build a strong confidence and foundation among all batches in development. IIIT Dharwad's website is designed & developed by Velocity!",
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/velocity.png',
    isTechnical: true,
    github: 'https://github.com/velocity-IIITDWD',
    instagram: 'https://www.instagram.com/velocity.iiitdwd',
    linkedin: 'https://www.linkedin.com/company/velocity-iiit-dharwad/',
    gmail: 'mailto:velocity@iiitdwd.ac.in',
  },
  {
    name: 'Iridescence',
    aboutText:
      'Iridescence is the official club of IIIT Dharwad for photography, videography and editing.This club serves as a creative hub for students who are passionate about capturing moments, telling stories through visuals, and honing their skills in various aspects of multimedia.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/iridescence.jpg',
    isTechnical: false,
    instagram:
      'https://www.instagram.com/iridescence.iiitdwd?igsh=bzBzbjQ3MDJjcnBq',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:iridescence@iiitdwd.ac.in',
  },
  {
    name: 'IEEE SB & CS',
    aboutText:
      'The IEEE Student Branch and Computer Society of IIIT Dharwad serves as a vibrant hub for students passionate about technology, engineering, and innovation. Our branch fosters a community of learning, collaboration, and professional growth. We aim to empower students with the knowledge, skills, and networking opportunities essential for success in the various field of technology. Through a wide range of activities, workshops, seminars, and projects.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/ieee.jpg',
    isTechnical: true,
    gmail: 'mailto:ieeestudentbranch@iiitdwd.ac.in',
    gmail2: 'mailto:ieeecompsoc@iiitdwd.ac.in ',
    website: 'https://ewh.ieee.org/sb/bangalore/iiitdwd/',
  },
  {
    name: 'Techniosys',
    aboutText:
      'Techniosys is the tech innovation club of IIIT Dharwad, dedicated to exploring and mastering upcoming technology platforms. Our club focuses on organizing events and workshops on APIs, cloud services, and other cutting-edge technologies to help students enhance their skills and improve their CVs. In addition to tech-centric activities, Techniosys offers a unique blend of relaxation and fun through our dedicated eSports team, which hosts exciting eSports tournaments and gaming sessions.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/techniosys.png',
    isTechnical: true,
    instagram: 'https://www.instagram.com/techniosys.iiitdwd/',
    linkedin: 'https://www.linkedin.com/in/techniosys-iiit-dharwad-482065257/',
    gmail: 'mailto:techniosys@iiitdwd.ac.in',
  },
  {
    name: 'Zeitgeist',
    aboutText:
      'The Zeitgeist Club of IIIT Dharwad is a dynamic and intellectually stimulating student organization that caters to enthusiasts of literature, public speaking, and anchoring. This club serves as a vibrant platform for students to explore and express their literary talents, enhance their communication skills, and engage in creative discourse.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/zeigeist.jpg',
    isTechnical: false,
    instagram:
      'https://www.instagram.com/zeitgeist_iiitdwd?igsh=MTljYzl6YmUzdjFjOA==',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:zeitgeist@iiitdwd.ac.in',
  },
  {
    name: 'E cell',
    aboutText:
      'E-Cell Club at IIIT Dharwad is a dynamic platform designed to empower students with entrepreneurial ambitions. We are dedicated to nurturing the entrepreneurial spirit within our students by providing them with the resources, mentorship, and opportunities they need to succeed. Our club is a hub for innovation and creativity, where students can explore their ideas, develop business skills, and connect with like-minded individuals and industry professionals.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/ecell.jpeg',
    isTechnical: true,
    gmail: 'mailto:ecell@iiitdwd.ac.in',
    linktree: 'https://linktr.ee/ecell.iiitdwd',
  },
  {
    name: 'LimeLight',
    aboutText:
      'Limelight, the drama club of IIIT Dharwad, is not just about performances—its about the people who make them happen. From brainstorming sessions to late-night rehearsals, we pour our hearts into every production, creating something truly special that resonates with audiences and fosters a sense of belonging like no other. Here, creativity knows no bounds.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/drama.jpg',
    isTechnical: false,
    instagram:
      'https://www.instagram.com/limelight.iiitdwd?igsh=aDVnamd4OG5peWx5',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:21bcs011@iiitdwd.ac.in',
  },
  {
    name: 'BlocSoc',
    aboutText:
      'BlocSoc is an active community focused on the exploration and advancement of blockchain technology. Our club unites enthusiasts and developers to learn, collaborate, and drive innovation in the blockchain arena.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/blocsoc.jpg',
    isTechnical: true,
    linkedin: 'https://www.linkedin.com/company/blocsoc-iiitdwd/',
    gmail: 'mailto:blocsoc@iiitdwd.ac.in',
    twitter: 'https://x.com/Blocsoc_iiit?t=zlDtzBc6QZao2D24ej52Tg&s=09',
  },
  {
    name: 'Mosaic Club',
    aboutText:
      'Mosaic, the Art Club of IIIT Dharwad, is dedicated to nurturing creativity and artistic expression. The club organizes a variety of activities, including painting, sketching, crafting etc. Mosaic provides a platform for students to explore different art forms, showcase their talents, and collaborate on creative projects, enriching the campus artistic landscape.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/mosaic.jpg',
    isTechnical: false,
    instagram: 'https://www.instagram.com/mosaic_iiitdwd?igsh=NDc5OGUxcDlocjJ4',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:mosaic@iiitdwd.ac.in',
  },
  {
    name: 'DSAI Society',
    aboutText:
      'The DSAI Society at IIIT Dharwad focuses on promoting knowledge and interest in Data Science and Artificial Intelligence. The society organizes workshops, seminars, competitions, and learning challenges to help students enhance their skills and stay updated with the latest advancements in the industry. Through these activities, the DSAI Society aims to foster a community of tech enthusiasts and prepare students for careers in these rapidly evolving fields.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/dsai.png',
    isTechnical: true,
    instagram:
      'https://www.instagram.com/dsaisoc_iiitdwd?igsh=bmxidWV1ZnpjZmQ0',
    linkedin: 'https://www.linkedin.com/company/dsai-society-iiitdharwad/',
    gmail: 'mailto:dsaisoc@iiitdwd.ac.in',
  },
  {
    name: 'Dance Club',
    aboutText:
      'It is the official Dance club of IIIT Dharwad.Filled with the best dancers of our college, this club is dedicated to promoting dance as a form of artistic expression and physical fitness among its members. Known for its energetic atmosphere and inclusive environment, the club welcomes students of all skill levels, encouraging everyone to explore various dance styles and techniques.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/dance.PNG',
    isTechnical: false,
    instagram: 'https://www.instagram.com/velocity_iiitdh/',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:',
  },
  {
    name: 'GDSC IIIT Dharwad',
    aboutText:
      'Google Developer Students Club is a community group for students who are interested in technology, especially technology from Google. It is a place to grow as a developer, starting from a beginner developer with resources and labs provided by google itself. From app dev, web dev, AI/ML, Cloud computing and IoT we host workshops and competitions and there is something for everyone. GDSC is also about connecting, learning together and growing together. We guide them in their career journey from internships to hackathons and leaderships skills.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/gdsc.JPG',
    isTechnical: true,
    instagram:
      'https://www.instagram.com/gdsc_iiitdwd?igsh=MThueGhyZGN2M2dxcw%3D%3D&utm_source=qr',
    linkedin: 'https://www.linkedin.com/company/gdsc-iiit-dharwad-new/',
    gmail: 'mailto:gdsc@iiitdwd.ac.in',
    twitter: 'https://twitter.com/gdsc_iiitdwd',
    github: 'https://github.com/GDSC-IIIT-Dharwad-24',
    linktree: 'https://linktr.ee/gdsc_iiitdwd',
  },
  {
    name: 'Quantum Computing Club',
    aboutText:
      'The Quantum Computing Club of IIIT Dharwad is a pioneering student organization dedicated to exploring the frontiers of quantum computing, a cutting-edge field poised to revolutionize technology and science. The club aims to educate, inspire, and engage students in the fascinating world of quantum mechanics and its applications in computing.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/quantumclub.jpeg',
    isTechnical: true,
    instagram: 'https://www.instagram.com/qciiitdwd?igsh=azZzd3RtMzhndGEx',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:qcclub@iiitdwd.ac.in',
  },
  {
    name: 'IRIS',
    aboutText:
      "IRIS is a dynamic community of students united by a shared passion for robotics and technology. Whether you're a seasoned robotics enthusiast or just starting to explore the world of engineering, our club offers a welcoming space for everyone. Beyond robotics, we delve into various domains including compilers, IoT, circuit designing, and VLSI, providing a broad spectrum of opportunities for learning and innovation. Join us to collaborate, learn, and contribute to exciting technological advancements.",
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/iris.png',
    isTechnical: true,
    instagram: 'https://www.instagram.com/iris_iiitdwd?igsh=czJkY3d4YXRwaWYw',
    linkedin: 'https://www.linkedin.com/company/iris-iiitdwd/',
    gmail: 'mailto:iris@iiitdwd.ac.in',
  },
  {
    name: 'In Motion',
    aboutText:
      'In Motion, the film club of IIIT Dharwad, is a vibrant hub for cinephiles. Dedicated to celebrating the art of cinema, captivating film screenings, and insightful discussions. The club provides a platform for budding film enthusiasts to explore diverse genres,and engage in creating new content immersed in the world of filmography.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/inmotion.jpg',
    isTechnical: false,
    instagram:
      'https://www.instagram.com/inmotion.iiitdwd?igsh=MXc0eHE2eDc5Ymt3eQ== ',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:21bcs026@iiitdwd.ac.in',
  },
  {
    name: 'Inquizitive',
    aboutText:
      'We at InQuizitive are dedicated to inculcating a culture of curiosity and knowledge among the students of IIIT Dharwad through quizzing. Our club regularly organizes innovative quizzes covering a wide range of topics, including technology, science, and pop culture. We strive to enhance the critical thinking of students by providing a platform for all to challenge themselves while learning in a positive and engaging environment.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/inquizitive.png',
    isTechnical: true,
    instagram: 'https://www.instagram.com/inquizitive.iiitdwd/',
    linkedin: 'https://www.linkedin.com/company/inquizitive-iiit-dharwad/',
    gmail: 'mailto:inquizitive@iiitdwd.ac.in',
  },
  {
    name: 'Prabodhini',
    aboutText:
      'The Prabodhini Club is a dynamic club of IIIT Dharwad is rooted in the rich heritage of Indian Knowledge systems . This club offers a unique opportunity for students to learn about teachings that have shaped Indian culture and learn from the profound teachings of the Vedas and dwelve into the deapths of ancient Indian philosophies, yoga and ayurveda.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/prabodhini.jpg',
    isTechnical: false,
    instagram:
      'https://www.instagram.com/prabodhini_iiitdwd?igsh=Z2FqbDV6OXZ5NXAy',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:',
  },
  {
    name: '440 Hz',
    aboutText:
      'It is the music (sangeet) club of our college. It is a hub for musically inclined students, providing a platform for them to explore, express, and enhance their musical talents. The club is known for its vibrant and inclusive atmosphere, welcoming musicians of all skill levels and backgrounds to come together and share their passion for music.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/music.png',
    isTechnical: false,
    instagram:
      'https://www.instagram.com/440hz_iiitdwd?igsh=MTVuMWp4OTMxeGNkeQ==',
    linkedin:
      'https://www.linkedin.com/company/indian-institute-of-information-technology-dharwad-karnataka/posts/?feedView=all',
    gmail: 'mailto:21bcs003@iiitdwd.ac.in',
  },
  {
    name: 'Return 0',
    aboutText:
      'Return 0 is the competitive programming club of IIIT Dharwad, dedicated to fostering a vibrant community of algorithmic problem solvers. Our club encourages participation in coding competitions and problem-solving activities to enhance analytical and programming skills. Through interactive sessions, discussions, and various competitions, we promote continuous learning and growth in the field of competitive programming.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/images/return0.jpeg',
    isTechnical: true,
    instagram: 'https://www.instagram.com/return0_iiitdwd/',
    linkedin: 'https://www.linkedin.com/company/return-0/ ',
    gmail: 'mailto:return0@iiitdwd.ac.in',
  },
];

export default clubs;
