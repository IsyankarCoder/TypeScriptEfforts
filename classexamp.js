var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("this engine is", this.engine);
    };
    return Car;
}());
var obj = new Car("Vosvos");
console.log("endi", obj.engine);
obj.disp();
