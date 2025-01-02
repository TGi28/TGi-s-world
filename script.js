var catchTime = document.querySelector("button.catch");
var time = document.querySelector("div.clock");
var start = document.querySelector("button.start");
var stop = document.querySelector("button.stop");
var reset = document.querySelector("button.reset");
var timewatch = document.querySelector("div.timewatch");
var track = document.getElementById("track");
var rightCarousel = document.getElementById("right-glide");
var leftCarousel = document.getElementById("left-glide");
var staticWidth = document.getElementById("carouselimg").offsetWidth;
var images = track.children.length - 1;

let count = 0;
let second = 0;

var slideWidth = 0;

setInterval(() => {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  time.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

start.addEventListener("click", () => {
  timer = true;
  startTime();
});

stop.addEventListener("click", () => {
  timer = false;
  if (timewatch.textContent == "10:0") {
    alert("You win");
  }
});

reset.addEventListener("click", () => {
  timer = false;
  count = 0;
  second = 0;
  timewatch.textContent = `${second}:${count}`;
});

function startTime() {
  if (timer) {
    count++;
    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 15) {
      second = 0;
      count = 0;
    }
    timewatch.textContent = `${second}:${count}`;
    setTimeout(startTime, 10);
  }
}

rightCarousel.addEventListener("click", () => {
  if (slideWidth == -staticWidth * images) {
    slideWidth = staticWidth;
  }
  slideWidth = slideWidth - staticWidth;
  track.style.transform = `translateX(${slideWidth}px)`;
});

leftCarousel.addEventListener("click", () => {
  if (slideWidth == 0) {
    slideWidth = -staticWidth * (images + 1);
  }
  slideWidth = slideWidth + staticWidth;
  track.style.transform = `translateX(${slideWidth}px)`;
});
