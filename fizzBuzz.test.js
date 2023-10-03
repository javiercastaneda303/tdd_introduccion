const fizzBuzz = require('./fizzBuzz');

test('1-a  return fizz  3', () => {
    expect(fizzBuzz(3)).toBe("fizz");
});

test('1-b  return fizz  6', () => {
    expect(fizzBuzz(6)).toBe("fizz");
});

test('1-c  return fizz  9', () => {
    expect(fizzBuzz(9)).toBe("fizz");
});

test('1-d  return fizz  12', () => {
    expect(fizzBuzz(12)).toBe("fizz");
});


test('1-e  return != fizz  15', () => {
    expect(fizzBuzz(15)).not.toBe("fizz");
});

test('1-f  return != fizz  10', () => {
    expect(fizzBuzz(10)).not.toBe("fizz");
});

test('1-g  return != fizz  1', () => {
    expect(fizzBuzz(1)).not.toBe("fizz");
});

test('1-h  return != fizz  11', () => {
    expect(fizzBuzz(11)).not.toBe("fizz");
});

test('1-i  return != fizz  0', () => {
    expect(fizzBuzz(0)).not.toBe("fizz");
});