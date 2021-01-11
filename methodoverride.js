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
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("Printer called from Parent class");
    };
    return PrinterClass;
}());
var StringPrinterClass = /** @class */ (function (_super) {
    __extends(StringPrinterClass, _super);
    function StringPrinterClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinterClass.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("StringPrinter dan çağrıld");
    };
    return StringPrinterClass;
}(PrinterClass));
var obg = new StringPrinterClass();
obg.doPrint();
