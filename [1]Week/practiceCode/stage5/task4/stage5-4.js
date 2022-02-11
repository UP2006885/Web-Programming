function reverse(string){
    return Array.from(string).reverse().join("");
}

function reversedWords(){
    const textArea = document.querySelector("textarea");
    const contents = textArea.value;

    const lines = contents.split("\n");
    const outputLines = [];
    
    for (const line of lines){
        const words = line.split(" ");
        const reversedWords = [];

        for(const word of words){
            reversedWords.push(reverse(word));
        }
        outputLines.push(reversedWords.join(" "));
    }
    textArea.value = outputLines.join("\n")
}

document.querySelector("button").addEventListener("click", reversedWords);