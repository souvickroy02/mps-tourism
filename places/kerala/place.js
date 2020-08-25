const btnScrollToTop = document.querySelector("#buttonToTop");
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var slideIndex, slides, dots, captionText;
function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity = 1;

  captionText = document.querySelector(".captionTextHolder .captionText");
  captionText.innerText = slides[slideIndex].querySelector(
    ".captionText"
  ).innerText;

  //disable nextPrevBtn if slide count is one
  if (slides.length < 2) {
    var nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
    nextPrevBtns.style.display = "none";
    for (i = 0; i < nextPrevBtn.length; i++) {
      nextPrevBtn[i].style.display = "none";
    }
  }

  //add dots
  dots = [];
  var dotsContainer = document.getElementById("dotsContainer"),
    i;
  for (i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dot.setAttribute("onclick", "moveSlide(" + i + ")");
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
  moveSlide(slideIndex + n);
}
function moveSlide(n) {
  var i;
  var current, next;
  var moveSlideAnimClass = {
    forCurrent: "",
    forNext: "",
  };
  var slideTextAnimClass;
  if (n > slideIndex) {
    if (n >= slides.length) {
      n = 0;
    }
    moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
    moveSlideAnimClass.forNext = "moveLeftNextSlide";
    slideTextAnimClass = "slideTextFromTop";
  } else if (n < slideIndex) {
    if (n < 0) {
      n = slides.length - 1;
    }
    moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
    moveSlideAnimClass.forNext = "moveRightPrevSlide";
    slideTextAnimClass = "slideTextFromBottom";
  }

  if (n != slideIndex) {
    next = slides[n];
    current = slides[slideIndex];
    for (i = 0; i < slides.length; i++) {
      slides[i].className = "imageHolder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex = n;
    captionText.style.display = "none";
    captionText.className = "captionText " + slideTextAnimClass;
    captionText.innerText = slides[n].querySelector(".captionText").innerText;
    captionText.style.display = "block";
  }
}
var timer = null;
function setTimer() {
  timer = setInterval(function () {
    plusSlides(1);
  }, 3000);
}
setTimer();
function playPauseSlides() {
  var playPauseBtn = document.getElementById("playPause");
  if (timer == null) {
    setTimer();
    playPauseBtn.style.backgroundPositionY = "0px";
  } else {
    clearInterval(timer);
    timer = null;
    playPauseBtn.style.backgroundPositionY = "-33px";
  }
}

var j = 0;

function read() {
  if (!j) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("dt").style.display = "none";
    document.getElementById("fplace").style.padding = "0px 0px 500px 0px";
    document.getElementById("read").innerHTML = "Read Less";
    j = 1;
  } else {
    document.getElementById("more").style.display = "none";
    document.getElementById("dt").style.display = "inline";
    document.getElementById("fplace").style.padding = "0px 0px 300px 0px";
    document.getElementById("read").innerHTML = "Read More";
    j = 0;
  }
}

// second place

