type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type Announcement = {
  link: string,
  text: string,
  new: boolean,
  year: `${Digit}${Digit}${Digit}${Digit}`,       // Full year in 4 digits
  month: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' ,      // Month number from 1 to 12
};

export const announcements: Announcement[] = [
  {
    link: '/docs/Prof_Lakshmivarahan.pdf',
    text: 'Talk: Mathematics of Bigdata Analysis',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/SLD-SRMP.pdf',
    text: 'Journal article coauthored by Prof. Prasanna titled "Spoken Language Change Detection inspired Speaker Change Detection" gets published in Circuits, Systems and Signal Processing (Springer)',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/MoU-Director_Office.docx',
    text: 'Signing of MoU between IIIT Dharwad and IIT Dharwad',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/tenders',
    text: 'Tender : Bus Hiring Service - Regular Basis',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Cancellation_of_Advt_for_ the_post_of_Registrar-reg.pdf',
    text: 'Notice - Cancellation of Advt. for the post of Registrar-reg',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/M.TechbyResearch.pdf',
    text: 'Sponsored position under M. Tech by research',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Ph.D_and_M.Tech-Research_Aug24_Admission_Notification.pdf',
    text: 'Admission to Ph.D. and M. Tech. (Research) : Last date is extended till 12th June 2024',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/AICTE_PROGRAM.pdf',
    text: 'IIIT Dharwad rolling out AICTE-Quality Improvement PG Certificate Program in Cybersecurity!',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/tenders',
    text: 'Expression of Interests (Hostel Accommodation of Boys)',
    new: true,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Brochure.pdf',
    text: 'One Day Workshop on Fractal Academics on June 15, 2024',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/IIITDharwad_Research_Internship_Rolling_Advertisement.pdf',
    text: 'IIIT Dharwad invites applications from students for internships throughout the year.',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/AICTE_PROGRAM.pdf',
    text: 'IIIT Dharwad rolling out AICTE-Quality Improvement PG Certificate Program in Cybersecurity!',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Cancellation_Wall_Partition.pdf',
    text: 'Cancellation of Tender - "Providing partition Wall, Doors and other Civil Works at g-block"- IIIT Dharwad Campus',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/tenders',
    text: 'Notice Inviting Tender for Providing Partition Wall, Doors and other civil works at g-block IIIT Dharwad',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/tenders',
    text: 'Notice Inviting Tender for Providing, Supplying and Installing Furnitures at IIIT Dharwad',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/SRMP-ACMTMM-Jnl.pdf',
    text: 'Journal article co-authored by Prof. Prasanna titled "Exploration of Speech and Music Information for Movie Genre Classification" gets accepted for publication in ACM Transactions on Multimedia Computing, Communications and Applications. Happy Reading!',
    new: false,
    year: '2024',
    month: '6',
  },
];
