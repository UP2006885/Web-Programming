'use strict';
/**
 * Add your functions here...
 */
function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    const button = document.querySelector("#button0");
    button.addEventListener('click', targetTextToConsole);

}

function lovelyParaAttacher(){
    const elm = document.querySelector("#thisisalovelyparagraph");
    elm.addEventListener("click", lovelyToggle);
}

function lovelyButtonAttacher(){
    const button = document.querySelector("#button1");
    button.addEventListener('click', lovelyToggle);
}

function changeHandler(e){
    let input1 = document.querySelector("#in1");
    let input2 = document.querySelector("#in2");
    document.querySelector("#out1").textContent = `${input1.value}${input2.value}`;

}

function concatAttacher(){
    let i1 = document.querySelector("#in1");
    let i2 = document.querySelector("#in2");

    i1.addEventListener("change", changeHandler);
    i2.addEventListener("change", changeHandler);
}

function snitchAttacher(){
    const div1 = document.querySelector("#mousewatcher");
    
    div1.addEventListener("mouseover", snitchUpdater)
    div1.addEventListener("mouseout", snitchUpdater)
}

function reportUpdater(event){
    const a = event.target.querySelector("#report");
    a.textContent = `x: ${event.screenX} y: ${event.screenY}`;    
}

function reportAttacher(){
    const mr = document.querySelector("#mousereporter");
    mr.addEventListener("mousemove", reportUpdater)
}

