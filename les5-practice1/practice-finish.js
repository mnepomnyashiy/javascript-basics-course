// 1. Создайте функцию createPhone, которая принимает название модели телефона и его стоимость и возвращает новый объект с полями name и price, куда записываются полученные данные. Создайте несколько объектов, вызывая функцию createPhone.
function createPhone(name, price) {
    const newPhone = {};

    newPhone.name = name;
    newPhone.price = price;

    return newPhone;
}

const phone1 = createPhone('Samsung A60', 600);
const phone2 = createPhone('Samsung A70', 700);

// 2. Создайте функцию-конструктор CreatePhone, которая принимает название модели телефона и его стоимость и возвращает новый объект с полями name и price, куда записываются полученные данные. Создайте несколько объектов, используя конструктор CreatePhone.
function CreatePhone(name, price) {
    this.name = name;
    this.price = price;
}

const phone3 = new CreatePhone('Huawei P20', 800);
const phone4 = new CreatePhone('Huawei P30', 900);

// 3. Добавьте в прототип CreatePhone метод ring (который печатает в консоль сообщение с названием модели). Создайте несколько объектов через CreatePhone. Вызовите у них метод ring. Посмотрите в консоли какие ключи есть у созданных объектов.
CreatePhone.prototype.ring = function () {
    console.log(this.name);
};
const phone5 = new CreatePhone('Huawei P20', 800);
const phone6 = new CreatePhone('Huawei P30', 900);

// 4. Для созданных объектов из метода 4 воспользуйтесь методом hasOwnProperty, чтобы проверить является ли метод ring их собственным свойством. Затем используйте оператор in, чтобы проверить есть ли данное свойство у объектов.
console.log(phone5.hasOwnProperty('ring'));
console.log(phone5.hasOwnProperty('name'));
console.log('name' in phone5);
console.log('ring' in phone5);
