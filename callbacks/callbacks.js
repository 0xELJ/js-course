/**
 * Callbacks en JavaScript
 * 
 * Un callback es una función que se pasa como argumento a otra función, y se ejecuta después
 * de que algo ocurra (por ejemplo, una operación interna)
 * 
 * Sirven para:
 * - Ejecutar código después de que otra función termine (operaciones asincronas)
 * - Personalizar el comportamiento de una función desde fuera
 * - Evitar repetir lógica y hacer el código flexible y reutilizable
 */

// ¿Cómo declarar una función?
function myFunc1(name, other) {
    console.log(name)
    console.log(other)
}
const myFunc2 = (name, other) => {
    console.log(name)
    console.log(other)
}


// Argumento vs Parámetro
function myFunc3(parameter1, parameter2) {}
const argument = "hi"
myFunc3(argument);


// Ejemplo Callbacks   
function saludar(nombre) {
    console.log("Hola, ", nombre);
}

function procesarUsuario(callback) {
    const nombre = "Enrique";
    // hacer lógica
    callback(nombre)
}

procesarUsuario(saludar);

// Ejemplo 2
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function substract(a, b) {
    return a - b;
}

function calculate(a, b, operationCallback) {
    const result = operationCallback(a, b);
    console.log("Resultado: ", result);
}

// Uso de operaciones
calculate(10, 5, add);
calculate(10, 5, multiply);
calculate(10, 5, substract);


// High Order Functions
// Son funciones que retornan otra función
function multiplyBy(num, num2, num3) {
    const num4 = 4;
    return function(x) {
        console.log("num4", num4)
        return x * num4;
    }
}

const triple = multiplyBy(3);
const res =  triple(3);
console.log("res", res);