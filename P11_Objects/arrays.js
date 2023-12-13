// console.log("**********************");
// console.log("*****Array Splice*****");
// console.log("**********************");
// console.log("old array:");
// let arr = ["I", "study", "JavaSscript", "right", "now"]
// console.log(arr);
// console.log();
// console.log("new array:");
// arr.splice(0, 3, "lets", "dance");
// console.log(arr);



/* ----------------TASKS--------------- */

// SOME

const budgets = [
    {
      name: "Rytis",
      budget: 50,
    },
    {
      name: "Saulė",
      budget: 230,
    },
    {
      name: "Paulius",
      budget: 1500,
    },
    {
      name: "Gytis",
      budget: 92,
    },
    {
      name: "Sandra",
      budget: 7,
    },
  ];
  
const names = budgets.map((person) => person.name);
const monies = budgets.map((person) => person.budget);

console.log('**************************************************************************************************************');
console.log('Patikrinkite ar masyve monies yra bent viena neigiama reikšmė; (some()):');
const hasNegative = monies.some((budget) => budget < 0);
console.log(hasNegative);
console.log('**************************************************************************************************************');
console.log('Parašykite funkciją belowHundred kuri pasiims masyvą kaip parametrą ir patikrins ar bent vienas skaičius\n', 
'yra mažiau nei 100. Jei taip reikės išfiltruoti masyvą ir grąžinti tik tas reikšmes, kurios atitinka kriterijų,\n', 
'jeigu visi atitinka tuomet išmesti žodžius „All numbers are above 100"; (some() & filter())');
console.log('**************************************************************************************************************');

function belowHundred(arr) {
    const belowHundredArray = arr.filter((value) => value < 100);
    if (belowHundredArray.length > 0) {
      return belowHundredArray;
    } else {
      console.log("Visi skaiciai yra < 100");
    }
  }

const resultBelowHundred = belowHundred(monies);
console.log("Skaiciai < 100:", resultBelowHundred);

