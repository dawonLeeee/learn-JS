var pizza = 24000;

var sideMenu = document.querySelectorAll(".checkbx");

var total = price + "원";

for (var i = 0; i < sideMenu.length; i++) {
  sideMenu[i].onclick = function () {
    if (this.checked == true) {
      price += parseInt(this.value);
    } else {
      price -= parseInt(this.value);
    }
  };
}
