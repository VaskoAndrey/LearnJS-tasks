// Создайте функцию zipWith, которая принимает функцию и два массива.
// Функция применяется к каждой паре значений из массивов и результат записывается в выходной массив.

// Примеры:
//  zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )
   // [1,10,100,1000]
//  zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )
   // [4,7,7,4,7,7]

   function zipWith(func, arr, secArr){
      let newArr = [];
      let result = [];
      newArr = arr.map(func);
      result = newArr.map(func)



   }