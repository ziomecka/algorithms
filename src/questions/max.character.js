function algorithm( value ) {
    if ( typeof ( value ) !== 'string' ) {
        throw new Error('Argument is not a string');
    }

    let i = 0;

    return [ ...( new Set( value.split('') ) ) ].reduce( ( acc, letter ) => {
        const { length } = value.match( new RegExp(`${ letter }`, 'g' ) );
        if ( length > i ) {
            i = length;
            acc = letter;
        }
        return acc;
    }, '' );
}

module.exports = { algorithm };