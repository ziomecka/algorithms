// Given an integer, reverse the order of the digits.

function algorithm (val) {
    if ( !Number.isInteger(val) ) {
        throw new Error('Is not an integer');
    }

    let convert = v => v.toString().split('').reverse().join('');

    if ( val > 0) {
        return convert( val ) * 1;
    } else {
        return convert( -val ) * -1;
    }
}

function algorithm2 (val) {
    if ( !Number.isInteger(val) ) {
        throw new Error('Is not an integer');
    }

    let convert = v => {
        let str = v.toString();
        let result = '';

        for ( let letter of str ) {
            result = letter + result;
        }

        return result;
    };

    if ( val > 0) {
        return convert( val ) * 1;
    } else {
        return convert( -val ) * -1;
    }
}

module.exports = { algorithm: algorithm2 };