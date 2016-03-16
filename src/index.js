'use strict';
/* globals numWords, readTime */

// const entryInfo = document.querySelectorAll(`.entry__info`);
//
// for (let i = 0; i < entryInfo.length; i++) {
//   const entry = entryInfo[i];// loops through all entries
//   const time = document.createElement(`li`);
//   time.classList.add(`read-time`);
//   entry.appendChild(time);
// }
const entry = document.querySelectorAll(`.entry`);

for (let i = 0; i < entry.length; i++) {
  const singleEntry = entry[i];
  const entryInfo = singleEntry.querySelector(`.entry__info`);
  const time = document.createElement(`li`);
  time.classList.add(`read-time`);
  entryInfo.appendChild(time);

  const timer = entry[i];
  const entryText = timer.querySelector(`.entry__content`).innerText;
  time.innerText = `${readTime(entryText, 200)} mins`;
}
