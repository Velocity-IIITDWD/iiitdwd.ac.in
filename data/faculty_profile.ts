interface ProfileProp {
  id: string;
  content: {
    head: {
      name: string;
      profile_pdf: string;
    };

    card: {
      photo: string;
      designation: string;
      department: string;
      mail_id: string;
      cabin_number: string;
    };

    body: {
      profile_text: string;
      interest_areas: { id: number; area: string }[];
    };
  };
}
[];

let ProfileProps: Array<ProfileProp> = [
  {
    id: 'Dr.AbdulWahid',
    content: {
      head: {
        name: 'Dr. Abdul Wahid',
        profile_pdf: '/docs/Dr.AbdulWahid.pdf',
      },
      card: {
        photo: '/images/Dr.AbdulWahid.jpeg',
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
    id: 'Dr.AnandP.Barangi',
    content: {
      head: {
        name: 'Dr. Anand P. Barangi',
        profile_pdf: '/docs/Dr.AnandP.Barangi.pdf',
      },
      card: {
        photo: '/images/Dr.AnandP.Barangi.jpg',
        designation: 'Assistant Professor',
        department: 'Humanities & Science',
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
    id: 'Dr.AnimeshChaturvedi',
    content: {
      head: {
        name: 'Dr. Animesh Chaturvedi',
        profile_pdf: 'https://sites.google.com/site/animeshchaturvedi07/', //website link
      },
      card: {
        photo: '/images/Dr.AnimeshChaturvedi.jpg',
        designation: 'Assistant Professor',
        department: 'Data Science and Intelligent Systems',
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
    id: 'Dr.AnimeshRoy',
    content: {
      head: {
        name: 'Dr. Animesh Roy',
        profile_pdf: '/docs/Dr.AnimeshRoy.pdf',
      },
      card: {
        photo: '/images/Dr.AnimeshRoy.jpg',
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
    id: 'Dr.Anushreekini',
    content: {
      head: {
        name: 'Dr. Anushree kini',
        profile_pdf: '/docs/Dr.Anushreekini.pdf',
      },
      card: {
        photo: '/images/Dr.Anushreekini.jpg',
        designation: 'Assistant Professor',
        department: 'Humanities & Science',
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
    id: 'Dr.AswathBabuH',
    content: {
      head: {
        name: 'Dr. Aswath Babu H',
        profile_pdf: '/docs/Dr.AswathBabuH.pdf',
      },
      card: {
        photo: '/images/Dr.AswathBabuH.jpeg',
        designation: 'Assistant Professor',
        department: 'Humanities & Science',
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
    id: 'Dr.ChandrikaKamath',
    content: {
      head: {
        name: 'Dr. Chandrika Kamath',
        profile_pdf: '',
      },
      card: {
        photo: '/images/Dr.ChandrikaKamath.png',
        designation: 'Visiting Faculty',
        department: 'Humanities & Science',
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
    id: 'Dr.ChannappaAkki',
    content: {
      head: {
        name: 'Dr. Channappa Akki',
        profile_pdf: '/docs/Dr.ChannappaAkki.pdf',
      },
      card: {
        photo: '/images/Dr.ChannappaAkki.jpeg',
        designation: ' Professor, Dean - Planning and Development',
        department: 'Computer Science & Engineering',
        mail_id: 'akki.channappa@gmail.com',
        cabin_number: '?',
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
    id: 'Dr.ChinmayanandaA',
    content: {
      head: {
        name: 'Dr. Chinmayananda A',
        profile_pdf: '/docs/Dr.ChinmayanandaA.pdf',
      },
      card: {
        photo: '/images/Dr.ChinmayanandaA.jpg',
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
    id: 'Dr.DeepakKT',
    content: {
      head: {
        name: 'Dr. Deepak K T',
        profile_pdf: 'https://deepakthotappa.wixsite.com/mysite', //website link
      },
      card: {
        photo: '/images/Dr.DeepakKT.jpeg',
        designation:
          'Assistant Professor, Associate Dean - Research and Development [R&D]',
        department: 'Electronics and Communication Engineering',
        mail_id: 'deepak@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.DibyajyotiGuha',
    content: {
      head: {
        name: 'Dr. Dibyajyoti Guha',
        profile_pdf: '/docs/Dr.DibyajyotiGuha.pdf',
      },
      card: {
        photo: '/images/Dr.DibyajyotiGuha.jpg',
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
    id: 'Dr.GirishGN',
    content: {
      head: {
        name: 'Dr. Girish G N',
        profile_pdf: '/docs/Dr.GirishGN.pdf',
      },
      card: {
        photo: '/images/Dr.GirishGN.jpeg',
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
    id: 'Dr.JagadeeshaRB',
    content: {
      head: {
        name: 'Dr. Jagadeesha R B',
        profile_pdf: 'https://sites.google.com/site/jagadeesharb/home', //website
      },
      card: {
        photo: '/images/Dr.JagadeeshaRB.jpg',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'Jagadeesha@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.JagadishDN',
    content: {
      head: {
        name: 'Dr. Jagadish D N',
        profile_pdf: 'https://sites.google.com/iiitdwd.ac.in/jagadishdn', //website
      },
      card: {
        photo: '/images/Dr.JagadishDN.jpeg',
        designation:
          'Assistant Professor, Faculty-In-Charge - Student Welfare [S.W.]',
        department: 'Electronics and Communication Engineering',
        mail_id: 'jagadishdn@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.KrishnenduGhosh',
    content: {
      head: {
        name: 'Dr. Krishnendu Ghosh',
        profile_pdf: '/docs/Dr.KrishnenduGhosh.pdf',
      },
      card: {
        photo: '/images/Dr.KrishnenduGhosh.png',
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
    id: 'Dr.LakshmanMahto',
    content: {
      head: {
        name: 'Dr. Lakshman Mahto',
        profile_pdf: 'https://sites.google.com/view/lakshya',
      },
      card: {
        photo: '/images/Dr.LakshmanMahto.jpeg',
        designation: 'Assistant Professor',
        department: 'Humanities & Science',
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
    id: 'Dr.MalayKumar',
    content: {
      head: {
        name: 'Dr. Malay Kumar',
        profile_pdf: 'https://sites.google.com/view/drmalaykumar',
      },
      card: {
        photo: '/images/Dr.MalayKumar.jpg',
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
    id: 'Dr.ManjunathKV',
    content: {
      head: {
        name: 'Dr. Manjunath K V',
        profile_pdf: '/docs/Dr.ManjunathKV.pdf',
      },
      card: {
        photo: '/images/Dr.ManjunathKV.jpg',
        designation:
          'Assistant Professor, Faculty-In Charge - Career Guidance Cell [CGC]',
        department: 'Data Science and Intelligent Systems',
        mail_id: 'manjunathkv@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'Dr.MukeshKumarMishra',
    content: {
      head: {
        name: 'Dr. Mukesh Kumar Mishra',
        profile_pdf: '/docs/Dr.MukeshKumarMishra.pdf',
      },
      card: {
        photo: '/images/Dr.MukeshKumarMishra.png',
        designation: 'Assistant Professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'mukeshkumar@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [{ id: 1, area: 'Wireless Communication' }],
      },
    },
  },
  {
    id: 'Dr.NavyashreeG.R.',
    content: {
      head: {
        name: 'Dr. Navyashree G. R.',
        profile_pdf: '', //no pdf or website of profile available
      },
      card: {
        photo: '/images/Dr.NavyashreeG.R..jpg',
        designation: 'Visiting Faculty',
        department: 'Humanities & Science',
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
    id: 'Dr.NatarajKS',
    content: {
      head: {
        name: 'Dr. Nataraj K S',
        profile_pdf: '/docs/Dr.NatarajKS.pdf',
      },
      card: {
        photo: '/images/Dr.NatarajKS.jpg',
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
    id: 'Dr.PavanKumarC',
    content: {
      head: {
        name: 'Dr. Pavan Kumar C',
        profile_pdf: 'https://pavankumarphd.github.io/',
      },
      card: {
        photo: '/images/Dr.PavanKumarC.jpg',
        designation:
          'Assistant Professor, Associate Dean - (Information Communication Technology [ICT], Automation)',
        department: 'Computer Science & Engineering',
        mail_id: 'pavan@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.PrabhuPrasadBM',
    content: {
      head: {
        name: 'Dr. Prabhu Prasad B M',
        profile_pdf: 'https://prabhuprasadbm.github.io/',
      },
      card: {
        photo: '/images/Dr.PrabhuPrasadBM.png',
        designation:
          'Assistant Professor, Head of the Department [HoD] -  Dept. of CSE',
        department: 'Computer Science & Engineering',
        mail_id: 'prabhuprasad@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.PrakashPawar',
    content: {
      head: {
        name: 'Dr. Prakash Pawar',
        profile_pdf: '/docs/Dr.PrakashPawar.pdf',
      },
      card: {
        photo: '/images/Dr.PrakashPawar.jpg',
        designation:
          'Assistant Professor, Head of the Department [HoD] - Dept. of ECE',
        department: 'Electronics and Communication Engineering',
        mail_id: 'Prakashpawar@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.PramodYelmewad',
    content: {
      head: {
        name: 'Dr. Pramod Yelmewad',
        profile_pdf: '/docs/Dr.PramodYelmewad.pdf',
      },
      card: {
        photo: '/images/Dr.PramodYelmewad.jpg',
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
    id: 'Dr.RajendraHegadi',
    content: {
      head: {
        name: 'Dr. Rajendra Hegadi',
        profile_pdf: '/docs/Dr.RajendraHegadi.pdf',
      },
      card: {
        photo: '/images/Dr.RajendraHegadi.jpeg',
        designation:
          'Associate Professor, Professor-In-Charge - Academic & Student Welfare',
        department: 'Data Science and Intelligent Systems',
        mail_id: 'rajendrahegadi@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [
          { id: 1, area: 'Cryptography & Network Security' },
          { id: 2, area: 'Blockchain and AI/ML' },
        ],
      },
    },
  },
  {
    id: 'Dr.RajeshNS',
    content: {
      head: {
        name: 'Dr. Rajesh N S',
        profile_pdf: '/docs/Dr.RajeshNS.pdf',
      },
      card: {
        photo: '/images/Dr.RajeshNS.jpeg',
        designation: 'Assistant Professor',
        department: 'Humanities & Science',
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
    id: 'Dr.RajibSharma',
    content: {
      head: {
        name: 'Dr. Rajib Sharma',
        profile_pdf: '/docs/Dr.RajibSharma.pdf',
      },
      card: {
        photo: '/images/Dr.RajibSharma.jpg',
        designation: 'Assistant Professor',
        department: 'Data Science and Intelligent Systems',
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
    id: 'Dr.RameshAthe',
    content: {
      head: {
        name: 'Dr. Ramesh Athe',
        profile_pdf: 'https://sites.google.com/view/dr-ramesh-athe/',
      },
      card: {
        photo: '/images/Dr.RameshAthe.jpg',
        designation: 'Assistant Professor',
        department: 'Data Science and Intelligent Systems',
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
    id: 'Dr.SibasankarPadhy',
    content: {
      head: {
        name: 'Dr. Sibasankar Padhy',
        profile_pdf:
          'https://scholar.google.co.in/citations?user=fsKQ5XwAAAAJ&hl=en',
      },
      card: {
        photo: '/images/Dr.SibasankarPadhy.jpg',
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
    id: 'Dr.SiddharthR',
    content: {
      head: {
        name: 'Dr.Siddharth R',
        profile_pdf: '/docs/Dr.SiddharthR.pdf',
      },
      card: {
        photo: '/images/Dr.SiddharthR.jpg',
        designation: 'Assistant  Professor',
        department: 'Data Science and Intelligent Systems',
        mail_id: 'siddharth_r@iiitdwd.ac.in',
        cabin_number: '?',
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
    id: 'Dr.ShirshenduLayek',
    content: {
      head: {
        name: 'Dr. Shirshendu Layek',
        profile_pdf: '/docs/Dr.ShirshenduLayek.pdf',
      },
      card: {
        photo: '/images/Dr.ShirshenduLayek.jpg',
        designation: 'Assistant  Professor',
        department: 'Data Science and Intelligent Systems',
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
    id: 'Dr.SomenBhattacharjee',
    content: {
      head: {
        name: 'Dr. Somen Bhattacharjee',
        profile_pdf: '/docs/Dr.SomenBhattacharjee.pdf',
      },
      card: {
        photo: '/images/Dr.SomenBhattacharjee.jpeg',
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
    id: 'Dr.SadhviManerikar',
    content: {
      head: {
        name: 'Dr. Sadhvi Manerikar',
        profile_pdf: '/docs/Dr.SadhviManerikar.pdf',
      },
      card: {
        photo: '/images/Dr.SadhviManerikar.jpg',
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
    id: 'Dr.SunilKumarPV',
    content: {
      head: {
        name: 'Dr. Sunil Kumar P V',
        profile_pdf: '/docs/Dr.SunilKumarPV.pdf',
      },
      card: {
        photo: '/images/Dr.SunilKumarPV.jpg',
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
    id: 'Dr.SunilSaumya',
    content: {
      head: {
        name: 'Dr. Sunil Saumya',
        profile_pdf: '/docs/Dr.SunilSaumya.pdf',
      },
      card: {
        photo: '/images/Dr.SunilSaumya.jpeg',
        designation:
          'Assistant Professor, Head of the Department [HoD] - Dept. of DSIS',
        department: 'Data Science and Intelligent Systems',
        mail_id: 'sunil.saumya@iiitdwd.ac.in',
        cabin_number: '?',
      },
      body: {
        profile_text: '',
        interest_areas: [],
      },
    },
  },
  {
    id: 'Dr.SunilCK',
    content: {
      head: {
        name: 'Dr. Sunil C K',
        profile_pdf: '/docs/Dr.SunilCK.pdf',
      },
      card: {
        photo: '/images/Dr.SunilCK.jpg',
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
    id: 'Dr.SuvadipHazra',
    content: {
      head: {
        name: 'Dr. Suvadip Hazra',
        profile_pdf: '/docs/Dr.SuvadipHazra.pdf',
      },
      card: {
        photo: '/images/Dr.SuvadipHazra.png',
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
    id: 'Dr.UtkarshKhaire',
    content: {
      head: {
        name: 'Dr.Utkarsh Khaire',
        profile_pdf: 'https://sites.google.com/view/dr-utkarsh-m-khaire/home',
      },
      card: {
        photo: '/images/Dr.UtkarshKhaire.jpg',
        designation: 'Assistant  Professor',
        department: 'Data Science and Intelligent Systems',
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
    id: 'Dr.VivekrajVK',
    content: {
      head: {
        name: 'Dr. Vivekraj V K',
        profile_pdf: '/docs/Dr.VivekrajVK.pdf',
      },
      card: {
        photo: '/images/Dr.VivekrajVK.jpg',
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
];

export { ProfileProps };
