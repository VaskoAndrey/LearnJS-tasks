// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
let userName;
userName = prompt("Кто там","userName");

if (userName == "Админ") {
   let password = prompt("Пароль?","");
      if (password == "Я Главный") {
         alert("Ну Здраствуйте");
      } else if (password == null || password == "") {
         alert("Отменено");
      } else { alert("Неверный пароль"); }
   }
    else if (userName == null || userName == "") {
      alert("Отменено");
   } else { alert("Я вас не знаю"); }

