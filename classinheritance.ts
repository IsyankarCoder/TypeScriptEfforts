class Shape{
    Area: number;
    constructor(a:number) {
        this.Area = a;
    }

}

class Circle extends Shape{
    disp(): void {
        console.log("Bunun areası bu = ", this.Area);
    }
}

let obj = new Circle(55);
obj.disp();


class Root{
    str: string;
}

class Child extends Root{ }
class Leaf extends Child{ }

let ch = new Leaf();
ch.str = "Samsun55";
console.log(ch.str);

console.log(0+'0')