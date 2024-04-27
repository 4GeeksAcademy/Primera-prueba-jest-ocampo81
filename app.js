// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Definimos la función fromDollarToYen que convierte un monto en dólares a yenes japoneses
const fromDollarToYen = (amountInDollars) => {
    const amountInYen = amountInDollars * 1.07 * 156.5; 
    return amountInYen;
}

// Definimos la función fromYenToPound que convierte un monto en yenes a libras esterlinas
const fromYenToPound = (amountInYen) => {
    const amountInPound = amountInYen * (1 / 156.5) * 0.87;
    return amountInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };