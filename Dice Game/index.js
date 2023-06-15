var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates a random number from 1 to 6.

// concatinating the randomNumber1 between dice and .png so that the random number obtained can be filled as for eg. dice1.png which is the name of our image.

var randomImage = "dice" + randomNumber1 + ".png"; //inserts number and randomly selects dice1 to dice6.

var randomImageSource = "images/" + randomImage; //gets images/dice1.png - images/dice6.png;

var image1 = document.querySelectorAll("img")[0]; // selects tags that has img attribute name.

image1.setAttribute("src", randomImageSource); // changes src = dice6.png in the htmml to randomImageSource.

//for image 2 same as above but with some refactoring

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // refactoring the code so that we dont have to make another randomImage variable.

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //refactoring the code so we dont have to write image2.setAttribute("src", randomImageSource2); or create new variable.

// if else statement for the winner and draw.

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}













































