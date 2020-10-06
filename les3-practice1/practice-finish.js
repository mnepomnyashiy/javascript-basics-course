// 1. Напишите функцию addTen, которая принимает число, прибавляет к нему 10 и возвращает полученный результат
function addTen(num) {
    return num + 10;
}

// 2. Напишите функцию isOdd, которая принимает число и проверяет его на чет/нечет (возвращеает true для нечетного числа, false для четного)
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Напишите функцию getSquare для нахождения площади прямоугольника со сторонами width и height
function getSquare(width, height) {
    return width * height;
}

// 4. Напишите функцию kmToMiles, которая принимает значение в километрах, а возвращает преобразованное значение в милях
function kmToMiles(km) {
    // return km * 1.6;
}

// 5. Напишите функцию sayHello, которая принимает имя и печатает в консоль приветствие с этим именем. Например, "Пример, Мэри!"
function sayHello(name) {
    console.log(`Hello ${name}!`);
}

// 6. Напишите функцию sign, которая принимает аргумент t и возвращает 1, если число t - положительное, и -1, если t - отрицательное. В противном случае - 0
function sign(t) {
    if (t > 0) return 1;

    return t === 0 ? 0 : -1;
}

// 7. Написать функцию rand(), которая возвращает случайное целое число в указанном диапазоне
function rand(min, max) {
    // return Math.round(Math.random() * (max + min) - min);
}

// 8. Напишите функцию countDigits, которая находит кол-во цифр в числе.
function countDigits(num) {
    return String(num).length;
}
