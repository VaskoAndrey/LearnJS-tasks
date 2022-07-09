const arr = [1, 2, 23, 12,1000 ,03, 23, 54, 76, 32, 435, 1, 436, 5, 800, 900];
let max = arr[0];
let min = arr[0];
let preMax = arr[arr.length - 2];
let x;

for(let i = 1; i < arr.length; i++) {
   if(max < arr[i]) {
      max = arr[i]
   }
   if(min > arr[i])  {
      min = arr[i];
   }
}

for(let i = 1; i < arr.length; i++) {
   if(preMax < arr[i]) {
      x = preMax;
      preMax = arr[i];
   }
   
}



console.log(max);
console.log(min);
console.log(x);
console.log(new Date().toDateString());
console.log(new Date());