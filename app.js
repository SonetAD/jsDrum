document.addEventListener('keyup', (e) => {
  const keyMatch = e.key.toUpperCase();
  const keyBoard = document.querySelectorAll('.container div');

  keyBoard.forEach((k) => {
    if (k.textContent == keyMatch) {
      let audio = new Audio(`./sounds/${keyMatch}.wav`);
      audio.play();
      k.className = 'playing';
    }
    setTimeout(() => {
      k.className = '';
    }, 200);
  });
});
