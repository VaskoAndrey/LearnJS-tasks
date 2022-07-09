// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратн

function camelise(str) {

   let arr = str.split('');

   for (let i=0; i < arr.length; i++) {
      if ( arr[i] == "-" ) {
         arr.splice(i,1);
         arr[i] = arr[i].toUpperCase();
      }
   }

   str = arr.join('');
   return str;
}
console.log(camelise("background-color"));
console.log(camelise("-webkit-transition"));
