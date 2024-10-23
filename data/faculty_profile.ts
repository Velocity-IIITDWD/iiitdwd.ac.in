export interface ProfileProp {
  id: string;
  content: {
    head: {
      name: string;
      profile_pdf: string;
    };

    card: {
      photo: string;
      PhD:string,
      designation: string;
      department: string;
      mail_id: string;
      cabin_number: string;
      position?: string;
    };

    body: {
      profile_text: string;
      interest_areas: { id: number; area: string }[];
    };
  };
}
let ProfileProps: ProfileProp[] = [
  {
    id: 'DrSandeshSanjeevPhalke',
    content: {
      head: {
        name: 'Dr. Sandesh Sanjeev Phalke',
        profile_pdf: '/docs/Dr.Sandesh_Sanjeev.pdf',
      },
      card: {
        photo: '/images/Sandesh_Sanjeev_Phalke.jpg',
        PhD:'Ph.D. (Indian Institute of Technology Guwahati,Guwahati, India.)',
        designation: 'Assistant Professor',  
        department: 'Arts, Science and Design',
        mail_id: 'iitdhn.pankaj@gmail.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Co-Design' },
          { id: 2, area: 'Early childhood education and care' },
          { id: 3, area: 'Child computer interaction' },
        ],
      },
    },
  },
  {
    id: 'DrPankajKumar',
    content: {
      head: {
        name: 'Dr. Pankaj Kumar',
        profile_pdf: '/docs/Dr.Pankaj_Kumar.pdf',
      },
      card: {
        photo: '/images/Pankaj_Kumar.jpg',
        PhD:'Ph.D. (Indian Institute of Technology (ISM) Dhanbad, India)',
        designation: 'Assistant Professor',  
        department: 'Electronics and Communication Engineering',
        mail_id: 'iitdhn.pankaj@gmail.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [ 
          { id: 1, area: 'Co-Semiconductor Device Physics' },
          { id: 2, area: 'Emerging FET Devices' },
          { id: 3, area: 'Analog VLSI Circuits' },
          { id: 4, area: 'CMOS for low-power applications' },
          { id: 5, area: 'Biosensors' },
          { id: 5, area: 'Modeling and Simulation of FET Devices' },
        ],
      },
    },
  },
  {
    id: 'ProfVRavishankar',
    content: {
      head: {
        name: 'Prof. V. Ravishankar',
        profile_pdf: 'https://iitd.irins.org/profile/2271',
      },
      card: {
        photo: '/images/Prof.V.Ravishankar.jpg',
        PhD:'',
        designation: 'Adjunct Professor',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'vravi@physics.iitd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'High Energy Physics' },
          { id: 2, area: 'Quantum Information' },
        ],
      },
    },
  },
  {
    id: 'AbdulWahid',
    content: {
      head: {
        name: 'Dr. Abdul Wahid', 
        profile_pdf: 'https://sites.google.com/view/abdulwahid-cse',
      },
      card: {
        photo: '/images/Dr.AbdulWahid.jpeg',
        PhD:'Ph.D. (IIT Dhanbad)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'abdul.wahid@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Artificial Intelligence' },
          { id: 2, area: 'Evolutionary Computing' },
          { id: 3, area: 'Reinforcement Learning' },
          { id: 4, area: 'Multi-Agent Systems' },
        ],
      },
    },
  },
  {
    id: 'AnandPBarangi',
    content: {
      head: {
        name: 'Dr. Anand P. Barangi',
        profile_pdf: '/docs/Dr.AnandP.Barangi.pdf',
      },
      card: {
        photo: '/images/Dr.AnandP.Barangi.jpg',
        PhD:'Ph.D. (Karnatak University, Dharwad)',
        designation: 'Assistant Professor',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'anandbarangi@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [{ id: 1, area: 'Graph Theory' }],
      },
    },
  },
  {
    id: 'AnimeshChaturvedi',
    content: {
      head: {
        name: 'Dr. Animesh Chaturvedi',
        profile_pdf: 'https://sites.google.com/site/animeshchaturvedi07/', //website link
      },
      card: {
        photo: '/images/Dr.AnimeshChaturvedi.jpg',
        PhD:'Ph.D. (IIT Indore)',
        designation: 'Assistant Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'animesh@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Data Science and AI' },
          { id: 2, area: 'Systems Engineering' },
          { id: 3, area: 'SOA and Cloud Computing' },
          { id: 4, area: 'Big Data Analytics' },
        ],
      },
    },
  },
  {
    id: 'AnimeshRoy',
    content: {
      head: {
        name: 'Dr. Animesh Roy',
        profile_pdf: '/docs/Dr.AnimeshRoy.pdf',
      },
      card: {
        photo: '/images/Dr.AnimeshRoy.jpg',
        PhD:'Ph.D. (IIEST)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'animeshroy@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Delay tolerant networks' },
          { id: 2, area: 'Network optimization' },
          { id: 3, area: 'Algorithms' },
        ],
      },
    },
  },
  {
    id: 'Anushreekini',
    content: {
      head: {
        name: 'Dr. Anushree kini',
        profile_pdf: '/docs/Dr.Anushreekini.pdf',
      },
      card: {
        photo: '/images/Dr.Anushreekini.jpg',
        PhD:'Ph.D. (KLE Technological University)',
        designation: 'Assistant Professor',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'anushree@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'AswathBabuH',
    content: {
      head: {
        name: 'Dr. Aswath Babu H',
        profile_pdf: '/docs/Dr.AswathBabuH.pdf',
      },
      card: {
        photo: '/images/Dr.AswathBabuH.jpeg',
        PhD:'Ph.D. (IIT Kanpur)',
        designation: 'Assistant Professor',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'aswath@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Quantum Optics' },
          { id: 2, area: 'Quantum Information Theory' },
          { id: 3, area: 'Non linear Dynamics' },
        ],
      },
    },
  },
  {
    id: 'ChandrikaKamath',
    content: {
      head: {
        name: 'Dr. Chandrika Kamath',
        profile_pdf: '',
      },
      card: {
        photo: '/images/Dr.ChandrikaKamath.png',
        PhD:'Ph.D. (KUD)',
        designation: 'Visiting Faculty',
        department: 'Department of Arts, Science, and Design',
        mail_id: '-',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'MilindChabbi',
    content: {
      head: {
        name: 'Dr. Milind Chabbi',
        profile_pdf: '/docs/Milind_Chabbi.pdf',
      },
      card: {
        photo: '/images/Milind-Chabbi.png',
        PhD:'Rice Univeristy', 
        designation: 'Professor of Practice',
        department: '',
        mail_id: 'Chabbi.Milind@Gmail.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'ChannappaAkki',
    content: {
      head: {
        name: 'Dr. Channappa Akki',
        profile_pdf: '/docs/Dr.ChannappaAkki.pdf',
      },
      card: {
        photo: '/images/Dr.ChannappaAkki.jpeg',
        PhD:'Ph.D. (IIT Roorkee)',
        designation: 'Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'akki.channappa@gmail.com',
        cabin_number: '?',
        position: 'Professor-in-Charge - Planning and Development',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'ATM Networks' },
          { id: 2, area: 'Wireless networks' },
          { id: 3, area: 'Semantic analysis' },
        ],
      },
    },
  },
  {
    id: 'ChinmayanandaA',
    content: {
      head: {
        name: 'Dr. Chinmayananda A',
        profile_pdf: '/docs/Dr.ChinmayanandaA.pdf',
      },
      card: {
        photo: '/images/Dr.ChinmayanandaA.jpg',
        PhD:'Ph.D. (IISc Bengaluru)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'chinmay@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Wireless Communications' },
          { id: 2, area: 'Coding Theory' },
          { id: 3, area: 'Machine Learning' },
          { id: 4, area: 'Reinforcement Learning' },
        ],
      },
    },
  },
  {
    id: 'DeepakKT',
    content: {
      head: {
        name: 'Dr. Deepak K T',
        profile_pdf: 'https://deepakthotappa.wixsite.com/mysite', //website link
      },
      card: {
        photo: '/images/Dr.DeepakKT.jpeg',
        PhD:'Ph.D. (IIT Guwahati)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'deepak@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Associate Dean - Research and Development [R&D]',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Speech/Audio Processing' },
          { id: 2, area: 'Machine Learning' },
        ],
      },
    },
  },
  {
    id: 'DibyajyotiGuha',
    content: {
      head: {
        name: 'Dr. Dibyajyoti Guha',
        profile_pdf: '/docs/Dr.DibyajyotiGuha.pdf',
      },
      card: {
        photo: '/images/Dr.DibyajyotiGuha.jpg',
        PhD:'Ph.D. (IIT Bhubaneswar)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'dguha@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Machine Learning' },
          { id: 2, area: 'Computer Vision' },
          { id: 3, area: 'Hyperspectral Imaging' },
          { id: 4, area: 'Computer Network' },
        ],
      },
    },
  },
  {
    id: 'GirishGN',
    content: {
      head: {
        name: 'Dr. Girish G N',
        profile_pdf: '/docs/Dr.GirishGN.pdf',
      },
      card: {
        photo: '/images/Dr.GirishGN.jpeg',
        PhD:'Ph.D. (NITK)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'girish@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Medical Image Analysis' },
          { id: 2, area: ' Image Processing ' },
          { id: 3, area: 'Machine Learning' },
        ],
      },
    },
  },
  {
    id: 'JagadeeshaRB',
    content: {
      head: {
        name: 'Dr. Jagadeesha R B',
        profile_pdf: 'https://sites.google.com/site/jagadeesharb/home', //website
      },
      card: {
        photo: '/images/Dr.JagadeeshaRB.jpg',
        PhD:'Ph.D. (NTHU, Taiwan)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'Jagadeesha@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Faculty In Charge - Exams and AIMS',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Next Generation Wireless Networks' },
          { id: 2, area: 'D2D Communication' },
          { id: 3, area: 'IoT' },
          { id: 4, area: '5G' },
          { id: 4, area: '6G' },
        ],
      },
    },
  },
  {
    id: 'JagadishDN',
    content: {
      head: {
        name: 'Dr. Jagadish D N',
        profile_pdf: 'https://sites.google.com/iiitdwd.ac.in/jagadishdn', //website
      },
      card: {
        photo: '/images/Dr.JagadishDN.jpeg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'jagadishdn@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Faculty-In-Charge - Student Welfare [S.W.]',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Analog VLSI' },
          { id: 2, area: 'Mixed Signal VLSI Design' },
          { id: 3, area: 'Architecture Neuromorphic Circuits' },
        ],
      },
    },
  },
  {
    id: 'KrishnenduGhosh',
    content: {
      head: {
        name: 'Dr. Krishnendu Ghosh',
        profile_pdf: 'https://sites.google.com/view/krishnendughosh',
      },
      card: {
        photo: '/images/Dr.KrishnenduGhosh.png',
        PhD:'Ph.D. (IIT Kharagpur)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'krishnendu@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Natural Language Processing' },
          { id: 2, area: 'Artificial Intelligence' },
        ],
      },
    },
  },
  {
    id: 'LakshmanMahto',
    content: {
      head: {
        name: 'Dr. Lakshman Mahto',
        profile_pdf: 'https://sites.google.com/view/lakshya',
      },
      card: {
        photo: '/images/Dr.LakshmanMahto.jpeg',
        PhD:'Ph.D. (IIT Mandi)',
        designation: 'Assistant Professor',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'lakshman@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Statistical learning' },
          { id: 2, area: 'Controllability of PDE' },
          { id: 3, area: 'Dynamical systems' },
        ],
      },
    },
  },
  {
    id: 'MalayKumar',
    content: {
      head: {
        name: 'Dr. Malay Kumar',
        profile_pdf: 'https://sites.google.com/view/drmalaykumar',
      },
      card: {
        photo: '/images/Dr.MalayKumar.jpg',
        PhD:'Ph.D. (NIT Raipur)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'malay.kumar@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Light Weight Cryptography' },
          { id: 2, area: 'Fully Homomorphic Encryption' },
          { id: 3, area: 'Privacy Issues in Cloud Computing' },
        ],
      },
    },
  },
  {
    id: 'ManjunathKV',
    content: {
      head: {
        name: 'Dr. Manjunath K V',
        profile_pdf: '/docs/Dr.ManjunathKV.pdf',
      },
      card: {
        photo: '/images/Dr.ManjunathKV.jpg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'manjunathkv@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Faculty-In Charge - Career Guidance Cell [CGC]',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'NavyashreeGR',
    content: {
      head: {
        name: 'Dr. Navyashree G. R.',
        profile_pdf: '', //no pdf or website of profile available
      },
      card: {
        photo: '/images/Dr.NavyashreeG.R..jpg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Visiting Faculty',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'navyashree@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Economics' },
          { id: 2, area: 'Financial Management' },
          { id: 3, area: 'ICT' },
          { id: 4, area: 'Food Industry' },
        ],
      },
    },
  },
  {
    id: 'NatarajKS',
    content: {
      head: {
        name: 'Dr. Nataraj K S',
        profile_pdf: '/docs/Dr.NatarajKS.pdf',
      },
      card: {
        photo: '/images/Dr.NatarajKS.jpg',
        PhD:'Ph.D. (IIT Bombay)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'nataraj@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Speech/Audio Processing' },
          { id: 2, area: 'Machine Learning' },
          { id: 3, area: 'Embedded Systems' },
        ],
      },
    },
  },
  {
    id: 'PavanKumarC',
    content: {
      head: {
        name: 'Dr. Pavan Kumar C',
        profile_pdf: 'https://pavankumarphd.github.io/',
      },
      card: {
        photo: '/images/Dr.PavanKumarC.jpg',
        PhD:'Ph.D. (VIT Vellore)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'pavan@iiitdwd.ac.in',
        cabin_number: '?',
        position:
          'Associate Dean - (Information Communication Technology [ICT], Automation)',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Coding Theory' },
          { id: 2, area: 'Data Communication' },
          { id: 3, area: 'Formal Languages and Automata Theory' },
          { id: 4, area: 'Cryptography and Applied Mathematics' },
        ],
      },
    },
  },
  {
    id: 'PrabhuPrasadBM',
    content: {
      head: {
        name: 'Dr. Prabhu Prasad B M',
        profile_pdf: 'https://prabhuprasadbm.github.io/',
      },
      card: {
        photo: '/images/Dr.PrabhuPrasadBM.png',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'prabhuprasad@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Head of the Department [HoD] -  Dept. of CSE',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Computer architecture' },
          { id: 2, area: 'Network-on-Chips' },
          { id: 3, area: 'High-performance computing' },
        ],
      },
    },
  },
  {
    id: 'PrakashPawar',
    content: {
      head: {
        name: 'Dr. Prakash Pawar',
        profile_pdf: '/docs/Dr.PrakashPawar.pdf',
      },
      card: {
        photo: '/images/Dr.PrakashPawar.jpg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'Prakashpawar@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Head of the Department [HoD] - Dept. of ECE',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Demand Side Energy Management' },
          { id: 2, area: 'Embedded System & IoT' },
          { id: 3, area: 'Machine Learning' },
          { id: 4, area: 'VLSI & Digital System Design' },
        ],
      },
    },
  },
  {
    id: 'PramodYelmewad',
    content: {
      head: {
        name: 'Dr. Pramod Yelmewad',
        profile_pdf: 'https://sites.google.com/view/pramod-yelmewad/home',
      },
      card: {
        photo: '/images/Dr.PramodYelmewad.jpg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'pramodyelmewad@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: ' Parallel Computing' },
          { id: 2, area: 'Parallel Metaheuristic Algorithms' },
        ],
      },
    },
  },
  {
    id: 'RajendraHegadi',
    content: {
      head: {
        name: 'Dr. Rajendra Hegadi',
        profile_pdf: '/docs/Dr.RajendraHegadi.pdf',
      },
      card: {
        photo: '/images/Dr.RajendraHegadi.jpeg',
        PhD:'Ph.D. (MGRRI, Chennai)',
        designation: 'Associate Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'rajendrahegadi@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Professor-In-Charge - Academic & Student Welfare',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Cryptography & Network Security' },
          { id: 2, area: 'Blockchain and AI/ML' },
          { id: 3, area: 'Cybersecurity' },
        ],
      },
    },
  },
  {
    id: 'RajeshNS',
    content: {
      head: {
        name: 'Dr. Rajesh N S',
        profile_pdf: '/docs/Dr.RajeshNS.pdf',
      },
      card: {
        photo: '/images/Dr.RajeshNS.jpeg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant Professor',
        department: 'Department of Arts, Science, and Design',
        mail_id: 'rajeshns29@gmail.com, rajesh.ns29@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Diasporic Literature' },
          { id: 2, area: 'Indo-Canadian Writings' },
          { id: 3, area: 'Dalit Literature' },
          { id: 4, area: 'Post-Colonial Studies' },
          { id: 5, area: 'Communicative English' },
        ],
      },
    },
  },
  {
    id: 'RajibSharma',
    content: {
      head: {
        name: 'Dr. Rajib Sharma',
        profile_pdf: '/docs/Dr.RajibSharma.pdf',
      },
      card: {
        photo: '/images/Dr.RajibSharma.jpg',
        PhD:'Ph.D. (IIT Guwahati)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'rajibd2k@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Speech Technology' },
          { id: 2, area: 'Signal Processing' },
          { id: 3, area: 'Machine Learning' },
        ],
      },
    },
  },
  {
    id: 'RameshAthe',
    content: {
      head: {
        name: 'Dr. Ramesh Athe',
        profile_pdf: 'https://sites.google.com/iiitdwd.ac.in/ramesh/home',
      },
      card: {
        photo: '/images/Dr.RameshAthe.jpg',
        PhD:'Ph.D. (Osmania University, Hyderabad)',
        designation: 'Assistant Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: ' ramesh.athe@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Data Science, Machine learning' },
          { id: 2, area: 'Meta-Analysis' },
          {
            id: 3,
            area: 'Health Technology in the fields of Health, Nutrition, and Clinical Data and also Databases.',
          },
        ],
      },
    },
  },
  {
    id: 'SibasankarPadhy',
    content: {
      head: {
        name: 'Dr. Sibasankar Padhy',
        profile_pdf:
          'https://scholar.google.co.in/citations?user=fsKQ5XwAAAAJ&hl=en',
      },
      card: {
        photo: '/images/Dr.SibasankarPadhy.jpg',
        PhD:'Ph.D. (IIT Guwahati)',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'sibasankar@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [{ id: 1, area: 'Signal Processing' }],
      },
    },
  },
  {
    id: 'SiddharthR',
    content: {
      head: {
        name: 'Dr.Siddharth R',
        profile_pdf: '/docs/Dr.SiddharthR.pdf',
      },
      card: {
        photo: '/images/Dr.SiddharthR.jpg',
        PhD:'Ph.D. (NIT Puducherry)',
        designation: 'Assistant  Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'siddharth_r@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Head of the Department [HoD] - Dept. of DSAI',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Data Preprocessing' },
          { id: 2, area: 'Machine Learning' },
        ],
      },
    },
  },
  {
    id: 'ShirshenduLayek',
    content: {
      head: {
        name: 'Dr. Shirshendu Layek',
        profile_pdf: 'https://sites.google.com/view/shirshendulayek',
      },
      card: {
        photo: '/images/Dr.ShirshenduLayek.jpg',
        PhD:'Ph.D. (IIT Dhanbad)',
        designation: 'Assistant  Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'shirshendu@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Computer Vision' },
          { id: 2, area: 'AI and ML in Natural/Man-made Disasters' },
        ],
      },
    },
  },
  {
    id: 'SomenBhattacharjee',
    content: {
      head: {
        name: 'Dr. Somen Bhattacharjee',
        profile_pdf: '/docs/Dr.SomenBhattacharjee.pdf',
      },
      card: {
        photo: '/images/Dr.SomenBhattacharjee.jpeg',
        PhD:'Ph.D. (IIT Guwahati)',
        designation: 'Assistant  Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'somen@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Analytical & Numerical Electromagnetics' },
          { id: 2, area: 'Microwave Engg' },
          { id: 3, area: 'Antenna Theory & Design' },
        ],
      },
    },
  },
  {
    id: 'SadhviManerikar',
    content: {
      head: {
        name: 'Dr. Sadhvi Manerikar',
        profile_pdf: '/docs/Dr.SadhviManerikar.pdf',
      },
      card: {
        photo: '/images/Dr.SadhviManerikar.jpg',
        PhD:'Ph.D. (NIT Goa)',
        designation: 'Assistant  Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'Sadhvi@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Metaheuristic Algorithms' },
          { id: 2, area: 'Wireless Sensor Networks' },
          { id: 3, area: 'Internet of Things' },
          { id: 4, area: 'Combinatorial Optimization' },
        ],
      },
    },
  },
  {
    id: 'SunilKumarPV',
    content: {
      head: {
        name: 'Dr. Sunil Kumar P V',
        profile_pdf: '/docs/Dr.SunilKumarPV.pdf',
      },
      card: {
        photo: '/images/Dr.SunilKumarPV.jpg',
        PhD:'Ph.D. (NIT, Calicut)',
        designation: 'Assistant  Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'sunilkumar.pv@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Computational Biology' },
          { id: 2, area: 'Bioinformatics' },
          { id: 3, area: 'Machine Learning' },
        ],
      },
    },
  },
  {
    id: 'SunilSaumya',
    content: {
      head: {
        name: 'Dr. Sunil Saumya',
        profile_pdf: '/docs/Dr.SunilSaumya.pdf',
      },
      card: {
        photo: '/images/Dr.SunilSaumya.jpeg',
        PhD:'Ph.D. (NIT Patna)',
        designation: 'Assistant Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'sunil.saumya@iiitdwd.ac.in',
        cabin_number: '?',
        position: 'Associate Dean, Academics',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'SunilCK',
    content: {
      head: {
        name: 'Dr. Sunil C K',
        profile_pdf: '/docs/Dr.SunilCK.pdf',
      },
      card: {
        photo: '/images/Dr.SunilCK.jpg',
        PhD:'Ph.D. (NITK Surathkal)',
        designation: 'Assistant  Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'sunilck@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Artificial intelligence [ML and DL]' },
          { id: 2, area: 'IoT' },
          { id: 3, area: 'Robotics' },
        ],
      },
    },
  },
  {
    id: 'SuvadipHazra',
    content: {
      head: {
        name: 'Dr. Suvadip Hazra',
        profile_pdf: 'https://sites.google.com/view/drsuvadiphazra?usp=sharing',
      },
      card: {
        photo: '/images/Dr.SuvadipHazra.png',
        PhD:'Ph.D. (NIT Durgapur)',
        designation: 'Assistant  Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'suvadip@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Hardware Security' },
          { id: 2, area: 'Cellular Automata' },
          { id: 3, area: 'Many-core system' },
        ],
      },
    },
  },
  {
    id: 'UtkarshKhaire',
    content: {
      head: {
        name: 'Dr.Utkarsh Khaire',
        profile_pdf: 'https://sites.google.com/view/dr-utkarsh-m-khaire/home',
      },
      card: {
        photo: '/images/Dr.UtkarshKhaire.jpg',
        PhD:'Ph.D. (NIT Nagaland)',
        designation: 'Assistant  Professor',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'utkarshkhaire@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Data Analytics' },
          { id: 2, area: 'Machine Learning' },
        ],
      },
    },
  },
  {
    id: 'VivekrajVK',
    content: {
      head: {
        name: 'Dr. Vivekraj V K',
        profile_pdf: '/docs/Dr.VivekrajVK.pdf',
      },
      card: {
        photo: '/images/Dr.VivekrajVK.jpg',
        PhD:'Ph.D. (IIT Roorkee)',
        designation: 'Assistant  Professor',
        department: 'Computer Science & Engineering',
        mail_id: 'vivekraj@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Computer Vision' },
          { id: 2, area: 'Image and Video Processing' },
        ],
      },
    },
  },
  {
    id: 'ShrinivasKulkarni',
    content: {
      head: {
        name: 'Dr. Shrinivas Kulkarni',
        profile_pdf: 'https://www.linkedin.com/in/shrinivaskk/',
      },
      card: {
        photo: '/images/ShrinivasKulkarni.jpeg',
        PhD:'PhD - University of Edinburgh',
        designation: 'Professor of Practice',
        department: 'Computer Science & Engineering',
        mail_id: 'shrinivaskk@gmail.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [{ id: 1, area: 'Cyber Security' }],
      },
    },
  },
  {
    id: 'RajeshVasa',
    content: {
      head: {
        name: 'Prof. Rajesh Vasa',
        profile_pdf:
          'https://www.deakin.edu.au/about-deakin/people/rajesh-vasa',
      },
      card: {
        photo: '/images/RajeshVasa.jpg',
        PhD:'PhD - Swinburne Univ. of Technology',
        designation: 'Adjunct Professor',
        department: 'Computer Science & Engineering',
        mail_id: '',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          {
            id: 1,
            area: 'Design and construction of robust AI infused technology',
          },
        ],
      },
    },
  },
  {
    id: 'AmbarishKulkarni',
    content: {
      head: {
        name: 'Prof. Ambarish Kulkarni',
        profile_pdf:
          'https://www.swinburne.edu.au/research/our-research/access-our-research/find-a-researcher-or-supervisor/researcher-profile/?id=ambarishkulkarni',
      },
      card: {
        photo: '/images/AmbarishKulkarni.jpg',
        PhD:'Ph.D - Swinburne University of Technology, Australia',
        designation: 'Adjunct Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'ambarishkulkarni@swin.edu.au',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Biotechnology' },
          { id: 2, area: 'Transportation Systems Engineering' },
          { id: 3, area: 'Electric Vehicle Research' },
          { id: 4, area: 'Virtual Design and Prototyping' },
          { id: 5, area: 'Design and development' },
          { id: 6, area: 'Virtual and Augmented reality' },
        ],
      },
    },
  },
  {
    id: 'IsraelCohen',
    content: {
      head: {
        name: 'Prof. Israel Cohen',
        profile_pdf: 'https://israelcohen.com/',
      },
      card: {
        photo: '/images/IsraelCohen.jpg',
        PhD:'Technion- Israel Institute of Technology, Haifa, Israel',
        designation: 'Adjunct Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'icohen@ee.technion.ac.il',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Array Signal Processing' },
          { id: 2, area: 'Speech and image processing' },
          { id: 3, area: 'Electric Vehicle Research' },
          { id: 4, area: 'Immersive voice communication' },
          { id: 5, area: 'Design and development' },
          { id: 6, area: 'Deep learning-based signal processing' },
        ],
      },
    },
  },
  {
    id: 'NixonPatel',
    content: {
      head: {
        name: 'Prof. Nixon Patel',
        profile_pdf: 'https://www.linkedin.com/in/nixonpatel',
      },
      card: {
        photo: '/images/NixonPatel.jpg',
        PhD:'PhD- North Carolina State University',
        designation: 'Professor of Practice',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'nixonpatel@gmail.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Quantum Computing' },
          { id: 2, area: 'GenAI deep Stack' },
          { id: 3, area: 'Big data analytics' },
          { id: 4, area: 'Cloud' },
          { id: 5, area: 'Machine learning, mobility and IoT' },
        ],
      },
    },
  },
  {
    id: 'SRMahadevaPrasanna',
    content: {
      head: {
        name: 'Prof. S R Mahadeva Prasanna',
        profile_pdf: 'https://sites.google.com/iitdh.ac.in/prasanna/home',
      },
      card: {
        photo: '/images/SRMahadevaPrasanna.jpg',
        PhD:'Ph.D. (IIT Madras)',
        designation: 'Professor and Director',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'prasanna@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Speech and Handwriting Processing' },
          {
            id: 2,
            area: 'Applications of Signal Processing and Pattern Recognition',
          },
          { id: 3, area: 'Applications of Artificial Intelligence' },
          { id: 4, area: 'Machine Learning' },
          { id: 5, area: 'Deep Learning' },
        ],
      },
    },
  },

  {
    id: 'AnandJBariya',
    content: {
      head: {
        name: 'Dr Anand J Bariya',
        profile_pdf: '/docs/AnandJBariya.pdf',
      },
      card: {
        photo: '/images/AnandJBariya.png',
        PhD:'Ph.D. (Stanford)',
        designation: 'Professor of Practice',
        department: 'Electronics and Communication Engineering',
        mail_id: 'abariya@alumni.stanford.edu',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'GirishDhanakshirur',
    content: {
      head: {
        name: 'Prof. Girish Dhanakshirur',
        profile_pdf: '/docs/GirishDhanakshirur.pdf',
      },
      card: {
        photo: '/images/GirishDhanakshirur.jpg',
        PhD:'M.S (Computer Science & Engineering) from Florida Atlantic University, USA ',
        designation: 'Professor of Practice',
        department: 'Data Science and Artificial Intelligence',
        mail_id: 'girishdhanak@in.ibm.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'KarthikSankaran',
    content: {
      head: {
        name: 'Karthik Sankaran',
        profile_pdf: '/docs/KarthikSankaran.pdf',
      },
      card: {
        photo: '/images/KarthikSankaran.jpeg',
        PhD:'PhD - University of Texas at Austin',
        designation: 'Professor of Practice',
        department: 'Electronics and Communication Engineering',
        mail_id: 'sankaran.karthik@gmail.com',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'SantoshDevanallikar',
    content: {
      head: {
        name: 'Mr. Santosh Devanallikar',
        profile_pdf: '/docs/SantoshDevanallikar.pdf',
      },
      card: {
        photo: '/images/SantoshDevanallikar.jpeg',
        PhD:'M.Sc - University of Southampton, Southampton, UK',
        designation: 'Professor of Practice',
        department: 'Electronics and Communication Engineering',
        mail_id: '',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'ASIC/Chip-Design' },
          { id: 2, area: 'VLSI' },
          { id: 3, area: 'VCS, NC-Verilog' },
          { id: 4, area: 'Design-Compiler' },
          { id: 5, area: 'RTL compiler' },
          { id: 6, area: 'PrimeTime' },
        ],
      },
    },
  },
  {
    id: 'RavikumarCP',
    content: {
      head: {
        name: 'Dr. Ravikumar C.P',
        profile_pdf: '/docs/RavikumarCP.pdf',
      },
      card: {
        photo: '/images/RavikumarCP.jpg',
        PhD:'Ph.D - University of Southern California Los Angeles, CA',
        designation: 'Adjunct Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: '',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'VLSI physical design' },
          { id: 2, area: 'VLSI test' },
          { id: 3, area: 'parallel processing' },
          { id: 4, area: 'electronic design automation' },
          { id: 5, area: 'embedded systems' },
        ],
      },
    },
  },
  {
    id: 'RajeshKumar',
    content: {
      head: {
        name: 'Dr. Rajesh Kumar',
        profile_pdf: '/docs/Dr.RajeshKumar.pdf',
      },
      card: {
        photo: '/images/RajeshKumar.jpg',
        PhD:'Ph.D. IIT (ISM) Dhanbad',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'rajeshk@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'RF VLSI Design' },
          { id: 2, area: 'RFIC' },
          { id: 3, area: 'MMIC Design' },
          { id: 4, area: 'RF Power Amplifier' },
          { id: 5, area: 'DOHERTY Power Amplifier Design' },
        ],
      },
    },
  },
];

export { ProfileProps };
