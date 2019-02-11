// Given an integer, reverse the order of the digits.
const { algorithm } = require('../../src/questions/integer.reversal');

describe( 'integer reversal', () => {
    it( 'reverses an integer', () => {
        expect( algorithm( 123 ) ).toBe( 321 );
    });

    it( 'reverses a negative integer', () => {
        expect( algorithm( -144565 ) ).toBe( -565441 );
    });

    it( 'throws an Error if not integer provided', () => {
        expect( () => algorithm('123') ).toThrowError('Is not an integer');
    });
});