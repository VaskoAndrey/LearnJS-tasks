let json = `{"name": "John", "age": 30}`;

class ValidationError extends Error {
   constructor(message) {
      super(message);
      this.name = 'ValidationError';
   }
}

// function test() {
//    throw new ValidationError('Oops!');
// }

// try {
//    test();
// } catch(err) {
//    console.log(err.name);
//    console.log(err.message);
//    console.log(err.stack);
// }

function readUser(json) {
   let user = JSON.parse(json);

   if(!user.name) throw new ValidationError('Valid name!');
   if(!user.age) throw new ValidationError('Valid age!');
   return user;
}

try {
   let user = readUser('{ "age": 25 , "name": "Pepo"}');
   bla();
   kekke();
   HTMLOptGroupElement;
} catch(err) {
   if(err instanceof ValidationError) {
      console.log("Некорректные данные: " + err.message);
   } else if(err instanceof SyntaxError) {
      console.log("JSON Ошибка Синтаксиса: " + err.message);}
    else {
      throw err;
   }
}
