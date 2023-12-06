let pi = Math.PI;
console.log(pi);
let roundedPi = pi.toFixed(2);
console.log(roundedPi);

let roundedPi2 = Math.round(pi);
console.log(roundedPi2);

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
