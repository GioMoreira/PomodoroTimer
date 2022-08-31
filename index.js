const initial_time_in_seconds = 25 * 60; // 1500 secs
let time_in_seconds = initial_time_in_seconds;
let timer = null;

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');


playButton.addEventListener('click', startCounter);
pauseButton.addEventListener('click', pauseCounter);
resetButton.addEventListener('click', resetCounter)


updateDom();

function startCounter() {
    pauseButton.disabled = false;
    playButton.disabled = true;
    timer = setInterval(() => {
        time_in_seconds --;
        updateDom();      
    }, 1000);
}

function pauseCounter() {
    playButton.disabled = false;
    pauseButton.disabled = true;
    clearInterval(timer);
    
}

function resetCounter() {
    clearInterval(timer);
    time_in_seconds = initial_time_in_seconds;
    updateDom();
}

function updateDom(){
    const minutes = Math.floor(time_in_seconds/60);
    document.getElementById('min').innerHTML = String(minutes).padStart(2,0);

    const seconds = time_in_seconds % 60;
    document.getElementById('sec').innerHTML = String(seconds).padStart(2, 0);
}