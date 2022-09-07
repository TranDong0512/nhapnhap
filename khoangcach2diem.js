class Point {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    distance(b){
        let dx = this.x - b.x;
        let dy = this.y - b.y;

        return Math.hypot(dx,dy)
    }
}
let diem1 = new Point(5, 5)
let diem2 = new Point(10, 10)

console.log(diem1.distance(diem2))