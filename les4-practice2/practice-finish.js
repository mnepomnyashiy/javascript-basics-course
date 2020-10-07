// 1. Создайте массив из пяти чисел и выведите его элементы
const randArr = [];
for (let i = 0; i < 5; i++) {
    randArr.push(Math.random());
    console.log(randArr[i]);
}

// 2. Дан массив horror. Создайте переменную fourthItem и сохраните в нее четвертое значение из массива. Выведите его на экран.
const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
const fourthItem = horror[3];
console.log(fourthItem);

// 3. Дан массив netflixShows. Добавьте в конец массива новое значение. Выведите обновленный массив на экран.
const netflixShows = ['Orange is the New Black', 'Black Mirror', 'Chewing Gum'];
netflixShows.push('Snatch');
console.log(netflixShows[netflixShows.length - 1]);

// 4. Дан массив synonyms. Обойдите его циклом и для каждого значения сфомируйте новую строку с приветствием, типа 'Have a fantastic day!' (где fantastic - элемент исходного массива). Сформированные строки добавьте в массив greetings. Выведите значения массива greetings на экран, обойдя все значения циклом.
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];
for (let i = 0; i < synonyms.length; i++) {
    greetings.push(`Hava a ${synonyms[i]} day!`);
}
for (let i = 0; i < greetings.length; i++) {
    console.log(greetings[i]);
}

// 5. Даны несколько массивов firstNames, lastNames, places. В каждом массиве конкретный индекс относится к одному человеку. Сформируйте новый массив bios, добавив в него приветственные строки, типа "My name is [firstName] [lastName] and I am from [place]". Выведите полученный результат.
const firstNames = ['Jon', 'Arya', 'Jamie'];
const lastNames = ['Snow', 'Stark', 'Lannister'];
const places = ['The Wall', 'Winterfell', 'Kings Landing'];

const bios = [];

for (let i = 0; i < firstNames.length; i++) {
    bios.push(
        `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}.`
    );
}
console.log(bios);

// 6. Дан массив increaseByTwo. Обойдите массив, увеличив каждое значение в два раза. Выведите полученный результат.
const increaseByTwo = [1, 2, 3, 4, 5];
for (let i = 0; i < increaseByTwo.length; i++) {
    increaseByTwo[i] *= 2;
}
console.log(increaseByTwo);
