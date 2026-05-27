const playlist = [
    {
        title: "Nuestra Primera Canción",
        audio: "multi/audio/1.mp3",
        cover: "multi/img/cover.jpg"
    }
];

let currentTrackIndex = 0;
const audio = document.getElementById('audio-element');
const audioSource = document.getElementById('audio-source');
const coverImg = document.getElementById('cover-img');
const songTitle = document.getElementById('song-title');

const btnPlay = document.getElementById('btn-play');
const playIcon = document.getElementById('play-icon');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

function loadTrack(index) {
    const track = playlist[index];
    audioSource.src = track.audio;
    coverImg.src = track.cover;
    songTitle.textContent = track.title;
    audio.load();
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.innerHTML = "&#10074;&#10074;"; // Icono Pausa
    } else {
        audio.pause();
        playIcon.innerHTML = "&#9654;"; // Icono Play
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playIcon.innerHTML = "&#10074;&#10074;";
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playIcon.innerHTML = "&#10074;&#10074;";
}

btnPlay.addEventListener('click', togglePlay);
btnNext.addEventListener('click', nextTrack);
btnPrev.addEventListener('click', prevTrack);
audio.addEventListener('ended', nextTrack);

loadTrack(currentTrackIndex);