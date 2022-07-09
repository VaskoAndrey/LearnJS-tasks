// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};

user.name = 'John';
user.surname = 'Smith';

alert(user.name);

user['name'] = 'Pete';
alert(user.name);

delete user.name;
alert(user.name === undefined);