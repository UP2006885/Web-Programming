function isPrime(n){
    if(!Number.isInteger(n) || n < 1){return false;}// Only run code if n is more than 1, and integer.
    for(let i = 2; i < n; i++){
        if((n % i) === 0){return false;} // Checks if N can be divided fully (whole number), by anything between 2 and n-1.
    }
     return true; // If we reach this part of the code N must be a prime number.
 }

function checkPrime(){
    const output = document.querySelector("#outputPrime");
    const input = document.querySelector("input").valueAsNumber;
    output.textContent = isPrime(input) ? `${input} is a Prime number.` : `${input} is not a Prime number.`;
}

const button = document.querySelector("button");
button.addEventListener("click", checkPrime);