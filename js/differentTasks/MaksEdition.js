// Incrementer

// Создайте функцию, которая принимает массив чисел и прибавляет к каждому числу в массиве его позицию.

// Примеры:
//  [1, 2, 3]  -->  [2, 4, 6]
// [1+1, 2+2, 3+3]

//  [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]
// [4+1, 6+2, 9+3, 1+4, 3+5]

let arr = [4, 6, 9, 1, 3];
let result = arr.map((item, index =0)  => {
   index++;
   item +=index;
   return item;
});

console.log(result);