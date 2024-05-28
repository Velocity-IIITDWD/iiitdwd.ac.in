export interface MainCarouselImage {
  url: string;
  caption: string;
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
  },
  {
    url: '/images/MainCarousel2.jpg',
    caption: 'Admissions 2023',
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
    image: '/main_building.JPG',
    link: '/academics/departments/cse',
    Header1: 'Computer Science and Engineering',
    Header2: 'B-Tech (CSE)',
  },
  {
    image: '/main_building.JPG',
    link: '/academics/departments/dsai',
    Header1: 'Data Science and Artificial Intelligence',
    Header2: 'B-Tech (DSAI)',
  },
  {
    image: '/main_building.JPG',
    link: '/academics/departments/ece',
    Header1: 'Electronics and Communications Engineering',
    Header2: 'B-Tech (ECE)',
  },
];
