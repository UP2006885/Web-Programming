function multiplyingByAdding(){
    const prompt = require('prompt-sync') ({sigint: true});
    const a = Number(prompt("Enter a positive integer: "));
    const b = Number(prompt("Enter a integer: "));
    let result = 0;
    let count = a;

    console.log(`${a}*${b} = ${a*b}`);
    console.log("Addition:");
    while(count--){
        result += b; 
        console.log(`${result}`);
    }
}

// multiplyingByAdding();

function countTheAmountOfWords(){
    const prompt = require('prompt-sync') ({sigint: true});
    const words = prompt("Enter a sentance: ");
    let amtOfSpaces = 1; // There is atleast 2 word if 1 space is present, so assuming the user enters a sentance and not null, then we should start with one.
    // We do this as this will be used to find out how many words there are, not the amt of spaces.
    for(let i = 0; i < words.length; i++){
        if(words[i] === " "){amtOfSpaces += 1;}
    }

    console.log(`There are, ${amtOfSpaces} words, in the inputted sentance.`);
}

// countTheAmountOfWords();

function countTheAmountOfWordsAccurately(){
    const prompt = require('prompt-sync') ({sigint: true});
    const words = prompt("Enter a sentance: ");
    let amtOfSpaces = 0;
    
    let foundFirstWord = false;
    let previousWasSpace = false;

    for(let i = 0; i < words.length; i++){
        if(!foundFirstWord){
            if(words[i] !== " "){
                foundFirstWord = true;
                amtOfSpaces = 1;
            }
        } else {
            if(words[i] !== " " && previousWasSpace){
                amtOfSpaces += 1;
                previousWasSpace = false;
        }  if(words[i] === " " ){
            previousWasSpace = true;
        }
        }   
    }   
    console.log("Word count: ", amtOfSpaces);
}

// countTheAmountOfWordsAccurately();

function countSentances(){
    const prompt = require('prompt-sync') ({sigint: true});
    const sentances = prompt("Enter several sentances: ");
    let sentanceCount = 0;

    for(let i = 0; i < sentances.length; i++){
        if(sentances[i] === "."){
            if(i === sentances.length - 1){
                sentanceCount += 1;
            } else if (sentances[i+1] === " "){
                sentanceCount += 1;
            }
        }
    }
    
    console.log("Sentence Count: ", sentanceCount);
}

// countSentances();

function removedFileNameExtensions(){
    const prompt = require('prompt-sync') ({sigint: true});
    const fileName = prompt("Enter a file name: ");

    let foundLastDot = false;
    let response = "";

    for(let i = fileName.length - 1; i >= 0; i--){
        if(!foundLastDot){
            if (fileName[i] === "."){
                foundLastDot = true;
            }
        } else{
            response = fileName[i] + response;
        }
    }

    if(response === ""){
        console.log("File name does not have an extension: ", fileName);
    } else {
        console.log("File name without extension: ", response);
    }
}

// removedFileNameExtensions();

function genRandomWords(){
    const prompt = require('prompt-sync') ({sigint: true});
    const count = Number(prompt("How many words? "));

    const words = ["aliqua", "laboris", "quid", "possumus", "adipisicing"];

    let response = "";

    for(let i = 0; i<count; i++){
        const randomNumber = Math.floor(Math.random() * words.length);
        i === (count - 1) ? response = response + words[randomNumber] : response = response + words[randomNumber] + " ";
    }

    console.log(response);
}

// genRandomWords();

function genRandomSentances(){
    const prompt = require('prompt-sync') ({sigint: true});
    const count = Number(prompt("How many words? "));

    const startingWords = ["Summis", "Eiusmod", "Ab", "Aute"];
    const words = ["aliqua", "laboris", "quid", "possumus", "adipisicing"];
    const sentanceEndings = [".", "?", "!"];
    let response = "";
    let startingNewSentance = true;




    for(let i = 0; i<count; i++){
    if(startingNewSentance){
        const randomNumber = Math.floor(Math.random() * startingWords.length);
        response = response + startingWords[randomNumber];
        startingNewSentance = false;
    } else {
        const randomNumber = Math.floor(Math.random() * words.length);
        response = response + words[randomNumber];
    }

    if(Math.random() < 0.2 || i === count-1){
        const randomNumber = Math.floor(Math.random() * sentanceEndings.length);
        response = response + sentanceEndings[randomNumber];
        startingNewSentance = true;
    }
    response = response + " ";
    }

    console.log(response);
}

genRandomSentances();