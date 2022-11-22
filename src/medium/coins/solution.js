// const arrayOfDenoms = [];
let number = 0;

function initiate(num) {
  number = num;
  const result = findDenomination(num);
  return occurances(result);
}

function findDenomination(num) {
  const denominations = [1, 5, 10, 25, 100];
  const arrayOfDenoms = [];

  for (let i = denominations.length - 1; i >= 0; i--) {
    while (num >= denominations[i]) {
      num -= denominations[i];
      arrayOfDenoms.push(denominations[i]);
    }
  }

  return arrayOfDenoms;
}

function occurances(arrayOfDenoms) {
  const denoms = arrayOfDenoms;
  // console.log("Value of denoms const: ", denoms);

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

  let result = "Smallest number of denominations: ";

  if (hundreds > 0) {
    result += `${hundreds} x 100, `;
  }
  if (twentyfives > 0) {
    result += `${twentyfives} x 25, `;
  }
  if (tens > 0) {
    result += `${tens} x 10, `;
  }
  if (fives > 0) {
    result += `${fives} x 5, `;
  }
  if (ones > 0) {
    result += `${ones} x 1.`;
  }

  // const result2 = `There are: ${hundreds} x 100, ${twentyfives} x 25, ${tens} x 10, ${fives} x 5, ${ones} x 1`;
  return result;
}

console.log(initiate(34));
