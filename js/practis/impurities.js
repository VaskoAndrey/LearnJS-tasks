let sayHiMixin = {
   sayHi() {
      console.log('Hi ' + this.name);
   },
   sayBye() {
      console.log('Bye, ' + this.name);
   },
};

class User {
   constructor(name) {
      this.name = name;
   }
}

Object.assign(User.prototype, sayHiMixin);
console.log(new User('Andrew').sayHi());

let eventMixin = {
   on(eventName, handler) {
      if(!this._handlers) this._eventHandlers = {};
      if(!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
      this._eventHandlers[eventName].push(handler);
   },
   
}