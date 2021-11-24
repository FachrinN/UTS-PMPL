const calculate = require('./App');

test('adds 3 * 3 to equal 9', () => {
    expect(calculate(3,3)).toBe(9);
});
