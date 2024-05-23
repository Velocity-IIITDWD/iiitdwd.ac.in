import { toDateString, toDateTimeString } from '@/lib/utils';

const rawTenders: Tender[] = [
  {
    cancelled: false,
    corrections: [],
    documents: [
      {
        link: 'https://forms.gle/iAkdEy1Ks8X9zgvU9',
        title: 'Online Application Form',
      },
      {
        link: 'https://iiitdwd.ac.in/docs/Tenders/Offline_Application_Form.pdf',
        title: 'Offline Application Form',
      },
    ],
    link: 'https://iiitdwd.ac.in/docs/Tenders/EXPRESSIONOFINTEREST.pdf',
    publishDate: '2024-05-16',
    submissionDeadline: '2024-05-27T17:00',
    title: 'Expression of Interest (Hostel Accommodation for Boys)',
    updatedAt: 0,
  },
  {
    cancelled: true,
    corrections: [
      {
        title: 'Cancellation Notice',
        link: 'https://iiitdwd.ac.in/docs/Tenders/Cancellation.pdf',
      },
    ],
    documents: [
      {
        link: 'https://iiitdwd.ac.in/docs/Tenders/G%20-%20block-Aluminium-partition-work-final-07032024.pdf',
        title: ' Tender Document',
      },
    ],
    link: 'https://iiitdwd.ac.in/docs/Tenders/Brief-Tender-Notification-Partiation-Wall-Doors-and-other-Civil-Works.pdf',
    publishDate: '2024-03-07',
    submissionDeadline: '2024-04-01T14:00',
    title:
      'Providing Partition Wall, Doors and other civil works at g-block IIIT Dharwad',
    updatedAt: 0,
  },
  {
    cancelled: false,
    corrections: [
      {
        link: 'https://iiitdwd.ac.in/docs/Tenders/Tender_46.pdf',
        title: 'Addendum - 1',
      },
      {
        link: 'https://iiitdwd.ac.in/docs/Tenders/tender_47.pdf',
        title: 'Corrigendum - 1',
      },
    ],
    documents: [],
    link: 'https://iiitdwd.ac.in/docs/Tenders/Tender_44.pdf',
    publishDate: '2020-12-19',
    submissionDeadline: '2022-01-28T15:00',
    title:
      'Providing, Supplying, Installing, Testing, Deployment and Commissioning of GPU based Server at IIIT Dharwad.',
    updatedAt: 0,
  },
  {
    cancelled: false,
    corrections: [
      {
        link: 'https://iiitdwd.ac.in/docs/Tenders/Tender_35.pdf',
        title: 'Corrigendum - 1',
      },
    ],
    documents: [],
    link: 'https://iiitdwd.ac.in/docs/Tenders/Tender_34.pdf',
    publishDate: '2020-12-19',
    submissionDeadline: '2021-01-04T15:00',
    title:
      'Providing, Supplying, Installing, Testing and Commissioning of Home Appliances (TVs & Dryers) at IIIT Dharwad campus',
    updatedAt: 0,
  },
  {
    cancelled: false,
    corrections: [],
    documents: [],
    link: 'https://iiitdwd.ac.in/docs/Tenders/Tender_15.pdf',
    publishDate: '2020-01-10',
    submissionDeadline: '2020-01-31T15:00',
    title:
      'Notice Inviting Tender for Supply, Installation, Demonstration, and Training for RFID based Library Automation Setup at IIIT Dharwad',
    updatedAt: 0,
  },
  {
    cancelled: false,
    corrections: [],
    documents: [],
    link: 'https://iiitdwd.ac.in/docs/tenders/Tender_14.pdf',
    publishDate: '2019-10-17',
    submissionDeadline: '2019-11-18T12:00',
    title:
      'NIT for Supply, Installation, Demonstration and Training for Audio Video Studio Setup at IIIT Dharwad',
    updatedAt: 0,
  },
];

export const tenders = rawTenders.map((tender) => ({
  ...tender,
  publishDate: Date.parse(tender.publishDate),
  submissionDeadline: Date.parse(tender.submissionDeadline),
}));

const now = Date.now();

export let active: Tender[] = [];
export let archive: Tender[] = [];

for (const tender of tenders) {
  const newTender = {
    ...tender,
    publishDate: toDateString(tender.publishDate),
    submissionDeadline: toDateTimeString(tender.submissionDeadline),
  };
  if (tender.cancelled || tender.submissionDeadline <= now)
    archive.push(newTender);
  else active.push(newTender);
}
