let runs = 0;

const algorithm = ( arr, inc = true ) => {
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
        runs++;
    }

    if ( j ) {
        return algorithm( arr, inc );
    } else {
        return arr;
    }
};

module.exports = { algorithm, runs };