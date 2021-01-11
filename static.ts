class StaticMem{
    static num: number;
    static disp(): void{
        console.log("Static değeri numum = 0", StaticMem.num);
    }
    private str2: string;
    str3: string = "has";
}

StaticMem.num = 33;
StaticMem.disp();

var obj2 = new StaticMem();
obj2.str3;
var IsStatic = obj2 instanceof StaticMem;
console.log("obj2 is instance of StaticMen", IsStatic); 