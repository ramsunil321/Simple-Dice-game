var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomsrcImage = "./images/" + randomDiceImage


document.querySelectorAll("img")[0].setAttribute("src",randomsrcImage)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomsrcImage2 = "./images/" + randomDiceImage2

document.querySelectorAll("img")[1].setAttribute("src",randomsrcImage2)

var player1 = prompt("Enter 1st player name:")
var player2 = prompt("Enter 2nd player name:")

document.querySelectorAll("p")[0].innerHTML = player1.toUpperCase()
document.querySelectorAll("p")[1].innerHTML = player2.toUpperCase()

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  player1.toUpperCase() + " WON"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = player2.toUpperCase() + " WON"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}
