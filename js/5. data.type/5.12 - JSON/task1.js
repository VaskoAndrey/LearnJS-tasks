// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

let user = {
   name: 'Василий Пупкин',
   age: 22,
};
let user2 = JSON.parse(JSON.stringify(user));
user2.salary = 670;
console.log(user);
console.log(user2);

