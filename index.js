function rollThemBones() {
  var playerOne = Math.floor(Math.random() * 6) + 1;
  var playerTwo = Math.floor(Math.random() * 6) + 1;

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
