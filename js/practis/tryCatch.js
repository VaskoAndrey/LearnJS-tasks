// let json = '{"age ": 30}';

// try {
//    blabla();
//    let user = JSON.parse(json);
//    console.log(user.name);
//    if(!user.name) throw new SyntaxError('Данные неполны: нет имени')
// } catch(e) {
//    if(e.name == "SyntaxError"){
//       console.log("JSON Error: " + e.message);
//    } else {
//       throw e;
//    }
// }

let num = +prompt("Введите положительное целое число?", 35)
let diff, result;

function fib(n) {
   if(n < 0 || Math.trunc(n) != n) {
      throw new Error('Need positive integer');
   } 
   return n <= 1? n: fib(n-1) + fib(n-2);
} 

let start = new Date();

try {
   result = fib(num);
}  catch(e) {
   result = 0;
} finally {
   diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert( `Выполнение заняло ${diff}ms` );   