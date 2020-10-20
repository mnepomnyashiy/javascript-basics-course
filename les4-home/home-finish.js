// 1. Дан массив timesTenIfOverFive. Обойдите массив, и числа, которые больше 8, увеличьте на 10. Выведите на экран обновленный массив.
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
for (let i = 0; i < timesTenIfOverFive.length; i++) {
    if (timesTenIfOverFive[i] > 8) {
        timesTenIfOverFive[i] += 10;
    }
}

console.log(timesTenIfOverFive);

// 2. Дан объект checkObj. Обойдите его циклом for..in, и числа, которые больше или равны двум, добавьте в массив objToArray. Выведите результат.
const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18,
};

const objToArray = [];

for (let check in checkObj) {
    if (checkObj[check] >= 2) {
        objToArray.push(checkObj[check]);
    }
}

console.log(objToArray);

// 3. Дан массив possibleIterable. Обойдите его циклом, разделяя каждое значение на три. Получившиеся результаты запишите
// в объект divByThree (ключом должен быть индекс элементв, значением - получившийся результат после деления).
const possibleIterable = [4, 3, 9, 6, 23];
let divByThree = {};

possibleIterable.forEach(
    (possible, index) => (divByThree[index] = possible / 3)
);
//или
// divByThree = Object.assign({}, possibleIterable.map((possible) => possible/3));

console.log(divByThree);

// 4. Дан объект sumMe. Обойдите его циклом, и посчитайте количество ключей, значением которых является число.
// Полученный результат сохраните в переменную total.
const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!',
};
let total = 0;

for (let key in sumMe) {
    if (typeof sumMe[key] === 'number') {
        total++;
    }
}

console.log('total:', total);

// 5. Дан массив чисел numbers. Создайте новый массив evenNumbers, сохранив в него только четные значения из исходного массива.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const eventNumbers = numbers.filter((number) => number % 2 === 0);

console.log(eventNumbers);

// 6. На основе массива numbers создайте новый массив, сохранив в него исходные значения массива numbers, умноженные на 10 (Прим. используйте метод map).
const numbersTen = numbers.map((number) => number * 10);
console.log(numbersTen);

// 7. Дан массив товаров goods. Используя метод map, создайте новый массив на основе goods, добавив каждому элементу, уникальный идентификатор id.
const goods = [
    { name: 'potato', price: 20 },
    { name: 'apple', price: 30 },
    { name: 'eggplant', price: 50 },
];

const goodsNew = goods.map((good, index) => {
    good.id = index;
    return good;
});
console.log(goodsNew);
