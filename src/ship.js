const ship = (length) => {
    let array = [];
    let i;
    for (i = 0; i < length; i++) {
        array.push(i);
    }
    const shipLength = () => {
        return length;
    };
    const hit = (area) => {
        let index = array.indexOf(area);
        if (index != -1) {
            array.splice(index, 1);
        }
        return array;
    }
    const isSunk = () => {
        if (array.length == 0) {
            return 'sunk';
        } else {
            return 'not yet';
        }
    }
    return {shipLength, hit, isSunk, array}
}

module.exports = ship;