let pi = Math.PI;
console.log(pi);
let roundedPi = Math.round(pi);
console.log(roundedPi);
let roundedPiToFixed = pi.toFixed(2);
console.log(roundedPiToFixed);
let floorValueMath = Math.floor(2.8);
console.log(floorValueMath);
let ceilValueMath = Math.ceil(2.5);
console.log(ceilValueMath);

// parasyti funkciaj kuri imituotu sesiasienio kauliuko metima
// kauliuka mesti kol iskris 3

function kauliukas(){
    let result;
    let diceRolls = 0;

    do {
        result = Math.floor(Math.random() * 6) + 1;
        console.log(`Roll ${diceRolls + 1}: ${result}`);
        diceRolls++;
      } while (result !== 3);
    
      console.log(`It took ${diceRolls} rolls to get a 3!`);
}

kauliukas();

console.log('---------------');

function throwDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Dice was rolled: ${roll}`)
  return roll;
}

while(true){
  let roll = throwDice();
  if (roll === 3){
    break;
  }
}
