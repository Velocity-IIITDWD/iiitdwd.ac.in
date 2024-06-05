export interface dateStructure {
  id: number;
  title: string;
  date: string;
}
export interface descriptionStructure {
  id: number;
  heading: string;
  description: string;
}
export interface linkStructure {
  id: number;
  link: string;
  displayText: string;
}
export interface linksStructure {
  id: number;
  type: string;
  links: Array<linkStructure>;
}
export interface seatStructure {
  instituteCode: number;
  instituteName: string;
  programs: Array<{
    code: number;
    name: string;
    seatPoolQuota: Array<{
      name: string;
      seatPoolGender: Array<{
        name: string;
        open: number;
        open_pwd: number;
        gen_ews: number;
        gen_ews_pwd: number;
        sc: number;
        sc_pwd: number;
        st: number;
        st_pwd: number;
        obc_ncl: number;
        obc_ncl_pwd: number;
        total: number;
      }>;
      seatCapacity: number;
      femaleSupernumerary: number;
    }>;
  }>;
  total: Array<{
    id: string;
    qty: number;
  }>;
}
export const descriptions: descriptionStructure[] = [
  {
    id: 1,
    heading: 'IIIT Dharwad',
    description:
      "IIIT Dharwad is an Institute of National Importance by an act of Parliament (23 of 2017) set up in PPP mode between the Ministry of Education, Government of India, Government of Karnataka, and KEONICS. The Institute's Former Chairperson Smt. Sudha Murty, Board, and Senate constitute highly eminent leaders from administration, academia, and industry. They are instrumental in steering the institute in the right direction. IIIT Dharwad is a self-sustaining PPP Institute where all running expenses including salaries are met by the tuition and other fees paid by students.",
  },
  {
    id: 2,
    heading: 'Faculty',
    description:
      'Faculty at IIIT Dharwad are highly qualified with PhDs and Postdocs from institutes of repute in India and abroad and have the right blend of teaching, research, and industrial experience. The Director has ample experience in both academia and industry in India as well as USA. With energy and intent, they are working to set high standards in both teaching/learning and R&D.',
  },
  {
    id: 3,
    heading: 'Research and Innovation',
    description:
      'IIIT Dharwad is innovating in all its aspects: teaching, curriculum, campus design and R&D. Faculty at IIIT-Dharwad have a wide range of research expertise and experience covering many areas of Information Technology including: Data analytics, machine learning, and social network analysis, Computer networks and security, Knowledge management, information retrieval, ontology and semantic web technologies, Digital signal processing and speech technologies, Embedded systems, sensors, MEMS, nano technology and VLSI, Robotics, unmanned vehicles, control and communication technologies, Power electronics and alternative energy systems, Quantum physics, Social sciences, including women studies and communication, Algorithms, Computational Geometry, Blockchain Technology, Cloud Computing, Computer Design, Cyber Security, Big Data Analytics, Computer Vision, IoT & Automation.',
  },
  {
    id: 4,
    heading: 'Curriculum at IIIT Dharwad',
    description:
      'Teaching-Learning: Being a technical institute of national importance, a special emphasis is given to practice-based teaching and learning process.\nThe curriculum at IIIT Dharwad is evolving and dynamic to ensure that the courses taught are current and relevant. The Institute has not hesitated to break out of outdated conventions and has introduced an IT-focused curriculum from the first semester (e.g., no chemistry) with elective subjects offered in areas such as data science, AI, machine learning, IoT, cloud computing and Blockchain to name a few. Ample opportunities are provided to learn these cutting-edge areas practically through mini and major projects and events like hackathons.',
  },
];
export const year = 2024;
export const links: linksStructure[] = [
  {
    id: 1,
    type: 'Quick Links',
    links: [
      {
        id: 3,
        link: '/docs/FEE_2024-25_Sheet1.pdf',
        displayText: 'Fee Structure for the batch 2024-2025',
      },
      {
        id: 4,
        link: '/faq',
        displayText: "FAQ's",
      },
    ],
  },
  {
    id: 2,
    type: 'Eligibility Criteria',
    links: [
      {
        id: 1,
        link: '/docs/btech_admission_guidelines_2023.pdf',
        displayText:
          'Guidelines for students alloted through JoSAA/CSAB Counselling (*will be updated soon*)',
      },
      {
        id: 2,
        link: '/docs/undertaking_2023.pdf',
        displayText: 'Undertaking to be signed by students and their parents',
      },
      {
        id: 3,
        link: '/docs/JEE-CRL-CUT-OFF-RANKS-2023-24.pdf',
        displayText: 'Cut-off JEE Ranks for 2023-24 admissions',
      },
    ],
  },
  {
    id: 3,
    type: 'Programs Offered',
    links: [
      {
        id: 1,
        link: '/academics/departments/cse',
        displayText:
          'Computer Science and Engineering (Institute Code 316 and Program Code 4110)',
      },
      {
        id: 2,
        link: '/academics/departments/ece',
        displayText:
          'Electronics and Communication Engineering (Institute Code 316 and Program Code 4114)',
      },
      {
        id: 3,
        link: '/academics/departments/dsai',
        displayText:
          'Data Science and Artificial Intelligence (Institute Code 316 and Program Code 4181)',
      },
    ],
  },
];
export const seatMatrix: seatStructure = {
  instituteCode: 316,
  instituteName: 'Indian Institute of Information Technology (IIITDWD)',
  programs: [
    {
      code: 4110,
      name: 'B.Tech. in Computer Science and Engineering (4 Years)',
      seatPoolQuota: [
        {
          name: 'All India',
          seatPoolGender: [
            {
              name: 'Gender-Neutral',
              open: 62,
              open_pwd: 4,
              gen_ews: 16,
              gen_ews_pwd: 1,
              sc: 24,
              sc_pwd: 2,
              st: 12,
              st_pwd: 0,
              obc_ncl: 42,
              obc_ncl_pwd: 2,
              total: 165,
            },
            {
              name: 'Female-only (supernumerary)',
              open: 14,
              open_pwd: 0,
              gen_ews: 3,
              gen_ews_pwd: 0,
              sc: 5,
              sc_pwd: 0,
              st: 2,
              st_pwd: 0,
              obc_ncl: 9,
              obc_ncl_pwd: 0,
              total: 33,
            },
          ],
          seatCapacity: 198,
          femaleSupernumerary: 33,
        },
      ],
    },
    {
      code: 4114,
      name: 'B.Tech. in Electronics and Communication Engineering (4 Years)',
      seatPoolQuota: [
        {
          name: 'All India',
          seatPoolGender: [
            {
              name: 'Gender-Neutral',
              open: 32,
              open_pwd: 2,
              gen_ews: 8,
              gen_ews_pwd: 0,
              sc: 12,
              sc_pwd: 1,
              st: 6,
              st_pwd: 1,
              obc_ncl: 22,
              obc_ncl_pwd: 1,
              total: 85,
            },
            {
              name: 'Female-only (supernumerary)',
              open: 6,
              open_pwd: 0,
              gen_ews: 2,
              gen_ews_pwd: 0,
              sc: 3,
              sc_pwd: 0,
              st: 1,
              st_pwd: 0,
              obc_ncl: 5,
              obc_ncl_pwd: 0,
              total: 17,
            },
          ],
          seatCapacity: 102,
          femaleSupernumerary: 17,
        },
      ],
    },
    {
      code: 4181,
      name: 'B.Tech. in Data Science and Artificial Intelligence (4 Years)',
      seatPoolQuota: [
        {
          name: 'All India',
          seatPoolGender: [
            {
              name: 'Gender-Neutral',
              open: 32,
              open_pwd: 2,
              gen_ews: 8,
              gen_ews_pwd: 1,
              sc: 12,
              sc_pwd: 1,
              st: 6,
              st_pwd: 0,
              obc_ncl: 22,
              obc_ncl_pwd: 1,
              total: 85,
            },
            {
              name: 'Female-only (supernumerary)',
              open: 6,
              open_pwd: 0,
              gen_ews: 2,
              gen_ews_pwd: 0,
              sc: 3,
              sc_pwd: 0,
              st: 1,
              st_pwd: 0,
              obc_ncl: 5,
              obc_ncl_pwd: 0,
              total: 17,
            },
          ],
          seatCapacity: 102,
          femaleSupernumerary: 17,
        },
      ],
    },
  ],
  total: [
    {
      id: 'open',
      qty: 152,
    },
    {
      id: 'open_pwd',
      qty: 8,
    },
    {
      id: 'gen_ews',
      qty: 39,
    },
    {
      id: 'gen_ews_pwd',
      qty: 2,
    },
    {
      id: 'sc',
      qty: 59,
    },
    {
      id: 'sc_pwd',
      qty: 4,
    },
    {
      id: 'st',
      qty: 28,
    },
    {
      id: 'st_pwd',
      qty: 1,
    },
    {
      id: 'obc_ncl',
      qty: 105,
    },
    {
      id: 'obc_ncl_pwd',
      qty: 4,
    },
    {
      id: 'total',
      qty: 402,
    },
    {
      id: 'seat_capacity',
      qty: 402,
    },
    {
      id: 'supernumerary',
      qty: 67,
    },
  ],
};
