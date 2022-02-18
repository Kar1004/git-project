jsx
let spanElt = document.querySelector(".timer span");
let timer = 30;

setInterval(function() {
    timer++;
    spanElt.textContent = timer
}, 1000);
