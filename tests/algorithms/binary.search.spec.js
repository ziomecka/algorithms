const { algorithm } = require('../../src/algorithms/binary.search');

let searched = [ 3, 4, 5, 6, 8, 10 ];

describe('binary search', () => {
    it('returns searched value', () => {
        expect( algorithm( 6, searched ) ).toBe( 6 );
    } );

    it('returns searched value', () => {
        expect( algorithm( 3, searched ) ).toBe( 3 );
    } );

    it('returns searched value', () => {
        expect( algorithm( 7, searched ) ).toBe( undefined );
    } );

    it('returns undefined', () => {
        expect( algorithm( 11, searched ) ).toBe( undefined );
    } );
});