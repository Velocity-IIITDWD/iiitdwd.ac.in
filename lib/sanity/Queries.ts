const GetFacultyDetails = `*[_type == "faculty" && facultyId == $id] {
  "id": facultyId,
  "photo": content.card.photo,
  content
}`;

const getAllFaculties = `*[_type == "faculty"] {
  "id": facultyId
}`;

const GetAllVisitors = `*[_type == "visitor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

const GetAllStaff = `*[_type == "staff"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

const GetAllSenate = `*[_type == "senate"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

const GetFormer = `*[_type == "former"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

const GetChair = `*[_type == "chairPerson"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

const GetBoard = `*[_type == "boardOfGovernors"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;
const GetFormerBoard = `*[_type == "formerBoardOfGovernor"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;

const GetAnnouncements = `*[_type == "announcement"]{
  link,
  month,
  new,
  text,
  year,
  date,
}`;

const GetLinks = `*[_type == "linksStructure"]{
  id,
  type,
  links[] {
    displayText,
    link,
    id
  }
}`;

const GetDescription = `*[_type == "descriptionStructure"]{
  id,
  heading,
  description
}`;

// const GetSeats = `*[_type == "seatsStructure"]{

// }

const GetAbout = `*[_type == "about"]{
  coreValues[] {
    id,
    text,
  },
  
}`;

const GetResearch = `*[_type == "profiles"] {
  title,
  profiles[] {
    title,
    content,
    imageURL
  }
}`;
const GetResearchAdvertisement = `*[_type == "advertisement"]{
  time,
  lastDate,
  generalInstructions,
  applicationForm
}`;
const GetCampusData = `*[_type == "campusData"] {
  title,
  href,
  imageUrl
}
`;
const GetFacilities = `*[_type == "facility"] {
  title,
  blockName,
  items,
  imageUrl
}`;
const GetKrcData = `*[_type == "krcData"] {
  title,
  description,
  accessInfo,
  buttonText,
  link
}
`;
const GetKrcDataTel = `*[_type == "krcDataTEL"] {
  title,
  description,
  accessInfo,
  buttonText,
  link
}
`;
const GetKrcDataTelFull = `*[_type == "krcDataTelFull"] {
  heading,
  card[] {
    title,
    description,
    accessInfo,
    buttonText,
    link
  }
}

`;

export {
  GetDescription,
  getAllFaculties,
  GetFacultyDetails,
  GetAllVisitors,
  GetAllStaff,
  GetAllSenate,
  GetFormer,
  GetChair,
  GetBoard,
  GetAnnouncements,
  GetLinks,
  GetFormerBoard,
  GetResearch,
  GetResearchAdvertisement,
  GetCampusData,
  GetFacilities,
  GetKrcData,
  GetKrcDataTel,
  GetKrcDataTelFull,
};
