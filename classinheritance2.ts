abstract class Animal {
    #name: string; //# değişkeni private belirler.
    protected age: number = 25;
    constructor(theName:string) {
        this.#name = theName;
  
    }
    abstract bark() {
        console.log("how how");
    }
    
    
    move(distanceMeter:number=0) {
        console.log(`${this.#name} moved ${distanceMeter}m age ${this.age}`);
    }

}

class Snake extends Animal{
    constructor(age:number,name:string) {
        super(name); 
        this.age = age;
    }
      bark() {
        console.log("mi how");
    }
    move(distanceMeter = 5) {
        console.log("slithering...");
        super.move(distanceMeter);
    }
}

class Horse extends Animal{
     constructor(name: string) {
        super(name);        
    }
      bark() {
        console.log("how mmiii");
    }
    move(distanceMeter = 45) {
        console.log(distanceMeter);
        super.move(distanceMeter);
    }
}

let sam = new Snake(30, "Samy payytonn...");
let tom : Animal = new Horse("Tomy the Palami,");

sam.move();
tom.move(34);

