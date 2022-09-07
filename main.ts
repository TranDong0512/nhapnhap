class Shape {
    color: string;
    filled: boolean;
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}

class Circle {
    color : string;
    filled : boolean;
    radius : number;

    constructor(color: string, filled: boolean, radius:number) {
        this.color =color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea(){
        let circle_area = (this.radius * this.radius) * Math.PI
        return circle_area;
    }
    getPerimeter(){
        let circle_perimeter = this.radius *2 * Math.PI
        return circle_perimeter;
    }
}

class Rectangle {
    color : string;
    filled : boolean;
    width : number;
    length : number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    rectangleArea(){
        let rectangle_Area = this.width * this.length;
        return rectangle_Area;
    }
    rectanglePerimeter(){
        let rectangle_Perimeter = (this.width + this.length) * 2;
        return rectangle_Perimeter
    }
}

let shape = new Shape('red', false);
console.log(shape);

let circle = new Circle("blue", false, 3.5)
console.log(circle.getArea())
console.log(circle.getPerimeter())

let rectangle = new Rectangle("black", false, 10, 10)
console.log(rectangle.rectangleArea())
console.log(rectangle.rectanglePerimeter())