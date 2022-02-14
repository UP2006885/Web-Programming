/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const responseText = await response.text();

  elem.textContent = responseText;
}

window.document.addEventListener('load', showMessage);

async function showList(elem, url) {
  const response = await fetch(url);
  const data = await response.json();

  for (const i of data) {
    const li = document.createElement('li');
    li.textContent = i;
    elem.append(li);
  }
}

window.document.addEventListener('load', showList);

async function startShowingMessage(elem, url) {
  
}
