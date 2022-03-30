const stringLength = require('./fileA');

test('Return the Length of the String', () => {
    expect(stringLength('Edward')).toBe(6);
});

test('Throw error if the string is less than 1 characters', () => {
    expect(() => {
        stringLength('odhiamboedward');
    }).toThrow('The string is less than 1 char or more then 10 characters');
});

test('Throw error if the string is More then 10 characters', () => {
    expect(() => {
        stringLength('odhiamboedward');
    }).toThrow('The string is less than 1 char or more then 10 characters');
});