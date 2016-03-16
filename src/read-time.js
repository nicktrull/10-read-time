'use strict';

function readTime(string, wpm = 1) {
  return Math.ceil(string.split(` `).length / wpm);
}
