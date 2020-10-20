// 1. Создайте функцию addY, которая принимает строку и возвращает новую строку с добавлением буквы "ы" на конце
const addY = (str) => str + 'ы';
console.log(addY('привет'));
// 2. Напишите функцию, которая находит кол-во цифр в числе (Примечание: без преобразования в строку).
const countNumber = (num) => {
    let count = 1;
    while (true) {
        num /= 10;
        if (num < 1) break;
        count++;
    }
    return count;
};

console.log('countNumber 13334:', countNumber(13334));

// 3. Напишите функцию, которая принимает четыре числа и возвращает их среднее арифметическое. Используйте значения по умолчанию, чтобы функцию можно было вызвать с меньшим количеством аргументов.
function calculationAverage(a = 0, b = 0, c = 0, d = 0) {
    let count = 1;
    b && count++;
    c && count++;
    d && count++;
    return (a + b + c + d) / count;
}
console.log('calculationAverage:', calculationAverage(4, 6, 1, 5));
console.log('calculationAverage:', calculationAverage(4, 6));
console.log('calculationAverage:', calculationAverage(4, 6, 5));

// 4. Создайте функцию addByX, которая принимает числовое значение (x) и возвращает новую функцию. Новая функция принимает
// число и возвращает его сумму с ранее полученным x.
// В результате создания функции addByX, должны работать следующие реализации
function addByX(x) {
    return function (y) {
        return x + y;
    };
}
const addByTwo = addByX(2);
console.log(addByTwo(1)); // должен вернуть 3
console.log(addByTwo(2)); // должен вернуть 4
console.log(addByTwo(3)); // должен вернуть 5

const addByThree = addByX(3);
console.log(addByThree(1)); // должен вернуть 4
console.log(addByThree(2)); // должен вернуть 5

const addByFour = addByX(4);
console.log(addByFour(4)); //должен вернуть 8
console.log(addByFour(10)); //должен вернуть 14
