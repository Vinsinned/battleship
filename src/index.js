import './style.css';
const ship = require('./ship.js')
const gameboard = require('./gameboard.js')
const player = require('./players.js')
import { doc } from 'prettier';

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
            currentCoordinate2 = div.id;
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
    const ship1 = firstGameboard.placeShip(['e1one', 'e2one', 'e3one']);
    const ship2 = firstGameboard.placeShip(['a10one', 'b10one']);
    const ship3 = firstGameboard.placeShip(['b2one', 'b3one', 'b4one', 'b5one']);
    const ship4 = firstGameboard.placeShip(['g6one']);
    const ship5 = firstGameboard.placeShip(['i3one']);
    const ship6 = firstGameboard.placeShip(['g9one', 'h9one']);
    const ship7 = firstGameboard.placeShip(['d6one', 'd7one', 'd8one']);
    attack1.addEventListener('click', () => {
        if (currentCoordinate1 != null) {
            let coordinate = currentCoordinate1;
            let findShip = firstGameboard.receiveAttack(coordinate);
            switch (findShip) {
                case 'ship1':
                    ship1.hit(coordinate, 0);
                    break;
                case 'ship2':
                    ship2.hit(coordinate, 1);
                    break;
                case 'ship3':
                    ship3.hit(coordinate, 2);
                    break;
                case 'ship4':
                    ship4.hit(coordinate, 3);
                    break;
                case 'ship5':
                    ship5.hit(coordinate, 4);
                    break;
                case 'ship6':
                    ship6.hit(coordinate, 5);
                    break;
                case 'ship7':
                    ship7.hit(coordinate, 6);
                    break;
            }
        }
    });
    const secondGameboard = gameboard(2);
    const ship1two = secondGameboard.placeShip(['e1two', 'e2two', 'e3two']);
    const ship2two = secondGameboard.placeShip(['a10two', 'b10two']);
    const ship3two = secondGameboard.placeShip(['b2two', 'b3two', 'b4two', 'b5two']);
    const ship4two = secondGameboard.placeShip(['g6two']);
    const ship5two = secondGameboard.placeShip(['i3two']);
    const ship6two = secondGameboard.placeShip(['g9two', 'h9two']);
    const ship7two  = secondGameboard.placeShip(['d6two', 'd7two', 'd8two']);
    attack2.addEventListener('click', () => {
        if (currentCoordinate2 != null) {
            let coordinate = currentCoordinate2;
            let findShip = secondGameboard.receiveAttack(coordinate);
            switch (findShip) {
                case 'ship1':
                    ship1two.hit(coordinate);
                    break;
                case 'ship2':
                    ship2two.hit(coordinate);
                    break;
                case 'ship3':
                    ship3two.hit(coordinate);
                    break;
                case 'ship4':
                    ship4two.hit(coordinate);
                    break;
                case 'ship5':
                    ship5two.hit(coordinate);
                    break;
                case 'ship6':
                    ship6two.hit(coordinate);
                    break;
                case 'ship7':
                    ship7two.hit(coordinate);
                    break;
            }
        }
    });
}
newGame();
