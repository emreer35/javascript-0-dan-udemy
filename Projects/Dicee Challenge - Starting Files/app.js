// select image 
const img1 = document.querySelectorAll(".img1")[0]
document.getElementById("btn").addEventListener("click",function(){
    // random number 
let randomNumber1 = Math.floor(Math.random() * 6) + 1 // to 1-6
// docs

const randomDiceImage = "dice" + randomNumber1 + ".png"
const imageSource = "images/" + randomDiceImage

img1.setAttribute("src",imageSource)

const randomNumber2 = Math.floor(Math.random() * 6) + 1
const imageDocs = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll(".img2")[0].setAttribute("src", imageDocs)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}

})


