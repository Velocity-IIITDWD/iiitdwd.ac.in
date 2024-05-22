export interface creditStructure {
  code: string | null;
  title: string;
  credit: string;
  preReq: string | null;
}

export interface courseStrcuture {
  course: string;
  credits: string;
}

export const ECEDetails: courseStrcuture[] = [
  {
    course: 'Core',
    credits: '30%',
  },
  {
    course: 'Electives',
    credits: '25%',
  },
  {
    course: 'Mathematics, Science and Humanities, Engineering',
    credits: '25%',
  },
  {
    course: 'Soft skills',
    credits: '10%',
  },
  {
    course: 'Projects',
    credits: '10%',
  },
];

export const CSEDetails: courseStrcuture[] = [
  {
    course: 'Core',
    credits: '30%',
  },
  {
    course: 'Electives',
    credits: '25%',
  },
  {
    course: 'Mathematics, Science and Humanities, Engineering',
    credits: '25%',
  },
  {
    course: 'Soft skills',
    credits: '10%',
  },
  {
    course: 'Projects',
    credits: '10%',
  },
];

export const DSAIDetails: courseStrcuture[] = [
  {
    course: 'Core',
    credits: '30%',
  },
  {
    course: 'Electives and Domain Courses',
    credits: '25%',
  },
  {
    course: 'Mathematics, Science and Humanities, Engineering',
    credits: '25%',
  },
  {
    course: 'Soft skills',
    credits: '10%',
  },
  {
    course: 'Projects',
    credits: '10%',
  },
];

export const CSEStructure: creditStructure[][] = [
  [
    {
      code: 'MA101',
      title: 'Calculus',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'EG101',
      title: 'Engineering 101',
      credit: '2-0-2-4-4',
      preReq: null,
    },
    {
      code: 'CS105',
      title: 'Problem Solving Through Programming',
      credit: '3-1-2-0-5',
      preReq: null,
    },
    {
      code: 'HS204',
      title: 'Economics',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'HS103',
      title: 'Language and Communication',
      credit: '2-0-2-0-3',
      preReq: null,
    },
  ],
  [
    {
      code: 'MA103',
      title: 'Mathematics for Computer Science',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'CS102',
      title: 'Data Structures',
      credit: '3-1-2-0-5',
      preReq: 'Problem Solving Through programming-CS105',
    },
    {
      code: 'CS106',
      title: 'Microprocessors & Microcontrollers',
      credit: '3-0-2-0-4',
      preReq: null,
    },
    {
      code: 'PH105',
      title: 'Physics For IT',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'HS102',
      title: 'Professional Communication',
      credit: '2-1-2-0-4',
      preReq: null,
    },
  ],
  [
    {
      code: 'MA201',
      title: 'Probability',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'CS201',
      title: 'Discrete Mathematics',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'CS207',
      title: 'Object Oriented Programming',
      credit: '3-0-2-0-4',
      preReq: 'Problem Solving Through Programming-CS105', // Note the hyphen
    },
    {
      code: 'CS208',
      title: 'Computer Architecture',
      credit: '3-0-2-0-4',
      preReq: 'Microprocessors and Microcontrollers-CS106', // Note the hyphen
    },
    {
      code: 'CS202',
      title: 'Design & Analysis of Algorithms',
      credit: '3-1-2-0-5',
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'Basket', // Assuming this is the actual course code
      title: 'Psychology/Sociology/LifeSkills Basket',
      credit: '3-0-0-0-3',
      preReq: null,
    },
  ],
  [
    {
      code: 'MA202',
      title: 'Linear Algebra',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'CS206',
      title: 'Theory of Computation',
      credit: '3-1-0-0-4',
      preReq: 'Data Structures -CS102, Discrete Mathematics - CS201', // Note hyphens and comma
    },
    {
      code: 'CS204',
      title: 'Operating Systems',
      credit: '3-1-0-0-4',
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'CS301',
      title: 'Software Engineering',
      credit: '3-1-0-0-4',
      preReq: 'Problem Solving Through programming-CS105', // Note the hyphen
    },
    {
      code: 'CS310',
      title: 'Database Management Systems',
      credit: '3-1-2-0-5',
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'HS205',
      title: 'Ethics',
      credit: '3-0-0-0-3',
      preReq: null,
    },
  ],
  [
    {
      code: 'CS309',
      title: 'Statistics for Computer Science',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: 'CS303',
      title: 'Computer Networks',
      credit: '3-1-2-0-5',
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'CS304',
      title: 'Artificial Intelligence',
      credit: '3-1-0-0-4',
      preReq: null,
    },
    {
      code: null, // Assuming this is the actual course code
      title: 'CS Theory Basket Elective',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 1',
      credit: '4-0-0-0-4',
      preReq: null,
    },
  ],
  [
    {
      code: 'CS307',
      title: 'Machine Learning',
      credit: '3-0-2-0-4',
      preReq: 'Linear Algebra-MA202', // Note the hyphen
    },
    {
      code: null,
      title: 'Elective 2',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 3',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 4',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 5',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: 'CS399',
      title: 'Mini Project I',
      credit: '0-0-0-8-2',
      preReq: null,
    },
  ],
  [
    {
      code: null,
      title: 'Elective 6',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 7',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 8',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 9',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: 'CS498',
      title: 'Mini Project II',
      credit: '0-0-0-8-2',
      preReq: null,
    },
    {
      code: 'HS101',
      title: 'Environmental Studies*',
      credit: '0-0-0-8-2',
      preReq: null,
    },
  ],
  [
    {
      code: 'CS499',
      title: 'Major Project',
      credit: '0-0-0-32-8',
      preReq: null,
    },
  ],
];

