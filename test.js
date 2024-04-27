// Importamos las funciones del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comenzamos las pruebas para la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Comenzamos las pruebas para la función fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07;
    expect(dollars).toBe(expected);
});


test('Converts 10 dollars to yen', () => {
    const dollars = 10;
    const yenAmount = fromDollarToYen(dollars);
    const expected = dollars * 1.07 * 156.5; 
    expect(yenAmount).toBe(expected);
});


test('Converts 1000 yen to pound', () => {
    const yenAmount = 1000;
    const poundAmount = fromYenToPound(yenAmount);
    const expected = yenAmount * (1 / 156.5) * 0.87;
    expect(poundAmount).toBe(expected);
});