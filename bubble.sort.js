let complexity = 0;

const bubbleSort = ( arr, inc = true ) => {
    const { length } = arr;
    let j = false;

    for ( let i = 0; i < length - 1; i++ ) {
        let current = arr[ i ];
        let next = arr[ i + 1 ];

        if ( ( inc && current > next ) || ( !inc && current < next ) ) {
            arr[ i ] = next;
            arr[ i+1 ] = current;
            j = true;
        }
        complexity++;
    }

    if ( j ) {
        return bubbleSort( arr, inc );
    } else {
        return arr;
    }
};

let a = [ 2, 7, 1, 9, 23, 34, 100, 2, 5, 6, 89, 0, -1 ];

let expectedComplexity = Math.pow( a.length, 2 );

console.log(
    `Sorted array: ${ bubbleSort(a, false) }.
    Complexity: ${ complexity}.
    Expected complexity: ${ expectedComplexity}`
);

module.exports = undefined;