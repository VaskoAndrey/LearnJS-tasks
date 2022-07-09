// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow(){
   let now = new Date();
   console.log(now);
   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
   let secondsToTomorrow = (tomorrow - now)/ 1000;
   return secondsToTomorrow;
}  

let date = new Date();
console.log(Math.round(getSecondsToTomorrow()));
console.log(date.getMinutes());