class User {

   constructor(name){
      this.name = name;
   }

   sayHi(){
      console.log(this.name);
   }
}

const user = new User('Hi, Andrew');
user.sayHi();

const BUser = class MyBUser{
   sayHi(){
      console.log(MyBUser);
   }
};

new BUser().sayHi();

class SetUser {

   constructor(name){
      this.name = name; 
   }
   
   get name(){
      return this._name;
   }

   set name(value){

      if( value.length < 4 ){
         return console.log('Too short name!');
      }
      return this._name = value;
   }
}

const setUser = new SetUser('Pet');
console.log(setUser.name);