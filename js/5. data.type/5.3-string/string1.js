// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

function ucFirst (str) {

   let secondStr = str.substr(1,str.length);
   let newStr;

   newStr = str[0].toUpperCase() + secondStr;
   return newStr;
}

alert(ucFirst('петя'));
