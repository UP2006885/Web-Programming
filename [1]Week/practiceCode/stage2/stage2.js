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

// genRandomSentances();

function nickBook(){
    const prompt = require('prompt-sync') ({sigint: true});
    const count = [{name : "Harry", nick : "@HarryJS",}, {name : "James", nick : "@Jms2001",},];
    let command;

    do {
        console.log();
        command = prompt("(Type help for cmds) Enter Cmd: ");
        if(command === "help"){
            console.log("Available cmds:");
            console.log("   help, shows cmds.");
            console.log("   stop, exits program.");
            console.log("   count, shows how many people are stored in array.");
            console.log("   add, adds a new person to array.");
            console.log("   nick, search by nickname.");
            console.log("   name, search by name.");
        }

        if(command === "count"){console.log(`Stored people amt: ${count.length}`);}

        if(command === "add"){
            const name = prompt("Persons Name: ");
            const nick = prompt("Persons Nickname: ");
            
            const newPerson = {};
            newPerson.name = name;
            newPerson.nick = nick;

            // Add the new person to the end of array. 
            count[count.length] = newPerson;
            console.log(`Added ${name}, new records length: ${count.length}`); 
        }

        if(command === "nick"){
            const nick = prompt("Please enter a nickanme: ");
            for (const person of count){
                if(person.nick.includes(nick)){
                    console.log(`${person.nick} is the nickname for: ${person.name}`);
                }
            }

        }

        if(command === "name"){
            const name = prompt("Please enter a name: ");
            for (const person of count){
                if(person.name.includes(name)){
                    console.log(`${person.name} has the nickanme: ${person.nick}`);
                }
            }

        }

    } while (command !== "stop");

}

nickBook();