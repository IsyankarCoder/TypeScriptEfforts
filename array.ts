var alphas: string[];
alphas = ["1", "2", "3"];
console.log(alphas[1]);

var nums1: number[] = [1, 23, 4];
console.log(nums1[0]);

var arraynums: number[] = new Array(4);
for (var i = 0; i < 6; i++) {
    arraynums[i] = i * 2;
    console.log(arraynums[i]);
}

var aanames:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<aanames.length;i++) { 
   console.log(aanames[i]) 
}

var arr: number[] = [2, 3];
var [d, e] = arr;
console.log(d);
console.log(e);