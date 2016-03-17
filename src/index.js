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
const bodyEl = document.querySelector(`body`);
const entry = document.querySelectorAll(`.entry`);
const nav = document.createElement(`nav`);
nav.classList.add(`hover`);
bodyEl.appendChild(nav);

for (let i = 0; i < entry.length; i++) {
  // Setup and looking up elements for the current article
  const singleEntry = entry[i];
  const entryInfo = singleEntry.querySelector(`.entry__info`);
  const title = singleEntry.querySelector(`.entry__title`);
  const entryText = singleEntry.querySelector(`.entry__content`).innerText;

  // Show read time to user
  const time = document.createElement(`li`);
  time.classList.add(`read-time`);
  entryInfo.appendChild(time);
  time.innerText = `${readTime(entryText, 200)} mins`;

  // Add link for current entry to the nav
  const link = document.createElement(`a`);
  link.classList.add(`nav-item`);
  nav.appendChild(link);
  link.setAttribute(`href`, `#${singleEntry.id}`);
  link.innerText = title.innerText;
}
