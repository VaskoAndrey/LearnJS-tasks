// Следующий код создаёт массив из стрелков (shooters).

function makeArmy(){
   let shooters = [];

   let i = 0;
   while (i < 10){
      let j = i;
      let shooter = function(){
      console.log(j);
      };
      shooters.push(shooter);
      i++;
      
   }

   return shooters;
}

let arm = makeArmy();

console.log(arm[0]());
console.log(arm[5]());
console.log(arm[9]());

