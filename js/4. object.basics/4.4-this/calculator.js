// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
   read () {
      this.firstNum = +prompt('Введите первое число','1');
      this.secondNum = +prompt('Введите второе чилсо число','1');

   },
   sum : function () {
      let sum = this.firstNum + this.secondNum;
      return sum;
   },
   mul () {
      let mul = this.firstNum*this.secondNum;
      return mul;
   }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );