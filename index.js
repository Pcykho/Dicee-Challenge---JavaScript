// Dice Game Gen JavaScript by Pcykho Duke @ pcykho.com
// special thanks to Angela Yu @ appbrewary.co

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*5;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1+1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*5;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2+1;


if (randomNumber1 == 0) {
    document.querySelector(".img1").setAttribute("src" , "images/dice1.png") ;
} if (randomNumber1 == 1) {
    document.querySelector(".img1").setAttribute("src" , "images/dice2.png") ;
} if (randomNumber1 == 2) {
    document.querySelector(".img1").setAttribute("src" , "images/dice3.png") ;
} if (randomNumber1 == 3) {
    document.querySelector(".img1").setAttribute("src" , "images/dice4.png") ;
} if (randomNumber1 == 4) {
    document.querySelector(".img1").setAttribute("src" , "images/dice5.png") ;
} else if (randomNumber1 == 5) {
    document.querySelector(".img1").setAttribute("src" , "images/dice6.png") ;
}


if (randomNumber2 == 0) {
    document.querySelector(".img2").setAttribute("src" , "images/dice1.png") ;
} if (randomNumber2 == 1) {
    document.querySelector(".img2").setAttribute("src" , "images/dice2.png") ;
} if (randomNumber2 == 2) {
    document.querySelector(".img2").setAttribute("src" , "images/dice3.png") ;
} if (randomNumber2 == 3) {
    document.querySelector(".img2").setAttribute("src" , "images/dice4.png") ;
} if (randomNumber2 == 4) {
    document.querySelector(".img2").setAttribute("src" , "images/dice5.png") ;
} else if (randomNumber2 == 5) {
    document.querySelector(".img2").setAttribute("src" , "images/dice6.png") ;
}  


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins";
} if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins";
} if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw, Let's Try Again.";
} else {

}