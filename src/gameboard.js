const ship = require('./ship.js')
const gameboard = () => {
    let newShip = ship(3);
    let length = newShip.shipLength();
    let shipCoordinates = [];
    let missedAttacks = [];
    const placeship = (coordinates) => {
        let i;
        for (i = 0; i < length; i++) {
            shipCoordinates.push(coordinates[i]);
        }
        console.log(shipCoordinates)
    }
    const receiveAttack = (coordinate) => {
        let i;
        let booleanHit = null;
        for (i = 0; i < length; i++) {
            let indexOfArray = newShip.array.indexOf(newShip.array[i]);
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
            console.log('miss');
        }
    }
    const checkShip = () => {
        let i;
        let lives = 0;
        for (i = 0; i < length; i++) {
            if (newShip.array[i]) {
                lives += 1;
            }
        }
        console.log(lives);
        if (lives === 0) {
            console.log('Uh oh... Ship\'s dead')
        }
    }
    return {placeship, receiveAttack, checkShip, missedAttacks}
}
let gameboardFunction = gameboard();
gameboardFunction.placeship(['1e', '2e', '3e']);
gameboardFunction.receiveAttack('3e');
gameboardFunction.receiveAttack('2e');
gameboardFunction.receiveAttack('1e');
gameboardFunction.checkShip();