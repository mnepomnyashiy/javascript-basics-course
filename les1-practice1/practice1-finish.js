// - Вывести в консоль сообщение "Привет, мир"
console.log('Привет, мир');
// - Создать в файле константу firstName и сохранить в нее своё имя
let firstName = 'Mikhail';
// - Вывести в консоль сообщение, "Привет, меня зовут Имя"
console.log('Привет, меня зовут', firstName);
// console.log("Привет, меня зовут " + firstName)

// - Добавить константу lastName и сохранить в нее фамилию
const lastName = 'Nepomnyashiy';
// - Вывести в консоль сообщение "Привет, меня зовут Имя Фамилия"
console.log('Привет, меня зовут', firstName, lastName);
// console.log("Привет, меня зовут " + firstName + ' ' + lastName);

// - Попробуйте изменить имя и вывести на экран второе приветствие, с той же переменной.
// Подсказка: в консоли должна появиться ошибка, если переменная объявлена через директиву const, т.к. константам нельзя менять содержимое. Используйте директиву let, когда значение будет меняться

// - Замените константу на переменную и попробуйте еще раз.
firstName = 'Михаил Анатольевич';
console.log('Привет, меня зовут', firstName, lastName);
