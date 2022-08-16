const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // 현재 시스템의 시간을 알려줌
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //number->String 변경원할시 number format을 String()으로 감싸면 됨.

  /*
padStart, padEnd : 문자열의 길이를 원하는만큼 조정 가능
1 --> 01로 조정 가능("1".padStart(2, "0"));
*/

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // function을 설정한 시간마다 반복하게함
