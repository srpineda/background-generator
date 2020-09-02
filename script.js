var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colorRandom = document.querySelector(".colorRandom");
var body = document.getElementById("gradient");

function setBgGradient(){
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomString(length) {
    return Math.round((Math.pow(16, length + 1) - Math.random() * Math.pow(16, length))).toString(16).slice(1);
}

function setRandomBgGradient() {
    color1.value = "#" + randomString(6);
    color2.value = "#" + randomString(6);
    while (color2.value === color1.value){
        color2.value = "#" + randomString(6);
    }

    setBgGradient();
}

setBgGradient();
color1.addEventListener("input", setBgGradient);
color2.addEventListener("input", setBgGradient);
colorRandom.addEventListener("click", setRandomBgGradient);