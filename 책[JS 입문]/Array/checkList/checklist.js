var itemList = [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); // addBtn.onclick = addList; 라고 해도 됨

function addList() {
  var item = document.querySelector("#item").value; // 텍스트 필드 내용 가져옴
  if (item != null) {
    itemList.push(item); // itemList 배열의 끝에 item 변수 값 추가
    document.querySelector("#item").value = ""; // id=”item”인 요소의 값을 지움
    document.querySelector("#item").focus(); // 텍스트 필드에 focus( ) 메서드 적용
  }
  showList();
}

function showList() {
  var list = "<ul>";
  for (var i = 0; i < itemList.length; i++) {
    list +=
      "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
  }
  list += "</ul>";
  document.querySelector("#itemList").innerHTML = list;

  var remove = document.querySelectorAll(".close");
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id");
  // this(누른 삭제 버튼)의 id값 가져와 id변수에 저장
  itemList.splice(id, 1);
  // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
  showList();
  //변경된 showList 다시 화면에 표시
}
