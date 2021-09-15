const { indexOf } = require('lodash');
const { doc } = require('prettier');
const ship = require('./ship.js')
const gameboard = (board, lose) => {
    let idIdentifier;
    if (board === 1) {
        idIdentifier = 'one';
    } else {
        idIdentifier = 'two';
    }
    let ships = [];
    let usedCoordinates = [];
    let missedAttacks = [];
    const placeShip = (coordinates, message) => {
        let newShip = ship(coordinates);
        let length = coordinates.length;
        let i;
        for (i = 0; i < length; i++) {
            let tile = document.querySelector(`#${coordinates[i]}`);
            tile.classList.add('shipArea');
        }
        ships.push(newShip.array);
        const hit = (coordinate) => {
            newShip.hit(coordinate);
            newShip.isSunk(message);
            let i;
            let emptyShips = 0;
            for (i = 0; i < ships.length; i++) {
                if (ships[i].length == 0) {
                    emptyShips += 1;
                }
            }
            if (emptyShips === 7) {
                let i;
                for (i = 0; i < 7; i++) {
                    ships.splice(0, 1);
                }
            }
        }
        return {hit}
    }
    const receiveAttack = (coordinate, message, identifier) => {
        let whoAreYou;
        if (identifier === 1) {
            whoAreYou = 'Player';
        } else {
            whoAreYou = 'Computer'
        }
        if (usedCoordinates.includes(coordinate)) {
            //useless
            message.textContent = 'Already attacked, try again';
        } else {
            let i;
            let booleanHit = null;
            let shipsCount = ships.length;
            let selectShip = null;
            let done = false;
            let tile = document.querySelector(`#${coordinate}`);
            for (i = 0; i < shipsCount; i++ && done != true) {
                let ship = ships[i];
                let indexOfArray = ship.indexOf(coordinate);
                if (indexOfArray != -1 && done != true) {
                    message.textContent = `${whoAreYou} hit`;
                    tile.classList.add('selected')
                    booleanHit = true;
                    done = true;
                    switch (i + 1) {
                        case 1:
                            selectShip = 'ship1';
                            done = true;
                            break;
                        case 2:
                            selectShip = 'ship2';
                            done = true;
                            break;
                        case 3:
                            selectShip = 'ship3';
                            done = true;
                            break;
                        case 4:
                            selectShip = 'ship4';
                            done = true;
                            break;
                        case 5:
                            selectShip = 'ship5';
                            done = true;
                            break;
                        case 6:
                            selectShip = 'ship6';
                            done = true;
                            break;
                        case 7:
                            selectShip = 'ship7';
                            done = true;
                            break;
                    }
                } else {
                    message.textContent = `${whoAreYou} miss`;
                    booleanHit = false;
                }
                if (done == true) {
                        break;
                }
            }
            if (booleanHit === false) {
                tile.classList.add('miss');
                console.log('WHAT')
                missedAttacks.push(coordinate);
            }
            usedCoordinates.push(coordinate);
            return selectShip;
        }
    }
    return {placeShip, receiveAttack, ships, missedAttacks, usedCoordinates}
    }

module.exports = gameboard;