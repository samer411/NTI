var students = [
  { name: "Ali", age: 20, Crs: "CS" },
  { name: "Sara", age: 22, Crs: "Math" },
  { name: "Omar", age: 19, Crs: "Physics" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Hassan", age: 23, Crs: "Engineering" },
  { name: "Mona", age: 20, Crs: "Biology" },
  { name: "Kareem", age: 24, Crs: "Math" },
  { name: "Noor", age: 18, Crs: "CS" },
  { name: "Noor", age: 18, Crs: "CS" }
];

// 1- Display all students
document.write(`<h1 style="color:red">Display all students</h1>`)

document.write(`<table style="font-size:20px">
    ${
      students.map((student)=>{
        return `<tr><td style="padding:5px 10px;">${student.name}</td><td style="padding:5px 10px;">${student.age}</td><td style="padding:5px 10px;">${student.Crs}</td></tr>`
      }).join("")
    }
  </table>
  `)


//*************************************************************************************************** */
document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)

// 2-find and Search for a student by name and print their details.
document.write(`<h1 style="color:red">find and Search for a student by name and print their details.</h1>`)

let entered_name = "sara"
let students_with_matched_name = []
for(let student of students){
    if(student.name.toLowerCase()===entered_name.toLocaleLowerCase()){
      students_with_matched_name.push(student);
    }}
if(students_with_matched_name.length===0){
  document.write("<h2>There is No Students With This Name.")
}
else{
  document.write(`<table style="font-size:20px">
    ${
      students_with_matched_name.map((student)=>{
        return `<tr><td style="padding:5px 10px;">${student.name}</td><td style="padding:5px 10px;">${student.age}</td><td style="padding:5px 10px;">${student.Crs}</td></tr>`
      }).join("")
    }
  </table>
  `)
}

document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
//*************************************************************************************************** */

//3-Find how many students are in the array(count Students).
document.write(`<h1 style="color:red">Find how many students are in the array(count Students).</h1>`)
document.write(`<h1>The Number of Student is ${students.length}`)

// *************************************************************************************************** */
document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)


//4-Get all students who are in "CS"
document.write(`<h1 style="color:red">Get all students who are in "CS"</h1>`)

let cs_students =[]
for(let student of students){
    if(student.Crs==="CS"){
        cs_students.push(student)
    }
}
document.write(`<table style="font-size:20px">
    ${
      cs_students.map((student)=>{
        return `<tr><td style="padding:5px 10px;">${student.name}</td><td style="padding:5px 10px;">${student.age}</td><td style="padding:5px 10px;">${student.Crs}</td></tr>`
      }).join("")
    }
  </table>
  `)
document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)


//5-Find youngest student
document.write(`<h1 style="color:red">Find youngest student</h1>`)

let youngest_student = students.sort((a,b)=>{
    return a.age-b.age
})[0]
document.write(`<table style="font-size:20px">
    ${
       `<tr><td style="padding:5px 10px;">${youngest_student.name}</td><td style="padding:5px 10px;">${youngest_student.age}</td><td style="padding:5px 10px;">${youngest_student.Crs}</td></tr>`
      }
  </table>
  `)


document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
// 6- Sort Students by age
document.write(`<h1 style="color:red">Sort Students by age</h1>`)

let sorted_students =  students.sort((a,b)=>{
     return a.age-b.age
 })
 document.write(`<table style="font-size:20px">
    ${
      sorted_students.map((student)=>{
        return `<tr><td style="padding:5px 10px;">${student.name}</td><td style="padding:5px 10px;">${student.age}</td><td style="padding:5px 10px;">${student.Crs}</td></tr>`
      }).join("")
    }
  </table>
  `)

document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
// 7-Create a new array with only student names.
document.write(`<h1 style="color:red">Create a new array with only student names</h1>`)

let students_names = []
students.map((student)=>{
    students_names.push(student.name);
})
document.write(`<table style="font-size:20px">
    ${
      students_names.map((name)=>{
        return `<tr><td style="padding:5px 10px;">- ${name}</td></tr>`
      }).join("")
    }
  </table>
  `)



document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
//8-Check if all students are above age  18 and return true or false 
document.write(`<h1 style="color:red">Check if all students are above age  18 and return true or false </h1>`)

document.write(`<h2 style="font-size:20px">${students.every((student)=>{
    return student.age>18
})}</h2>`);


document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
//9-return Students Who Have the Same Crs

 let groups = Object.groupBy(students,({Crs})=>Crs)
for(group of Object.values(groups)){
    if(group.length>1){
        document.write(`
                <h1 style="color:blue">${group[0]["Crs"]}</h1></br>
                `)
        for(let student of group){
            document.write(`
                <span>${student.name}</span></br>
                `)
        }        
    }
}



  document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
  //10-Calculate the average age of all students.
  document.write(`<h1 style="color:red">Calculate the average age of all students.</h1>`)
let all_ages =0;
for(student of students){
    all_ages+=student["age"]
}
let avergage_age = all_ages/Object.keys(students).length;
document.write(`
<p style="color:green; font-size:20px;">Average Age is: ${avergage_age.toFixed(2)}</span></br>
`)
console.log(avergage_age)




document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
//11-Sort and Find top 3 oldest students
  document.write(`<h1 style="color:red">Sort and Find top 3 oldest students</h1>`)

let sorted_oldest_students =  students.sort((a,b)=>{
     return b.age-a.age
 })
 document.write(`<table style="font-size:20px">
    ${
      sorted_oldest_students.slice(0,3).map((student)=>{
        return `<tr><td style="padding:5px 10px;">${student.name}</td><td style="padding:5px 10px;">${student.age}</td><td style="padding:5px 10px;">${student.Crs}</td></tr>`
      }).join("")
    }
  </table>
  `)

document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
//12-Find if there are students with the same name.
document.write(`<h1 style="color:red">Find if there are students with the same name</h1>`)

let group_students_by_name = Object.groupBy(students,({name})=>name)
console.log(group_students_by_name);
for(arr of Object.values(group_students_by_name)){
  if(arr.length>1){
    document.write(
        `<h2 style="color:blue">The Repeated Name: ${arr[0]["name"]}</h2>
         <span>Number of Students with the same Name= ${arr.length}</span> <br>
        `)
    console.log(arr[0]["name"])
  }
}

document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)
//13-Reverse the array without using .reverse().
document.write(`<h1 style="color:red">Reverse the array without using .reverse().</h1>`)
document.write(`<table style="font-size:20px">
    ${
      sorted_oldest_students.map((student)=>{
        return `<tr><td style="padding:5px 10px;">${student.name}</td><td style="padding:5px 10px;">${student.age}</td><td style="padding:5px 10px;">${student.Crs}</td></tr>`
      }).join("")
    }
  </table>
  `)
 
document.write(`<h1 style="text-align:center">*******************************************************************************************</h1>`)

//14-Add a new property email for each student in the format: name.toLowerCase+"@Nti.com"
document.write(`<h1 style="color:red">Add a new property email for each student in the format: name.toLowerCase+"@Nti.com"✔✔✔✔✔</h1>`)

let new_updated_students=[];
for(student of students){
  let new_student={...student,"email":`${student["name"].toLowerCase()}@Nti.com`}
  new_updated_students.push(new_student)
}
console.log(new_updated_students);








