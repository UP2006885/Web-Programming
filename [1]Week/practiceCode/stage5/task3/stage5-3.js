function firstNum(){return document.querySelector("#n1").valueAsNumber;}
function secondNum(){return document.querySelector("#n2").valueAsNumber;}

function output(total){
    document.querySelector("#outputNum").textContent = total;
}

function add(){
    output(firstNum() + secondNum());
}

function sub(){
    output(firstNum() - secondNum());
}



document.querySelector("#add").addEventListener("click", add);
document.querySelector("#sub").addEventListener("click", sub);
