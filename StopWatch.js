var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this._startTime = new Date();
        this._endTime = new Date();
    }
    // start(){
    //    return  this._startTime = new Date(2022,9,6,3,45,0)
    // }
    StopWatch.prototype.start = function () {
        return this._startTime = new Date(2022, 8, 5, 24, 0, 0, 0);
    };
    StopWatch.prototype.stop = function () {
        return this._endTime = new Date();
    };
    StopWatch.prototype.getElapsedTime = function () {
        var milisecond = ((this._endTime.getHours() - this._startTime.getHours()) * 3600 + (this._endTime.getMinutes() - this._startTime.getMinutes()) * 60 + (this._endTime.getSeconds() - this._startTime.getSeconds()) * 1000);
        return milisecond;
    };
    return StopWatch;
}());
var dongho = new StopWatch();
console.log(dongho.start());
console.log(dongho.stop());
console.log(dongho.getElapsedTime());
