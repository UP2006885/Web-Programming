/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem, str){
    elem.textContent = str;
}

function addTextTo(elem, str){
    elem.append(str);
}

function moreBears(){
    const q = document.querySelector("#animals");
    q.setAttribute("src","http://placebear.com/400/200");
    q.setAttribute("alt","A bear.");
    q.setAttribute("title","A BEAR!");

}

function setId(elem, str){
    elem.setAttribute("id", str);
    return elem;
}

function setClass(elem, str){
    elem.setAttribute("class", str);
    return elem;
}


// add your functions here
