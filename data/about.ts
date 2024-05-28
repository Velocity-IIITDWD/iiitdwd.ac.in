import { Profile } from '@/types/profile';
export type ImageUsed = {
  name: string;
  imageURL: string;
};
export type About = {
  aboutText: string;
  director: Profile;
  directorsMessage: {
    heading: string;
    text1: string;
    text2: string;
    text3: string;
  };
  briefProfile: string;
  vision: string;
  missions: {
    id: string;
    text: string;
  }[];
  coreValues: {
    id: string;
    text: string;
  }[];
  campusTour: {
    href: string;
  };
  mainGate: ImageUsed;
};

let aboutData: About = {
  aboutText:
    'IIIT Dharwad is an Institute of National Importance set up in 2015 in Public-Private-Partnership mode between the Ministry of Education, Government of India, Government of Karnataka and industry partner Keonics under an Act of Parliament (23 of 2017). The primary objective of setting up IIIT-Dharwad is to address the skill gap in high-end information technology and thereby enable India to retain its global leadership role in IT and allied areas. Towards this end, IIIT-Dharwad offers BTech degree programmes in Computer Science and Engineering, Electronics and Communication Engineering, and Data Science and Artificial Intelligence. As an Institute of National Importance, IIIT-Dharwad focuses on applying IT to solve problems of social relevance to India - the kind of solutions that do not usually result from the commercial forces of market dynamics or the priorities of the Western world outside of India. At the same time, IIIT-Dharwad also adopts a semi-modern theme in its campus design and approach to solving IT problems.\n\nThe logo of IIIT-Dharwad also embraces a semi-modern theme and brings out an effective mental image of information technology. It is simple, elegant, catchy, stylish and colourful yet stately. It enables interpretation with ease in terms of the Vision and Mission Statements of the Institute, the various programmes offered by the Institute and the different areas of IT namely computer science, electronics and communication engineering, software, artificial intelligence, computer and social networks, robotics and cyber-physical systems, data sciences, and the like. As a young institute, IIIT Dharwad has a unique opportunity to make a difference not only to the Indian IT industry and the academic research community, but also to the people of the entire region of North Karnataka. The twin cities of Hubballi and Dharwad are already a recognized center for educational institutes of repute including engineering, medical, law and other colleges, universities and an Indian Institute of Technology. With this environment and rapidly improving connectivity to the IT capital Bengaluru, IIIT Dharwad is strategically positioned to develop into one of the best institutes of national importance.',
  director: {
    content: [],
    title: 'S. R. Mahadeva Prasanna',
    imageURL: '/images/s_r_mahadeva_prasanna.jpg',
  },
  directorsMessage: {
    heading:
      'Welcome to IIIT Dharwad, an unique and distinct institute in the making!',
    text1:
      'Welcome to Dharwad city also known as ‘Vidyakashi’ for its rich academic ambience. Dharwad is an education city with nine Universities in and around. IIIT Dharwad is proud to be in the midst of these great universities. It will derive benefits by collaborating with these universities from their rich experience and knowledge. It will in turn contribute by offering academic and research programs in information technology, computer science,electronics and communication, data science and artificial intelligence areas. There is a saying about Dharwad, ‘if you throw a stone in Dharwad, it will most likely fall on the house of a teacher or literary person or musician’. To add to this, ‘if you miss an address, most probably you will end up at the entrance gate of one of the universities’. Such a great academic place is Dharwad city. For more than a century, it has been the dream destination for education, literature and music pursuits. This ecosystem is the fertile ground on which IIIT Dharwad has started its journey in 2015. This is a noble initiative of Government of India (GoI), Government of Karnataka (GoK) and industrial partner KEONICS. IIIT Dharwad has made excellent progress and completed its first phase of journey. It is ready to embark on its next phase. Since we have our own permanent campus with necessary infrastructure, the next phase of five years is expected to witness an exponential growth.',
    text2:
      'IIIT Dharwad will go all out to establish industry-academia, and national and international academic collaborations. Being an higher education institute of the country established in North Karnataka will be sensitive to the social ecosystem in the neighborhood and would like to fulfill its academic-social responsibility. Information technology, computer science, electronics and communication, data science and artificial intelligence are the niche technology areas for the 21st century and hence IIITs are the most sought after higher education technology institutes. With highly qualified faculty in partnership with industry and academia from India and abroad would like to help the higher education landscape and growth of high tech industries. The benefit of aimed collaboration is not only for IIIT Dharwad, but also for all the academic institutes in the neighborhood, specifically North Karnataka.If you want to experience an exciting journey for undergraduate, post graduate and research degrees in Information technology, computer science, electronics and communication, data science and artificial intelligence, then you should seriously consider joining IIIT Dharwad. Please read more information on the official website and official social media platforms of the institute. If you want to know more about the campus facilities, admission process and opportunities, you are most welcome to contact respective divisions or units of the institute or visit the institute and interact with us.',
    text3:
      'IIIT Dharwad is a well thought out public private partnership (PPP) university model of the country where the institute needs to generate its own revenue to bring stability, sustainability and growth. Therefore apart from academic programs, we are looking for industry-academia collaborations. We are in the process of starting a tech park that will have space for startups, industrial research centers, skilling institutes, training academies for teachers in frontier technology areas and the future of learning in the form of digital and online. For our young generation, the entire world is a family (Vasudhaiva Kutumbakam) and we want IIIT Dharwad students to get trained and move onto premier institutes and organizations across the globe and lead them. To create an ecosystem for the same, we are looking for national and international collaborations. To execute our growth plan, we need to augment our infrastructure and look for help from a big hearted community for the cause of setting up a vibrant education and learning ecosystem. A special appeal to the global community, Indian diaspora, specifically from North Karnataka in India and abroad to come forward and contribute to this great institute in the making in terms of Tanu-Mana-Dhana! If you want to know more about how you can help IIIT Dharwad, please contact me at director@iiitdwd.ac.in',
  },
  briefProfile:
    "S. R. Mahadeva Prasanna is a recipient of the National Award for Teachers 2023 from the honorable President of India Smt. Droupadi Murmu. He is currently working as Director, IIIT Dharwad on leave from IIT Dharwad. He is Professor in the Dept. of Electrical, Electronics and Communication (EECE) at IIT Dharwad. He was Dean(Faculty Welfare) at IIT Dharwad before taking charge of Director at IIIT Dharwad. He was earlier Professor in the Dept. of Electronics and Electrical Engineering and Dean (Research & Development), IIT Guwahati. He earned his PhD from IIT Madras in 2004, MTech from NITK Surathkal (then KREC Surathkal) in 1997 and BE from SSIT Tumakuru in 1994. He teaches signal processing, speech processing, artificial intelligence, machine learning and deep learning related courses. His research interests are in speech processing. He has supervised 28 PhD research scholars in the areas of speech and handwriting processing. Currently 7 scholars are working for their PhD / MS degrees. He has published over 115 journal articles and 200 conference articles in reputed national and international journals and conferences. He has executed large volume externally funded projects from public and private funding agencies. He is also a consultant for many industries working in the niche technology areas, especially, speech technology.\nOn the academic administration front, at IIT Guwahati he was faculty-in-charge, counseling cell, chairman, students' welfare board, organizing vice-chairman, GATE 2010, Chairman, GATE 2011, Associate Dean (Research and Development) and Dean (Research & Development). At IIT Dharwad, he was Dean (Faculty Welfare) and Dean (Research & Development) from July 2017 till March 2023. From March 2023 till April 2024, he continued as Dean (Faculty Welfare). He also served IIT Dharwad on different committees towards setting up the institute of national importance in Dharwad, Karnataka.",
  vision:
    'To be a globally renowned academy of information technology for societal development.',
  missions: [
    {
      id: '1',
      text: 'To produce globally competent information technology professionals with the right mix of professional skills and ethical, societal and environmental concerns.',
    },
    {
      id: '2',
      text: 'To solve local problems using global technologies and solve global problems using local technologies across disciplines.',
    },
    {
      id: '3',
      text: 'To project the nation to the forefront of information technology research and development.',
    },
  ],
  coreValues: [
    {
      id: '1',
      text: 'Integrity',
    },
    {
      id: '2',
      text: 'Service',
    },
    {
      id: '3',
      text: 'Positivity',
    },
    {
      id: '4',
      text: 'Commitment and Passion for Technology',
    },
  ],
  campusTour: {
    href: 'https://youtu.be/5A8hThnROHs?si=c0ZCyan0zRLFNXhn',
  },
  mainGate: {
    name: 'MainGate image',
    imageURL: '/images/main_gate.jpg',
  },
};

export { aboutData };
