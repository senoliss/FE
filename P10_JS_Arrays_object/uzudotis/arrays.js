console.log('hello masyvai');

let movies = ['Harry Poter', 'Star Wars', 'Shrek', 'Shrek2', 'Ice Age'];

console.log(movies);


console.log('**************');
console.log('**PRIDĖJIMAI**');
console.log('**************');


console.log('prideti i gala');
movies.push('Avatar');
movies.push('Ice Age2', 'Obiwan');
console.log(movies);


console.log('prideti i prieki');
movies.unshift('Terminator');
console.log(movies);



console.log('**************');
console.log('**TRYNIMAI**');
console.log('**************');

console.log('trinti is galo');
movies.pop();
console.log(movies);


console.log('trinti is priekio');
movies.shift();
console.log(movies);