// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator () {
   this.read = function () {
      this.firstNum = +prompt('Введите первое число','1');
      this.secondNum = +prompt('Введите второе чилсо число','1');
   };
   this.sum = function () {
      let sum = this.firstNum + this.secondNum;
      return sum;
   };
   this.mul = function () {
      return this.firstNum*this.secondNum;
   };

}

let calculator = new Calculator ();
calculator.read ();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );