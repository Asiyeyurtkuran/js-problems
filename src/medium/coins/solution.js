let arrayOfdenoms = [];
let number = 0;

function initiate(number) {
  number = number;
  findDenomination(number);
  return occurances(arrayOfdenoms);
}

function findDenomination(number) {
  let denominations = [1, 5, 10, 25, 100];
  let n = denominations.length;

  for (let i = n - 1; i >= 0; i--) {
    while (number >= denominations[i]) {
      number -= denominations[i];
      arrayOfdenoms.push(denominations[i]);
    }
  }

  return arrayOfdenoms;
}

function occurances(arrayOfdenoms) {
  const denoms = arrayOfdenoms;
  // console.log("Value of denoms const: ", denoms);
  let result;

  let hundreds = 0;
  let twentyfives = 0;
  let tens = 0;
  let fives = 0;
  let ones = 0;
  denoms.forEach((element) => {
    if (element === 100) {
      hundreds += 1;
    } else if (element === 25) {
      twentyfives += 1;
    } else if (element === 10) {
      tens += 1;
    } else if (element === 5) {
      fives += 1;
    } else if (element === 1) {
      ones += 1;
    }
  });
  result = `There are: ${hundreds} x 100, ${twentyfives} x 25, ${tens} x 10, ${fives} x 5, ${ones} x 1.`;
  return result;
}

console.log(initiate(2427));
