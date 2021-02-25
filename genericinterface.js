/*function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity("55"));
let myIdentity2: { <T>(arg: T): T } = identity;
console.log(myIdentity(55));*/
function identity(arg) {
    return arg;
}
var idtt = identity;
var id3 = identity;
