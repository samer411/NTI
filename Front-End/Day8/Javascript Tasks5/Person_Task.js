class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    introduce(){
        return(`This is Person ${this.name} ${this.age}`)
    }
}
let p1 = new Person("ahmed",25)
console.log(p1.introduce())



// Teacher Class
class Teacher extends Person{
    constructor(_name,_age,_subject){
        super(_name,_age);
        this.subject = _subject;
    }
    teach(){
        console.log("Teaching Function")
    }
    introduce(){
        return (`This is Teacher ${this.name} ${this.age} ${this.subject}`)
    }
}
let t1 = new Teacher("samer",22,"Maths")
console.log(t1);
t1.teach()
console.log(t1.introduce())



//Student Class
class Student extends Person{
    constructor(_name,_age,_major){
        super(...arguments,_major);
        this.major = _major

    }
    study(){
        console.log(`The Major is ${this.major}`)
    }
    introduce(){
        return (`This is Student ${this.name} ${this.age} ${this.major}`)
    }
}

let s1 = new Student("samer",22,"CS")
console.log(s1)
s1.study();
console.log(s1.introduce())
