console.log('***************************');
console.log('*** while (loop) ciklas ***');
console.log('***************************');

let count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}
console.log('-------------------------------------');
//paieskos masyve uzduotis su ciklu while
let fruits = ['orange', 'apple', 'banana', 'kiwi', 'ananas'];
let toSearch = 'kiwi';
let index = 0;
let found = false;
while (index < fruits.length && !found) {
    if (fruits[index] === toSearch) {
        found = true;
        console.log(`Found ${toSearch} at index ${index}`);
        //break;  // <- viena galimybe sustabdyti cikla
        //index = fruits.length; // <- antra galimybe sustabdyti cikla
    }
    console.log(index);
    index++;
}

console.log('********************************');
console.log('*** do...while (loop) ciklas ***');
console.log('********************************');

let count2 = 10;
do {
    console.log(count2);
    count2++;
} while (count2 <= 5);