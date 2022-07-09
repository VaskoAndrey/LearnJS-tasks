// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

let list = {
   value: 1, 
   next: {
      value: 2,
      next: {
         value:3,
         next:{
            value:4,
            next: null,
         }
      }
   }  
};

// console.log(Object.entries(list));
// console.log(Object.values(list));
// console.log(Object.keys(list));

// function printList(list){
//    for(let value in list){
//       if(list.next != null){
//          console.log(list[value]);
//          if(list.next.next != null) 
//             console.log(list.next[value]);
//             if(list.next.next.next != null)
//                console.log(list.next.next[value]);
//       } else if(list.next.next != null) {
//          console.log(list[value]);
//       } else if(list.next.next != null){
//          console.log(list[value]);
//       } else if(list.next.next.next != null){
//          console.log(list[value]);
//       } else console.log(list[value]);
//    }
// }

function printList(list){
   
   if(list.next != null) printList(list.next);
   console.log(list.value);
}

printList(list);