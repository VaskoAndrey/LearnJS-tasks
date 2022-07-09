// function Rabbit() {};

// Rabbit.prototype.jumps = true;

// const rabbit = new Rabbit();

// console.log(rabbit.constructor == Rabbit);

let user = {
   [Symbol.toStringTag]: "assUser"
 };
 
 alert( {}.toString.call(user) ); // [object User]