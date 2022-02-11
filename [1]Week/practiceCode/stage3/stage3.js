function primeCheck(){
    // Prime numbers are positive integers only divisible by 1 and themselves, and no other integers
    const prompt = require("prompt-sync")({sigint : true});
    function isPrime(n){
        if(!Number.isInteger(n) || n < 1){return false;}// Only run code if n is more than 1, and integer.

        for(let i = 2; i < n; i++){
            if((n % i) === 0){return false;} // Checks if N can be divided fully (whole number), by anything between 2 and n-1.
        }
        return true; // If we reach this part of the code N must be a prime number.
    }

    function printPrime(n){
        let currentNumber = 2;
        while (n > 0){
            if(isPrime(currentNumber)){
                console.log(`Prime: ${currentNumber}`);
                n--;
            }
            currentNumber++;
        }
    }
    const amtOfPrimes = prompt("How many prime number do you want: ");
    printPrime(amtOfPrimes);

}

// primeCheck();

function reverse(arr){
    for(let i = 0; i < arr.length / 2; i++){
        const firstHalf = arr[i];
        const secondHalf = arr[arr.length - 1 - i];

        arr[i] = secondHalf;
        arr[arr.length - 1 - i] = firstHalf;
    }
    return arr;
}

function reverseArray(){
    console.log(`Test: 1,2,3: ${reverse([1,2,3])}`);
    console.log(`Test: 8,1,3,5,7,8: ${reverse([8,1,3,5,7,8])}`);

}

// reverseArray();

function palidrone(){
    const prompt = require("prompt-sync")({sigint : true});
    const input = prompt("Please enter a palidrone: ");

    function reverseString(input){
        const strArray = Array.from(input);
        return reverse(strArray).join("");
    }

    function isPalidrone(input){
        if(input === ""){return false;}
        return input === reverseString(input);
    }

    isPalidrone(input) ? console.log(`${input} is a palidrone.`) : console.log(`${input} is not a palidrone.`);
}

// palidrone();

function diceRoll(){
    const prompt = require("prompt-sync")({sigint : true});
    let x = 6;
    function roll(x){
        const sides = x;
        const side = Math.floor(Math.random() * sides) + 1;
        return side;
    }
    x = Number(prompt("What sided dice would you like to roll? "));
    const count = Number(prompt("How many dice rolls would you like? "));

    for(let i = 0; i < count; i ++){
        console.log(`You rolled: ${roll(x)}`);
    }

}

// diceRoll();

function diceLoaded(){
    const prompt = require("prompt-sync")({sigint : true});
    function rollDice(){
        const sides = 6;
        const side = Math.floor(Math.random() * sides) + 1;
        return side;
    }

    function rollHistory(n){
        const history = [0,0,0,0,0,0,];
        for(let i = 0; i < n; i++){
            const roll = rollDice();
            history[roll - 1]++;
        }
        return history;
    }

    function toPercentage(n){
        const percentage = (n * 100).toFixed(2);
        return `${percentage}%`;
    }

    const attempts = Number(prompt("How many times should we roll? "));
    const history = rollHistory(attempts);

    for(let i = 1; i <= 6; i++){
        const chance = history[i - 1] / attempts;
        console.log(`Number: ${i}, chance: ${toPercentage(chance)}`);
    }
}

// diceLoaded();


function diceLoadedGraph(){
    const prompt = require("prompt-sync")({sigint : true});
    function rollDice(){
        const sides = 6;
        const side = Math.floor(Math.random() * sides) + 1;
        return side;
    }

    function rollHistory(n){
        const history = [0,0,0,0,0,0,];
        for(let i = 0; i < n; i++){
            const roll = rollDice();
            history[roll - 1]++;
        }
        return history;
    }

    function max(arr){
        let max = arr[0];
        for(const item of arr){
            item > max ? max = item : false;
        }
        return max;
    }

    const attempts = Number(prompt("How many times should we roll? "));
    const history = rollHistory(attempts);

    const Line_Length = 20;

    const max_count = max(history);
    for(let i = 1; i <= 6; i++){
        const lineLength = Math.round(history[i - 1] / max_count * Line_Length);

        const line = "#".repeat(lineLength);
        console.log(`${i} : ${line}`);
    }
}

// diceLoadedGraph();

