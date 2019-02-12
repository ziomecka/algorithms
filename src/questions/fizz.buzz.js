function algorithm( value ) {
    if ( !Number.isInteger( value ) || value < 1 ) {
        throw new Error('Argument is not an integer higher than one');
    }

    if ( value % 2 === 0 ) {
        if ( value % 3 === 0 ) {
            return 'Fizz Buzz';
        }
        return 'Fizz';
    }

    if ( value === 1 ) {
        return value;
    }

    let i = 0;
    let result = '';

    while ( i < value ) {
        result += ++i;
    }

    return result;
}

module.exports = { algorithm };