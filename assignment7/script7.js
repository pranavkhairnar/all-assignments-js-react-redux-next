class Rectangle {
    constructor() {
        console.log("Rectangle (parent class) constructor called.");
    }
    method1() {
        console.log("Rectangle (parent class) method1 called.");
    }
}
    
class Square extends Rectangle {
    constructor() {
        super();
        console.log("Square (child class) constructor called.");
    } 
}

let object1 = new Rectangle();

let object2 = new Square();
 
object2.method1();