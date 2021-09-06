const shipFunction = require('./ship.js');
const testShip = shipFunction(1);

test('Ship function length', () => {
    expect(testShip.shipLength()).toBe(1);
})

test('Ship function hit', () => {
    expect(testShip.hit()).toEqual([0]);
})

test('Ship function sunk check', () => {
    expect(testShip.isSunk()).toMatch(/not yet/);
})