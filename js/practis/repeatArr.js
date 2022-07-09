// function camelize(str) {
//    return str
//    .split('-')
//    .map(
//       (item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)
//    )
//    .join('')
// }

// console.log(camelize("background-color"));

// const str = 'sdavl';
// str.split('');
// console.log(str.slice(1));

// function filterRange(arr, a, b) {
//    let result = [];

//    result = arr.filter(item => {
//       if(item >= a && item <= b) return item;
//    })
//    return result;
// }

// const arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// function reversSort(arr){
//    return arr.sort((a,b) => b-a)
// }

// console.log(reversSort([5, 2, 1, -10, 8]));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// function filter(arr){
//    let result;
//    return result = arr.map( item => item.name);
// }

// console.log(filter(users));

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => {
//    return {fullName: item.name + ' ' + item.surname, id: item.id }
// })

// console.log(usersMapped);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let result = arr.reduce((sum, user) => sum + user.age,0)/3;
console.log(result);2