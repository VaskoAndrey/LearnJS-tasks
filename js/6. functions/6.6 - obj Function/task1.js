// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием,
//  так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter(){
   function counter(){
      return counter.count++;
   }
   counter.count = 0;
   counter.set = function(value){
      return counter.count = value;
   }
   counter.decrease = function(){
      return counter.count--;
   }
   return counter;
}
let counter = makeCounter();


console.log(counter());
console.log(counter.set(20));
counter.decrease();
console.log(counter());
