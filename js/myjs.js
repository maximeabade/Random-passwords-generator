var number_of_chars = 10;
var myWord = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomGenerator() {
    for (var i=0 ; i<number_of_chars ; i++) {
        myWord += charAt(getRandomInt(128));
        console.log(myWord);
    }
    var body = document.getElementById("put_it_here");
    var myTextContainer = document.createElement("p");
    myTextContainer.textContent = myWord;
    body.appendChild(myTextContainer);
}