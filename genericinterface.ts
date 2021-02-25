/*function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity("55"));
let myIdentity2: { <T>(arg: T): T } = identity;
console.log(myIdentity(55));*/

//sayHi2(a: number): string

interface GenericIdentityFn {
     <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let idtt: GenericIdentityFn = identity; 



interface GenericIdentityFn2<T> {
    (arg: T): T;
}

let id3: GenericIdentityFn2<number> = identity;
