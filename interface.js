var customer = {
    firstName: "Volkan",
    lastName: "Genç",
    sayHi: function () { return "HELLO"; },
    sayHi2: function (a) {
        return "a" + a;
    }
};
console.log("Customer Object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi2(12));
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; },
    sayHi2: function (a) { return a.toString(); }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi2(55));
