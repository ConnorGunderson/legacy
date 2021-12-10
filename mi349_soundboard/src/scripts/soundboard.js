let audio;

soundboard.onclick = e => {
    // if a button is not clicked, return
    if (e.target.nodeName !== 'BUTTON') return;

    // init audio object
    audio = e.target.querySelector("audio");

    // reset audio if not finished yet
    if (audio.ended === false) audio.load();

    // play the audio
    audio.play()
}