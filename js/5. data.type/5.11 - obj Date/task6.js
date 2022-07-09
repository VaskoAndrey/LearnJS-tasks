// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday(){
   const date = new Date();
   console.log(date);
   return date.getHours()*60*60 + date.getMinutes()*60 + date.getSeconds();

}
let now = new Date();
const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(date);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(getSecondsToday());
console.log(date);
