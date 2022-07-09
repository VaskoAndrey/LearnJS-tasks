function scramble (str1, str2) {
   let str1Arr = str1.split('');
   let str2Arr = str2.split('');
   
   for(let key of str2Arr){
      if(!str1Arr.includes(key)) return false;
   }
   return true;
}

console.log(scramble('scriptjavx','javascript'));