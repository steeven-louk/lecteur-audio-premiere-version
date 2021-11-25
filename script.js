//elements du DOM sur lesquels on va interagir

const player = document.getElementById('player');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volUpBtn = document.getElementById('vol-up');
const volDownBtn = document.getElementById('vol-down');
const loopBtn = document.getElementById('loop');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const volContainer = document.getElementById('vol-container');
const volProgress = document.getElementById('vol-progress');


//Tous les titre present dans le dossier à lire

const songs = [
    'Sia - Chandelier',
    'MAIS JE T\'AIME - Grand Corps Malade & Camille Lellouche'
];

//Variables
let songIndex = 0;
let isStopped = true;
let islooping= true;

const currentSong = songs[songIndex];


//chargement des detail du song

loadSong(currentSong);

//Permet de recuperer les détails du song à jouer

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `cover/${song}.jpg`;
}

//List des événement du DOM
audio.addEventListener('error', audioError);
playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', stopSong);



//fonction permetant de jouer un song
function playSong(song) {

    if(isStopped) {
        loadSong(song);
        cover.alt=song;
    }
 
  /*  playBtn.querySelector('i.fas').classList.remove('.fa-play');
    playBtn.querySelector('i.fas').classList.add('.fa-pause');
    playBtn.querySelector('i.fas').style.color='#00ff00';*/
    document.getElementById('music-container').classList.remove('disable-animation');
    player.classList.remove('stop');
    player.classList.add('play');
    audio.play();
}

//permet de mettre le son en pause
function pauseSong() {
    player.classList.remove('play')
    document.getElementById('music-container').classList.add('disable-animation');

    audio.pause();
}

//permet d'arreter le song en cours de lecture
function stopSong() {
    document.getElementById('music-container').classList.add('disable-animation');
    player.classList.remove('play');
    player.classList.add('stop');
    title.innerText='Titre';
    audio.pause();
    audio.currentTime= 0;
    cover.alt = '';
    isStopped = true
}

//permet de lancer ou d'arreter le song en fonction de l'etat dans lequel il se trouve
function playPause() {
    const isPlaying = player.classList.contains('play');
    isPlaying ? pauseSong() : playSong(currentSong);
}




//Permet de renvoyer une erreur si le song n'est pas trouver
function audioError(){
    title.innerText = "Erreur lors du chargement"
}