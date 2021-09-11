const { indexOf } = require('lodash');
const { doc } = require('prettier');
const ship = require('./ship.js')
const gameboard = (board) => {
    let idIdentifier;
    if (board === 1) {
        idIdentifier = 'one';
    } else {
        idIdentifier = 'two';
    }
    console.log('created')
    let ships = [];
    let usedCoordinates = [];
    let missedAttacks = [];
    const placeShip = (coordinates) => {
        let newShip = ship(coordinates);
        let length = coordinates.length;
        let shipCoordinates = [];
        let i;
        for (i = 0; i < length; i++) {
            shipCoordinates.push(coordinates[i]);
            let tile = document.querySelector(`#${coordinates[i]}`);
            tile.classList.add('shipArea');
        }
        ships.push(shipCoordinates);
        const hit = (coordinate) => {
            console.log('hit')
            newShip.hit(coordinate);
            newShip.isSunk();
        }
        return { shipCoordinates, hit };
    }
    const receiveAttack = (coordinate) => {
        if (usedCoordinates.includes(coordinate)) {
            console.log('already hit')
        } else {
            console.log('recieve attack')
            let i;
            let booleanHit = null;
            let shipsCount = ships.length;
            let selectShip = null;
            let done = false;
            for (i = 0; i < shipsCount; i++) {
                let ship = ships[i];
                let indexOfArray = ship.indexOf(coordinate);
                console.log(ship);
                console.log(coordinate)
                let indexOfCoordinate = ship.indexOf(coordinate);
                if (indexOfArray === indexOfCoordinate && indexOfArray != -1 && done != true) {
                    booleanHit = true;
                    //selectShip.hit(indexOfArray);
                    console.log(i + 1);
                    switch (i + 1) {
                        case 1:
                            selectShip = 'ship1';
                            console.log('ship1')
                            done = true;
                            break;
                        case 2:
                            selectShip = 'ship2';
                            console.log('ship2')
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
                            console.log('ship6')
                            done = true;
                            break;
                        case 7:
                            selectShip = 'ship7';
                            done = true;
                            break;
                    }
                }
            }
            if (booleanHit === false) {
                console.log('WHAT')
                missedAttacks.push(coordinate);
            }
            usedCoordinates.push(coordinate);
            let tile = document.querySelector(`#${coordinate}`);
            tile.classList.add('selected')
            return selectShip;
        }
    }
    const receiveAttackTest = (coordinate) => {
        let i;
        let booleanHit = null;
        for (i = 0; i < length; i++) {
            let indexOfArray = arrayForTests.indexOf(arrayForTests[i]);
            let indexOfCoordinate = shipCoordinates.indexOf(coordinate);
            if (indexOfArray === indexOfCoordinate) {
                booleanHit = true;
                newShip.hit(indexOfArray)
                break;
            } else {
                booleanHit = false;
            }
        }
        if (booleanHit === false) {
            missedAttacks.push(coordinate);
            return false;
        }
        return booleanHit;
    }
    const checkShip = () => {
        console.log('checking')
        let i;
        let lives = 0;
        for (i = 0; i < length; i++) {
            if (newShip.array[i]) {
                lives += 1;
            }
        }
        if (lives === 0) {
            return 'dead';
        }
        return 'alive';
    }
    const checkShipTest = (testArray) => {
        let i;
        let lives = 0;
        for (i = 0; i < length; i++) {
            if (testArray[i]) {
                lives += 1;
            }
        }
        if (lives === 0) {
            return 'dead';
        }
        return 'alive';
    }
    return {placeShip, receiveAttack, receiveAttackTest, checkShip, checkShipTest, ships, missedAttacks, usedCoordinates}
}

module.exports = gameboard;