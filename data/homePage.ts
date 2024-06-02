export interface MainCarouselImage {
  url: string;
  caption: string;
  link?: string;
}

export interface ProgramCards {
  image: string;
  link: string;
  Header1: string;
  Header2: string;
}

export interface ProgramsType {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const images: MainCarouselImage[] = [
  {
    url: '/images/MainCarousel1.jpg',
    caption: 'Admissions 2024',
    link: '/admissions',
  },
  {
    url: '/images/banner_admission_supernumerary.jpg',
    caption: 'Supernumerary reservation introduced for 2024 admissions',
    link: '/admissions/btech',
  },
  {
    url: '/images/MainCarousel3.jpeg',
    caption:
      'Prof. S. R. Mahadeva Prasanna taking the charge as the Director of IIIT Dharwad',
  },
  {
    url: '/images/MainCarousel4.jpeg',
    caption: 'Prof. S. R. Mahadeva Prasanna - Director of IIIT Dharwad',
  },
  {
    url: '/images/MainCarousel5.jpeg',
    caption: 'Prof. S. R. Mahadeva Prasanna - Director of IIIT Dharwad',
  },
  {
    url: '/images/MainCarousel6.jpeg',
    caption: 'Faculties and Director of IIIT Dharwad',
  },
];

export const ProgramCardDetails: ProgramCards[] = [
  {
    image: '/images/cse_program.jpg',
    link: '/academics/departments/cse',
    Header1: 'Computer Science and Engineering',
    Header2: 'B. Tech. (CSE)',
  },
  {
    image: '/images/dsai_program.jpg',
    link: '/academics/departments/dsai',
    Header1: 'Data Science and Artificial Intelligence',
    Header2: 'B. Tech. (DSAI)',
  },
  {
    image: '/images/ece_program.jpg',
    link: '/academics/departments/ece',
    Header1: 'Electronics and Communications Engineering',
    Header2: 'B. Tech. (ECE)',
  },
];

export const Programs: ProgramsType[] = [
  {
    image: '/images/cse_program.jpg',
    title: 'Computer Science and Engineering (B. Tech.)',
    description:
      "The Computer Science and Engineering (CSE) program at IIIT Dharwad, an Institute of National Importance established in 2015, offers a robust curriculum covering core and advanced topics like AI, machine learning, and cybersecurity. With strong industry collaboration, state-of-the-art facilities, and a focus on research, students gain practical experience and innovative skills. Located in the educational hub of Hubballi-Dharwad, IIIT Dharwad provides a vibrant academic environment. Graduates are well-equipped for diverse career paths in software development, research, and leadership roles, contributing to India's global IT leadership.",
    link: '/academics/departments/cse',
  },
  {
    image: '/images/dsai_program.jpg',
    title: 'Data Science and Artificial Intelligence (B. Tech.)',
    description:
      "The Data Science and Artificial Intelligence (DSAI) program at IIIT Dharwad, an Institute of National Importance established in 2015, offers a comprehensive curriculum that covers core and advanced topics such as big data analytics, machine learning, and deep learning. With a strong emphasis on industry collaboration, cutting-edge facilities, and a focus on research, students acquire practical skills and innovative expertise. Situated in the educational hub of Hubballi-Dharwad, IIIT Dharwad fosters a vibrant academic environment. Graduates are well-prepared for diverse career paths in data science, AI research, and technology leadership, contributing to India's global prominence in AI and data-driven innovation.",
    link: '/academics/departments/dsai',
  },
  {
    image: '/images/ece_program.jpg',
    title: 'Electronics and Communication Engineering (B. Tech.)',
    description:
      "The Electronics and Communication Engineering (ECE) program at IIIT Dharwad, an Institute of National Importance established in 2015, offers a robust curriculum that spans core and advanced topics like embedded systems, wireless communication, and VLSI design. With extensive industry collaboration, state-of-the-art facilities, and a strong research focus, students gain hands-on experience and innovative skills. Located in the educational hub of Hubballi-Dharwad, IIIT Dharwad provides a dynamic academic environment. Graduates are well-equipped for diverse career paths in electronics, communication systems, and research, playing a key role in advancing India's technology and engineering sectors.",
    link: '/academics/departments/ece',
  },
];
