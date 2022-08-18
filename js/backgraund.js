const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
/*
quote와 동일한 방법으로 image 정보를 담고 있는 array를 만들고, 
무작위 index를 통해 하나의 image를 선택한 후 img tag를 생성하여 
선택된 img의 경로를 추가하여 구현하였다.
*/

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");
//document.createElement("element")
//: element의 요소를 document에 추가한다.

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
//appendChild : body에 html을 추가
// <=> prepend : 가장 앞에 추가
