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