var slideIndex1, slides1, dots1, captionText1;
function initGallery1() {
  slideIndex1 = 0;
  slides1 = document.getElementsByClassName("imageHolder1");
  slides1[slideIndex1].style.opacity = 1;

  captionText1 = document.querySelector(".captionTextHolder1 .captionText1");
  captionText1.innerText = slides1[slideIndex1].querySelector(
    ".captionText1"
  ).innerText;

  //disable nextPrevBtn if slide count is one
  if (slides1.length < 2) {
    var nextPrevBtns1 = document.querySelector(".leftArrow1,.rightArrow1");
    nextPrevBtns1.style.display = "none";
    for (i = 0; i < nextPrevBtn1.length; i++) {
      nextPrevBtn1[i].style.display = "none";
    }
  }

  //add dots
  dots1 = [];
  var dotsContainer1 = document.getElementById("dotsContainer1"),
    i;
  for (i = 0; i < slides1.length; i++) {
    var dot1 = document.createElement("span");
    dot1.classList.add("dots1");
    dotsContainer1.append(dot1);
    dot1.setAttribute("onclick", "moveSlide1(" + i + ")");
    dots1.push(dot1);
  }
  dots1[slideIndex1].classList.add("active");
}
initGallery1();
function plusSlides1(n) {
  moveSlide1(slideIndex1 + n);
}
function moveSlide1(n) {
  var i;
  var current, next;
  var moveSlideAnimClass1 = {
    forCurrent1: "",
    forNext1: "",
  };
  var slideTextAnimClass1;
  if (n > slideIndex1) {
    if (n >= slides1.length) {
      n = 0;
    }
    moveSlideAnimClass1.forCurrent1 = "moveLeftCurrentSlide1";
    moveSlideAnimClass1.forNext1 = "moveLeftNextSlide1";
    slideTextAnimClass1 = "slideTextFromTop1";
  } else if (n < slideIndex1) {
    if (n < 0) {
      n = slides1.length - 1;
    }
    moveSlideAnimClass1.forCurrent1 = "moveRightCurrentSlide1";
    moveSlideAnimClass1.forNext1 = "moveRightPrevSlide1";
    slideTextAnimClass1 = "slideTextFromBottom1";
  }

  if (n != slideIndex1) {
    next = slides1[n];
    current = slides1[slideIndex1];
    for (i = 0; i < slides1.length; i++) {
      slides1[i].className = "imageHolder1";
      slides1[i].style.opacity = 0;
      dots1[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass1.forCurrent1);
    next.classList.add(moveSlideAnimClass1.forNext1);
    dots1[n].classList.add("active");
    slideIndex1 = n;
    captionText1.style.display = "none";
    captionText1.className = "captionText1 " + slideTextAnimClass1;
    captionText1.innerText = slides1[n].querySelector(
      ".captionText1"
    ).innerText;
    captionText1.style.display = "block";
  }
}
var timer1 = null;
function setTimer1() {
  timer1 = setInterval(function () {
    plusSlides1(1);
  }, 3000);
}
setTimer1();
function playPauseSlides1() {
  var playPauseBtn1 = document.getElementById("playPause1");
  if (timer1 == null) {
    setTimer1();
    playPauseBtn1.style.backgroundPositionY = "0px";
  } else {
    clearInterval(timer1);
    timer1 = null;
    playPauseBtn1.style.backgroundPositionY = "-33px";
  }
}

var k = 0;

function read1() {
  if (!k) {
    document.getElementById("more1").style.display = "inline";
    document.getElementById("dt1").style.display = "none";
    document.getElementById("splace").style.padding = "0px 0px 500px 0px";
    document.getElementById("read1").innerHTML = "Read Less";
    k = 1;
  } else {
    document.getElementById("more1").style.display = "none";
    document.getElementById("dt1").style.display = "inline";
    document.getElementById("splace").style.padding = "0px 0px 300px 0px";
    document.getElementById("read1").innerHTML = "Read More";
    k = 0;
  }
}

// third place

var slideIndex2, slides2, dots2, captionText2;
function initGallery2() {
  slideIndex2 = 0;
  slides2 = document.getElementsByClassName("imageHolder2");
  slides2[slideIndex2].style.opacity = 1;

  captionText2 = document.querySelector(".captionTextHolder2 .captionText2");
  captionText2.innerText = slides2[slideIndex2].querySelector(
    ".captionText2"
  ).innerText;

  //disable nextPrevBtn if slide count is one
  if (slides2.length < 2) {
    var nextPrevBtns2 = document.querySelector(".leftArrow2,.rightArrow2");
    nextPrevBtns2.style.display = "none";
    for (i = 0; i < nextPrevBtn2.length; i++) {
      nextPrevBtn2[i].style.display = "none";
    }
  }

  //add dots
  dots2 = [];
  var dotsContainer2 = document.getElementById("dotsContainer2"),
    i;
  for (i = 0; i < slides2.length; i++) {
    var dot2 = document.createElement("span");
    dot2.classList.add("dots2");
    dotsContainer2.append(dot2);
    dot2.setAttribute("onclick", "moveSlide2(" + i + ")");
    dots2.push(dot2);
  }
  dots2[slideIndex2].classList.add("active");
}
initGallery2();
function plusSlides2(n) {
  moveSlide2(slideIndex2 + n);
}
function moveSlide2(n) {
  var i;
  var current, next;
  var moveSlideAnimClass2 = {
    forCurrent2: "",
    forNext2: "",
  };
  var slideTextAnimClass2;
  if (n > slideIndex2) {
    if (n >= slides2.length) {
      n = 0;
    }
    moveSlideAnimClass2.forCurrent2 = "moveLeftCurrentSlide2";
    moveSlideAnimClass2.forNext2 = "moveLeftNextSlide2";
    slideTextAnimClass2 = "slideTextFromTop2";
  } else if (n < slideIndex2) {
    if (n < 0) {
      n = slides2.length - 1;
    }
    moveSlideAnimClass2.forCurrent2 = "moveRightCurrentSlide2";
    moveSlideAnimClass2.forNext2 = "moveRightPrevSlide2";
    slideTextAnimClass2 = "slideTextFromBottom2";
  }

  if (n != slideIndex2) {
    next = slides2[n];
    current = slides2[slideIndex2];
    for (i = 0; i < slides2.length; i++) {
      slides2[i].className = "imageHolder2";
      slides2[i].style.opacity = 0;
      dots2[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass2.forCurrent2);
    next.classList.add(moveSlideAnimClass2.forNext2);
    dots2[n].classList.add("active");
    slideIndex2 = n;
    captionText2.style.display = "none";
    captionText2.className = "captionText2 " + slideTextAnimClass2;
    captionText2.innerText = slides2[n].querySelector(
      ".captionText2"
    ).innerText;
    captionText2.style.display = "block";
  }
}
var timer2 = null;
function setTimer2() {
  timer2 = setInterval(function () {
    plusSlides2(1);
  }, 3000);
}
setTimer2();
function playPauseSlides2() {
  var playPauseBtn2 = document.getElementById("playPause2");
  if (timer2 == null) {
    setTimer2();
    playPauseBtn2.style.backgroundPositionY = "0px";
  } else {
    clearInterval(timer2);
    timer2 = null;
    playPauseBtn2.style.backgroundPositionY = "-33px";
  }
}

var l = 0;

function read2() {
  if (!l) {
    document.getElementById("more2").style.display = "inline";
    document.getElementById("dt2").style.display = "none";
    document.getElementById("tplace").style.padding = "0px 0px 450px 0px";
    document.getElementById("read2").innerHTML = "Read Less";
    l = 1;
  } else {
    document.getElementById("more2").style.display = "none";
    document.getElementById("dt2").style.display = "inline";
    document.getElementById("tplace").style.padding = "0px 0px 300px 0px";
    document.getElementById("read2").innerHTML = "Read More";
    l = 0;
  }
}
