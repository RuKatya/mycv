"use strict";

var upBtn = document.querySelector('.up-button');
var downBtn = document.querySelector('.down-button');
var sideBar = document.querySelector('.sidebar');
var container = document.querySelector('.container');
var mainSlide = document.querySelector('.main-slide');
var slideCount = mainSlide.querySelectorAll('div').length; //----SLIDES----//

sideBar.style.top = "-".concat((slideCount - 1) * 100, "vh");
var activeSlideIndex = 0;
upBtn.addEventListener('click', function () {
  changeSlide('up');
});
downBtn.addEventListener('click', function () {
  changeSlide('down');
});
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
});

function changeSlide(direction) {
  if (direction === 'down') {
    activeSlideIndex++;

    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'up') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }

  var height = container.clientHeight;
  mainSlide.style.transform = "translateY(-".concat(activeSlideIndex * height, "px)");
  sideBar.style.transform = "translateY(".concat(activeSlideIndex * height, "px)");
}