import { Employee,dept_array } from "./Employee.js";

export let employee_arr = []
export function Add_Employee(emp){
    employee_arr.push(emp)
}
export function Get_Employee(name){
    for(emp of employee_arr){
        if(emp.fname===name){
            return emp;
        }
    }
}
export function Increase_Salary(salary){
    for(emp of employee_arr){
        if(emp.fname===name){
           emp.salary += parseInt(salary)
           return emp;
        }
    }
}