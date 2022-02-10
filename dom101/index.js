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

function addAClass(elem, str){
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;
}

function newElement(name){
    const q = document.createElement(name);
    return q;

}

/** Accepts an ID(Without #) Returns first element that has a corresponding ID to the one passed.*/
function findElementById(id){
    const e = document.querySelector(`#${id}`);
    return e;
}

function findElementsByQuery(query){
    const e = document.querySelectorAll(query);
    return e;

}

function reverseList(query){
    let e = document.querySelector(query);
    let amt = e.childNodes.length;

    while(amt--){
        e.appendChild(e.childNodes[amt]);
    }
    return e;
}

function mover(moveThis, appendToThis){
    const e = document.querySelector(appendToThis);
    e.append(document.querySelector(moveThis));
}

function filler(list, candidates){
    let lis = [];

    for(let i = 0; i < candidates.length; i++){
        lis[i] = document.createElement("li");
        lis[i].textContent = candidates[i];
        list.append(lis[i]);
    }
}

function dupe(selector){
    const a = document.querySelector(selector);
    const b = a.cloneNode();
    b.textContent = a.textContent;

    document.querySelector(selector).parentElement.append(b);
}

function removeAll(selector){
    let a = [].slice.call(document.querySelectorAll(selector));
    for(let i  = 0; i < a.length; i++){
        a[i].remove();
    }
}

function getUserData(){
    // #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: 30, student: true }.
    let userData = ["username", "speed", "student",];
    let userValues = [];
    let x = {};

    for(let i = 0; i < userData.length; i++){
        if(userData[i] === "student"){
            userValues[i] = document.querySelector(`#${userData[i]}`).checked;
        }else if(userData[i] === "speed"){
            userValues[i] = parseInt(document.querySelector(`#${userData[i]}`).getAttribute("value"));
        }else{
            userValues[i] = document.querySelector(`#${userData[i]}`).getAttribute("value");
        }
    }
    // userData.forEach((userData, i) => x[userData] = userValues[i]); // Stores the arrays into a single object.
    userData[0] = "name";
    for(let i = 0; i < userData.length; i++){
        x[userData[i]] = userValues[i];
    }
    console.log(x);
    return x;

    
}
