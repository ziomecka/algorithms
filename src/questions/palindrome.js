function algorithm ( str ) {
    str = str.replace( /\s|\?|'|\./g, '' ).toLowerCase();

    const { length } = str;

    for ( let i = 0, len = Math.floor( length / 2 ); i <= len; i++ ) {
        if ( str[ i ] !== str[ length - 1 - i ] ) {
            return false;
        }
    }

    return true;
};

module.exports = algorithm;