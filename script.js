function scrollToSection(sectionId) {
	document.getElementById(sectionId).scrollIntoView({
		behavior: 'smooth'
	});
}

/* --------------- Countdown Function  --------------------- */

let day = document.getElementById("day");

let hr = document.getElementById("hr");

let min = document.getElementById("min");

let sec = document.getElementById("sec");

let endDate = new Date("July 6, 2024 00:00:00")
let endTime = endDate.getTime();



function countdown() {

  let todayDate = new Date();

  let todayTime = todayDate.getTime();

  let remainingTime = endTime - todayTime;

  let oneMin = 60 * 1000;

  let oneHr = 60 * oneMin;

  let oneDay = 24 * oneHr;



  let addZero = (num) => (num < 10 ? `0${num}` : num);


  a = endTime - todayTime
  if (
a <= 0 && a >= -61200000){
    clearInterval(i);

    document.getElementById("bye").innerHTML = "<h1> Acara Sedang Berlangsung</h1>";
  
  }
  else if (
a <= 0 && a <= -61200000){
    clearInterval(i);

    document.getElementById("bye").innerHTML = "<h1> Acara Sudah Berlangsung</h1>";
  


  }
    else {

    let daysLeft = Math.floor(remainingTime / oneDay);

    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);

    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);

    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);



    day.textContent = addZero(daysLeft);

    hr.textContent = addZero(hrsLeft);

    min.textContent = addZero(minsLeft);

    sec.textContent = addZero(secsLeft);

  }

}



let i = setInterval(countdown, 1000);

countdown();



/* --------------- End Countdown Function  --------------------- */

function enterMainPage() {
    document.getElementById('opening-screen').style.display = 'none';
    setTimeout(() => {
    	document.getElementById('main-content').style.display = 'block';
    	var audio = document.getElementById('myAudio');
        audio.play();
	}, 500); 
    
}

// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER

document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('myAudio');
    audio.autoplay = true;
    audio.load();
    
    // Check if the audio can play immediately
    if (audio.readyState >= 3) {  // HAVE_FUTURE_DATA
        audio.play().catch(error => {
            console.log("Autoplay was prevented:", error);
        });
    } else {
        // Fallback for older browsers or if the file is not ready
        audio.addEventListener('canplay', () => {
            audio.play().catch(error => {
                console.log("Autoplay was prevented:", error);
            });
        });
    }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function autoSlide() {
    changeSlide(1);
}

let slideInterval = setInterval(autoSlide, 5000); // Change slide every 3 seconds

document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 5000);
});