export const DSAIStrcutre: creditStructure[][] = [
  [
    {
      code: 'DS101',
      title: 'Mathematics for Data Science',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'DS102',
      title: 'Finance and Accounting',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'CS105',
      title: 'Problem Solving Through Programming',
      credit: '3-1-2-0-5', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'DS104',
      title: 'Data Science and AI Applications',
      credit: '3-0-0-4-4', // Assuming the intended format is 3-0-0-4 (Theory) - 4 (Lab)
      preReq: null,
    },
    {
      code: 'HS103',
      title: 'Language and Communication',
      credit: '2-0-2-0-3', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'DS105',
      title: 'Probability and Statistics',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'CS102',
      title: 'Data Structures',
      credit: '3-1-2-0-5', // Assuming consistent credit format
      preReq: 'Problem Solving Through programming-CS105',
    },
    {
      code: 'EG101',
      title: 'Engineering 101',
      credit: '2-0-2-4-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'HS102',
      title: 'Professional Communication',
      credit: '2-1-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'HS204',
      title: 'Economics',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'DS201', // Assuming this is not a duplicate
      title: 'Data and Business Analytics',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'CS201',
      title: 'Discrete Mathematics',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'CS207',
      title: 'Object Oriented Programming',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: 'Problem Solving Through Programming-CS105', // Note the hyphen
    },
    {
      code: null, // Assuming this is the actual course code
      title: 'Psychology/Sociology/LifeSkills Basket',
      credit: '3-0-0-0-3',
      preReq: null,
    },
    {
      code: 'CS202',
      title: 'Design & Analysis of Algorithms',
      credit: '3-1-2-0-5', // Assuming consistent credit format
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'HS205',
      title: 'Ethics',
      credit: '3-0-0-0-3', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'MA202',
      title: 'Linear Algebra',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC209',
      title: 'Introduction to Systems Thinking',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'DS203',
      title: 'Operating Systems and Cloud Computing',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'DS204',
      title: 'Software Engineering and Services',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Problem Solving Through programming-CS105', // Note the hyphen
    },
    {
      code: 'CS310',
      title: 'Database Management Systems',
      credit: '3-1-2-0-5',
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'DS205',
      title: 'Global Business Perspectives',
      credit: '3-0-0-0-3', // Assuming consistent credit format
      preReq: null, // Note the hyphen
    },
  ],
  [
    {
      code: 'DS301',
      title: 'Graphs and Social Networks',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Discrete Mathematics-CS201', // Note the hyphen
    },
    {
      code: 'DS302',
      title: 'Computer Communication Networks',
      credit: '3-1-2-0-5', // Assuming consistent credit format
      preReq: 'Data Structure-CS102', // Note the hyphen
    },
    {
      code: 'DS303',
      title: 'Algorithms for Artificial Intelligence',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'CS307',
      title: 'Machine Learning',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Linear Algebra-MA202', // Note the hyphen
    },
    {
      code: 'DS304',
      title: 'Visualization and App Development',
      credit: '2-1-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'DS305',
      title: 'Legal Aspects of IT',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'DS306',
      title: 'Financial Data Analytics',
      credit: '2-1-2-0-4', // Assuming consistent credit format
      preReq: 'Discrete Mathematics-CS201', // Note the hyphen
    },
    {
      code: 'DS307',
      title: 'Innovation and Entrepreneurship',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'DS308',
      title: 'Data Security and Privacy',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 1',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: 'DS399',
      title: 'Mini Project I',
      credit: '0-0-0-8-2',
      preReq: null,
    },
  ],
  [
    {
      code: 'DS401',
      title: 'Healthcare Data Analytics',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Discrete Mathematics-CS201', // Note the hyphen
    },
    {
      code: null,
      title: 'Elective 2',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 3',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 4',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: 'DS498',
      title: 'Mini Project II',
      credit: '0-0-0-8-2',
      preReq: null,
    },
    {
      code: 'HS101',
      title: 'Environmental Studies*',
      credit: '0-0-0-8-2',
      preReq: null,
    },
  ],
  [
    {
      code: 'CS499',
      title: 'Major Project',
      credit: '0-0-0-32-8',
      preReq: null,
    },
  ],
];

