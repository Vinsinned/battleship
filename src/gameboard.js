const ship = require('./ship.js')
const gameboard = () => {
    let newShip = ship(3);
    let length = newShip.shipLength();
    let shipCoordinates = [];
    let usedCoordinates = [];
    let missedAttacks = [];
    const placeShip = (coordinates) => {
        let i;
        for (i = 0; i < length; i++) {
            shipCoordinates.push(coordinates[i]);
        }
        return shipCoordinates;
    }
    const receiveAttack = (coordinate) => {
        let i;
        let booleanHit = null;
        for (i = 0; i < length; i++) {
            let indexOfArray = newShip.array.indexOf(newShip.array[i]);
            let indexOfCoordinate = shipCoordinates.indexOf(coordinate);
            if (indexOfArray === indexOfCoordinate) {
                booleanHit = true;
                newShip.hit(indexOfArray);
                usedCoordinates.push(coordinate);
                break;
            } else {
                booleanHit = false;
            }
        }
        if (booleanHit === false) {
            missedAttacks.push(coordinate);
            usedCoordinates.push(coordinate);
            return false;
        }
        return booleanHit;
    }
    const receiveAttackTest = (coordinate, arrayForTests) => {
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
    return {placeShip, receiveAttack, receiveAttackTest, checkShip, checkShipTest, missedAttacks, usedCoordinates}
}

module.exports = gameboard;