let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById('guess-heading');
let userNumberUpdate = document.getElementById('inputBox');

//web reload 
const init = () => {
    computerGuess = Math.trunc(Math.random() * 100);

    document.getElementById('mybtn').style.display = "none";

    document.getElementById('Eattempt').style.display = "none";
};

const startgame = () => {
    document.getElementById('WelcomeScreen').style.display = "none";
    document.getElementById('Eattempt').style.display = "block";
}

//Load new game
const newGame = () =>{
    window.location.reload()
}

//start new game
const startNewGame = () => {
    document.getElementById('mybtn').style.display = "inline";
    userNumberUpdate.setAttribute('disabled', true)
}

//main logic

const compareGuess = () => {
    const userNumber = Number(document.getElementById('inputBox').value)
    userGuess = [ ...userGuess, userNumber ]
    document.getElementById('guess').innerHTML = userGuess;

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is High";
            userNumberUpdate.value = "";
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is Low";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "It is Correct..";
            userNumberUpdate.value = "";
            startNewGame()
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!! Correct Number is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame()
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!! Correct Number is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame()
        } else {
            userGuessUpdate.innerHTML = "It is Correct..";
            userNumberUpdate.value = "";
            startNewGame()
        }
    }
    document.getElementById('attempts').innerHTML = userGuess.length;

};

const easyStart = () => {
    maxGuess = 10;
    startgame();
}

const hardStart = () => {
    maxGuess = 5;
    startgame();
}





// document.getElementById('attempts').innerHTML = computerGuess;