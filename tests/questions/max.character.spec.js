// Given a string of characters, return the character that appears the most often.

const { algorithm } = require('../../src/questions/max.character');

describe( 'Max character', () => {
    it( 'throws an error if argument is not a string', () => {
        expect( () => algorithm(1.2) ).toThrowError('Argument is not a string');
    });

    it( 'returns character that appears most often', () => {
        expect( algorithm( 'Jasdasaadfgassf' ) ).toBe('a');
    });

    it( 'returns character that appears most often', () => {
        expect( algorithm( 'JasdaSSdfgASsf' ) ).toBe('S');
    });

    it( 'returns empty string if provided with empty string', () => {
        expect( algorithm( '' ) ).toBe('');
    });
} );