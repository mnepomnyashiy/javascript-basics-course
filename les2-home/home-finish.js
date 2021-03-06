/* Условия */
// 1. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//   1, если значение больше нуля,
//   -1, если значение меньше нуля,
//   0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

const userNumber = +prompt('Введите число');
if (userNumber > 0) {
    alert(1);
} else if (userNumber < 0) {
    alert(-1);
} else {
    alert(0);
}

// 2. Перепишите if-конструкцию с использованием условного оператора '?':
const a = 1;
const b = 2;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

result = a + b < 4 ? 'Мало' : 'Много';
console.log(result);

// 2.1 Использование метода str.includes(). Задать загадку через alert, проверить введенный ответ на вхождение
// правильного ответа (предварительно переведя ответ в нижний регистр). В зависимости от правильного ответа, выдать
// alert'ом - правильно или нет.

const riddle = prompt('Висит груша - нельзя скушать').toLowerCase();
if (riddle.includes('лампочка')) alert('Отгадал');
else alert('Повезет в следующий раз');

// 3. Перепишите код ниже с использованием одной конструкции switch:
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    default:
        alert('Вы ввели число 2, а может и 3');
}

/* Циклы */
// 1. При помощи цикла while выведите чётные числа от 2 до 10. (либо до запрошеного у пользователя числа)
let i = 1;
const finalNum = 10;
while (i <= finalNum) {
    if (i % 2 === 0) console.log(i);

    i++;
}

// 2. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
let num;
while (true) {
    num = +prompt('Введите число больше 100, или цикл не закончится никогда');
    if (num > 100) {
        alert('Ну наконец то');
        break;
    }

    alert('Нужно ввести число больше 100');
}

// 3. Выведите квадраты всех чисел от 1 до 20 в цикле for

for (let j = 1; j <= 20; j++) {
    console.log(`${j} в квадрате равно ${j ** 2}`);
}
// 4. Выведите в консоли "ёлку":
// *
// **
// ***
// ****
// *****
// ******

let star = '*';
for (let t = 0; t < 6; t++) {
    console.log(star);
    star += '*';
}

// 5. Создайте бесконечный цикл с проверкой правильности ввода числа пользователем. Подсчитать кол-во некорректных вводов пользователем.

let userNum;
let incorrectInput = 0;
while (true) {
    userNum = +prompt('Введите число');
    if (userNum) {
        alert('Вы справились');
        break;
    }
    incorrectInput++;
    alert('Нужно ввести число');
}
alert(`Неправильных попыток ${incorrectInput} шт.`);

// 6. Запросить у пользователя строку и вывести ее в консоль побуквенно на разных строчках, исключая пробелы.

const str = prompt('Введите строку');
for (let d = 0; d < str.length; d++) {
    if (str[d] === ' ') {
        continue;
    }
    console.log(str[b]);
}
