// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

//  вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// function formatDate(date){
//    switch (date){
//       case (date.getMilliseconds() >= 0 & date.getMilliseconds() <= 999):
//          console.log('прямо сейчас');
//          break;
//       case (date.getSeconds() >= 1000 & date.getSeconds() <= (60000 - 1)):
//          console.log(`${date.getSeconds()*1000} + сек. назад`);
//          break;
//       case (date.getMinutes() >= 60000 & date.getMinutes() <= 60*60*1000 - 1):
//          console.log(`${date.getMinutes()*1000} + мин. назад`);
//          break;
//       default:
//          console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear() - 2000} ${date.getHours()}:${date.getMinutes()}`)
//    }
// }

function formatDate(date){
   let diff = new Date() - date;
   let sec = Math.floor(diff/1000);
   
   if(diff < 1000){
      console.log('прямо сейчас');
   }
   
   if(sec < 60){
      return sec + " сек. назад"
   }
   let min = Math.floor(diff/60000);
   if(min < 60){
      console.log(`${min} + мин. назад`);
   } else {
      console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear() - 2000} ${date.getHours()}:${date.getMinutes()}`);
   }
}
console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));


console.log();