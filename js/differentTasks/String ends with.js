
function solution(str, ending){
   if(str.indexOf(ending,str.length-ending.length) != -1){
     return true;
   } else return false;
   
 };

 console.log(solution('abc', 'bc'));


 function solution(str){
   let strA = str.split('');
   let result = [];

  if(strA.length % 2 === 0) {
    for(let i =0; i < strA.length; i++){
      result.push(strA[i] + strA[i+1]);
      i++;
      }
    return result;
    }

  if(strA.length % 2 !== 0) {
    for(let i =0; i < strA.length; i++){
      if(strA[i] === strA[strA.length - 1]){
        result.push(strA[i] + '_');
        return result;
        }
      result.push(strA[i]+strA[i+1]);
      i++;
      }
    return result;
    }
}