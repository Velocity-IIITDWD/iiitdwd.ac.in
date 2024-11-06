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
    url: '/images/Final_Web_Banner.png',
    caption: 'IIIT Dharwad Conclave 2024',
    link: 'https://conclave.iiitdwd.ac.in/',
  },
  {
    url: '/images/TRL_Workshop.webp',
    caption: 'TRL Excellence Series Workshop',
    link: 'https://www.linkedin.com/posts/indian-institute-of-information-technology-dharwad-karnataka_trlexcellenceseries-striving4excellence-learningsciences-activity-7253729192079421440-CdXS?utm_source=share&utm_medium=member_desktop',
  },
  {
    url: '/images/InfosysVisit.webp',
    caption: 'Infosys Hubli Development Center Visit',
    link: 'https://www.linkedin.com/posts/indian-institute-of-information-technology-dharwad-karnataka_industryvisit-infosyshubli-iiitdharwad-activity-7242756692889808897-4nMc?utm_source=share&utm_medium=member_desktop',
  },
  {
    url: '/images/Ind_Day-1.webp',
    caption: 'Celebrating 78th Independence Day',
    link: '#',
  },
  {
    url: '/images/Ind_Day-2.webp',
    caption: 'Celebrating 78th Independence Day',
    link: '#',
    
  },
  {
    url: '/images/Ind_Day-3.webp',
    caption: 'Celebrating 78th Independence Day',
    link: '#',

  },
  {
    url: '/images/Sign-MoU.webp',
    caption: 'Signing of MoU between IIIT Dharwad and IIT Dharwad',
    link: '/docs/MoU-Director_Office.docx',
  },
  {
    url: '/images/MainCarousel3.webp',
    caption:
      'Prof. S. R. Mahadeva Prasanna taking the charge as the Director of IIIT Dharwad',
  },
  {
    url: '/images/MainCarousel4.webp',
    caption: 'Prof. S. R. Mahadeva Prasanna - Director of IIIT Dharwad',
  },
  {
    url: '/images/MainCarousel5.webp',
    caption: 'Prof. S. R. Mahadeva Prasanna - Director of IIIT Dharwad',
  },
  {
    url: '/images/MainCarousel6.webp',
    caption: 'Faculties and Director of IIIT Dharwad',
  },
];

export const ProgramCardDetails: ProgramCards[] = [
  {
    image: '/images/cse_program.webp',
    link: '/academics/departments/cse',
    Header1: 'Computer Science and Engineering',
    Header2: 'B. Tech. (CSE)',
  },
  {
    image: '/images/dsai_program.webp',
    link: '/academics/departments/dsai',
    Header1: 'Data Science and Artificial Intelligence',
    Header2: 'B. Tech. (DSAI)',
  },
  {
    image: '/images/ece_program.webp',
    link: '/academics/departments/ece',
    Header1: 'Electronics and Communications Engineering',
    Header2: 'B. Tech. (ECE)',
  },
];

export const Programs: ProgramsType[] = [
  {
    image: '/images/cse_program.webp',
    title: 'Computer Science and Engineering (B. Tech.)',
    description:
      "The Computer Science and Engineering program at IIIT Dharwad offers a robust curriculum in AI, machine learning, and cybersecurity. Established in 2015, it features strong industry collaboration, state-of-the-art facilities, and a research focus. Graduates excel in software development, research, and leadership, contributing to India's global IT leadership.",
    link: '/academics/departments/cse',
  },
  {
    image: '/images/dsai_program.webp',
    title: 'Data Science and Artificial Intelligence (B. Tech.)',
    description:
      'The Data Science and Artificial Intelligence (DSAI) program at IIIT Dharwad offers a comprehensive curriculum in big data analytics, machine learning, and deep learning. With industry collaboration, cutting-edge facilities, and a research focus, students gain practical skills. Graduates are prepared for careers in data science, AI research, and technology leadership.',
    link: '/academics/departments/dsai',
  },
  {
    image: '/images/ece_program.webp',
    title: 'Electronics and Communication Engineering (B. Tech.)',
    description:
      "The Electronics and Communication Engineering program at IIIT Dharwad offers a robust curriculum in embedded systems, wireless communication, and VLSI design. Established in 2015, it features strong industry collaboration and research focus. Graduates excel in electronics, communication systems, and research, advancing India's technology and engineering sectors.",
    link: '/academics/departments/ece',
  },
];
