const stringTest = require('../src/index.js');

// Challenge 1
test('capitalize', () => {
    const firstOutput = stringTest.capitalize('hello');
    expect(firstOutput).toBe('Hello');

    const secondOutput = stringTest.capitalize('WORLD');
    expect(secondOutput).toBe('WORLD');

    const thirdOutput = stringTest.capitalize('');
    expect(thirdOutput).toBe('');
});

// Challenge 2
test('allCaps', () => {
    const firstOutput = stringTest.allCaps('hello');
    expect(firstOutput).toBe('HELLO');

    const secondOutput = stringTest.allCaps('WORLD');
    expect(secondOutput).toBe('WORLD');

    const thirdOutput = stringTest.allCaps('');
    expect(thirdOutput).toBe('');
});

// Challenge 3
test('capitalizeWords', () => {
    const firstOutput = stringTest.capitalizeWords('do all the things');
    expect(firstOutput).toBe('Do All The Things');

    const secondOutput = stringTest.capitalizeWords('');
    expect(secondOutput).toBe('');
});

// Challenge 4
test('removeExtraSpaces', () => {
    const firstOutput = stringTest.removeExtraSpaces('   Hello    world!   ');
    expect(firstOutput).toBe('Hello world!');

    const secondOutput = stringTest.removeExtraSpaces('');
    expect(secondOutput).toBe('');
});

// Challenge 5
test('kebobCase', () => {
    const firstOutput = stringTest.kebobCase('   Hello    world   ');
    expect(firstOutput).toBe('hello-world');

    const secondOutput = stringTest.kebobCase('');
    expect(secondOutput).toBe('');
});

// Challenge 6
test('snakeCase', () => {
    const firstOutput = stringTest.snakeCase('  this  is   snake');
    expect(firstOutput).toBe('this_is_snake');

    const secondOutput = stringTest.snakeCase('');
    expect(secondOutput).toBe('');
});

// Challenge 7
test('camelCase', () => {
    const firstOutput = stringTest.camelCase('Camel Case');
    expect(firstOutput).toBe('camelCase');

    const secondOutput = stringTest.camelCase('');
    expect(secondOutput).toBe('');
});

// Challenge 8
test('shift function', () => {
    const firstOutput = stringTest.shift('Hello World');
    expect(firstOutput).toBe('ello WorldH');

    const secondOutput = stringTest.shift('');
    expect(secondOutput).toBe('');
});

// Challenge 9
test('makeHashTag', () => {
    const firstOutput = stringTest.makeHashTag('Amazing bongo drums for sale');
    expect(firstOutput).toEqual(['#amazing', '#bongo', '#drums']);

    const secondOutput = stringTest.makeHashTag('');
    expect(secondOutput).toEqual([]);
});

// Challenge 10
test('isEmpty', () => {
    const firstOutput = stringTest.isEmpty('Abc def');
    expect(firstOutput).toBe(false);

    const secondOutput = stringTest.isEmpty('    ');
    expect(secondOutput).toBe(true);
});