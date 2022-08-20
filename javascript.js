// const value = 1;

// console.log(value);

// if (true) {
//     const value = 2;
//     console.log(value);
// }

// console.log(value);

// const profile = {
//     age: 45,
//     name: 'Tala',
// };

// console.log(profile);

// profile['gender'] = 'female'

// console.log(profile);

// function square(length) {
//     return length * length;
// }

// const area = square(3);
// console.log(area);

// const caluculatedArea = function (length) {
//     return length * length;
// };
// console.log(caluculatedArea(10));

// const array = ['Taka', 30];
// const [nickname, age] = array;

// console.log(nickname);
// console.log(age);

// const square = (length) => {
//     return length * length;
// };
// console.log(square(4));

// function foo() {
//     return true;
// }
// console.log(foo());
// console.log(foo);

// import profile from './profile.js';

// console.log(profile);

// import square from './utils.js';
// console.log(square(5));

// const nickname = 'Taka';
// const age = 30;

// console.log(nickname);
// console.log(age);

// "I am Taka, 30 yers old."

// console.log('I am' + nickname + ', ' + age + ' years old.');

// console.log(`I am ${nickname}, ${age} years old.`);

// backquote, backtick

// const array = ['Taka', 30, 'EggPlants', 'Oranges'];
// const [nickname, age, ...rest] = array;

// console.log(nickname);
// console.log(age);
// console.log(rest)

// rest 残要素
// ...;　残余演算子

// const profile = { nickname: 'Taka', age: 30};
// const { nickname, ...rest } = profile;
// console.log(nickname);
// console.log(rest)


// const printObject = ({nickname}) => {
//     console.log(`nickname; ${nickname}`);
// };

// printObject(profile);

// const numbers = [1,2,3];
// const integers = [5,6,7];

// console.log(numbers.concat(integers));

// console.log([...numbers, ...integers]);

// const profile1 = { nickname: 'Taka' };
// const profile2= { age: 30 };

// const profile = Object.assign({}, profile1, profile2);
// const profile = {...profile1, ...profile2};

// console.log(profile);
// console.log(profile1);
// console.log(profile2);

// const numbers = [5,4,3];
// const square = (number) => number * number;
// const square = (number) => {
//     return number * number
// };

// const squares = numbers.map((number) => {
//     return number * number;
// });

// const squares = numbers.map(square);
// console.log(squares);

// const a = 1;
// const b = 2;

// console.log(a + b);

// const request = new XMLHttpRequest();
// console.log(1);
// request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
// console.log(2);
// request.onload = function () {
//     console.log(3);
//     // requset.statusのチェックをここに移植する。
//     if (request.status === 200) {
//         // console.log(request.response);
//     }
// };
// const before = Date.now();
// request.send(null);
// const after = Date.now();
// const ms =after - before;
// console.log(`${ms} ms`);

// console.log(4);

const promise = new Promise((resolve, reject) => {
    //時間のかかる処理
    //resolve
    setTimeout(() => {
        console.log('１秒たったよ')
        resolve('some value');
    }, 1000);
});

console.log(promise);

const isClosure = true;

promise.then(() => {
    console.log('I am called by then method.');
    console.log(promise);
});

console.log('start');

// setTimeout(() => {
//     console.log('１秒たったよ');
//     setTimeout(() => {
//         console.log('１秒たったよ');
//     }, 1000);
//         setTimeout(() => {
//         console.log('１秒たったよ');
//         setTimeout(() => {
//             console.log('１秒たったよ');
//         }, 1000);
//     }, 1000);
// }, 1000);

console.log('end');










