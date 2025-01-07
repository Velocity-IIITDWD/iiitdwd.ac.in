const query = `*[_type == "faculty" && facultyId == $id] {
  "id": facultyId,
  "file": content.head.file.asset->url,
  "photo": content.card.photo.asset->url,
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

const GetAnnouncements = `*[_type == "announcement"]{
  link,
  month,
  new,
  text,
  year,
  date,
}`

const GetLinks = `*[_type == "linksStructure"]{
  id,
  type,
  links[] {
    displayText,
    link,
    id
  }
}`

const GetDescription = `*[_type == "descriptionStructure"]{
  id,
  heading,
  description
}`

// const GetSeats = `*[_type == "seatsStructure"]{
  
// }


const GetAbout = `
  *[_type == "about"]{
    _id,
    _type,
    aboutText,
    director->{
      _id,
      _type,
      title,
      content,
      imageURL
    },
    briefProfile,
    vision,
    image_prof->{
      _id,
      _type,
      name,
      imageURL
    },
    mission[]->{
      _id,
      _type,
      missionText
    },
    coreValues[]->{
      _id,
      _type,
      text
    },
    href,
    directorMessage[]->{
      _id,
      _type,
      heading,
      text1,
      text2,
      text3
    }
  }
`;

export { GetDescription,getAllFaculties, query, GetAllVisitors,GetAllStaff,GetAllSenate,GetFormer,GetChair,GetBoard,GetAnnouncements,GetLinks };
