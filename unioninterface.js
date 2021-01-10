//commandline as string
var options = {
    program: "test1",
    commandline: "Hello"
};
console.log(options.commandline);
//comandline as string []
var options = {
    program: "test2",
    commandline: ["ee", 55, 48]
};
console.log(options.commandline);
//commandline as function
options = {
    program: "test3",
    commandline: function () {
        return "66";
    }
};
var obj = options.commandline;
console.log(obj());
var list2 = ["01", "05", "10"];
console.log(list2);
//undefined hatası veriyor javascripte çevirdiğinde....
var ages;
ages["aa"] = 10;
ages["Volkan"] = 55;
console.log(ages);
