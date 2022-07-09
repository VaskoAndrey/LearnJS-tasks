const user = {
   name: 'Andrew',
   surName: 'Vasko',   
   get fullName() {
      return `${this.name} ${this.surName}`;
   },
   set fullName(value){
      [this.name, this. surName] = value.split(' ');
   }
}
console.log(user.name);  
console.log(user.surName); 
console.log(user.fullName);
user.fullName = 'Julia Zlobina';
console.log(user.fullName);        
console.log(user.name);        
console.log(user.surName); 

const newUser = {
   get name() {
      return this._name;
   },
   set name(value) {  
      if ( value.length < 4 ){
         console.log('Слишком мало букав...');
         return;
      }
      this._name = value;
   },  
}
newUser.name = 'Bobi';
console.log(newUser.name);


function User(name, birthday){
   this.name = name,
   this.birthday = birthday,

   Object.defineProperty(this, 'age', {
      get() {
         let todayYear = new Date().getFullYear();
         return todayYear - this.birthday.getFullYear();
      }
   });
}

let nate = new User('Nate', new Date(1999,1, 15));

console.log(nate.birthday);
console.log(nate.age);