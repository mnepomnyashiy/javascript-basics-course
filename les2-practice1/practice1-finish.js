// 0. Используя оператор prompt, запросите у пользователя ввод числа.
// В ответ сообщите является ли число четным или нечетным.
const num = +propmt('Введите число');
const numType = num % 2 === 0 ? 'четное число' : 'нечетное число';
alert(`Вы ввели ${numType}`);

// 1. Загадайте загадку и сохраните ответ в переменной rightAnswer
// Используя оператор prompt, задайте загадку пользователю и сохраните ответ
// Проверьте ответ на правильность и выведите сообщения "Правильно" или "Неправильно" по ситуации
// Для проверки используйте конструкцию if..else
const rightAnswer = 'Москва';
const guessAnswer = prompt('Столица России?');
if (guessAnswer.toLocaleUpperCase() === rightAnswer.toLocaleUpperCase()) {
    alert('Правильно');
} else {
    alert('Неправильно');
}

// 2. Перепишите предыдущее упражнение, используя тернарный оператор
const isAnswerCorrect =
    guessAnswer.toLocaleUpperCase() === rightAnswer.toLocaleUpperCase()
        ? 'Правильно'
        : 'Неправильно';
alert(isAnswerCorrect);
// 3. Перепишите предыдущее упражнение, используя оператор switch
switch (guessAnswer.toUpperCase()) {
    case rightAnswer.toUpperCase(): {
        alert('Правильно');
        break;
    }
    case 'САНКТ-ПЕТЕРБУРГ': {
        alert('Это было давно');
        break;
    }
    default: {
        alert('Неправильно');
    }
}
// 4. Используя оператор prompt, запросите у пользователя ввод любых значений
// В ответ сообщите пользователю, какой тип данных он использовал
// (Подсказка: prompt всегда возвращает строку, поэтому нужны проверки с преобразованием типов)
const userInput = propmt('Введите что-нибудь');

if (typeof +userInput === 'number') {
    alert('Вы ввели число');
} else if (userInput == 'true' || userInput == 'false') {
    alert('Вы ввели булевое значение');
} else {
    alert('Вы ввели строку');
}

// 5. Создайте два случайных числа в диапазоне от 1 до 10 (сохраните в переменные x, y).
// Выведите их в консоль, а также сообщение о том какое значение больше.
const x = Math.ceil(Math.random() * 10);
const y = Math.ceil(Math.random() * 10);

console.log(`x=${x}, y=${y}. x - ${x > y ? 'больше' : 'меньше'}`);
