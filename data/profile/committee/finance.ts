import { ProfileGroup } from '@/types/profile';

export default [
  {
    title: 'Chairperson',
    profiles: [
      {
        content: ['Chairperson, IIIT Dharwad'],
        imageURL: '/images/Sridhar Vembu.jpg',
        title: 'Sridhar Vembu',
      },
    ],
  },
  {
    title: 'Members',
    profiles: [
      {
        content: ['Director - Finance, Department of Higher Education, MoE, GoI'],
        imageURL: '',
        title: ' Shri. Mukesh Kumar'
      },
      {
        content: ['Director, Department of ITBT & ST, GOK'],
        imageURL: '/images/Shri_Darshan_H_V.jpg',
        title: 'Shri Darshan H. V., IAS'
      },
      {
        content: [
          'Department of Science & Technology & Managing Director, KSTePS Government of Karnataka',
        ],
        imageURL: '/images/pavan_kumar_malapati.jpg',
        title: 'Shri. Pavan Kumar Malapati, IAS',
      },
    ],
  },
  {
    title: 'Special Invitee',
    profiles: [
      {
        content: ['Former Vice Chancellor, VTU and Professor, IISc, Bengaluru'],
        imageURL: '/images/Prof_H_P_Khincha.jpg',
        title: 'Prof. H. P. Khincha'
      },
    ]
  },
  {
    title: 'Non Member Secretary',
    profiles: [
      {
        content: ['Officiating Registrar, IIIT Dharwad'],
        imageURL: '',
        title: 'Mr. Ravi B. Vitlapur',
      },
    ],
  },
] as ProfileGroup[];
