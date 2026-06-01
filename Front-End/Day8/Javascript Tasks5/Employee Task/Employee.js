export class Employee{
    constructor(_fname,_lname,_age,_salary){
        this.fname = _fname;
        this.lname = _lname;
        this.age = _age;
        this.salary = _salary;
    }
    getFullName(){
        return `FullName is : ${this.fname} ${this.lname}`
    }

}
export let dept_array = ["IT","HR","Finance","Sales"];