export interface issueStructure {
  issueUrl: string;
  id: number;
  displayText: string;
  previewImg: string;
}

export interface aboutStructure {
  description: string;
}

export interface memberStructure {
  id: number;
  name: string;
  role: string;
}

export interface teamStructure {
  teamId: number;
  teamName: string;
  members: Array<memberStructure>;
}

export const about: aboutStructure = {
  description:
    "Welcome to 'Kaleidoscope', the vibrant institute magazine of IIIT Dharwad, where we celebrate the rich tapestry of creativity and intellect within our campus community. Our mission is clear: to showcase the dynamic fusion of creative writing, technical prowess, and industry insights cultivated by our esteemed students and faculty. Each month, we curate a diverse collection of articles, spanning from the innovative projects of our students to the cutting-edge research of our faculty. But our scope doesn't end there. We also extend a warm invitation to industry experts, who generously share their wisdom and experiences, enlightening our readers about the ever-evolving landscape of technology and its real-world applications. With great joy, we unveil our magazine on the digital platform of IIIT Dharwad, ensuring easy access for all to immerse themselves in the captivating narratives and invaluable knowledge encapsulated within its pages. Join us as we embark on this journey of exploration and enlightenment, one issue at a time.",
};

export const issues: issueStructure[] = [
  {
    issueUrl: '/docs/issue_1.pdf',
    id: 1,
    displayText: 'Issue 1',
    previewImg: '/images/issue_img1.png',
  },
  {
    issueUrl: '/docs/issue_2.pdf',
    id: 2,
    displayText: 'Issue 2',
    previewImg: '/images/issue_img2.png',
  },
  {
    issueUrl: '/docs/issue_3.pdf',
    id: 3,
    displayText: 'Issue 3',
    previewImg: '/images/issue_img3.png',
  },
  {
    issueUrl: '/docs/issue_4.pdf',
    id: 4,
    displayText: 'Issue 4',
    previewImg: '/images/issue_img4.png',
  },
  {
    issueUrl: '/docs/issue_5.pdf',
    id: 5,
    displayText: 'Issue 5',
    previewImg: '/images/issue_img5.png',
  },
  {
    issueUrl: '/docs/issue_6.pdf',
    id: 6,
    displayText: 'Issue 6',
    previewImg: '/images/issue_img6.png',
  },
  {
    issueUrl: '/docs/issue_7.pdf',
    id: 7,
    displayText: 'Issue 7',
    previewImg: '/images/issue_img7.png',
  },
  {
    issueUrl: '/docs/issue_8.pdf',
    id: 8,
    displayText: 'Issue 8',
    previewImg: '/images/issue_img8.png',
  },
  {
    issueUrl: '/docs/issue_9.pdf',
    id: 9,
    displayText: 'Issue 9',
    previewImg: '/images/issue_img9.png',
  },
  {
    issueUrl: '/docs/Issue_10.pdf',
    id: 10,
    displayText: 'Issue 10',
    previewImg: '/images/issue_img10.jpg',
  },
];

export const facultyAdvisors: memberStructure[] = [
  {
    id: 1,
    name: 'Dr. Utkarsh Khaire',
    role: 'Chairman and Technical Advisor',
  },
  {
    id: 2,
    name: 'Dr. Rajesh N.S.',
    role: 'Chief Editor',
  },
];

export const teams: teamStructure[] = [
  {
    teamId: 1,
    teamName: 'Magazine Co-Ordinator',
    members: [
      { id: 1, role: 'Head', name: 'Ratnesh Kherudkar' },
      { id: 2, role: 'Member', name: 'Shreyansh Tiwari' },
      { id: 3, role: 'Member', name: 'Nithish Chouti' },
      { id: 4, role: 'Member', name: 'Vinay Jain' },
      { id: 5, role: 'Member', name: 'Digant Singh' },
      { id: 6, role: 'Member', name: 'Saagarika Ural S' },
      { id: 7, role: 'Member', name: 'Vivek' },
    ],
  },
  {
    teamId: 2,
    teamName: 'Design Team',
    members: [
      { id: 8, role: 'Head', name: 'Shriya Patare' },
      { id: 9, role: 'Member', name: 'Ratnesh Kherudkar' },
      { id: 10, role: 'Member', name: 'PJ Vineeth Kumar' },
      { id: 11, role: 'Member', name: 'Vinayak Rai' },
      { id: 12, role: 'Member', name: 'Sai Aravind' },
      { id: 13, role: 'Member', name: 'Kartik Londhe' },
      { id: 14, role: 'Member', name: 'L Prasad Doddi' },
      { id: 15, role: 'Member', name: 'Bongu Ashish' },
    ],
  },
  {
    teamId: 3,
    teamName: 'Content Review Team',
    members: [
      { id: 16, role: 'Head', name: 'Arya Katwe' },
      { id: 17, role: 'Member', name: 'Shreyansh Tiwari' },
      { id: 18, role: 'Member', name: 'Shreya Talekar' },
      { id: 19, role: 'Member', name: 'Shriya Patare' },
      { id: 20, role: 'Member', name: 'RS Gokul Varun' },
      { id: 21, role: 'Member', name: 'Vaibhav Sharma' },
    ],
  },
  {
    teamId: 4,
    teamName: 'Journalists Team',
    members: [
      { id: 22, role: 'Head', name: 'Shreyansh Tiwari' },
      { id: 23, role: 'Member', name: 'Nomtha' },
      { id: 24, role: 'Member', name: 'Ambrish Pandey' },
      { id: 26, role: 'Member', name: 'Saagarika Ural S' },
      { id: 27, role: 'Member', name: 'Parmitha' },
      { id: 28, role: 'Member', name: 'Rishik Natra' },
    ],
  },
];
