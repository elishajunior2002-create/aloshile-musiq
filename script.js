function playMusic() {
    const audio = document.getElementById("audio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function showMessage() {
    alert("Thanks for reaching out to Aloshile Musiq! 🎵");
}