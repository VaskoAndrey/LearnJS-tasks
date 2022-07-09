// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.


// function Calculator () {

//    this.calculate = function(str) {
//       this.result;
//       this.arr = str.split(' ');
//       console.log(this.arr)   
//       if(this.arr[1] == '-') {
//         result = +this.arr[0] - +this.arr[2];
//         return result;
//       } else { 
//          result = +this.arr[0] + +this.arr[2];
//          return result;
//       }
//    };
//    this.addMethod = function (name,func) {


//    };


// }

// let calc = new Calculator();

// console.log(calc.calculate('41 - 6'));
// console.log(calc.calculate('4 + 6'));

// console.log(+'*');


function Calculator() {

   this.methods = {
      '+' : (a,b) => a + b,
      '-' : (a,b) => a - b,
   };
   this.calculate = function(str){

      let op,a,b;
      let split = str.split(' ');
      a = +split[0];
      op = split[1];
      b = +split[2];

      if(isNaN(a) || isNaN(b) || !this.methods[op]){
         return NaN;
      }
      return this.methods[op](a,b);
   };
   this.addMethod = function(operator, func) {
      this.methods[operator]= func;
   };

}

let powerCalc = new Calculator();

console.log(powerCalc.calculate('41 - 6'));
console.log(powerCalc.calculate('4 + 6'));

powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8