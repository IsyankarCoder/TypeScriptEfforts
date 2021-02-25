class genericnumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
    add2 = function (x, y): T {
        return x + y;
    }
}


let gn = new genericnumber<number>();
gn.zeroValue = 0;
console.log(gn.add2(45, 66));
gn.add = function add(x, y) {
    return x + y;
}

console.log(gn.add(44, 33)); 


let gn2 = new genericnumber<string>();
gn2.zeroValue = "";
gn2.add=function add(x,y) {
    return x + y;
}

console.log(gn2.add("Volkan", "Genç"));