const gameboard = require('./gameboard.js');
const gameboardFunction = gameboard();

test('Gameboard function to place ship to be on correct coordinates', () => {
    expect(gameboardFunction.placeShip(['1e', '2e', '3e'])).toEqual(['1e', '2e', '3e']);
})

test('Gameboard function to check if ship is hit', () => {
    expect(gameboardFunction.receiveAttackTest('1e', ['1e', '2e', '3e'])).toEqual(true)
})

test('Gameboard function to check if ship is not hit', () => {
    expect(gameboardFunction.receiveAttackTest('4d', ['1e', '2e', '3e'])).toBe(false)
})

test('Gameboard function to check if ship is alive', () => {
    expect(gameboardFunction.checkShipTest(['1e', '2e', '3e'])).toEqual('alive')
})