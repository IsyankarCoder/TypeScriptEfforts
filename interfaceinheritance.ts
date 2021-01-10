interface IPerson44 {
    age: number
}

interface Musician extends IPerson44 {
    instrument: string
}

var drummer: Musician = {
    age: 55,
    instrument: "Saz"
};

console.log(drummer);


interface IParent1{
    v1:number
}
interface IParent2{
    v2:number
}

interface Ichild extends IParent1, IParent2 { }
var Child: Ichild = {
    v1: 5,
    v2: 55
}
console.log("value 1: " + Child.v1 + " value 2: " + Child.v2);

