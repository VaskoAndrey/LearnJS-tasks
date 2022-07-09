
// integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
// values_list = [1, 3]
// Test.assertSimilar(l.remove_(integer_list, values_list), [2, 2, 4])

function remove(integerArr, valueArr) {
   
   return integerArr.filter(val => !valueList.includes(val));
}

const integerList =  [5,2,2,10,2,2,8,10] ;
const valueList = [2,7,4];

console.log(remove(integerList, valueList));


// function scramble (str1, str2) {
//    let str1Arr = str1.split('');
//    let str2Arr = str2.split('');
//    let res = [];
   
//    for(let key of str2Arr) {
//       if(str1Arr.includes(key)) res.push(key);
//    }
//    console.log(str2Arr.length);

//    res.sort();
//    console.log(res);
//    str2Arr.sort();
//    console.log(str2Arr);

//    return res === str2Arr ? true: false;
// }