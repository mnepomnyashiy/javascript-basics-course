/* СТРОКИ И СПЕЦСИМВОЛЫ */
// 1. Создайте константу path и сохраните в нее строку со значением C:\Users\Win\Files\javascript.js
// Выведите значение переменной path на экран и убедитесь, что полученное сообщение соответствует тому, что ожидается
const path = 'C:\\Users\\Win\\Files\\javascript.js';
console.log(path);
// 2. Дана константа sheSaid и ее вывод. Как, не меняя кавычек, добиться корректного вывода константы в консоль
// const sheSaid = "She said, "Hello""
// console.log(sheSaid);
const sheSaid = 'She said, "Hello"';
console.log(sheSaid);
// 3. Дана константа heSaid и ее вывод. Как, не меняя кавычек, добиться корректного вывода константы в консоль
// const heSaid = 'Hi, I'm Mark';
const heSaid = "Hi, I'm Mark";
console.log(heSaid);
/* КОНКАТЕНАЦИЯ СТРОК */
// Даны три строковые переменные. Объедините их в одну строку и сохраните результат в константе welcomeStatement. Выведите константу на экран.
const first = 'Welcome';
const second = 'to the';
const third = 'jungle!';

// Добавьте код сюда
const welcomeStatement = first + ' ' + second + ' ' + third;
// После добавления кода раскоментируйте следующую строчку
console.log(welcomeStatement);

/* ШАБЛОННЫЕ СТРОКИ */
// Объявите две переменные x, y и сохраните в них числа 5 и 6. Объявите переменную result и сохрените в ней значение суммы x и y.
// Выведите в консоль сообщение типа "Сумма чисел <x> и <y> равняется <retsult>". Используйте корректный синтаксис, чтобы на места переменных добавились конкретные значения.
var x = 5;
var y = 6;
var result = x + y;

console.log(`Сумма чисел ${x} и ${y} равняется ${result}`);
/* МЕТОДЫ И СВОЙСТВА СТРОК */
// Дана строковая переменная с конкретным значением.
const text = 'Hello world';
// 1. Выведите на экран сообщение о количестве символов в строке
console.log('Length = ' + text.length);
// 2. Выведите значение переменной, преобразовав все символы в большие буквы
console.log(text.toUpperCase());
// 3. Выведите значение переменной, преобразовав все символы в маленькие буквы
console.log(text.toLowerCase());
// 4. Выведите на экран только первый символ строки
console.log(text[0]);
// 5. Выведите на экран третий символ строки
console.log(text[2]);
// 6. Выведите на экран последний символ строки
console.log(text[text.length - 1]);

/* МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ */
// 1. Объявите константу fiveSquared и назначьте через математическую операцию ей значение пять в квадрате
const fiveSquared = 5 ** 2;
// 2. Объявите константу eightCubed и назначьте ей значение 8 в кубе
const eightCubed = 8 ** 3;
// 3. Объявите константу sevenToTheSixth и назначьте ей значение 7 в 6-й степени
const sevenToTheSixth = 7 ** 6;
// 4. Объявите константу eightyThreeModSix и назначьте ей значение остатка от деления 83 на 6
const eightyThreeModSix = 83 % 6;
// 5. Объявите константу sixtyModNine и назначьте ей значение остатка от деления 60 на 9
const sixtyModNine = 60 % 9;

/* ЛОГИЧЕСКИЕ ОПЕРАЦИИ */
// 1. Даны константы small и large. Используйте оператор < для их сравнения и сохраните результат в константе isSmaller
const small = 2;
const large = 10;
const isSmaller = small < large;
// 2. Даны константы string и num. Используйте оператор == для их сравнения и сохраните результат в переменную isLooselyEqual.
// Затем используйте для сравнения оператор === и сохраните результат в константе isStrictlyEqual. Выведите полученные значения в консоль.
const string = '18';
const num = 18;
const isLooselyEqual = string == num;
const isStrictlyEqual = string === num;

console.log(isLooselyEqual);
console.log(isStrictlyEqual);

// 3. Сравните константы isTrue и isFalse оператором !== и сохраните результат в переменную isTrueNotFalse
const isTrue = true;
const isFalse = false;
const isTrueNotFalse = isTrue !== isFalse;
/* ПРИВЕДЕНИЕ ТИПОВ */
// 1. Раскоментируйте код ниже и посмотрите, что выйдет.
// Подумайте, почему результат выражений получился именно таким.

console.log(10 + 5);
console.log('10' + 5); //происходит преобразование обоих типов к строке. по сути получается выражение '10' + '5'
console.log(5 + '10'); //аналогичная ситуация. '5' + '10'

// 2. Дан набор переменных
const favMovie = 'Star Wars: Episod IV';
const timesSeen = 732;
const goingToWatchItAgain = true;
// Задание:
// - объявите переменную favMovieType, сохраните в ней тип значения переменной favMovie, используя оператор typeof
const favMovieType = typeof favMovie;
// - объявите переменную timesSeenType, сохраните в ней тип значения переменной timesSeen, используя оператор typeof
const timesSeenType = typeof timesSeen;
// - объявите переменную goingToWatchItAgainType, сохраните в ней тип значения переменной goingToWatchItAgain
const goingToWatchItAgainType = typeof goingToWatchItAgain;
// выведите значения новых переменных в консоль
console.log(favMovieType);
console.log(timesSeenType);
console.log(goingToWatchItAgainType);
