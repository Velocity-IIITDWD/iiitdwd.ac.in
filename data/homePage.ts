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
