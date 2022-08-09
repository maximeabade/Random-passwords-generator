var number_of_chars = 100;
var myWord = "";
var myString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&é(-è_çà)=*/-.,;:!§~#{[|`\^@]}`]}^¨$£¤µ*%ù"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomGenerator() {
    for (var i=0 ; i<number_of_chars ; i++) {
        myWord += myString.charAt(getRandomInt(myString.length));
        console.log(myWord);
    }
    var retour = myWord;
    var body = document.getElementById("put_it_here");
    var myTextContainer = document.createElement("p");
    myTextContainer.textContent = myWord;
    body.appendChild(myTextContainer);
    myWord = "";
    return retour;
}