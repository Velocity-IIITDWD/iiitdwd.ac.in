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
        profile_pdf: '--provide path string',
      },
      card: {
        photo: '/brand/logo-square-light.png',
        designation: 'Assistant professor',
        department: 'Computer Science & Engineering',
        mail_id: 'abdul.wahid@iiitdwd.ac.in',
        cabin_number: '?????',
      },
      body: {
        profile_text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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
    id: 'Dr.AnandPBarangi',
    content: {
      head: {
        name: 'Dr. ANAND P. BARANGI',
        profile_pdf: '--provide path string',
      },
      card: {
        photo: '/brand/logo-square-light.png',
        designation: 'Assistant professor',
        department: 'Humanities and Science',
        mail_id: 'anandbarangi@iiitdwd.ac.in',
        cabin_number: '?????',
      },
      body: {
        profile_text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        interest_areas: [{ id: 1, area: 'Graph Theory' }],
      },
    },
  },
  {
    id: 'Dr.AnimeshChaturvedi',
    content: {
      head: {
        name: 'Dr. Animesh Chaturvedi',
        profile_pdf: '--provide path string',
      },
      card: {
        photo: '/brand/logo-square-light.png',
        designation: 'Assistant professor',
        department: 'Data Science and Intelligent Systems',
        mail_id: 'animesh@iiitdwd.ac.in',
        cabin_number: '?????',
      },
      body: {
        profile_text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        interest_areas: [
          { id: 1, area: 'Data Science and AI' },
          { id: 2, area: 'Systems Engineering' },
          { id: 3, area: ' SOA and Cloud Computing' },
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
        profile_pdf: '--provide path string',
      },
      card: {
        photo: '/brand/logo-square-light.png',
        designation: 'Assistant professor',
        department: 'Computer Science & Engineering',
        mail_id: 'animeshroy@iiitdwd.ac.in',
        cabin_number: '?????',
      },
      body: {
        profile_text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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
        profile_pdf: '--provide path string',
      },
      card: {
        photo: '/brand/logo-square-light.png',
        designation: 'Assistant professor',
        department: 'Electronics and Communication Engineering',
        mail_id: 'anushree@iiitdwd.ac.in',
        cabin_number: '?????',
      },
      body: {
        profile_text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        interest_areas: [],
      },
    },
  },
  {
    id: 'Dr.Anushreekini',
    content: {
      head: {
        name: 'Dr. Anushree kini',
        profile_pdf: '--provide path string',
      },
      card: {
        photo: '/brand/logo-square-light.png',
        designation: 'Assistant professor',
        department: 'Humanities & Science',
        mail_id: 'anushree@iiitdwd.ac.in',
        cabin_number: '?????',
      },
      body: {
        profile_text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        interest_areas: [],
      },
    },
  },
];

//ProfileProps.sort();

export { ProfileProps };
