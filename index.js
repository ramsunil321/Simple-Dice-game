var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var floderName = "./images/" + randomDiceImage

document.querySelectorAll("img")[0].setAttribute("src",floderName)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var floderName2 = "./images/" + randomDiceImage2

document.querySelectorAll("img")[1].setAttribute("src",floderName2)

var player1 = prompt('Enter player1 name:')
var player2 = prompt('Enter player2 name:')

document.querySelectorAll("p")[0].textContent = player1
document.querySelectorAll("p")[1].textContent = player2

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent =  player1 + " wins"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent =  player2 + " wins"
}
else{
    document.querySelector("h1").textContent = "Draw"
}