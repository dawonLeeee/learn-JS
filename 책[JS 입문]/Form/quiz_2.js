var round = document.querySelector("#round");
var area = document.querySelector("#area");

var start = document.querySelector("#start");

start.addEventListener("click", function () {
  var radius = document.querySelector("#radius");
  round.value = Number(radius.value) * Math.PI * 2;
  area.value = Number(radius.value) * Number(radius.value) * Math.PI;
});
