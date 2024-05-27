export interface issueStructure {
  issueUrl: string;
  id: number;
  displayText: string;
  previewImg: string;
}

export interface aboutStructure {
  magazineImg: string;
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
  members: Array<memberStructure>
}

export const about: aboutStructure = {
  magazineImg: '/campus/magazine.png',
  description:
    'Welcome to \'Kaleidoscope\', the vibrant institute magazine of IIIT Dharwad, where we celebrate the rich tapestry of creativity and intellect within our campus community. Our mission is clear: to showcase the dynamic fusion of creative writing, technical prowess, and industry insights cultivated by our esteemed students and faculty. Each month, we curate a diverse collection of articles, spanning from the innovative projects of our students to the cutting-edge research of our faculty. But our scope doesn\'t end there. We also extend a warm invitation to industry experts, who generously share their wisdom and experiences, enlightening our readers about the ever-evolving landscape of technology and its real-world applications. With great joy, we unveil our magazine on the digital platform of IIIT Dharwad, ensuring easy access for all to immerse themselves in the captivating narratives and invaluable knowledge encapsulated within its pages. Join us as we embark on this journey of exploration and enlightenment, one issue at a time.',
}

export const issues: issueStructure[] = [
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_1.pdf',
    'id': 1,
    'displayText': 'Issue 1',
    'previewImg': '/magazine/preview/issue_img1.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_2.pdf',
    'id': 2,
    'displayText': 'Issue 2',
    'previewImg': '/magazine/preview/issue_img2.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_3.pdf',
    'id': 3,
    'displayText': 'Issue 3',
    'previewImg': '/magazine/preview/issue_img3.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_4.pdf',
    'id': 4,
    'displayText': 'Issue 4',
    'previewImg': '/magazine/preview/issue_img4.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue5.pdf',
    'id': 5,
    'displayText': 'Issue 5',
    'previewImg': '/magazine/preview/issue_img5.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_6.pdf',
    'id': 6,
    'displayText': 'Issue 6',
    'previewImg': '/magazine/preview/issue_img6.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_7.pdf',
    'id': 7,
    'displayText': 'Issue 7',
    'previewImg': '/magazine/preview/issue_img7.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/issue_8.pdf',
    'id': 8,
    'displayText': 'Issue 8',
    'previewImg': '/magazine/preview/issue_img8.png'
  },
  {
    'issueUrl': 'https://iiitdwd.ac.in/magazine_img/Issue9.pdf',
    'id': 9,
    'displayText': 'Issue 9',
    'previewImg': '/magazine/preview/issue_img9.png'
  }
]

export const facultyAdvisors: memberStructure[] = [
  {
    id: 1,
    name: 'Dr. Utkarsh Khaire',
    role: 'Chairman and Technical Advisor',
  },
  {
    id: 2,
    name: 'Dr. Rajesh N.S.',
    role: 'Chief Editor'
  }
]

export const teams: teamStructure[] = [
  {
    'teamId': 1,
    'teamName': 'Magazine Co-Ordinator',
    'members': [
      { 'id': 1, 'role': 'Head', 'name': 'Ratnesh Kherudkar' },
      { 'id': 2, 'role': 'Member', 'name': 'Shreyansh Tiwari' },
      { 'id': 3, 'role': 'Member', 'name': 'Nithish Chouti' },
      { 'id': 4, 'role': 'Member', 'name': 'Vinay Jain' },
      { 'id': 5, 'role': 'Member', 'name': 'Digant Singh' },
      { 'id': 6, 'role': 'Member', 'name': 'Saagarika Ural S' },
      { 'id': 7, 'role': 'Member', 'name': 'Vivek' }
    ]
  },
  {
    'teamId': 2,
    'teamName': 'Design Team',
    'members': [
      { 'id': 8, 'role': 'Head', 'name': 'Shriya Patare' },
      { 'id': 9, 'role': 'Member', 'name': 'Ratnesh Kherudkar' },
      { 'id': 10, 'role': 'Member', 'name': 'PJ Vineeth Kumar' },
      { 'id': 11, 'role': 'Member', 'name': 'Vinayak Rai' },
      { 'id': 12, 'role': 'Member', 'name': 'Sai Aravind' },
      { 'id': 13, 'role': 'Member', 'name': 'Kartik Londhe' },
      { 'id': 14, 'role': 'Member', 'name': 'L Prasad Doddi' },
      { 'id': 15, 'role': 'Member', 'name': 'Bongu Ashish' }
    ]
  },
  {
    'teamId': 3,
    'teamName': 'Content Review Team',
    'members': [
      { 'id': 16, 'role': 'Head', 'name': 'Arya Katwe' },
      { 'id': 17, 'role': 'Member', 'name': 'Shreyansh Tiwari' },
      { 'id': 18, 'role': 'Member', 'name': 'Shreya Talekar' },
      { 'id': 19, 'role': 'Member', 'name': 'Shriya Patare' },
      { 'id': 20, 'role': 'Member', 'name': 'RS Gokul Varun' },
      { 'id': 21, 'role': 'Member', 'name': 'Vaibhav Sharma' }
    ]
  },
  {
    'teamId': 4,
    'teamName': 'Journalists Team',
    'members': [
      { 'id': 22, 'role': 'Head', 'name': 'Shreyansh Tiwari' },
      { 'id': 23, 'role': 'Member', 'name': 'Nomtha' },
      { 'id': 24, 'role': 'Member', 'name': 'Ambrish Pandey' },
      { 'id': 25, 'role': 'Member', 'name': 'Shreyansh Tiwari' },
      { 'id': 26, 'role': 'Member', 'name': 'Saagarika Ural S' },
      { 'id': 27, 'role': 'Member', 'name': 'Parmitha' },
      { 'id': 28, 'role': 'Member', 'name': 'Rishik Natra' }
    ]
  }
]
