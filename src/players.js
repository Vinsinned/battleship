const ship = require('./ship.js');
const gameboard = require('./gameboard.js');

const player = () => {
    const attack = (coordinate) => {
        if (gameboardFunction.usedCoordinates.includes(coordinate)) {
            return 'Already called!';
        }
        gameboardFunction.receiveAttack(coordinate);
        return 'done';
    }
    const randomPlay = () => {
        let alphabet = 'abcdefghij';
        let randomAlphabet = Math.floor(Math.random() * 7);
        let randomNumber = Math.floor(Math.random() * 6) + 10;
        let randomCoordinate = randomNumber + alphabet[randomAlphabet];
        return 'No errors';
    }
    return {attack, randomPlay}
}

module.exports = player;