/* ICS-385 - Week 2
Author: Brisa Carter
Modifying from : Angela Yu
 */

//generaates random number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

//assigns image to first dice
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//selectcs dice 1
var image1 = document.querySelectorAll("img")[0];

//assigns random image to first dice
image1.setAttribute("src", randomImageSource);

//generaates random number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//generates random number 3
var randomNumber3 = Math.floor(Math.random() * 6) + 1;

var randomImageSource3 = "images/dice" + randomNumber3 + ".png";
//assigns random image to 2nd dice
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

//if player 1 wins
if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
//if player 2 wins
else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
//if player 3 wins
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 3 Wins! 🚩";
}
//all other cases
else {
  document.querySelector("h1").innerHTML = "There is no winner.";
}
