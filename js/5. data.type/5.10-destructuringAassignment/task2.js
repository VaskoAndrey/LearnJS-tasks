// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250,
   "Anrew": 410,
   "Stepan": 425,
};

function topSalaries(salaries) {
   if(salaries == undefined) return null;
   let name = '';
   let max = 0;
   for(let [key, value] of Object.entries(salaries)) {
      
      if(max < value){
         [name, max] = [key, value];
      }
   }
   return name;
}


console.log(topSalaries(salaries));