function showX(x){
   console.log(x);
}

function debounce(f, ms) {
   let start = Date.now();
   return function(){
      let result = f(arguments[0]);
      if ((Date.now() - start) < ms ) {
         return result;
      } else return;
   }
}

let f = debounce(showX,1000 );

f(1);
f(4);
f(1000);