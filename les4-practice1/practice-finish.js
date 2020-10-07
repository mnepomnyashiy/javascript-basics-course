// 1. Создайте объект с двумя простыми свойствами и функциональным свойством (методом), выводящим эти свойства. Вызовите метод объекта.
const obj1 = {
    name: 'Anna',
    age: 30,
    print() {
        console.log(obj1.name, obj1.age);
    },
};
obj1.print();

// 2. Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением Vasya.
// Добавьте свойство surname со значением Petrov.
// Измените значение свойства name на Ivan.
// Удалите свойство name из объекта.
const user = {};
user.name = 'Vasya';
user.surename = 'Petrov';
user.name = 'Ivan';
delete name;

// 3. Создайте объект с информацией о стоимости покупки (ключ - название продукта, значение - его цена). Создайте функцию, которая подсчитывает сумму всех покупок.
const basket = {
    paper: 100,
    beer: 350,
    fish: 500,
    bread: 55,
};
function countBasket(basket) {
    let totalPrice = 0;
    for (let item in basket) {
        totalPrice += item;
    }
    return totalPrice;
}
console.log('total price: ', countBasket(basket));

// 4. Скопируйте объект из предыдущего задания (без ссылки). Измените стоимость одного из его товаров. Проверьте, чтобы изменения не повлияли на исходный объект.
const secondBasket = Object.assign({}, basket);
secondBasket.beer = 550;
console.log(basket.beer);

// 5. Создайте функцию hasNameProp, которая принимает объект и проверяет есть ли у него свойство 'name'. Возвращает true - когда свойство есть, false - когда свойства нет. Создайте несколько объектов с наличием ключа name и без него, проверьте корректность работы функции
function hasNameProp(obj) {
    return 'name' in obj;
}
console.log(hasNameProp(user));
console.log(hasNameProp(obj1));

// 6. Создайте функцию hasProp, которая принимает на вход объект и строку. Функция возварает true - когда в объекте есть свойство по имени переданной строки, false - в противном случае.
// Пример:
// const myObj = {name: 'Mikhail', location: 'Moscow'}
// console.log(hasProp(myObj, 'location')); // должен вывести true
function hasProp(obj, prop) {
    return prop in obj;
}
console.log(hasProp(obj1, 'name'));
console.log(hasProp(obj1, 'age'));
console.log(hasProp(obj1, 'print'));
console.log(hasProp(obj1, 'pint'));
