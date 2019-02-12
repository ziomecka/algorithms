// Given a number as an input,
// print out every integer from 1 to that number.
// However, when the integer is divisible by 2, print out “Fizz”;
// when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const { algorithm } = require('../../src/questions/fizz.buzz');

describe( 'Fizz buzz', () => {
    it( 'throws an error if not integer is provided', () => {
        expect( () => algorithm(1.2) ).toThrowError('Argument is not an integer higher than one');
    });

    it( 'throws an error if integer lower then 1 is provided', () => {
        expect( () => algorithm( 0 ) ).toThrowError('Argument is not an integer higher than one');
    });

    it( 'prints every integer from 1 to the number', () => {
        expect( algorithm( 3 )).toBe('123');
    });

    it( 'prints Fizz when number is divided by 2', () => {
        expect( algorithm( 2 )).toBe('Fizz');
    });

    it( 'prints Fizz Buzz if the number is divided by 2 and 3', () => {
        expect( algorithm( 6 )).toBe('Fizz Buzz');
    });
} );