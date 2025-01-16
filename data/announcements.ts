type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type Announcement = {
  link: string,
  text: string,
  new: boolean,
  date?: string,
  year: `${Digit}${Digit}${Digit}${Digit}`,       // Full year in 4 digits
  month: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' ,      // Month number from 1 to 12
};

export const announcements: Announcement[] = [
  {
    link: '/docs/2PhD&M.Tech(R)-ProvisionalList-15Jan25-Updated-ShaliniK.pdf',
    text: 'PhD and M.Tech by Research - Provisional Admission list',
    new: true,
    month: '1',
    year: '2025',
  },
  {
    link: '/docs/Shortlist%20Status%20(Registrar%20Post).pdf',
    text: 'Shortlisted candidates for the post of Registrar',
    new: true,
    date: 'Mon, 23 Dec 2024 12:46:44 GMT',
    month: '12',
    year: '2024',
  },
  {
    link: '/docs/Tender_For_Selection_Of_Agency_For_Providing_Catering_Services.pdf',
    text: 'Notice Inviting Tender for Selection of Agency for Providing Catering Services',
    new: true,
    month: '12',
    year: '2024',
  },
  {
    link: '/docs/ICPR.pdf',
    text: 'Conference paper by Dr Krishnendu Ghosh titled "Enhancing Bengali Text-to-Speech Synthesis Through Transformer-Driven Text Normalization" gets published in the proceedings of 27th International Conference on Pattern Recognition (ICPR 2024)',
    new: true,
    month: '12',
    year: '2024',
  },
  {
    link: '',
    text: 'Research article Title: "Anomaly Detection in Cybersecurity: Evaluating Machine Learning Models on the BETH Dataset" has been accepted for presentation in IEEE 43rd International Conference on Consumer Electronics in Las Vegas, NV, USA. Authors: Ravi Chand(20bds057), Rajendra Hegadi, Vineeth S R (20bcs137) and  B. Roopashri Tantri.',
    new: false,
    month: '11',
    year: '2024',
  },
  {
    link: '/docs/Book-authored-by-DrKrishnendu.pdf',
    text: 'Book chapter authored by Dr Krishnendu Ghosh titled "Impact of Amyloidosis on Bones and Its Relationship to Dementia" gets published in Book "Diagnosing Musculoskeletal Conditions Using Artificial Intelligence And Machine Learning to Aid Interpretation of Clinical Imaging" - 1st Edition (Paperback ISBN: 9780443328923 & eBook ISBN: 9780443328930) by Springer (Scopus Indexed)',
    new: false,
    month: '11',
    year: '2024',
  },
  {
    link: 'https://forms.gle/gmzLVv7BCh7TqxAE7',
    text: 'Expression of Interest - October 2024 (Hostel Accommodation for Boys)',
    new: false,
    month: '10',
    year: '2024',
  },
  {
    link: '/docs/recruitment_of_registrar.pdf',
    text: 'Advertisement for the position of Registrar (On Deputation/ Short term Contract)',
    new: false,
    month: '10',
    year: '2024',
  },
  {
    link: '/docs/M.Tech(R)-Admission-Rolling-Advertisement.pdf',
    text: 'Advertisement for Admissions to M.Tech by Research',
    new: false,
    month: '9',
    year: '2024',
  },
  {
    link: '/docs/PhD.Admissions-Rolling-Advertisement.pdf',
    text: 'Advertisement for Admissions to PhD by Research',
    new: false,
    month: '9',
    year: '2024',
  },
  {
    link: '/docs/IIITDharwad _Research_Internship_Rolling_Advertisement.pdf',
    text: 'Advertisement for Research Internship',
    new: false,
    month: '9',
    year: '2024',
  },
  {
    link: '/docs/Dr.Animesh-Heidelberg-Laureate-Forum.pdf',
    text: 'Congrats, Dr Animesh Chaturvedi for attending Heidelberg Laureate Forum as 200 Young Researcher',
    new: false,
    month: '10',
    year: '2024',
  },
  {
    link: '/docs/MOI.pdf',
    text: 'Medium of Instruction certificate',
    new: false,
    month: '9',
    year: '2024',
  },
  {
    link: '/docs/fpubh-12-1364226.pdf',
    text: 'Journal article co-authored by Dr Ramesh Athe titled "Cost-effectiveness of portable-automated ABR for universal neonatal hearing screening in India" gets published in " Frontiers in Public Health" (Scopus indexed)',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Book-chapter.pdf',
    text: 'Book chapter corresponding authored by Dr Ramesh Athe titled " Impact of spontaneous abortion of first trimester on medical management-a systematic review" gets published in a book titled "Modernizing Maternal Care with Digital Technologies". 2024:250-68. ISBN: 9798369337110; Chapter 11; (Scopus indexed). ',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Journal-article.pdf',
    text: 'Journal article corresponding authored by Dr Ramesh Athe titled " A meta-analysis approach on medical, surgical and expectant management" gets published in Epidemiology, Biostatistics, and Public Health (Scopus indexed).',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/project-fellows.pdf',
    text: 'Advertise for the Recruitment for Research Fellows',
    new: false,
    month: '8',
    year: '2024',
  },
  
  {
    link: '/docs/minor-program.pdf',
    text: 'Minor Program',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Supervisor Allocation.pdf',
    text: 'Supervisor allocation for the Ph.D and M.Tech(R)',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Tender for Classroom cum Lab Furniture.pdf',
    text: 'Tender for Classroom cum Lab Furniture',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Tender for providing Security and House Keeping Services.pdf',
    text: 'Tender for providing Security and House Keeping Services',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Advertisement for the Recruitment of Multiple Research Positions.pdf',
    text: 'Advertisement for the Recruitment of Multiple Research Positions',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/implicit_self-supervised_language_representation.pdf',
    text: 'Journal article co-authored by Prof. Prasanna titled "Implicit Self-supervised Language Representation for Spoken Language Diarization" gets published in IEEE/ACM Transactions on Audio, Speech and Language Processing, Happy Reading! ',
    new: false,
    month: '8',
    year: '2024',
  },
  {
    link: '/docs/Guidelines for admission 2024-25.pdf',
    text: 'Guidelines for Admission 2024',
    new: false,
    month: '7',
    year: '2024',
  },
  {
    link: '/docs/Sana_hostel_info.pdf',
    text: 'Hostel Facility for 2024-25 Batch Students',
    new: false,
    month: '7',
    year: '2024',
  },
  {
    link: '/docs/Important_Notice_For_Prospective_Students_22-07-24.pdf',
    text: 'Important Notice for Prospective Students of 2024',
    new: false,
    month: '7',
    year: '2024',
  },
  {
    link: '/docs/ResearchFelloship.pdf',
    text: 'Data Dissemination and Resource Optimization in Post-Disaster Scenarios using Hybrid 5G-Mobile Adhoc Networks  ',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: '/docs/ApplicationforSERBprojectSRG.docx.pdf',
    text: 'Project Associate I Position for my SERB funded SRG Project  ',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: '/docs/GeM-Bidding-6649263.pdf',
    text: 'Bus Hiring Service - Regular Basis - Local; 34-36; Non Deluxe (NDX); 1200 Km(s)*180 Hr(s)',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: '/docs/PhD_MTech(R)_Jul2024_List - Shalini K.pdf',
    text: 'Provisional list of candidates selected for admission to Ph.D. and M.Tech. (Research) for the Aug 2024 session.',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: 'https://www.youtube.com/watch?v=Sh5VyQxKQvk',
    text: 'Prof. Anil Sahasrabudhe, Chairman - National Educational Technology Forum (NETF) will be delivering the Sixth Convocation Address on 13th July 2024',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: '/docs/educators_students_enabling_workshop_qc.pdf',
    text: 'One-day workshop on "Faculty, Researchers, and Students enabling workshop on Quantum Information Processing" at IIIT Dharwad on 15th July 2024',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: '/docs/peer_to_peer_energy_trading_in_dairy_farms_using_multi_agent_systems.pdf',
    text: 'Journal article co-authored by Dr. Abdul Wahid titled "Peer-to-peer energy trading in dairy farms using multi-agent systems" gets published in Computers and Electrical Engineering (Elsevier, Impact Factor: 4.0)',
    new: false,
    year: '2024',
    month: '7',
  },
  {
    link: '/docs/A_reinforcement_learning_approach_to_dairy_farm_battery_management_using_Q_learning.pdf',
    text: 'Journal article co-authored by Dr. Abdul Wahid titled "A reinforcement learning approach to dairy farm battery management using Q learning" gets published in Journal of Energy Storage (Elsevier, Impact Factor: 9.4)',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Ph.D_and_M.Tech-Research_Aug24_Admission_Notification-Extended.pdf',
    text: 'Ph.D and M.Tech-Research Aug 24 Admission Notification-Extended',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Prof_Lakshmivarahan.pdf',
    text: 'Talk: Mathematics of Bigdata Analysis',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/SLD-SRMP.pdf',
    text: 'Journal article coauthored by Prof. Prasanna titled "Spoken Language Change Detection inspired Speaker Change Detection" gets published in Circuits, Systems and Signal Processing (Springer)',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/MoU-Director_Office.docx',
    text: 'Signing of MoU between IIIT Dharwad and IIT Dharwad',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/tenders',
    text: 'Tender : Bus Hiring Service - Regular Basis',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Cancellation_of_Advt_for_ the_post_of_Registrar-reg.pdf',
    text: 'Notice - Cancellation of Advt. for the post of Registrar-reg',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/M.TechbyResearch.pdf',
    text: 'Sponsored position under M. Tech by research',
    new: false,
    year: '2024',
    month: '6',
  },
  {
    link: '/docs/Ph.D_and_M.Tech-Research_Aug24_Admission_Notification.pdf',
    text: 'Admission to Ph.D. and M. Tech. (Research) : Last date is extended till 12th June 2024',
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
    link: '/tenders',
    text: 'Expression of Interests (Hostel Accommodation of Boys)',
    new: false,
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
