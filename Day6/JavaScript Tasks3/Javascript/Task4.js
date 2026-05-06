var students = [
  { name: "Ali", age: 20, Crs: "CS" },
  { name: "Sara", age: 22, Crs: "Math" },
  { name: "Omar", age: 19, Crs: "Physics" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Hassan", age: 23, Crs: "Engineering" },
  { name: "Mona", age: 20, Crs: "Biology" },
  { name: "Kareem", age: 24, Crs: "Math" },
  { name: "Noor", age: 18, Crs: "CS" }
];

// 1- Display all students
// for(item of students){
//     document.write(
//         `<span>${item.name}</span> <span>${item.age}</span> <span>${item.Crs}</span><br>
//         `)
// }


//*************************************************************************************************** */
// document.write("<h1>******************************************************************************</h1>")

// 2-find and Search for a student by name and print their details.
// let entered_name = window.prompt("Please Enter the name")
// for(let student of students){
//     if(student.name.toLowerCase()===entered_name.toLocaleLowerCase()){
//         document.write(`<span>${student.name}</span> <span>${student.age}</span> <span>${student.Crs}</span><br>`)
//     }
// }

// document.write("<h1>******************************************************************************</h1>")
//*************************************************************************************************** */

//3-Find how many students are in the array(count Students).
// document.write(`<h1>The Number of Student is ${students.length}`)

//*************************************************************************************************** */
// document.write("<h1>******************************************************************************</h1>")


//4-Get all students who are in "CS"
// for(let student of students){
//     if(student.Crs==="CS"){
//         document.write(`<span>${student.name}</span> <span>${student.age}</span> <span>${student.Crs}</span><br>`)
//     }
// }
// document.write("<h1>******************************************************************************</h1>")


//5-Find youngest student
// let youngest_student = students.sort((a,b)=>{
//     return a.age-b.age
// })[0]
// document.write(`<span>${youngest_student.name}</span> <span>${youngest_student.age}</span> <span>${youngest_student.Crs}</span><br>`)
// console.log(students.sort((a,b)=>{
//     return a.age-b.age
// }))
// document.write("<h1>******************************************************************************</h1>")
// 6- Sort Students by age
// let sorted_students =  students.sort((a,b)=>{
//      return a.age-b.age
//  })
//  for(student of sorted_students){
//     document.write(
//         `<span>${student.name}</span> <span>${student.age}</span> <span>${student.Crs}</span><br>
//         `)
// }


// document.write("<h1>******************************************************************************</h1>")
// 7-Create a new array with only student names.
// let students_names = []
// students.map((student)=>{
//     students_names.push(student.name);
// })
// for(name of students_names){
//     document.write(
//         `<span>${name}</span><br>
//         `)
// }



// document.write("<h1>******************************************************************************</h1>")
//8-Check if all students are above age  18 and return true or false 
// document.write(`${students.every((student)=>{
//     return student.age>18
// })}`);





// document.write("<h1>******************************************************************************</h1>")
//9-return Students Who Have the Same Crs

// let groups = Object.groupBy(students,({Crs})=>Crs)
// for(group of Object.values(groups)){
//     if(group.length>1){
//         document.write(`
//                 <h1>${group[0]["Crs"]}</h1></br>
//                 `)
//         for(let student of group){
//             document.write(`
//                 <span>${student.name}</span></br>
//                 `)
//         }        
//     }
// }



// document.write("<h1>******************************************************************************</h1>")
//10-Calculate the average age of all students.
// let all_ages =0;
// for(student of students){
//     all_ages+=student["age"]
// }
// let avergage_age = all_ages/Object.keys(students).length;
// document.write(`
// <span>Average Age is: ${avergage_age}</span></br>
// `)
// console.log(avergage_age)




// document.write("<h1>******************************************************************************</h1>")
//11-Sort and Find top 3 oldest students
// let sorted_oldest_students =  students.sort((a,b)=>{
//      return b.age-a.age
//  })
//  for(let i =0;i<3;i++){
//     document.write(
//         `<span>${sorted_oldest_students[i].name}</span> <span>${sorted_oldest_students[i].age}</span> <span>${sorted_oldest_students[i].Crs}</span><br>
//         `)
// }









