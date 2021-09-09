import './style.css';
const ship = require('./ship.js')
const gameboard = require('./gameboard.js')
const player = require('./players.js')
import { doc } from 'prettier';

const body = document.querySelector('#gridContainer');
const rows = 'abcdefghij';
const allDivs = document.querySelector('div');
const attack = document.querySelector('#submit');
let currentLetter = 'a';
let currentLetterIndex = 0;
let currentNumber = 1;
let currentCoordinate = null;
let currentSelected = null;

const createGrid = () => {
    let i;
    for (i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.id = currentLetter + currentNumber;
        currentNumber += 1;
        if (currentNumber > 10) {
            currentLetterIndex += 1;
            currentLetter = rows[currentLetterIndex];
            currentNumber = 1;
        }
        body.appendChild(div);
        div.addEventListener('click', () => {
            if (currentSelected != null) {
                currentSelected.style.cssText = '';
            }
            currentCoordinate = div.id;
            currentSelected = document.querySelector(`#${div.id}`);
            currentSelected.style.cssText = 'transform: scale(1.1);'
        })
    }
    allDivs.style.cssText = 'display: grid; grid-template-rows: repeat(${limit}, 1fr); grid-template-columns: repeat(10, 1fr);';
}

const newGame = () => {
    const newGameboard = gameboard();
    const ship1 = newGameboard.placeShip(['e1', 'e2', 'e3']);
    const ship2 = newGameboard.placeShip(['a10', 'b10']);
    const ship3 = newGameboard.placeShip(['b2', 'b3', 'b4', 'b5']);
    const ship4 = newGameboard.placeShip(['g6']);
    const ship5 = newGameboard.placeShip(['i3']);
    const ship6 = newGameboard.placeShip(['g9', 'h9']);
    const ship7 = newGameboard.placeShip(['d6', 'd7', 'd8']);
    attack.addEventListener('click', () => {
        if (currentCoordinate != null) {
            let coordinate = currentCoordinate;
            let findShip = newGameboard.receiveAttack(coordinate);
            switch (findShip) {
                case 'ship1':
                    console.log('ship1');
                    break;
                case 'ship2':
                    console.log('ship2');
                    break;
                case 'ship3':
                    console.log('ship3');
                    break;
                case 'ship4':
                    console.log('ship4');
                    break;
                case 'ship5':
                    console.log('ship5');
                    break;
                case 'ship6':
                    ship6.hit(coordinate);
                    break;
                case 'ship7':
                    console.log('ship7');
                    break;
            }
        }
    });
}

createGrid();
newGame();
