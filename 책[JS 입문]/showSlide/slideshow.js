var slides = document.querySelectorAll("#container > img"); // 이미지들을 저장한 배열
var prev = document.querySelector("#prev"); // 이전    버튼
var next = document.querySelector("#next"); // 다음    버튼

var current = 0; // 슬라이드 인덱스 값 저장 변수

showSlide(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n) {
  // 모든    이미지를    감춘    후    인덱스가    n인    이미지만    화면에    표시
  for (var i = 0; i < slides.length; i++) {
    // slides 배열의    처음부터    끝까지    반복
    slides[i].style.display = "none"; // 모든    이미지를    화면에서    감춤 }
    slides[n].style.display = "block"; // n번째    이미지를    화면에    표시 }
  }
}

function prevSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1; // 현재 이미지가 첫 번째라면 마지막으로
  showSlide(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlide(current);
}
