let elHeader = document.querySelector(".header");
let elHeaderHamburgBtn = document.querySelector(".platforms__lang");

elHeaderHamburgBtn.addEventListener('click', function(){
    elHeader.classList.toggle("header--active");
})
function myFunction(x) {
   x.classList.toggle("change");
 }