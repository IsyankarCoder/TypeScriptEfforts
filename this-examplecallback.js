var Element2 = /** @class */ (function () {
    function Element2() {
    }
    Element2.prototype.addClickListener = function (onclick) {
        console.log("sss");
        onclick(null);
    };
    return Element2;
}());
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onclickBad = function (e) {
        console.log("clicked");
    };
    return Handler;
}());
var h = new Handler();
new Element2().addClickListener(h.onclickBad);
