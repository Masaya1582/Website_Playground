const playButton = document.getElementById('play-button');
const audioElement = document.getElementById('audio-element');

playButton.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play();
    playButton.textContent = 'Pause Audio';
  } else {
    audioElement.pause();
    playButton.textContent = 'Play Audio';
  }
});
