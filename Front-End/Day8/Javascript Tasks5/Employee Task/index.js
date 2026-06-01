import * as Emp from "./Employee.js"
import * as Ops from "./EmployeeOps.js"

let Employee = Emp.Employee;
let emp1 = new Employee("Samer","Nassim",23,1000)
let emp2 = new Employee("Abu Bakr","Mahdy",23,1000)
let emp3 = new Employee("Ahmed","Hassan",23,1000)
let emp4 = new Employee("Hossam","Amer",23,1000)

Ops.employee_arr.push(emp1)
Ops.employee_arr.push(emp2)
Ops.employee_arr.push(emp3)
Ops.employee_arr.push(emp4)

const table = document.getElementsByTagName("table")[0]
console.log(table)
for(let emp of Ops.employee_arr){
    let row = document.createElement("tr");
        table.appendChild(row);
        row.innerHTML=(`
            <td>${emp.fname}</td>
            <td>${emp.lname}</td>
            <td>${emp.age}</td>
            <td>${emp.salary}</td>
        `) 
}