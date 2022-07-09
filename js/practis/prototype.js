let rabbit = {
   jump: true,
}

const animal = {
   eat: true,
}

rabbit.__proto__ = animal;

console.log(rabbit.eat);

let user = {
   name: 'Andrew',
   surName: 'Vasko',
   get fullName(){
      return this.name + " " + this.surName;
   },
   set fullName(value){
      [this.name, this.surName] = value.split(' ');
   } 
}

const admin = {
   __proto__: user,
   isAdmin: true,
}

// admin.fullName = 'Andrew Admin';
console.log(admin);
console.log(admin.fullName);
console.log(admin.name);
console.log(admin.surName);
////////////////////////////////////////////////////////////
const animall = {
   walk() {
      if (!this.isSleeping) {
         console.log("I Walk ");
         return;
      }
      console.log(' I am sleeping!');
   },
   sleep() {
      this.isSleeping = true;
   }
}

const rabbitt = {
   name: 'Dark Rabbit',
   __proto__: animall,
}

// rabbitt.sleep();
rabbitt.walk();
console.log(rabbitt)
