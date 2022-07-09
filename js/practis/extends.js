class Animal {

   constructor(name){
      this.speed = 0;
      this.name = name;
   }

   run(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed}`);
   }
   stop() {
      console.log(`${this.name} стоит.`);
   }
}

class Rabbit extends Animal {

   constructor(name, earLength = 'undefinde length') {
      super(name);
      this.earLength = earLength;
   }

   hide() {
      console.log(`${this.name} прячется.`);
   }
   stop() {
      super.stop();
      this.hide();
   }
}

const rabbit = new Rabbit('White rabbit');

rabbit.run(new Date().getHours());
rabbit.stop();
console.log(rabbit.earLength);