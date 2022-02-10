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

/**
 * The input field `newid` is meant for the user to type an ID of an HTML element; 
 * IDs cannot have spaces in them, so the field needs to report 
 *      when the user has a space in there. 
 *      Write a function `idValidationAttacher`
 * 
 *  that gives the `newid` input field an event handler that checks the value whenever it has changed
 *      (use the `input` event). If the value contains any space, the event handler will add a class `invalid` to the `newid` input element, so that 
 *      an error message shows.
 */

function validateID(e){
    let str = e.target.value;
    if(str.includes(" ")){
        e.target.classList.add("invalid");
    } else{
        e.target.classList.remove("invalid");
    }
}
function idValidationAttacher(){
    let input = document.querySelector("#newid");
    input.addEventListener("input", validateID);
}
