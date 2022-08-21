var arr = [];

arr.push("나는 날마다, 모든 면에서, 점점 더 좋아지고 있다.");
arr.push("인생에 뜻을 세우는데 적당한 때는 없다.");
arr.push("실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.");
arr.push("우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.");
arr.push("너 자신이 돼라. 다른 사람은 이미 있으니까.");
arr.push("세상에 공짜는 없다.");
arr.push("또 후회한들 무엇하랴.");
arr.push("인생은 가까이서 보면 비극, 멀리서 보면 희극이다.");
arr.push("승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.");
arr.push("인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.");
arr.push("최고에 도달하려면 최저에서 시작해라.");
arr.push("배움은 의무도, 생존도 아니다.");
arr.push("행동의 가치는 그 행동을 끝까지 이루는 데 있다.");

showItem();

function showItem() {
  var listNum = Math.floor(Math.random() * arr.length + 1);
  var list = "<li>" + arr[listNum] + "</li>";

  document.querySelector("#words").innerHTML = list;

  var remove = document.querySelector("#delete");
  remove.addEventListener("click", changeItem);
}

function changeItem() {
  showItem();

  while (Math.floor(Math.random() * arr.length + 1) === listNum) {
    removeItem();
  }
}
