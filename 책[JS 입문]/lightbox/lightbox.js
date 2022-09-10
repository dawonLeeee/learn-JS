// var pics = document.querySelectorAll(".row > img");
var pics = document.querySelectorAll(".pic"); // pic인 요소들을 가져와 pics라는 변수에 저장

var lightbox = document.querySelector("#lightbox");
var lightboxImage = document.querySelector("#lightboxImage");

for (var i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  var bigLocation = this.getAttribute("data-src");
  // this(이벤트가 발생한 썸네일 이미지)에서 data-src속성값을 가져와 bigLocation변수에 저장
  lightboxImage.setAttribute("src", bigLocation); // lightboxImage.src = bigLocation;
  lightbox.style.display = "block"; //라이트박스 이미지를 화면에 표시
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
};
