interface RunOptions {
    program: string,
    commandline: string | ((string|number)[]) | (() => string)
}

//commandline as string
var options: RunOptions = {
    program: "test1",
    commandline: "Hello"
}
console.log(options.commandline);

//comandline as string []
var options: RunOptions = {
    program: "test2",
    commandline: ["ee", 55, 48]
}

console.log(options.commandline);

//commandline as function
options = {
    program: "test3",
    commandline: () => {
        return "66";
    }
}
var obj:any = options.commandline;
console.log(obj());


interface nameList {
    [index: number]: string
}
interface ageList {
    [index: string]: number 
}

var list2: nameList = ["01", "05", "10"];
console.log(list2);

//undefined hatası veriyor javascripte çevirdiğinde....
var ages: ageList;

ages["aa"] =10;
ages["Volkan"] = 55;
console.log(ages);
