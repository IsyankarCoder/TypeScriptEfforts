var myTuple = ["Volkan", "Tolkan", 55, "Genç"];
console.log("Items before push", myTuple.length);
myTuple.push(99);
console.log(myTuple);
console.log("Items after push", myTuple.length);
console.log("Items before pop", myTuple.length);
console.log(myTuple.pop() + " popped from dizi");
console.log(myTuple.length);
var d = myTuple[0], e = myTuple[1], c = myTuple[2];
console.log("d->", d);
console.log("e=>", c);
