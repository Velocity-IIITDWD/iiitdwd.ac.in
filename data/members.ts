export type ClubName = 
  | 'Return 0'
  | 'BlocSoc'
  | 'Velocity'
  | 'GDSC IIIT Dharwad'
  | 'E cell'
  | 'Inquizitive'
  | 'Iris'
  | 'DSAI Society'
  | 'Quantum Computing Club'
  | 'Zeigeist'
  | 'Music Club'
  | 'Dance Club';

export interface Member {
  name: string;
  position: string;
}

export interface Club {
  name: ClubName;
  aboutText: string;
  members: Member[];
  imagePath: string;
}

const clubs: Club[] = [
{
    name: 'Return 0',
    aboutText: 'It is a coding club of IIIT Dharwad. Main aim to improve coding culture in our college. All the members of our club are working to improve it and to help students develop problem solving skills through CP.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/return0.jpeg',
  },
  {
    name: 'BlocSoc',
    aboutText: 'It is a club related to BlockChain development. Main aim to make students aware about Pros of Blockchain development and improve BlockChain culture of our college.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/blocsoc.jpeg',
  },
  {
    name: 'Velocity',
    aboutText: 'It is the Web Development Club of IIIT Dharwad. Main aim is to make developing websites fun and learn new technologies growing popular in tech industry.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/velocity.jpeg',
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
    imagePath: '/Images/gdsc.jpeg',
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
    imagePath: '/Images/ecell.jpeg',
  },
  {
    name: 'Inquizitive',
    aboutText: 'The Official Quiz Club of IIIT Dharwad. We conduct trivia and technical quizzes for students of all years at our institute. We are a team of highly motivated individuals who actively foster the budding quizzing culture at IIIT Dharwad.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/inquizitive.jpeg',
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
    imagePath: '/Images/iris.jpeg',
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
    imagePath: '/Images/dsai.jpeg',
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
    imagePath: '/Images/quantumclub.jpeg',
  },
  {
    name: 'Zeigeist',
    aboutText: 'The Zeitgeist Club of IIIT Dharwad is a dynamic and intellectually stimulating student organization that caters to enthusiasts of literature, public speaking, and anchoring. This club serves as a vibrant platform for students to explore and express their literary talents, enhance their communication skills, and engage in creative discourse.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/zeigeist.jpg',
  },
  {
    name: 'Music Club',
    aboutText: 'It is the SANGEET CLUB of our college. It is a hub for musically inclined students, providing a platform for them to explore, express, and enhance their musical talents. The club is known for its vibrant and inclusive atmosphere, welcoming musicians of all skill levels and backgrounds to come together and share their passion for music.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Lead' },
      { name: 'EFG', position: 'Event Management Lead' },
    ],
    imagePath: '/Images/music.png',
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
    imagePath: '/Images/dance.png',
  },
];

export default clubs;