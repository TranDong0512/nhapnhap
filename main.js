var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
var Circle = /** @class */ (function () {
    function Circle(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        var circle_area = (this.radius * this.radius) * Math.PI;
        return circle_area;
    };
    Circle.prototype.getPerimeter = function () {
        var circle_perimeter = this.radius * 2 * Math.PI;
        return circle_perimeter;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.rectangleArea = function () {
        var rectangle_Area = this.width * this.length;
        return rectangle_Area;
    };
    Rectangle.prototype.rectanglePerimeter = function () {
        var rectangle_Perimeter = (this.width + this.length) * 2;
        return rectangle_Perimeter;
    };
    return Rectangle;
}());
var shape = new Shape('red', false);
console.log(shape);
var circle = new Circle("blue", false, 3.5);
console.log(circle.getArea());
console.log(circle.getPerimeter());
var rectangle = new Rectangle("black", false, 10, 10);
console.log(rectangle.rectangleArea());
console.log(rectangle.rectanglePerimeter());
