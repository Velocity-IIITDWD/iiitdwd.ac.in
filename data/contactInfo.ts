export type Contact = {
    name: string;
    designation: string;
    contactNumber: string;
}

export type ContactData = {
    "generalQueries": Contact[];
    "hostelRelatedQueries": Contact[];
    "academicQueries": Contact[];
    "careerGuidanceCell": Contact[];
    "feeRelatedQueries": Contact[];
    "scholarshipLoansQueries": Contact[];
}

export type ContactCategory = {
    id: number,
    category: string
}
const contactCategories : string[]= [
    
    "General Queries",
    "Hostel Related Queries",
    "Academic Queries",
    "Career Guidance Cell",
    "Fee Related Queries",
    "Scholarship Loans Queries"
]
const contacts: ContactData = {
    "generalQueries": 
        [
        { name: "Dr. Malay Kumar", designation: "Assistant Professor (Admission-In-Charge)", contactNumber: "8959596477" },
        { name: "Dr. Anand P. Barangi", designation: "Assistant Professor (Admission-In-Charge)", contactNumber: "9590789602" },
        { name: "Mr. Ravi B Vitlapur", designation: "Assistant Registrar", contactNumber: "9900414482" },
        { name: "Mr. Ashwin Hiremath", designation: "Junior Assistant-Academic", contactNumber: "9916333316" },
        { name: "Mr. Ujwal Doddamani", designation: "Student Life Coordinator", contactNumber: "9886376600" }
    ],
    "hostelRelatedQueries": [
        { name: "Dr. Rajesh N S", designation: "Assistant Professor (Boys Hostel Warden)", contactNumber: "9916043766" },
        { name: "Dr. Anushree Kini", designation: "Assistant Professor (Girls Hostel Warden)", contactNumber: "8762234173" },
        { name: "Mr. Mayur", designation: "Office Assistant", contactNumber: "7899161519" },
        { name: "Ms. Roopa K", designation: "Office Assistant", contactNumber: "9353123829" }
    ],
    "academicQueries": [
        { name: "Dr. Prakash Pawar", designation: "Assistant Professor, HoD (ECE)", contactNumber: "9743083540" },
        { name: "Dr. Prabhu Prasad B M", designation: "Assistant Professor, HoD (CSE)", contactNumber: "9008862681" },
        { name: "Dr. Rajendra Hegadi", designation: "Dept. of DSAI Professor-In-Charge of Academic & Student Welfare", contactNumber: "8827382264" },
        { name: "Dr. Sunil Saumya", designation: "HoD (DSAI)", contactNumber: "8863830309" },
        { name: "Dr. K. T. Deepak", designation: "Dept. of ECE Associate Dean of Research and Development [R&D]", contactNumber: "9900456936" },
        { name: "Dr. Pavan Kumar C", designation: "Dept. of CSE Associate Dean (Information Communication Technology [ICT], Automation)", contactNumber: "9789714476" },
        { name: "Dr. Aswath Babu", designation: "Faculty-In-Charge (H&S)", contactNumber: "8970994766" }
    ],
    "careerGuidanceCell": [
        { name: "Mr. Ujwal Doddamani", designation: "Student Life Coordinator", contactNumber: "9886376600" },
        { name: "Dr. Pramod Yelmewad", designation: "Assistant Professor", contactNumber: "9823093744" },
        { name: "Dr. Manjunath K Vanahalli", designation: "Assistant Professor, Dept. of DSAI Faculty-In Charge of Career Guidance Cell [CGC]", contactNumber: "9823093744" }
    ],
    "feeRelatedQueries": [
        { name: "Ms. Swati Math", designation: "Junior Superintendent-Accounts", contactNumber: "7026609000" },
        { name: "Mr. Raghavendra H", designation: "Junior Assistant", contactNumber: "9886090988" },
        { name: "Ms. Vaishnavi M", designation: "Office Assistant", contactNumber: "9353277103" },
        { name: "Ms. Roopa K", designation: "Office Assistant", contactNumber: "9353123829" }
    ],
    "scholarshipLoansQueries": [
        { name: "Dr. Aswath Babu", designation: "Faculty-In-Charge (H&S)", contactNumber: "8970994766" },
        { name: "Ms. Shalini Kotur", designation: "Junior Assistant", contactNumber: "9742539111" }
    ]
};

export {contacts, contactCategories};