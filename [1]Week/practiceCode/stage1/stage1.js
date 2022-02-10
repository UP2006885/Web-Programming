/* Creates a prompt in console when called, and asks for number, which is then moduloed to find if its even or odd.*/
function isEvenOrOdd (){
    const prompt = require("prompt-sync")({sigint: true});
    const number = Number(prompt("Enter a number: "));

    if(number%2 === 0){
        console.log(number, " is even.");
    } else{
        console.log(number, " is odd.");
    }
}

// isEvenOrOdd();

/* Creates a prompt in console when called, and asks for number, which is then checked to see if it is a Integer or Fractional.*/
function isAnIntOrFrac(){
    const prompt = require("prompt-sync")({sigint: true});
    const number = Number(prompt("Enter a number: "));
    if(Number.isInteger(number)){
        console.log(number, " is a integer.");
    } else {
        console.log(number, " is a fractional.");
    }

}

// isAnIntOrFrac();

/* Creates a prompt in console when called, and asks for number, which is then checked to see if it is or isnt a number.*/
function isANumber(){
    const prompt = require("prompt-sync")({sigint: true});
    const number = prompt("Enter a number: ");
    if(!Number.isNaN(Number(number))){
        console.log(number, " is a number.");
    } else {
        console.log(number, " is not a number.");
    }

}

// isANumber();

/* Creates a prompt in console when called, and asks for two strings and then concatenates them.*/
function joinString(){
    const prompt = require("prompt-sync")({sigint: true});
    const first = prompt("Enter a string: ");
    const second = prompt("Enter a string: ");

    console.log(first + second);
}

// joinString();

/* Creates a prompt in console when called, and asks for two numbers and then adds them.*/
function addsInts(){
    const prompt = require("prompt-sync")({sigint: true});
    const number1 = Number(prompt("Enter a number: "));
    const number2 = Number(prompt("Enter a number: "));

    console.log(number1 + number2);
}

// addsInts();

/* Creates a prompt in console when called, and asks for a string, then outputs the length of string.*/
function stringLength(){
    const prompt = require("prompt-sync")({sigint: true});
    const input = prompt("Enter something: ");

    console.log(input.length);
}

// stringLength();

function rockPaperScissors(){
    const prompt = require("prompt-sync")({sigint: true});
    const randomNumber = Math.random();

    let computerChoice;

    if (randomNumber > 1/3){computerChoice = "rock";}else if (randomNumber > 2/3){computerChoice = "paper";} else {computerChoice = "scissors";}

    const userChoice = prompt("Enter your choice (rock, paper, scissors)");
    if(userChoice === computerChoice){console.log(`It's a  draw you both got, ${userChoice}.`);
    }else if(userChoice === "rock"){
        if(computerChoice === "paper"){console.log(`You lost, you chose:${userChoice}, the computer chose:${computerChoice}`)}
        else{console.log(`You Win, you chose:${userChoice}, the computer chose:${computerChoice}`)}   
    } else if(userChoice === "paper"){
        if(computerChoice === "rock"){console.log(`You Win, you chose:${userChoice}, the computer chose:${computerChoice}`)}
        else {console.log(`You Win, you chose:${userChoice}, the computer chose:${computerChoice}`)}
    } else {
        if(computerChoice === "paper"){console.log(`You Win, you chose:${userChoice}, the computer chose:${computerChoice}`)}
        else{console.log(`You Win, you chose:${userChoice}, the computer chose:${computerChoice}`)}
    }
}

// rockPaperScissors();

function guessANumber(){
    const prompt = require("prompt-sync")({sigint: true});
    const randomNumber = Math.floor(Math.random() * 10)+1;
    const userGuess = Number(prompt("Enter your quess: "));

    if (userGuess === randomNumber){ console.log("You Win, you quessed correctly");} else{ console.log("You lose, I guessed ", randomNumber);}
}

// guessANumber();

function agressiveGuessANumber(){
    const prompt = require("prompt-sync")({sigint: true});
    const randomNumber = Math.floor(Math.random() * 10)+1;
    console.log("I have thought of an integer between 1 and 10.");
    const guess = Number(prompt("Take a quess at what it is: "));

    if(!Number.isInteger(guess)){
        console.log("Please guess an Integer");
    }else if (guess  > 10 || guess < 1){
        console.log("Guess must be between 1 - 10");
    } else if (guess === randomNumber) {
        console.log("You guessed correctly.");
    } else {
        console.log("I was guessing ", randomNumber);
    }
}

agressiveGuessANumber();
