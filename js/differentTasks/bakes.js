// Pete, the baker

const cakesR = {
   flour: 500,
   sugar: 200,
   eggs: 1
};

const engredients = {
   eggs: 5,
   sugar: 1200,
   flour: 1200,
   milk: 200
};

function cakes(recipe, avaiable) {
   let avaiableArr = [];
   let recipeEntries = Object.entries(recipe);
   let avaiableEntries = Object.entries(avaiable)

   console.log(recipeEntries.sort());
   console.log(avaiableEntries.sort());
   console.log(recipeEntries[1][0] === avaiableEntries[1][0]);
    

   for(let key of Object.keys(recipe)){
      if(!Object.keys(avaiable).includes(key)) return 0;
   }

   for(let i = 0; i < recipeEntries.length; i++) {
      for(let j = 0; j < avaiableEntries.length; j++){
         if(recipeEntries[i][0] == avaiableEntries[j][0]) {
            avaiableArr.push(avaiableEntries[j][1]/recipeEntries[i][1]);
         }
      }
   }

   avaiableArr = avaiableArr.map(item => Math.trunc(item));

   return Math.min(...avaiableArr);
}

console.log(cakes(cakesR, engredients));