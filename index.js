function rollThemBones() {
  var playerOne = Math.floor(Math.random() * 6) + 1;
  var playerTwo = Math.floor(Math.random() * 6) + 1;

  // var redDice = "images/redDice.png";
  // document.querySelector(".img1").src = redDice;
  // document.querySelector(".img2").src = redDice;

  var audio = new Audio("images/diceRoll.wav");
  audio.play();
  sleep(2000);

  var diceOne = "images/dice" + playerOne + ".png";
  var diceTwo = "images/dice" + playerTwo + ".png";
  document.querySelector(".img1").src = diceOne;
  document.querySelector(".img2").src = diceTwo;

  sleep(1000);

  if(playerOne>playerTwo) {
    //playerOneWins change
  }
  else {
    //playerTwo win change
  }

  sleep(2000);

  //change back to original state.
}
