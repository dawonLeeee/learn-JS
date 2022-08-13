const h1 = document.querySelector("div.hello:first-child h1"); /// # : id를 의미


// classList : HTML element의 class에 포함되어 있는지 보여줌
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}


h1.addEventListener("click", handleTitleClick);


