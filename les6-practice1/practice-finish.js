// Создайте функцию с рекурсией printFiveTimes, которая принимает символ и печатает его пять раз.

let counter = 0;
const repeater = (symbol) => {
    counter++;
    if (counter === 5) {
        counter = 0;
        return symbol;
    }

    return symbol + repeater(symbol);
};

repeater('t');

// Создайте функцию с рекурсией getArrLenght, которая принимает массив и возвращает количество его элементов без использования свойства length.

const getArrLength = (arr) => {
    if (arr.pop() === undefined) return 0;

    return 1 + getArrLength(arr);
};
testArr = [1, 2, 3, 4, 5, 6];
getArrLength(testArr);

// Создайте функцию с рекурсией sumOfDigits, которая принимает число и возвращает сумму всех целых чисел от 1 до текущего числа
// Пример: console.log(sumOfDigits(3)); // 1+2+3 = 6
function sumOfDigits(num) {
    if (num === 1) return 1;
    return sumOfDigits(num - 1) + num;
}

sumOfDigits(3);

// Напишите функцию flow, которая принимает входное значение и массив функций. Функции должны последовательно выполняться -
// сначала первая с полученным аргументом, ее  результат выполнения - входной параметр для второй функции и так далее
function flow(input, fnArr) {
    if (fnArr.length === 0) return input;

    return flow(fnArr[0](input), fnArr.slice(1));
}

const multiplyBy2 = (num) => num * 2;
const add5 = (num) => num + 5;
const substract10 = (num) => num - 10;

console.log(flow(2, [multiplyBy2, add5, substract10]));
