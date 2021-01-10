interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string,
    sayHi2(a: number): string
}    

var customer: IPerson={
    firstName: "Volkan",
    lastName: "Genç",
    sayHi: () => { return "HELLO" },
    sayHi2: function (a) {
        return "a" + a;
    }
}

console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi2(12));


var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" },
    sayHi2: (a) => { return a.toString() }
}; 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi2(55));