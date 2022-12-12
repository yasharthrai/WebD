const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

//console.log(ourItemDiv);

for(let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if(result) {
        openIcon[i].style.display = "none";
        closeIcon[i].style.display = "block";
    }
    else {
        openIcon[i].style.display = "block";
        closeIcon[i].style.display = "none";
    }

  });
}
