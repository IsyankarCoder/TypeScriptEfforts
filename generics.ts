/*function identity<T>(arg: T): T {
    return arg;
}
*/
//let myIdentity: <T>(arg: T) => T = identity;

//let myIdentity2: { <T>(arg: T): T } = identity;

interface GenericIdentityFn { <T>(arg: T): T }
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity3: GenericIdentityFn = identity;

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

let myAdd2 = function (x: number, y: number): number {
    return x + y;  
};
