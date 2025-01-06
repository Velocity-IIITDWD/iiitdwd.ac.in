const query = `*[_type == "faculty" && facultyId == $id] {
  "id": facultyId,
  "file": content.head.file.asset->url,
  "photo": content.card.photo.asset->url,
  content
}`;

const getAllFaculties = `*[_type == "faculty"] {
  "id": facultyId
}`;

export default query;
export { getAllFaculties, query };
