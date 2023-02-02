var chrono = document.querySelector("span")
var button = document.getElementById("firing-button")
var rocket = document.getElementById("rocket")
var lanceur = document.getElementById("launching-ramp")
var sec = "10"

//listener qui trigger mise a feu de la fusée
button.addEventListener("click", () => {
    button.classList.add("disabled")
    function compteARebour(){
    if(sec > "0") {
    chrono()
    } else {
       decolage()
    }
}
setInterval(compteARebour,1000)
})

//fonction qui gère le chrono
function chrono(){
    sec-= "1"
    chrono.textContent = sec
    rocket.src = "./images/rocket2.gif"
}

//fonction qui gère le décolage
function decolage() {
    chrono.textContent = "0"
    rocket.src = "./images/rocket3.gif"
    rocket.classList.add("tookOff")
}