export const ECEStructure: creditStructure[][] = [
  [
    {
      code: 'MA101',
      title: 'Calculus',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC102',
      title: 'Digital Design',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'CS103',
      title: 'Programming and Data Structures',
      credit: '3-1-2-0-5', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'PH104',
      title: 'Physics for ECE',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EG102',
      title: 'Basic Circuit Theory',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'MA102',
      title: 'Differential Equations',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC203',
      title: 'Analog Electronics',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC208',
      title: 'Introduction to Embedded Systems',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: 'Digital Design-EC102', // Note the hyphen
    },
    {
      code: 'EG101',
      title: 'Engineering 101',
      credit: '2-1-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'HS103',
      title: 'Language and Communication',
      credit: '2-0-2-0-3', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'MA202',
      title: 'Linear Algebra',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC207',
      title: 'Electromagnetic Theory',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Calculus-MA101', // Note the hyphen
    },
    {
      code: 'EC206',
      title: 'Linear Integrated Circuits',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC201',
      title: 'Signals and Systems',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Differential Equations-MA102', // Note the hyphen
    },
    {
      code: 'EC202',
      title: 'Microprocessors and Micro-controllers',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq:
        'Programming and Data Structures-CS103, Introduction to Embedded Systems-EC208', // Note the hyphens and comma
    },
    {
      code: 'HS203',
      title: 'Professional Communication',
      credit: '2-1-0-0-3', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'MA208',
      title: 'Probability and Random Processes',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'EC205',
      title: 'Control Systems',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: 'Differential Equations-MA102', // Note the hyphen
    },
    {
      code: 'EC310',
      title: 'Embedded Systems Design',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Microprocessors and Microcontrollers-EC202', // Note the hyphen
    },
    {
      code: 'EC204',
      title: 'Analog and Digital Communication',
      credit: '3-1-2-0-5', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'HS204',
      title: 'Economics',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: null,
    },
    {
      code: 'HS205',
      title: 'Ethics',
      credit: '3-0-0-0-3', // Assuming consistent credit format
      preReq: null,
    },
  ],
  [
    {
      code: 'EC306',
      title: 'Digital Signal Processing',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: 'Signals and Systems-EC201', // Note the hyphen
    },
    {
      code: 'EC301',
      title: 'Introduction to VLSI Design',
      credit: '3-1-0-0-4', // Assuming consistent credit format
      preReq: 'Digital Design-EC102, Analog Electronics-EC203', // Note the hyphens and comma
    },
    {
      code: null,
      title: 'Psychology/Sociology/Life Skills Basket',
      credit: '3-0-0-0-3',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 1',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 2',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 3',
      credit: '4-0-0-0-4',
      preReq: null,
    },
  ],
  [
    {
      code: 'EC307',
      title: 'Wireless Communication',
      credit: '3-0-2-0-4', // Assuming consistent credit format
      preReq: 'Analog and Digital Communication-EC204', // Note the hyphen
    },
    {
      code: null,
      title: 'Elective 4',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 5',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 6',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 7',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: 'EC399',
      title: 'Mini Project I',
      credit: '0-0-0-8-2',
      preReq: null,
    },
  ],
  [
    {
      code: null,
      title: 'Elective 8',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 9',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 10',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: null,
      title: 'Elective 11',
      credit: '4-0-0-0-4',
      preReq: null,
    },
    {
      code: 'EC498',
      title: 'Mini Project II',
      credit: '0-0-0-8-2',
      preReq: null,
    },
    {
      code: 'HS101',
      title: 'Environmental Studies*',
      credit: '0-0-0-8-2',
      preReq: null,
    },
  ],
  [
    {
      code: 'EC499',
      title: 'Major Project',
      credit: '0-0-0-32-8', // Assuming consistent credit format
      preReq: null,
    },
  ],
];
