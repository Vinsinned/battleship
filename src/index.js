import './style.css';
const ship = require('./ship.js')
const gameboard = require('./gameboard.js')
const player = require('./players.js')
import { doc } from 'prettier';

let message1 = document.querySelector('#message1');
let message2 = document.querySelector('#message2')
let currentTurn = 2;
let lose = null;
const body = document.querySelector('#gridContainer');
const rows = 'abcdefghij';
const attack1 = document.querySelector('#submit1');
let attack2 = document.querySelector('#submit2');
let currentLetter1 = 'a';
let currentLetterIndex1 = 0;
let currentNumber1 = 1;
let currentCoordinate1 = null;
let currentSelected1 = null;

let currentLetter2 = 'a';
let currentLetterIndex2 = 0;
let currentNumber2 = 1;
let currentCoordinate2 = null;
let currentSelected2 = null;

let grid1 = document.querySelector('#gridContainer1');
let grid2 = document.querySelector('#gridContainer2');

const createGridOne = () => {
    let allDivs = document.querySelector('#gridContainer1');
    let container = document.querySelector('#gridContainer1');
    let i;
    for (i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.id = currentLetter1 + currentNumber1 + 'one';
        div.classList.add('tiles');
        currentNumber1 += 1;
        if (currentNumber1 > 10) {
            currentLetterIndex1 += 1;
            currentLetter1 = rows[currentLetterIndex1];
            currentNumber1 = 1;
        }
        allDivs.style.cssText = 'display: grid; grid-template-rows: repeat(${limit}, 1fr); grid-template-columns: repeat(10, 1fr);';
        container.appendChild(div);
        div.addEventListener('click', () => {
        if (currentSelected1 != null) {
            currentSelected1.style.cssText = '';
        }
        currentCoordinate1 = div.id;
        currentSelected1 = document.querySelector(`#${div.id}`);
        currentSelected1.style.cssText = 'transform: scale(1.1);';
        })
    }
}

const createGridTwo = () => {
    let allDivs = document.querySelector('#gridContainer2');
    let container = document.querySelector('#gridContainer2');
    let i;
    for (i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.id = currentLetter2 + currentNumber2 + 'two';
        div.classList.add('tiles');
        currentNumber2 += 1;
        if (currentNumber2 > 10) {
            currentLetterIndex2 += 1;
            currentLetter2 = rows[currentLetterIndex2];
            currentNumber2 = 1;
        }
        allDivs.style.cssText = 'display: grid; grid-template-rows: repeat(${limit}, 1fr); grid-template-columns: repeat(10, 1fr);';
        container.appendChild(div);
        div.addEventListener('click', () => {
            if (currentSelected2 != null) {
                currentSelected2.style.cssText = '';
            }
            currentSelected2 = document.querySelector(`#${div.id}`);
            currentSelected2.style.cssText = 'transform: scale(1.1);'
        })
    }
}

