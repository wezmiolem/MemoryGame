let cards = [
    {name: "2C", img:"img/2C.png",},
    {name: "2C", img:"img/2C.png",},
    {name: "3H", img:"img/3H.png",},
    {name: "3H", img:"img/3H.png",},
    {name: "4D", img:"img/4D.png",},
    {name: "4D", img:"img/4D.png",},
    {name: "5C", img:"img/5C.png",},
    {name: "5C", img:"img/5C.png",},
    {name: "6H", img:"img/6H.png",},
    {name: "6H", img:"img/6H.png",},
    {name: "7D", img:"img/7D.png",},
    {name: "7D", img:"img/7D.png",},
    {name: "8C", img:"img/8C.png",},
    {name: "8C", img:"img/8C.png",},
    {name: "9C", img:"img/9C.png",},
    {name: "9C", img:"img/9C.png",},
    {name: "10H", img:"img/10H.png",},
    {name: "10H", img:"img/10H.png",},
];

let grid = document.querySelector(".memory-game");
let cardsSelected = [];
let currentTurn = [];
let correctGuesses = 0;
let imgs;
let attempts = 0;
let attemptsNumber = document.querySelector(".attempts-number");

document.addEventListener("DOMContentLoaded", function () {
    shuffleCards();
    createBoard(grid, cards);
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", flipCard)
    );
});

function createBoard(grid, array) {
    array.forEach((arr, index) => {
        let img = document.createElement("img");
        img.setAttribute("src", "img/blank.png");
        img.setAttribute("data-id", index);
        grid.appendChild(img);
    });
}

function shuffleCards() {
    cards.sort(() => 0.5 - Math.random());
}

function flipCard() {
    let selected = this.dataset.id;
    let clicked = cards[selected].name
    cardsSelected.push(clicked);
    currentTurn.push(selected);
    this.setAttribute("src", cards[selected].img);
    if (currentTurn.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    attempts += 1;
    attemptsNumber.innerHTML = attempts;
    let imgs = document.querySelectorAll("img");
    let firstCard = currentTurn[0];
    let secondCard = currentTurn[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
        correctGuesses += 1;
        setTimeout(checkWon, 100)
    }
    else {
        imgs[firstCard].setAttribute("src", "img/blank.png");
        imgs[secondCard].setAttribute("src", "img/blank.png");
    }
    cardsSelected = [];
    currentTurn = [];
}

function checkWon() {
    if (correctGuesses === cards.length / 2) {
        alert("Congratulations, You won")
    }
}