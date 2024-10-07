/*

11. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

*/

const deleteProperty = () => {
  const student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
  };

  console.log(student);

  if (student.hasOwnProperty("rollno")) {
     delete student.rollno;
  }

  return student;
}

console.log(deleteProperty());

export default deleteProperty