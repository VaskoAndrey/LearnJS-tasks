// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O

function unique(arr){
   let result = [];
   result = arr.filter((item, i , arr) => i == arr.lastIndexOf(item) );
   return result;
}

let strings = ["кришна", "кришна", "харе", "харе","харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings));