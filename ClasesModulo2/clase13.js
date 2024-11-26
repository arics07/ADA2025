/*
Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos
*/

const promt = require("prompt-sync")({ sigint: true });

let montoEnDolares = parseFloat(promt("Ingrese un monto en dólares: "));
let tasaDeCambio = parseFloat(promt("Ingrese la tasa de cambio: "));

let convertorDolaresAPesos = (montoEnDolares, tasaDeCambio) => montoEnDolares*tasaDeCambio;

console.log(convertorDolaresAPesos(montoEnDolares, tasaDeCambio));


/*
• Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación.
*/


let nombreMascota = promt("Ingrese el nombre de la mascota: ");




