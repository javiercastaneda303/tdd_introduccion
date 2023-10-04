const fizzBuzz = require('./fizzBuzz');

test('1-  return Fizz  3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('1-  return Fizz  6', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
});

test('1-  return Fizz  9', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
});


test('1-  return string  0', () => {
    expect(fizzBuzz(0)).toBe("0");
});

test('1-  return string  1', () => {
    expect(fizzBuzz(1)).toBe("1");
});

test('1-  return string  11', () => {
    expect(fizzBuzz(11)).toBe("11");
});
test('1-  return Fizz  12', () => {
    expect(fizzBuzz(12)).toBe("Fizz");
});

test('1-  return != Fizz  15', () => {
    expect(fizzBuzz(15)).not.toBe("Fizz");
});


test('2-  return  Buzz  5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});


test('2-  return  Buzz  10', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
});

test('2-  return  FizzBuzz  15', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

// if !== number
test('3- ¿y si le paso un * ?', () => {
    // expect(fizzBuzz("*")).toThrow();
    // expect(fizzBuzz("*")).toThrowError("n no es un numero");
    try {
        expect(fizzBuzz("*"))
    } catch (err) {
        expect(err).toBe("n no es un numero");
        //expect(err).toBeInstanceOf(Error);
        //expect(err).toHaveProperty("n no es un numero"); // https://youtu.be/6NPaTSj7Gtk?si=3789Je0r24SoFPof&t=328
    }
});

// el float no lo tengo contemplado


// test(' * => ???', () => {
//     expect(fizzBuzz(`*`)).toBe("string");
// });