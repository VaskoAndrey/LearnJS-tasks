function sayHi() {
   alert( this.name );
 }
 sayHi.test = 5;
 
 let bound = sayHi.bind({
   name: "Вася"
 });
 bound.test = 10;
 
 alert( bound.test ); // что выведет? почему?