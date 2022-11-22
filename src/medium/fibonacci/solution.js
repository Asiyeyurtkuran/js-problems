

let fibonacci = [0, 1];
for(var i=fibonacci.length; i<100; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    
} 
console.log(fibonacci); 

