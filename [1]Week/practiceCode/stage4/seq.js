/* Prints a sequence of numbers between two given arguments. */
const first = Number(process.argv[2]);
const second = Number(process.argv[3]);
const increment = Number(process.argv[4])

if (Number.isNaN(first) || Number.isNaN(second) || Number.isNaN(increment)) {
    console.log("Usage: node seq.js Number Number Increment");
    process.exit(1);
}

if (first < 0 || second < 0  || increment < 0 ) {
    console.log("Number Number Increment MUST be positive integers.");
    process.exit(1);
}


if(first < second){
    for (let i = first; i <= second; i = i + increment){
        console.log(i);
    }
} else if (first > second){
    for (let i = first; second <= i;  i = i - increment){
        console.log(i);
    }
} else {
    console.log("Numbers must be different");
    process.exit(1);
}
