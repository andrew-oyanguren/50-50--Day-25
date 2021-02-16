// ===== Variables ===== //

const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming';

let idx = 1;
let speed = 300 / speedEl.value;

// ===== Event Listeners ===== //

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);

// ===== Functions ===== //

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx)
  // start incremention
  idx++
  // check if end of string
  if (idx > text.length) {
    idx = 1
  }
  // add speed element to our funtionality
  setTimeout(writeText, speed);
}
