
interface ProfileProp {
    id: string,
    content: {head: {
        name: string,
        profile_pdf: string
    },

    card: {
        photo: string,
        designation: string,
        department: string,
        mail_id: string,
        cabin_number: string
    },

    body:{
        profile_text: string,
        interest_areas: string[]
    }}

}[];

let ProfileProps:Array<ProfileProp> = 
    [{
        id: '1',
        content: {head: {
            name: 'Dr. Abdul Wahid',
            profile_pdf: '--provide path string'
        },
        card: {
            photo: '/brand/logo-square-light.png',
            designation: 'Assistant professor',
            department: 'Computer Science & Engineering',
            mail_id: 'abdul.wahid@iiitdwd.ac.in',
            cabin_number: '?????'
        },
        body: {
            profile_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            interest_areas: ["Artificial Intelligence", "Evolutionary Computing", "Reinforcement Learning", "Multi-Agent Systems"]
        }}
    },
    {
        id: '2',
        content: {head: {
            name: 'Dr. ANAND P. BARANGI',
            profile_pdf: '--provide path string'
        },
        card: {
            photo: '/brand/logo-square-light.png',
            designation: 'Assistant professor',
            department: 'Humanities and Science',
            mail_id: 'anandbarangi@iiitdwd.ac.in',
            cabin_number: '?????'
        },
        body: {
            profile_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            interest_areas: ["Graph Theory"]
        }}
    },
    {
        id: '3',
        content: {head: {
            name: 'Dr. Animesh Chaturvedi',
            profile_pdf: '--provide path string'
        },
        card: {
            photo: '/brand/logo-square-light.png',
            designation: 'Assistant professor',
            department: 'Data Science and Intelligent Systems',
            mail_id: 'animesh@iiitdwd.ac.in',
            cabin_number: '?????'
        },
        body: {
            profile_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            interest_areas: ["Data Science and AI", "Systems Engineering", " SOA and Cloud Computing", "Big Data Analytics"]
        }}
    },
    {
        id: '4',
        content: {head: {
            name: 'Dr. Animesh Roy',
            profile_pdf: '--provide path string'
        },
        card: {
            photo: '/brand/logo-square-light.png',
            designation: 'Assistant professor',
            department: 'Computer Science & Engineering',
            mail_id: 'animeshroy@iiitdwd.ac.in',
            cabin_number: '?????'
        },
        body: {
            profile_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            interest_areas: [" Delay tolerant networks", "Network optimization","Algorithms"]
        }}
    },
    {
        id: '5',
        content: {head: {
            name: 'Dr. Anushree kini',
            profile_pdf: '--provide path string'
        },
        card: {
            photo: '/brand/logo-square-light.png',
            designation: 'Humanities & Science',
            department: 'Computer Science & Engineering',
            mail_id: 'anushree@iiitdwd.ac.in',
            cabin_number: '?????'
        },
        body: {
            profile_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            interest_areas: []
        }}
    },
    {
        id: '6',
        content: {head: {
            name: 'Dr. Anushree kini',
            profile_pdf: '--provide path string'
        },
        card: {
            photo: '/brand/logo-square-light.png',
            designation: 'Humanities & Science',
            department: 'Computer Science & Engineering',
            mail_id: 'anushree@iiitdwd.ac.in',
            cabin_number: '?????'
        },
        body: {
            profile_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            interest_areas: []
        }}
    }
    
]


//ProfileProps.sort();

export { ProfileProps };