function threeorfive(number) {
    let sum = 0    
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {   
            sum += i        
        } else continue
    }
    return sum
}
console.log(threeorfive(1000))