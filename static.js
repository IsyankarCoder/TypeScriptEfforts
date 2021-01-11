var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("Static değeri numum = 0", StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 33;
StaticMem.disp();
var obj2 = new StaticMem();
var IsStatic = obj2 instanceof StaticMem;
console.log("obj2 is instance of StaticMen", IsStatic);
