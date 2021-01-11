class Car{
    engine:string;

    constructor(engine:string){
        this.engine=engine;
    }

    disp():void{
        console.log("this engine is",this.engine);
    }
    
}

var obj = new Car("Vosvos");
console.log("endi", obj.engine);

obj.disp();
