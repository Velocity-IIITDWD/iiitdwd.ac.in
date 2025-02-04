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
    url: '/images/TRL_excellence_series.webp',
    caption: 'Half-Day Workshop on Teaching & Research Evolution in Engineering – TRL Excellence Series #10.',
    link: 'https://www.linkedin.com/posts/indian-institute-of-information-technology-dharwad-karnataka_teaching-research-and-leadership-excellence-activity-7292560518827888642-UDlm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA59NwYB4HruLv8St2Qeo6MmQtXM-nm3Uo8',
  },
  {
    url: '/images/84bfb0ea-50f7-4ad9-ab51-f3a2343cc350.webp',
    caption: 'IIIT Dharwad welcomes Shri Priyank M Kharge for an inspiring discussion on innovation and growth',
    link: 'https://www.linkedin.com/posts/indian-institute-of-information-technology-dharwad-karnataka_iiitdharwad-leadership-innovation-activity-7291480836464394241-GdrJ?utm_source=social_share_send&utm_medium=member_desktop_web',
  },
  {
    url: '/images/Priyanka kharge  lkdn_page.webp',
    caption: 'Shri Priyank Kharge, Hon\'ble Minister of ITBT, GoK, to address IIIT Dharwad on 1st Feb 2025',
    link: 'https://www.linkedin.com/posts/indian-institute-of-information-technology-dharwad-karnataka_iiitdharwad-leadership-innovation-activity-7291038458532270080-8XkQ?utm_medium=ios_app&utm_source=social_share_sheet&utm_campaign=copy_link',
  },
  {
    url: '/images/new_chairperson.png',
    caption: 'Welcoming our new chairperson, Dr. Sridhar Vembu',
    link: '#',
  },
  {
    url: '/images/DSC_0237.webp',
    caption: 'Celebrating 76th Republic Day',
    link: '/events/republic-day-2025',
  },
  {
    url: '/images/bengaluru_tech_summit_linkedin.webp',
    caption: 'Bengaluru Tech Summit 2024',
    link: 'https://www.linkedin.com/posts/bengaluru-tech-summit_bts2024-btsunbound-breakingboundaries-activity-7262700203646869506-pwNS?utm_source=share&utm_medium=member_desktop',
  },
  {
    url: '/images/IIIT_Dharwad_Conclave24.webp',
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
