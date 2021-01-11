class PrinterClass{
    doPrint(): void{
        console.log("Printer called from Parent class");
    }
}


class StringPrinterClass extends PrinterClass{
    doPrint(): void{
        super.doPrint();
        console.log("StringPrinter dan çağrıld");
    }
}

let obg = new StringPrinterClass();
obg.doPrint();