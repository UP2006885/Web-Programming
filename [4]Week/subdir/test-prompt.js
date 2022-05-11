const prompt = require('prompt-sync')({sigint: true});

const answer = prompt('Enter something...');
console.log(`Answer: ${answer}`);