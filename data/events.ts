export type eventInf = {
  id: string;
  href: string;
  text: string;
  timestamp: string;
  allImage: string[];
  details: {
    startDate: string;
    endDate: string;
    ticketPrice: string;
  };
  venue: {
    place: string;
    street: string;
    city: string;
  };
  organiser: {
    name: string;
    designation: string;
    contact: string;
  };
  aboutEvent: string;
};

let events: eventInf[] = [
  {
    id: 'iiit-sport-event',
    href: '/images/iiitevent.png',
    text: 'Inter IIIT Sport meet at IIIT Allahabad',
    timestamp: '06-03-2024',
    allImage: [
      '/images/iiitevent.png',
      '/images/iiitevent1.png',
      '/images/iiitevent2.png',
      '/images/iiitevent3.png',
      '/images/iiitevent4.png',
      '/images/iiitevent5.png',
    ],
    details: {
      startDate: 'Start date : 06-03-2024',
      endDate: 'End date : 16-03-2024',
      ticketPrice: '',
    },
    venue: {
      place: 'IIIT Allahabad',
      street: '',
      city: 'Prayagraj',
    },
    organiser: {
      name: 'IIIT Allahabad',
      designation: '',
      contact: '',
    },
    aboutEvent:
      'Inter IIIT, hosted by IIIT Allahabad once every four years, serves as a paramount display of unity and competition among the 25 government funded IIITs spread across the nation. This unique sports event brings together elite athletes and teams, solidifying its position as a premier competition in the IIIT community. Celebrating a shared passion for sportsmanship and athleticism, Inter IIIT fosters lasting bonds and leaves an enduring mark on intercollegiate sports within the IIIT ecosystem.',
  },
  {
    id: 'inaugration-of-iiitdwd',
    href: '/images/inaug.jpg',
    text: 'Inauguration of IIIT Dharwad',
    timestamp: '26-09-2022',
    allImage: ['/images/inaug.jpg', '/images/inaug1.jpg'],
    details: {
      startDate: 'Date : 26-09-2022',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'M Block',
      street: 'Street : IIIT Dharwad Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: 'Inaugration of IIIT Dharwad on 26-09-2022',
  },
  {
    id: 'Prof-Vittal-Rao',
    href: '/images/vittalrao.jpg',
    text: 'Special Lecture Series by Prof R Vittal Rao',
    timestamp: '13-08-2021',
    allImage: ['/images/vittalrao.jpg'],
    details: {
      startDate: 'Start Date : 13-08-2021',
      endDate: 'End Date : 27-08-2021',
      ticketPrice: '',
    },
    venue: {
      place: 'M Block',
      street: 'Street : IIIT Dharwad Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: '',
      designation: '',
      contact: '',
    },
    aboutEvent:
      'IIIT Dharwad in association with BITES, hosted two out of three special lecture series (virtual) on “The Ultimate Challenge - Some Unsolved Problems in Mathematics” by Prof R Vittal Rao, Former Professor of Mathematics, IISc, Bengaluru. These two lectures are second and third lectures of the series, conducted on August 13, 2021, and, August 27, 2021, respectively.',
  },
  {
    id: 'orientation-program-2022',
    href: '/images/orientation0.png',
    text: 'Orientation Program 2021-22',
    timestamp: '22-12-2021',
    allImage: ['/images/orientation0.png', '/images/orientation1.jpg'],
    details: {
      startDate: 'Start Date : 22-12-2021',
      endDate: 'End Date : 24-12-2021',
      ticketPrice: '',
    },
    venue: {
      place: 'e-block',
      street: 'IIIT Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'sports-day-2022',
    href: '/images/sports2022.png',
    text: 'Sports Day 2022',
    timestamp: '29-04-2022',
    allImage: ['/images/sports2022.png', '/images/sports2022-1.png'],
    details: {
      startDate: 'Start Date : 29-04-2022',
      endDate: 'End Date : 30-04-2022',
      ticketPrice: '',
    },
    venue: {
      place: 'M-block',
      street: 'IIIT Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: 'Sports Committee',
      designation: '',
      contact: '',
    },
    aboutEvent: ' The annual sports event organised by IIIT Dharwad.',
  },
  {
    id: 'blood-donor-day',
    href: '/images/blooddonor.jpg',
    text: 'World Blood Donor Day 2022',
    timestamp: '14-06-2022',
    allImage: ['/images/blooddonor.jpg', '/images/blooddonor2.jpg'],
    details: {
      startDate: ' Date : 14-06-2023',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'h-block',
      street: 'Street : IIIT Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent:
      'Sir Karl Landsteiners Birthday celebrated as World Blood Donors Day in cordination with Karnataka Cancer Therapy and Research Institute, Navanagar.',
  },
  {
    id: 'world-environment-day',
    href: '/images/E1.jpg',
    text: 'World Environment Day 2022',
    timestamp: '05-06-2022',
    allImage: ['/images/E1.jpg', '/images/E2.jpg'],
    details: {
      startDate: ' Date : 05-06-2022',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'IIIT Dharwad',
      street: '',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'woman-day',
    href: '/images/W1.jpeg',
    text: 'International Women\'s Day 2022',
    timestamp: '08-03-2022',
    allImage: ['/images/W1.jpeg', '/images/W2.jpeg'],
    details: {
      startDate: ' Date : 08-03-2022',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'Kanavi Honnapur Hiriya Prathamika Shale',
      street: 'Street : Kanavi Honnapur',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'yoga-day',
    href: '/images/yoga1.jpg',
    text: '9th International Day of Yoga',
    timestamp: '21-06-2023',
    allImage: ['/images/yoga1.jpg', '/images/yoga2.jpg'],
    details: {
      startDate: ' Date : 21-06-2023',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'IIIT Dharwad',
      street: '',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'fit-india-freedom-run-2.0',
    href: '/images/fit01.jpg',
    text: 'Fit Indian Freedom Run 2.0',
    timestamp: '24-09-2021',
    allImage: ['/images/fit01.jpg', '/images/fit02.jpg'],
    details: {
      startDate: ' Date : 24-09-2021',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'IIIT Dharwad',
      street: '',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'faculty-development-program',
    href: '/images/fdp.jpg',
    text: 'Faculty Development Program on Smart Cities 2021',
    timestamp: '08-11-2021',
    allImage: ['/images/fdp.jpg'],
    details: {
      startDate: 'Start Date : 08-11-2021',
      endDate: 'End Date : 12/11/2021',
      ticketPrice: '',
    },
    venue: {
      place: 'e Block, IIIT Dharwad',
      street: 'Street : IIIT Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'matribhasha-diwas',
    href: '/images/diwas.jpg',
    text: 'Matribhasha Diwas',
    timestamp: '23-02-2021',
    allImage: ['/images/diwas.jpg'],
    details: {
      startDate: 'Date : 23-02-2021',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'e Block, IIIT Dharwad',
      street: 'Street : IIIT Campus',
      city: 'Dharwad',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent: '',
  },
  {
    id: 'nr-murthy-visit',
    href: '/images/NR_murthy.jpg',
    text: 'N R Narayana Murthy Visit',
    timestamp: '03-02-2018',
    allImage: ['/images/NR_murthy.jpg'],
    details: {
      startDate: 'Date : 03-02-2018',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'Seminar Hall, IIIT Dharwad',
      street: 'Street : IT Park',
      city: 'Hubli',
    },
    organiser: {
      name: 'IIIT Dharwad',
      designation: '',
      contact: '',
    },
    aboutEvent:
      'Shri. N R Narayana Murthy, Founder Infosys India Pvt Ltd visited IIIT Dharwad at 11:00 AM, 3rd February 2019. He had discussions with faculty, staff and students. He shared his experience during his Infosys day’s and also gave suggestion on career.',
  },
  {
    id: 'HiroyaFujisaki-visit',
    href: '/images/Prof._HiroyaFujisaki_Visit.jpg',
    text: 'Prof. HiroyaFujisaki visit',
    timestamp: '17-03-2021',
    allImage: ['/images/Prof._HiroyaFujisaki_Visit.jpg'],
    details: {
      startDate: 'Date : 17-03-2021',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'Conference Room, IIIT Dharwad',
      street: 'Street : IT Park',
      city: 'Hubli',
    },
    organiser: {
      name: 'Dr. K T Deepak',
      designation: 'Assistant Professor',
      contact: '9900456936',
    },
    aboutEvent:
      'Prof. Hiroya Fujisaki, Professor Emeritus at the University of Tokyo visited IIIT Dharwad, 17th March 2018. He had interaction session with faculty members and he gave suggestions on research directions.',
  },
  {
    id: 'chairperson-visit',
    href: '/images/Chairperson_Visit.jpg',
    text: 'Chairperson Visit',
    timestamp: '22-03-2018',
    allImage: ['/images/Chairperson_Visit.jpg'],
    details: {
      startDate: 'Date : 22-03-2018',
      endDate: '',
      ticketPrice: '',
    },
    venue: {
      place: 'Seminar Hall, IIIT Dharwad',
      street: 'Street : IT Park',
      city: 'Hubli',
    },
    organiser: {
      name: 'Prof. Kavi Mahesh',
      designation: 'Director',
      contact: '8362250879',
    },
    aboutEvent: '',
  },
];

events.sort();

export { events };
