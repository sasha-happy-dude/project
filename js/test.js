// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     let asterik = '',
//         space = '';
//     for (let j = 0; j < lines - i; j++) {
//         space += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         asterik += '*';
//     }
//     result += space + asterik + '\n';
// }

// console.log(result);

// function getMathResult(num, repeat) {

//     if (typeof repeat !== 'number' && repeat <= 0) {
//         return num;
//     }

//     let result = '';
//     for (let i = 1; i <= repeat; i++) {
//         if (i === repeat) {
//             result += `${num * i}`;
//         } else {
//             result += `${num * i}---`;
//         }
//     }

//     return result;
// }

// getMathResult(5, 3);

// function calculateVolumeAndArea(edge) {
//     if (typeof(edge) == 'number' && edge > 0 && Number.isInteger(edge)) {
//         return `Объем куба:${edge * edge * edge}, площадь всей поверхности:${edge * edge * 6}`;
//     } else {
//         console.log('При вычислении произошла ошибка');
//     }
// }

// calculateVolumeAndArea(5);

// function getCoupeNumber(seat) {
//     if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seat == 0 || seat > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     const compartmentSeats = 4;
//     let coupeNumber = Math.ceil(seat / compartmentSeats);
//     return coupeNumber;
// }

// getCoupeNumber(10.4);

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let space = ' ';
//     const arr = [];
//         arr[0] = 0;
//         arr[1] = 1;

//     for (let i = 2; i < num; i++) {
//         arr[i] = arr[i - 2] + arr[i - 1];
//     }

//     for (let i = 0; i < num; i++) {
//         if (i !== num - 1) {
//             result += arr[i] + space;
//         } else {
//             result += arr[i];
//             }
//     }
//     return(result);
// }

// fib(5);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '10%',
//             python: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showProgrammingLangs(plan) {
//     let str = '';
//     const { programmingLangs } = plan.skills;

//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return str;
// }

// showProgrammingLangs(personalPlanPeter);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const { age } = plan;
//         const { languages } = plan.skills;
//         let keys = '';
//         let elemets = '';

//         for (let element of languages) {
//             let space = ' ';
//             elemets += element.toUpperCase() + space;
//         }
//         return `Мне ${age} и я владею языками: ${elemets}`;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     let familyMemmbers = '';

//     for (let element of family) {
//         if (element === 0) {
//             str = "Семья пуста";
//         } else {
//             familyMemmbers += element ;
//             str = `Семья состоит из: ${family}`;
//         }
//         return str;
//     }
// }

// console.log(showFamily(family));

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка';
//     }
//     let strReverse = str.split('').join();
//     return strReverse;
// }

// console.log(reverse(someString));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     arr.forEach((currency, i) => { 
//         if (currency !== missingCurr) {
//             str += `${currency}\n`;
//         }
//     });
//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));