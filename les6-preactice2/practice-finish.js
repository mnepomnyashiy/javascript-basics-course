// 1. Дан объект. Сделайте его деструктуризацию, получив все значения в отдельные переменные.
const person = {
    name: 'Ed',
    bestFriend: {
        name: 'Brad',
    },
    hooby: ['video games', 'code wars'],
    skills: [
        {
            language: 'English',
            level: 'A2',
        },
        {
            language: 'Russian',
            level: 'native',
        },
    ],
};

const {
    name,
    bestFriend: { name: friendName },
    hooby: [firstHobby, secondHobby],
    skills: [
        { language: firstLang, level: firstLangLevel },
        { language: secondLang, level: secondLangLevel },
    ],
} = person;

// 2. Задайте загадку пользователю и используя регулярное выражение проверьте отгадал он или нет.
const answer = prompt('The capital of Great Britain');
const isCorrecr = answer.match(/london/i);
alert(isCorrecr ? 'correct' : 'wrong');

// 3. Дана строка, замените в ней все вхождения слова backend на слово frontend. Используйте для этого регулярное выражение и строковый метод replace.
const str =
    'backend is the best in development, i like backend and want to be a backend developer';
let result = str.replace(/backend/g, 'frontend');
console.log(result);
