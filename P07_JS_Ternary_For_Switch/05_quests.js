// /*
// parasykite programa kuri isvestu
// 1
// 11
// 111
// 1111
// */

// let vienetuxai = '';
// for (let j = 1; j <= 4; j++) {
//     vienetuxai += '1';
//     console.log(vienetuxai);
// }

// console.log("---------------")
// /*
// parasykite programa kuri isvestu
// 1
// 22
// 333
// 4444
// */

// for (let i = 1; i <= 4; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += i;
//     }
//     console.log(line);
// }


// console.log("---------------")
// /*
// parasykite programa kuri isvestu
//     1
//    111
//   11111
//  1111111
// */

// for (let i = 1; i <= 4; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += i;
//     }
//     console.log(line);
// }
// // let line = '';
// // for (let j = 1; j <= 4; j++) {
// //     line += '1';
// //     console.log(line);
// // }

// console.log("---------------")
// /*
// parasykite programa kuri isvestu
// 1
// 12
// 123
// 1234
// */



console.log('***--- array');
const arr = [1, 2, 3, 4, 5];
console.log(arr);
const arr1 = [1, 'du', 3, false, 5];
console.log(arr1);
console.log("----------");
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1.length);
console.log("----------");
console.log(arr1);
arr1[5] = 'penktas';
arr1[6] = 'sestas';
arr1[10] = 'dike';
console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log("----------");
for (let item of arr1) {
    console.log(item);
}
console.log("----------");
arr1.forEach(item => {
    console.log(item)
})