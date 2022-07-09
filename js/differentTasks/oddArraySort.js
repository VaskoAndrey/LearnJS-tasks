// Вам дан массив чисел. Ваша задача -  отсортировать по возрастанию нечетные числа, а четные оставить на своих местах.

// Примеры:
// [7, 1] 
//    [1, 7]

// [5, 8, 6, 3, 4]
//    [3, 8, 6, 5, 4]

// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
//    [1, 8, 3, 6, 5, 4, 7, 2, 9, 0].


function sortedOdd(arr){
   for(let i = 0; i < arr.length; i++){
      for(let j = i; j < arr.length; j++){
         if(arr[i]%2 != 0 && arr[j]%2 != 0) {
            if (arr[i] > arr[j]){
               let k = arr[i];
               arr[i]=arr[j];
               arr[j]=k;
            }
         }
      }
}
return arr;
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

sortedOdd(arr);

console.log(arr);