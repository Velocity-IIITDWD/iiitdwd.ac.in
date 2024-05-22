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
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/return0.jpeg',
  },
  {
    name: 'BlocSoc',
    aboutText: 'It is a club related to BlockChain development. Main aim to make students aware about Pros of Blockchain development and improve BlockChain culture of our college.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/blocsoc.jpeg',
  },
  {
    name: 'Velocity',
    aboutText: 'It is the Web Development Club of IIIT Dharwad. Main aim is to make developing websites fun and learn new technologies growing popular in tech industry.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/velocity.jpeg',
  },
  {
    name: 'GDSC IIIT Dharwad',
    aboutText: 'It is Google Development Students Club of IIIT Dharwad.The motto of this club is to -  Learn. Grow. Connect',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/gdsc.jpeg',
  },
  {
    name: 'E cell',
    aboutText: 'Community to promote entrepreneurship culture. On our way to build a network of students, mentors & entrepreneurs.We invite entrepreneurs and conduct several events, seminars, webinars and workshops for the students of and beyond our college',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/ecell.jpeg',
  },
  {
    name: 'Inquizitive',
    aboutText: 'The Official Quiz Club of IIIT Dharwad. We conduct trivia and technical quizzes for students of all years at our institute. We are a team of highly motivated individuals who actively foster the budding quizzing culture at IIIT Dharwad.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/inquizitive.jpeg',
  },
  {
    name: 'Iris',
    aboutText: 'Innovation & Robotics Club of IIIT Dharwad Students.Our club is dedicated to fostering a passion for robotics and providing students with hands-on experience in the field. We conduct regular workshops, competitions, and events to help students learn about the latest developments in robotics and explore the endless possibilities of this exciting field.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/iris.jpeg',
  },
  {
    name: 'DSAI Society',
    aboutText: '"Bringing forth Data Scientists out of budding enthusiasts". Hustling forward with the goal of promoting Data Science culture among the students, and creating unprecedented Data Scientists. We believe that every student should have the opportunity to learn Data Science and develop a passion for it, and we aim to provide the best environment for it.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/dsai.jpeg',
  },
  {
    name: 'Quantum Computing Club',
    aboutText: 'It is a club related to BlockChain development. Main aim to make students aware about Pros of Blockchain development and improve BlockChain culture of our college.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/quantumclub.jpeg',
  },
  {
    name: 'Zeigeist',
    aboutText: 'It is the literature club of IIIT Dharwad which also includes anchoring in major events and more .',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/zeigeist.jpg',
  },
  {
    name: 'Music Club',
    aboutText: 'It is a club related to BlockChain development. Main aim to make students aware about Pros of Blockchain development and improve BlockChain culture of our college.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/music.png',
  },
  {
    name: 'Dance Club',
    aboutText: 'It is a club related to BlockChain development. Main aim to make students aware about Pros of Blockchain development and improve BlockChain culture of our college.',
    members: [
      { name: 'ABC', position: 'President' },
      { name: 'BCD', position: 'Vice President' },
      { name: 'DEF', position: 'Social Media Member' },
      { name: 'EFG', position: 'hdffsdf,jfdf' },
    ],
    imagePath: '/Images/dance.png',
  },
];

export default clubs;