const fs = require('fs');
let consoleOutput = false;


if(process.argv.length === 3){
    consoleOutput = true;
    console.log("No output file specified, will output to console");

}

if(process.argv.length  > 4 || process.argv.length < 3){
    console.log("Usage: node rev-words.js inputFile outputFile(Optional)");
    process.exit(1);
}

function reverse(str){
    return Array.from(str).reverse().join("");
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const fileContents = fs.readFileSync(inputFile, 'utf8');
const lines = fileContents.split("\n");

for(const line of lines){
    const words = line.split(" ");
    const reversedWords = [];

    for(const word of words){
        reversedWords.push(reverse(word));
    }

    if(consoleOutput === false){
    fs.writeFileSync(outputFile, reversedWords.join(" "));
    } else{
        console.log(reversedWords.join(" "));
    }
}
