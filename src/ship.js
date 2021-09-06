const ship = (length) => {
    let array = [];
    let i;
    for (i = 0; i <= length; i++) {
        array.push(i);
    }
    const shipLength = () => {
        return length;
    };
    const hit = (area) => {
        let index = array.indexOf(area);
        if (index == -1) {
            console.log('doesn\'t exist')
        } else {
            array.splice(index, 1);
        }
        return array;
    }
    const isSunk = () => {
        console.log(array);
        if (array.length == 0) {
            return 'sunk';
        } else {
            return 'not yet';
        }
    }
    return {shipLength, hit, isSunk}
}
let fakeShip = ship(2);

fakeShip.hit(2);
fakeShip.hit(0);
fakeShip.hit(1);
fakeShip.isSunk();

module.exports = ship;