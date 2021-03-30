document.addEventListener('keydown', (e) => {
  const keyMatch = e.key.toUpperCase();
  const keyBoard = document.querySelectorAll('.container div');

  keyBoard.forEach((k) => {
    if (k.textContent == keyMatch) {
      let audio = new Audio(`./sounds/${keyMatch}.wav`);
      audio.currentTime = 0;
      audio.play();
      k.className = 'playing';
    }
    setTimeout(() => {
      k.className = '';
    }, 200);
  });
});
