// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

//    setInterval()
// function printNumbers(from, to){
//    setInterval(function(){
//       if(from <= to) console.log(from);
//       from++;
//    }, 1000);
// }

//    rec setTimeout()

function printNumbers(from, to){
  setTimeout(function run(){
     if (from <= to) console.log(from);
     from++;
     setTimeout(run, 1000);
  }, 1000)
  
}

console.log(printNumbers(1, 5));