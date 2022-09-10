var rand = Math.floor(Math.random() * 100) + 1;
var count = 0;

document.querySelector("#try").onkeypress = function (e) {
  if (e.keycode == 13 || e.which == 3) {
    // 눌린 키가 enter라면
    finding(); // finding()함수 시행
    return false; // keypress이벤트가 발생했을 때 브라우저가 기본으로 하는 동작 취소
  }
};

function finding() {
  var userNumber = document.querySelector("#try").value;
  // var display = document.querySelector("#display");
  if (userNumber >= 0 && userNumber <= 100) {
    if (userNumber > rand) {
      document.getElementById("display").innerText = "DOWN!";
    } else if (userNumber < rand) {
      document.getElementById("display").innerText = "UP!";
    } else {
      display.innerHTML = "<span style = 'color:red'>정답입니다!</span>";
    }
    count++;
    document.querySelector("#counter").innerHTML =
      "시도한 횟수 : " + count + "회";
  } else {
    alert("0에서 100 사이의 숫자를 입력하세요.");
  }
}
