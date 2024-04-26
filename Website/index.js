let memeInterval;

//function to move the image around the page
function moveMemeImage () {
    const memeImage = document.getElementById('memeImage');
    memeImage.style.left = Math.random() * (window.innerWidth - memeImage.clientWidth) + 'px';
    memeImage.style.top = Math.random() * (window.innerHeight - memeImage.clientHeight) + 'px';
}

//function to enable start button and start moving the image 
function startMemeMovement() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    startButton.disabled = true;
    stopButton.disabled = false;
    memeInterval = setInterval(moveMemeImage, 1000);
}

//function to enable stop button and stop moving the image 
function stopMemeMovement() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(memeInterval);
}