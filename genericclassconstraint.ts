class BeeKeeper {
    
    hasmask: boolean = false;
}

class ZooKeeper {
    
    nameTag: string;
}

class Animal { 
    numLegs: number;
}

class Bee extends Animal {
    
    keeper: BeeKeeper = new BeeKeeper();
}

class  Lion extends Animal { 
    keeper: ZooKeeper = new ZooKeeper();
}

function CreateInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

CreateInstance(Lion).keeper.nameTag;
CreateInstance(Bee).keeper.hasmask;