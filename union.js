var val;
val = 10;
console.log("numeric value", val);
val = "Bu bir stringdir";
console.log(val);
function disp(name) {
    if (typeof (name) == "string") {
        console.log(name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("Volkan");
console.log("Dizi olan ları listeler");
disp(["volkan", "genc"]);
var arr;
var i;
arr = [1, 2, 3, 4];
for (i = 0; i < arr.length; i++) {
    console.log("i:{i}", arr[i]);
}
arr = ["Baskın", "Var", "Rıfku"];
for (i = 0; i < arr.length; i++) {
    console.log("string i =", arr[i]);
}
