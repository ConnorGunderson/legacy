const soundBoard = document.getElementById("soundboard");


soundBoard.onmousedown = e => {
  if (e.target.nodeName !== "BUTTON") return;

  const audio = e.target.querySelector('audio');

  if (!audio.ended) audio.load();

  audio.play()
}