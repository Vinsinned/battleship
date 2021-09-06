const shipFunction = require('./ship.js');
const testShip = shipFunction(1);

test('Ship function is working', () => {
    expect(testShip.shipLength()).toBe(1);
    expect(testShip.hit()).toEqual([0, 1]);
    expect(testShip.isSunk()).toMatch(/not yet/);
})