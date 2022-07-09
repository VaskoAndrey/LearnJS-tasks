class Clock {
   
   constructor({template}) {
      this.template = template;
   }

   render() {

      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) '0' + hours;

      let minuts = date.getMinutes();
      if (minuts < 10) '0' + minuts;
       
      let sec = date.getSeconds();
      if (sec < 10) '0' + sec;
      
      let output = this.template
         .replace('h', hours)
         .replace('m', minuts)
         .replace('s', sec);
      
      console.log(output);
   }

   stop() {
      clearInterval(this.timer);
   }
   start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
   }
}

const clock = new Clock({template: 'h:m:s'})


class ExtendClock extends Clock {

   constructor({template}, precision = 1000) {
      super({template});
      this.precision = precision;
   }

   start() {
      super.render();
      this.timer = setInterval(() => super.render(), this.precision);
   }
}

const extendedClock = new ExtendClock({template: 'h:m:s'},4000);
extendedClock.start();