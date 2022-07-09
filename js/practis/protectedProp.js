class CoffeMachine {

   _waterAmount = 0;

   set waterAmount(value) {
      if(value < 0) console.log('Error, negative amount of water');
      this._waterAmount = value;
   }
   get waterAmount() {
      return this._waterAmount;
   }

   constructor(power) {
      this._power = power;
      console.log(`Created coffeMachine, whit power: ${this.power}`);
   }

   get power() {
      return this._power;
   }
}

const coffeMAchine = new CoffeMachine(3000);
coffeMAchine.waterAmount = -1;
coffeMAchine.power = 10
