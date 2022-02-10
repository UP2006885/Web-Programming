/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2006885";
}

function fn() {
  return 'Harry';
}

function sn() {
  return 'Seymour';
}

function add(a,b) {
  return a+b;
}
function subtract(a,b) {
  return a-b;
}

function checkObject(obj) {
  obj.checked = true;
}
function checkObjectInside(obj) {
  if (obj.data != null) {obj.data.checked = true;}
}

function arraySet(arr, i, n) {
  if(arr[i] != null){arr[i] = n;}
}

function addAll(arr){
  let a = 0;
  arr.forEach(function add(item){a = a + item;});
  return a;
}

function larger(a,b){
  return a > b ? a : b;
}

function largest(arr){
  let largestNumber = null;
  for (let i =0; i < arr.length; i++) {
    arr[i] > largestNumber ? largestNumber = arr[i] : false; 
  }

  return largestNumber;
}

function compare (a, b){
    if(a.length !== b.length){return false;}else{
      for (let i = 0; i < a.length; i++) {
        if(a[i] === b[i]){true}else{return false;}
      }
      return true;
    }
}

function addToAll(arr, n){
  for(let i = 0; i < arr.length; i++){
    arr[i] += n;
  }

  return arr;
}

let remembered;
function rememberThis(keepsake){
  remembered = keepsake;
}

function nArray(n){
  let arr = [];
  for(let i = 0; i < n; i++){
    arr[i] = i+1;
  }
  return arr;
}

function addAllOpt(arr){
    if(arr == undefined || arr[0] == null){return 0;} 
    let a = 0;
    arr.forEach(function add(item){a = a + item;});
    return a;
}

function divisors(arr, div){
  let newArr = [];
  arr.forEach(function divise(item){
    if(item % div == 0){newArr.push(item);}
  });
  return newArr;
}

function multiples(n, m){
  let arr = [];
  for(let i = 0; i < n; i++){
    arr[i] = (i+1)*m;
  }
  return arr;
}