const newGame = () => {
    //make 2 player friendly
    let board1 = createGridOne();
    let board2 = createGridTwo();
    const firstGameboard = gameboard(1);
    const ship1 = firstGameboard.placeShip(['e1one', 'e2one', 'e3one'], message1);
    const ship2 = firstGameboard.placeShip(['a10one', 'b10one'], message1);
    const ship3 = firstGameboard.placeShip(['b2one', 'b3one', 'b4one', 'b5one'], message1);
    const ship4 = firstGameboard.placeShip(['g6one'], message1);
    const ship5 = firstGameboard.placeShip(['i3one'], message1);
    const ship6 = firstGameboard.placeShip(['g9one', 'h9one'], message1);
    const ship7 = firstGameboard.placeShip(['d6one', 'd7one', 'd8one'], message1);
    attack1.addEventListener('click', () => {
        if (currentTurn == 1) {
            if (grid1.classList.contains('scale')) {
                grid1.classList.remove('scale');
                grid1.classList.add('normal');
                grid2.classList.add('scale');
                grid2.classList.remove('normal');
            }
            if (currentCoordinate1 != null && firstGameboard.usedCoordinates.includes(currentCoordinate1) == false) {
                let coordinate = currentCoordinate1;
                let findShip = firstGameboard.receiveAttack(coordinate, message1, 1);
                switch (findShip) {
                    case 'ship1':
                        ship1.hit(coordinate);
                        currentTurn = 2;
                        break;
                    case 'ship2':
                        ship2.hit(coordinate);
                        currentTurn = 2;
                        break;
                    case 'ship3':
                        ship3.hit(coordinate);
                        currentTurn = 2;
                        break;
                    case 'ship4':
                        ship4.hit(coordinate);
                        currentTurn = 2;
                        break;
                    case 'ship5':
                        ship5.hit(coordinate);
                        currentTurn = 2;
                        break;
                    case 'ship6':
                        ship6.hit(coordinate);
                        currentTurn = 2;
                        break;
                    case 'ship7':
                        ship7.hit(coordinate);
                        currentTurn = 2;
                        break;
                }
                currentTurn = 2;
                makePlay();
                if (firstGameboard.ships.length == 0) {
                    message1.textContent = 'You lost';
                    currentTurn = null;
                    finishGame();
                }
            } else if (firstGameboard.usedCoordinates.includes(currentCoordinate1)) {
                message1.textContent = "Already attacked"
            }
        }
    });
    const secondGameboard = gameboard(2);
    const ship1two = secondGameboard.placeShip(['e1two', 'e2two', 'e3two'], message2);
    const ship2two = secondGameboard.placeShip(['a10two', 'b10two'], message2);
    const ship3two = secondGameboard.placeShip(['b2two', 'b3two', 'b4two', 'b5two'], message2);
    const ship4two = secondGameboard.placeShip(['g6two'], message2);
    const ship5two = secondGameboard.placeShip(['i3two'], message2);
    const ship6two = secondGameboard.placeShip(['g9two', 'h9two'], message2);
    const ship7two = secondGameboard.placeShip(['d6two', 'd7two', 'd8two'], message2);
    const makePlay = () => {
    if (currentTurn == 2) {
    console.log(currentTurn);
    if (grid2.classList.contains('scale')) {
        grid2.classList.remove('scale');
        grid2.classList.add('normal');
        grid1.classList.add('scale');
        if (grid1.classList.contains('normal')) {
            grid1.classList.remove('normal');
        }
    }
        let alphabet = 'abcdefghij';
    function makeCoordinate() {
        let randomLetter = alphabet[Math.floor(Math.random() * 9)];
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        return randomLetter + randomNumber + 'two';
    }
    currentCoordinate2 = makeCoordinate();
    while (secondGameboard.usedCoordinates.includes(currentCoordinate2)) {
        currentCoordinate2 = makeCoordinate();
    }
    if (currentCoordinate2 != null && secondGameboard.usedCoordinates.includes(currentCoordinate1) == false) {
        let coordinate = currentCoordinate2;
        let findShip = secondGameboard.receiveAttack(coordinate, message2, 2);
        switch (findShip) {
            case 'ship1':
                ship1two.hit(coordinate);
                currentTurn = 1;
                break;
            case 'ship2':
                ship2two.hit(coordinate);
                currentTurn = 1;
                break;
            case 'ship3':
                ship3two.hit(coordinate);
                currentTurn = 1;
                break;
            case 'ship4':
                ship4two.hit(coordinate);
                currentTurn = 1;
                break;
            case 'ship5':
                ship5two.hit(coordinate);
                currentTurn = 1;
                break;
            case 'ship6':
                ship6two.hit(coordinate);
                currentTurn = 1;
                break;
            case 'ship7':
                ship7two.hit(coordinate);
                currentTurn = 1;
                break;
        }
        currentTurn = 1;
        if (secondGameboard.ships.length == 0) {
            message2.textContent = 'Computer loses';
            currentTurn = null;
            finishGame();
        }
    } else if (secondGameboard.usedCoordinates.includes(currentCoordinate1)) {
        message2.textContent = "Already attacked"
    }
    }
}
    const finishGame = () => {
        if (grid1.classList.contains('scale')) {
            grid1.classList.remove('scale');
        }
        if (grid2.classList.contains('scale')) {
            grid2.classList.remove('scale');
        }
    }
    return {makePlay}
}

let playButton = document.querySelector('#play');
let playContainer = document.querySelector('#playButtonGrid');

playButton.addEventListener('click', () => {
    grid2.classList.add('scale');
    let stuff = newGame();
    stuff.makePlay();
    playContainer.innerHTML = '';
});