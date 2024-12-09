let bod = document.getElementById('body');
let gameC = document.getElementById('gameC');
let gameA = document.getElementById('game2');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let head = document.getElementById('head');
let back = gameC.style.background;
let reset = document.getElementById('reset');
let triangle = document.getElementById('triangle');
let resetButton = document.getElementById('reset');
let result = document.getElementById('result');
let score = document.getElementById('scoreboard')
let rulesButton = document.getElementById('btn')

let scoreNum = 0;
let currentComputerChoice = null;
let userChoice = null;

const computerChoice = ['paper', 'rock', 'scissors'];

rock.addEventListener('click', (ev) => {
    scissors.style.display = 'none';
    paper.style.display = 'none';
    setupUser(rock);
    getSelection();
    userGamepiece();
});

// paper event
paper.addEventListener('click', handlePaper)
function handlePaper() {
    rock.style.display = 'none'
    scissors.style.display = 'none'
    setupUser(paper);
    getSelection();
    userGamepiece();
}


const setupUser = (elem) => {
    gameA.style.display = 'none';
    userChoice = elem.cloneNode(true);
    userChoice.style.position = 'absolute';
    userChoice.style.top = "30%";
    userChoice.style.left = "20%";
    gameC.append(userChoice);
}

// scissors event
scissors.addEventListener('click', handleScissors)
function handleScissors() {
    paper.style.display = 'none'
    rock.style.display = 'none'
    setupUser(scissors);
    getSelection();
    console.dir(userChoice.id);
    userGamepiece();
}
// results for game and score
function userGamepiece() {
    let userGamepiece = userChoice.id;
    result.style.display = 'block'
    resetButton.style.display = 'block'
    rulesButton.style.display = 'none'
    if (userGamepiece === 'scissors' && currentComputerChoice.id === 'rock') {
        scoreNum--;
        score.textContent = scoreNum;
        result.textContent = 'You Lose';
    } if (userGamepiece === 'scissors' && currentComputerChoice.id === 'paper') {
        scoreNum++;
        score.textContent = scoreNum;
        result.textContent = 'You Win';
    } if (userGamepiece === 'scissors' && currentComputerChoice.id === 'scissors') {
        result.textContent = 'Tie';
    }
    if (userGamepiece === 'rock' && currentComputerChoice.id === 'paper') {
        scoreNum--;
        score.textContent = scoreNum;
        result.textContent = 'You Lose';
    } if (userGamepiece === 'rock' && currentComputerChoice.id === 'scissors') {
        scoreNum++;
        score.textContent = scoreNum;
        result.textContent = 'You Win';
    } if (userGamepiece === 'rock' && currentComputerChoice.id === 'rock') {
        result.textContent = 'Tie';
    }
    if (userGamepiece === 'paper' && currentComputerChoice.id === 'scissors') {
        scoreNum--;
        score.textContent = scoreNum;
        result.textContent = 'You Lose';
    } if (userGamepiece === 'paper' && currentComputerChoice.id === 'rock') {
        result.textContent = 'You Win';
    } if (userGamepiece === 'paper' && currentComputerChoice.id === 'paper') {
        result.textContent = 'Tie';
    }
}

// 
resetButton.addEventListener('click', handleReset)
function handleReset() {
    console.log('in here')
    bod.style.display = 'block'
    gameC.style.display = 'flex'
    gameA.style.display = 'block';
    reset.style.display = 'block';
    reset.style.position = 'absolute';
    reset.style.top = "90%";
    reset.style.left = "46%";
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    currentComputerChoice.remove();
    userChoice.remove();
    result.style.display = 'none'
    resetButton.style.display = 'none';
    rulesButton.style.display = 'block'

}
// How computer chooses

function getSelection() {
    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    const selection = computerChoice[randomNum];

    switch (selection) {
        case 'rock':
            currentComputerChoice = rock.cloneNode(true)
            currentComputerChoice.style.display = 'block';
            currentComputerChoice.style.top = "30%";
            currentComputerChoice.style.left = "75%";
            gameC.append(currentComputerChoice);
            break;
        case 'paper':
            currentComputerChoice = paper.cloneNode(true)
            currentComputerChoice.style.display = 'block';
            currentComputerChoice.style.top = "30%";
            currentComputerChoice.style.left = "75%";
            gameC.append(currentComputerChoice);
            break;
        case 'scissors':
            currentComputerChoice = scissors.cloneNode(true)
            currentComputerChoice.style.display = 'block';
            currentComputerChoice.style.top = "30%";
            currentComputerChoice.style.left = "75%";
            gameC.append(currentComputerChoice);
            break;
    }
}

    //generate random number, 0 - 2 becomes index, you deliever the selection from array - return e.g scissors
    ///switch (computerSelection) {case 'rock': let computerDiv =}
