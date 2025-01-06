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



export { getAllFaculties, query, GetAllVisitors,GetAllStaff,GetAllSenate,GetFormer };
