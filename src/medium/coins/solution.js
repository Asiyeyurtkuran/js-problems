function findDenomination (number) {
    let denominations = [1, 5, 10, 25, 100]
    let n = denominations.length;
    let result = [];

    for ( let i = n-1; i>=0; i--){

        while (number>= denominations[i]){
            number -= denominations[i];
            result.push(denominations[i]);
        }
    }
return result
}

console.log(findDenomination(34))
