const ship = require('./ship.js');
const gameboard = require('./gameboard.js')
let testShip = ship(3);
let gameboardFunction = gameboard();
gameboardFunction.placeShip(['1e', '2e', '3e']);
gameboardFunction.checkShip();

const player = () => {
    const attack = (coordinate) => {
        if (gameboardFunction.usedCoordinates.includes(coordinate)) {
            return 'Already called!';
        }
        gameboardFunction.receiveAttack(coordinate);
        return 'done';
    }
    const randomPlay = () => {
        let alphabet = 'abcdefg';
        let randomAlphabet = Math.floor(Math.random() * 7);
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let randomCoordinate = alphabet[randomAlphabet] + randomNumber;
        return 'No errors';
    }
    return {attack, randomPlay}
}

module.exports = player;