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

function startShowingMessage(elem, url) {
  setInterval(showMessage, 1000, elem, url);
}

window.document.addEventListener('load', startShowingMessage);

async function handleError(elem, url) {
  const response = await fetch(url);
  if (response.ok) {
    const responseText = await response.text();
    elem.textContent = responseText;
  } else {
    elem.textContent = 'OH DEAR';
  }
}

window.document.addEventListener('load', handleError);

async function boxUpdate(canvas, url) {
  const response = await fetch(url);
  const cords = await response.text();
  console.log(cords);
  const can = canvas.getContext('2d');
  can.fillRect(cords.x, cords.y, 10, 10);
  console.log(cords[0].x);
  console.log(cords[0].y);
}

function drawBox(canvas, url) {
  setInterval(boxUpdate, 1000, canvas, url);
}

window.document.addEventListener('load', drawBox);
