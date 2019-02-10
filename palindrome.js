function isPalindrome ( str ) {
    str = str.replace( /\s/, '' );
    const { length } = str;

    for ( let i = 0, len = Math.floor( length / 2 ); i <= len; i++ ) {
        if ( str[ i ] !== str[ length - 1 - i ] ) {
            return false;
        }
    }

    return true;
}

let str = 'kaju jak';

console.log(isPalindrome( str ));

module.exports = undefined;