// 1. Создайте функцию multiply, которая принимает два числа, перемножает их и возвращает результат
// для каждого параметра задайте значение по умолчанию 1
function multiple(a = 1, b = 1) {
    return a * b;
}

console.log(multiple(3));
console.log(multiple(2, 5));

// 2. Напишите функцию createGreeting, которая возвращает новую функцию, результатом вызова которой будет вывод в консоль сообщения "Hello from closure"
function createGreeting() {
    return function () {
        console.log('Hello from closure');
    };
}

const foo = createGreeting();
foo();

// 3. Напишите функцию createFunction, которая принимает строку и возвращает новую функцию, результат вызова которой является вывод в консоль полученной ранее строки.
function createFunction(message) {
    return function () {
        console.log(message);
    };
}

const bar = createFunction('Hello world');
bar();

// 4. Напишите функцию createCountdown, которая принимает число и возвращает новую функцию. При вызове новой функции каждый раз отнимается 1 от изначально полученного числа и результат печатается в консоль.
function createCounter(num) {
    return function () {
        console.log(num);
        num--;
    };
}

const subtractOne = createCounter(7);
subtractOne();
subtractOne();
subtractOne();
subtractOne();
subtractOne();
