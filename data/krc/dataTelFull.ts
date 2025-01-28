export interface LinkData {
    title: string;
    description: string;
    accessInfo: string;
    buttonText: string;
    link: string; // Add a new property for the link URL
  }
  
  export interface LinkGroup {
    heading: string;
    card: LinkData[];
  }
  
  export const linkGroups: LinkGroup[] = [
    {
      heading: "Audio-Video e-content",
      card: [
        {
          title: "SWAYAM",
          description: "Massive Open Online Courses. Earn credit through online courses",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://swayam.gov.in", // Example link URL
        },
        {
          title: "SWAYAMPRABHA",
          description: "View digital courses on TV. Watch high quality educational programs 24/7",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://swayamprabha.gov.in", // Example link URL
        },
      ],
    },
    {
      heading: "Digital Content: Access e-journals and e-books",
      card: [
        {
          title: "National Digital Library (NDL)",
          description: "Access e-content on multiple disciplines",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://ndl.iitkgp.ac.in", // Example link URL
        },
        {
          title:"e-PG Pathshala",
          description: "Gateway for e-books up to PG. Get free books and curriculum-based e-content",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://epgp.inflibnet.ac.in", // Example link URL
        },
        {
          title: "Shodhganga",
          description: "A reservoir of Indian Theses. Access research theses of scholars of Indian Institutes",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://shodhganga.inflibnet.ac.in", // Example link URL
        },
      ],
    },
    {
      heading: "Accelerated hands on learning",
      card: [
        {
          title: "e-Yantra",
          description: "Engineering for better tomorrow. Get hands on experience on embedded systems.",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://www.e-yantra.org", // Example link URL
        },
        {
          title:"FOSSEE",
          description: " Free/Libre and Open Source Software for Education. Access and volunteer for the use of open source software.",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://fossee.in", // Example link URL
        },
        {
          title: "Spoken Tutorial",
          description: "Tutorial in IT application. Self-training in IT field.",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://spoken-tutorial.org", // Example link URL
        },
        {
          title: "Virtual Labs",
          description: "Web-enabled experiments designed for remote-operation. Try curriculum based virtual experiments",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://www.vlab.co.in", // Example link URL
        },
      ],
    },
    {
      heading: "Track your progress",
      card: [
        {
          title: "IRINS",
          description: "Indian Research Information Network System. Web-based Research Information Management (RIM) service.",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://iiitdwd.irins.org", // Example link URL
        },
        {
          title:"VIDWAN",
          description: "Expert Database and National Research Network. The premier database of profiles of scientists / researchers.",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://vidwan.inflibnet.ac.in", // Example link URL
        },
        {
          title: "ShodhShudhhi (PDS)",
          description: "Plagiarism Detection Software. Unique ideas, concepts and information without duplication.",
          accessInfo: "",
          buttonText: "Explore",
          link: "https://spoken-tutorial.org", // Example link URL
        },
      ],
    },
  ];
  