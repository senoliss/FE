// alert("Hello world!");


var string = 'hey hi';
var times = 2;

if(times > 3)
{
    var greeter = 'say hello instead';
    console.log(greeter);
}
else{
    console.log(string);
}

let number1 = 10.5;
let number2 = 1001;
let text1 = "John Doe";
let text2 = 'John Doe';

let x;
x = 6;
x=(5+6)*10;
console.log(x);

// komentaras
/* komentaras
per
kelias
eilutes*/

let myBool = true;
let myNull = null;
let myUndefined = undefined;
console.log(myUndefined);

if(myUndefined){
   console.log("message inside if"); 
}

let myName = 'Marius';
let phrase = `can embed another ${myName}`;
console.log(phrase);

let n1 = 6;
let n2 = '6';

if(n1 !== n2){
    console.log('numbers are not equal');
}

console.log(typeof n2);
console.log(typeof +n2);