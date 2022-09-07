class QuadraticEquation {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        let delta = (this.b * this.b) - 4 * this.a * this.c
        return delta;
    }

    getRoot1() {
        let x1 = (-this.b + Math.pow(this.getDiscriminant(), 0.5) / 2 * this.a)
        return x1;
    }

    getRoot2() {
        let x2 = (-this.b - Math.pow(this.getDiscriminant(), 0.5) / 2 * this.a)
        return x2;
    }

    getRoot3() {
        let x3 = -this.b / 2 * this.a
        return x3;
    }
    get(){
        if(this.getDiscriminant() == 0 ){
            console.log("nghiệm của phương trình là " + this.getRoot3())
        }else if(this.getDiscriminant() > 0){
            console.log("nghiệm 1 là: " + this.getRoot1() + " nghiệm 2 là: " + this.getRoot2())
        }else {
            console.log("The equation has no roots")
        }
    }
}

let quadraticEquation = new QuadraticEquation(1,2,-3)
quadraticEquation.get()