var mainAudio = document.getElementById('myAudio');
var playLink, pauseLink;
 playLink = document.getElementById("play").src
 pauseLink = `${document.getElementById("play").src.slice(0,playLink.length-7)}ause.png`

  function changeImage() {
    if (document.getElementById("play").src == playLink) 
    {
        
        document.getElementById("play").src = pauseLink;
        mainAudio.play();
    }
    else if(document.getElementById("play").src == pauseLink) 
    {
        document.getElementById("play").src = playLink;
        mainAudio.pause(); 
    }
  }

  
  var progressBar = document.querySelector('.progressBar');
  mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    progressBar.style.background = `rgb(255, 255, 255)`;
  
    let musicCurrentTime = document.querySelector('.start'),
    musicDuration = document.querySelector(".stop");
    let mainAdDuration = mainAudio.duration;

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){ //if sec is less than 10 then add 0 before it
      currentSec = `0${currentSec}`;
    }
    
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  })

  var progressArea = document.querySelector('.progressArea');

  progressArea.addEventListener("click", (e)=>{
    if(document.getElementById("play").src == playLink) {
      changeImage();
    }
    let progressWidth = 250; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    mainAudio.play(); //calling playMusic function
  });