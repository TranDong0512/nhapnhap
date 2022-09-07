class StopWatch{
    private _startTime;
    private _endTime;
    constructor() {
        this._startTime = new Date();
        this._endTime = new Date();
    }

    // start(){
    //    return  this._startTime = new Date(2022,9,6,3,45,0)
    // }
    start(){
        return this._startTime = new Date(2022,8,5,24,0,0,0,)
    }
    stop(){
        return this._endTime = new Date()
    }
    getElapsedTime(){
        let milisecond = ((this._endTime.getHours()-this._startTime.getHours())* 3600 + (this._endTime.getMinutes()-this._startTime.getMinutes())*60 + (this._endTime.getSeconds()-this._startTime.getSeconds())*1000)
        return milisecond;
    }
}
let dongho = new StopWatch()
console.log(dongho.start())
console.log(dongho.stop())
console.log(dongho.getElapsedTime())