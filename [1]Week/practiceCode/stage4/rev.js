const fs = require('fs');
let consoleOutput = false;


if(process.argv.length === 3){
    consoleOutput = true;
    console.log("No output file specified, will output to console");

}

if(process.argv.length  > 4 || process.argv.length < 3){
    console.log("Usage: node rev.js inputFile outputFile(Optional)");
    process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const fileContents = fs.readFileSync(inputFile, 'utf8');

const characters = Array.from(fileContents);
const reversed = characters.reverse();

if(consoleOutput === false){
    fs.writeFileSync(outputFile, reversed.join(""));
} else{
    console.log(reversed.join(""));
}