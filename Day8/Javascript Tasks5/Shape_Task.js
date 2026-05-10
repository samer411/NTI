class Shape{
    calcArea(){
        console.log("This is Area")
    }
}

let s1 = new Shape();
s1.calcArea()
console.log(s1)

class Rectangle extends Shape{
    constructor(_length,_width){
        super()
        this.length = _length;
        this.width = _width;
    }
    calcArea(){
        return `Rectangle Area = ${this.width*this.length}`
    }
}
let r1 = new Rectangle(10,5);
console.log(r1.calcArea())


class Circle extends Shape{
    constructor(_radius){
        super()
        this.radius = _radius;
    }
    calcArea(){
        return `Rectangle Area = ${(Math.PI*parseInt(this.radius)**2).toFixed(2)}`
    }
}
let c1 = new Circle(10)
console.log(c1.calcArea())

let rec1 = new Rectangle(10,5)
let rec2 = new Rectangle(10,50)
let cir1 = new Circle(10)
let cir2 = new Circle(20)

// Array of Shapes
let arr = [
    rec1,
    rec2,
    cir1,
    cir2
]

for(let i=0;i<arr.length;i++){
    console.log(`The Area of Shape ${i} = ${arr[i].calcArea()}`)
}
