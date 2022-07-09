// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

function count(obj) {
   return Object.keys(obj).length;
}

let user = {
   name: 'Markus',
   age: 35,
   isPerson: true,
};

console.log(count(user));