const player = require('./players.js');
const gameboard = require('./gameboard.js');
const ship = require('./ship.js');
let testShip = ship(3);
let playerFunction = player();
let gameboardFunction = gameboard();
gameboardFunction.placeShip(['1e', '2e', '3e']);
gameboardFunction.checkShip();

test('Player function to attack a gameboard tile', () => {
    expect(playerFunction.attack('1e')).toMatch(/done/)
});

test('Player function to see that coordinate already called on', () => {
    expect(playerFunction.attack('1e')).toMatch(/Already called!/)
});

test('Player function to see that coordinate already called on', () => {
    expect(playerFunction.attack('1e')).toMatch(/Already called!/)
});

test('Player function to make a random play', () => {
    expect(playerFunction.randomPlay()).toMatch(/No errors/)
});