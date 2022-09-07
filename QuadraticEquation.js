var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.getDiscriminant = function () {
        var delta = (this.b * this.b) - 4 * this.a * this.c;
        return delta;
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        var x1 = (-this.b + Math.pow(this.getDiscriminant(), 0.5) / 2 * this.a);
        return x1;
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        var x2 = (-this.b - Math.pow(this.getDiscriminant(), 0.5) / 2 * this.a);
        return x2;
    };
    QuadraticEquation.prototype.getRoot3 = function () {
        var x3 = -this.b / 2 * this.a;
        return x3;
    };
    QuadraticEquation.prototype.get = function () {
        if (this.getDiscriminant() == 0) {
            console.log("nghiệm của phương trình là " + this.getRoot3());
        }
        else if (this.getDiscriminant() > 0) {
            console.log("nghiệm 1 là: " + this.getRoot1() + " nghiệm 2 là: " + this.getRoot2());
        }
        else {
            console.log("The equation has no roots");
        }
    };
    return QuadraticEquation;
}());
var quadraticEquation = new QuadraticEquation(1, 2, -3);
quadraticEquation.get();
