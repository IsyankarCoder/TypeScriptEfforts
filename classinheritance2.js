var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceMeter) {
        if (distanceMeter === void 0) { distanceMeter = 0; }
        console.log(this.name + " moved " + distanceMeter + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceMeter) {
        if (distanceMeter === void 0) { distanceMeter = 5; }
        console.log("slithering...");
        _super.prototype.move.call(this, distanceMeter);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceMeter) {
        if (distanceMeter === void 0) { distanceMeter = 45; }
        console.log(distanceMeter);
        _super.prototype.move.call(this, distanceMeter);
    };
    return Horse;
}(Animal));
var sam = new Snake("Samy payytonn...");
var tom = new Horse("Tomy the Palami,");
sam.move();
tom.move(34);
