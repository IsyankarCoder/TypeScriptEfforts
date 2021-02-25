var genericnumber = /** @class */ (function () {
    function genericnumber() {
        this.add2 = function (x, y) {
            return x + y;
        };
    }
    return genericnumber;
}());
var gn = new genericnumber();
gn.zeroValue = 0;
console.log(gn.add2(45, 66));
gn.add = function add(x, y) {
    return x + y;
};
console.log(gn.add(44, 33));
var gn2 = new genericnumber();
gn2.zeroValue = "";
gn2.add = function add(x, y) {
    return x + y;
};
console.log(gn2.add("Volkan", "Genç"));
