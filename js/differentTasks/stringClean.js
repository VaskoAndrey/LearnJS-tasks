// String cleaning

function stringCleaning(s) {
   let arrStr = s.split('');
   const result = arrStr.filter(item => item == ' ' ? true: false || isNaN(+item)).join('');
   
   return result;
   }
   
   console.log(stringCleaning('! !'));
   // console.log('test'.split(''));
   // console.log('test'.split('').join(''));
   // console.log(+'!');
   // console.log(+'k' !== 'number');