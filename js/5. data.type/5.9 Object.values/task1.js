// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

let salaries = {
   'Pepe': 400,
   'Kate': 40,
   'john': 680,
};

function sumSalaries(salaries) {
   let sum = 0;
   if(Object.keys(salaries).length == 0){
      return 0;
   } else {
      for (let value of Object.values(salaries)){
         sum += value; 
      }
      return sum;
   }
}

console.log(sumSalaries(salaries));