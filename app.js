/**
 * AUDIOSCRIPT — DYNAMIC UI ENGINE
 * Smooth, synchronized live countdown timer across Desktop and Mobile Remote previews
 */

document.addEventListener('DOMContentLoaded', () => {

  let currentSeconds = 165; // 02:45
  const cueTimer1 = document.getElementById('cueTimer1');
  const deckTimeDisplay = document.getElementById('deckTimeDisplay');
  const remTimer = document.getElementById('remTimer');

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `-${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // Smooth live ticking loop
  setInterval(() => {
    currentSeconds--;
    if (currentSeconds < 140) {
      currentSeconds = 165;
    }
    const formatted = formatTime(currentSeconds);
    if (cueTimer1) cueTimer1.textContent = formatted;
    if (deckTimeDisplay) deckTimeDisplay.textContent = formatted;
    if (remTimer) remTimer.textContent = formatted;
  }, 1000);

});
