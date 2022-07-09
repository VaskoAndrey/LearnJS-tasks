let arr = [3, 10 ,30 ,40, 32, 2, 1, 0 ,-20, 23, 32, 90, 312, 22, 5, 15];

let preMax;
let max = arr[0];

for(let i = 0; i < arr.length; i++) {
   preMax = arr[i];
   if(preMax > max) max = preMax;   
}

console.log(max);
console.log(preMax);