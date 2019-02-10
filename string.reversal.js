function stringReversal1(str) {
    // split n-1
    // join n-1
    // reverse n
    return str.split('').reverse().join('');
}

function stringReversal2(str) {
    // split n-1
    // reverse n
    let arr = str.split('');
    let result = '';

    for ( let i = arr.length - 1; i >=0; i-- ) {
        result += arr[i];
    }
    arr = null;
    return result;
}

// The best (?)
function stringReversal3(str) {
    // reverse n
    let result = '';

    for ( let i = str.length - 1; i >=0; i-- ) {
        result += str[i];
    }
    return result;
}

function stringReversal4(str) {
    // split n-1
    // reverse n
    return str.split('').reduce( ( acc, item ) => acc = `${item}${acc}`, '');
}

let a = 'Kasia has a cat';

console.log( stringReversal1(a) );
console.log( stringReversal2(a) );
console.log( stringReversal3(a) );
console.log( stringReversal4(a) );

module.exports = undefined;