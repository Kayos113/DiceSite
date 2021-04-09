function rollThemBones() {
  // var redDice = "images/redDice.png";
  // document.querySelector(".img1").src = redDice;
  // document.querySelector(".img2").src = redDice;

  var audio = new Audio("images/diceRoll.wav");
  audio.play();
  
  window.setTimeout(function () {
    var playerOne = Math.floor(Math.random() * 6) + 1;
    var playerTwo = Math.floor(Math.random() * 6) + 1;
    var diceOne = "images/dice" + playerOne + ".png";
    var diceTwo = "images/dice" + playerTwo + ".png";
    document.querySelector(".img1").src = diceOne;
    document.querySelector(".img2").src = diceTwo;
    }, 1300);
}
