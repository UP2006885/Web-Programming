function getLength() {
    const input = document.querySelector("input").value;
    const output = document.querySelector("#outputLength");
    output.textContent = input.length;
}

document.querySelector("button").addEventListener("click", getLength);