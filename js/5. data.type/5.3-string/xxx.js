// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {

   let lowerStr =str.toLowerCase();

   if(lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
      return alert(lowerStr.includes('viagra') || lowerStr.includes('xxx'));
    } else alert (lowerStr.includes('viagra') && lowerStr.includes('xxx'))
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");
checkSpam("i am starting this, xxx");