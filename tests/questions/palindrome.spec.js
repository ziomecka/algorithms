const palindrome = require('../../src/questions/palindrome');

describe("palindrome", () => {

    it("returns true", () => {
        expect(palindrome('kajak')).toBe(true);
    });

    it("returns true", () => {
        expect(palindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    it("returns true", () => {
        expect(palindrome("No 'x' in Nixon?")).toBe(true);
    });

    it("returns false", () => {
        expect(palindrome('qajak')).toBe(false);
    });
});