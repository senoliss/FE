console.log("---------hello typeof--------");
console.log(typeof "textas");
console.log(typeof 'textas');
console.log(typeof 1);
console.log(typeof 3.45);
console.log(typeof true);
console.log(typeof false);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof myVariable);
console.log(typeof new Date());
console.log(typeof [1, 2, 3]);
console.log(typeof {name: "JonaS", age: 15});
console.log(typeof function () { });
console.log();
console.log(typeof Number(true));
console.log(typeof Number('25'));
console.log(`==> ${typeof Number('AA')} <==`);
console.log(`==> ${Number('AA')} yra ${typeof Number('AA')} <==`);
console.log('--------Dirbame su isNaN--------')
console.log(typeof isNaN('AA'));
console.log(typeof isNaN('AA'));
console.log();




console.log('***undefined su if***');
if (typeof y === "undefined") { 
    console.log("y is undefined");
} else {
console.log("y is defined");
}


console.log('***---Dirbame su parseint')
console.log(parseInt('25'));
console.log(parseInt('50 10   52'));
console.log();
console.log(parseInt('40 years'));
console.log(parseInt('40years'));
console.log(parseInt('years 90'));
console.log(parseInt('         88             '));
console.log(parseInt ('     88              '));