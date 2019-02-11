const { algorithm } = require('../../src/algorithms/bubble.sort');

describe( "bubble sort", () => {
    let array = [ 2, 10, -1, 90, 5, -2 ];
    let sortedArray = [ -2, -1, 2, 5, 10, 90 ];

    it("returns sorted array", () => {
        expect (
            // a copy of array is needed!
            algorithm( [...array] ).every( ( item, ind ) => item === sortedArray[ ind ])
        ).toBe( true );
    });

    it("returns sorted array", () => {
        expect (
            algorithm( [...array] ).every( ( item, ind ) => item === array[ ind ])
        ).toBe( false );
    });
} );