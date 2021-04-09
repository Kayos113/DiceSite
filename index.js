function rollThemBones() {

  var audio = new Audio("images/diceRoll.wav");
  audio.play();

  var rand;
  var redDice = "images/redDice.png";
  document.querySelector(".img1").src = redDice;
  document.querySelector(".img2").src = redDice;
  for(var i=0; i<1300; i+=rand)
  {
    rand = Math.floor(Math.random()*75)+1
    window.setTimeout(function() {
      document.querySelector(".img1").style.transform = 'rotate('+rand+'deg)';
      document.querySelector(".img2").style.transform = 'rotate('+(rand*-1)+'deg)';
    }, rand);
  }
  document.querySelector(".img1").style.transform = 'rotate('+0+'deg)';
  document.querySelector(".img2").style.transform = 'rotate('+0+'deg)';

  var playerOne = Math.floor(Math.random() * 6) + 1;
  var playerTwo = Math.floor(Math.random() * 6) + 1;
  var diceOne = "images/dice" + playerOne + ".png";
  var diceTwo = "images/dice" + playerTwo + ".png";
  document.querySelector(".img1").src = diceOne;
  document.querySelector(".img2").src = diceTwo;
}
