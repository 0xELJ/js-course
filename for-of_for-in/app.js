// for...of
/**
 * Es un tipo de loop usado para iterar sobre "objetos iterables" (arrays, strings, maps, sets)
 * A diferencia del for tradicional, el for...of accede directamente a los valores (no indices ni llaves)
 */
const arr = [10, 30, 20];
for (let value of arr) {
    console.log(value);
}

// for...in
/**
 * Es otro tipo de loop que permite iterar sobre las propiedades enumerables de un objeto (keys)
 * Puede ser usado en arrays pero no es recomendable
 * Retorna las keys
 */
const profile = {
    name: "Enrique",
    username: "quique",
    email: "enrique@ejemplo.com"
};
for (let key in profile) {
    console.log(key, profile[key]);
}

// Ejercicio de código usando for...of con diferentes estructuras de datos
/**
 * Escribe una función analizarDatos() que reciba un array con diferentes tipos de datos (string, números y Set) y haga lo siguiente:
 * 
 * Si el elemento es una string, imprime cada carácter en una nueva línea.
 * Si el elemento es un número, imprime "Número encontrado: X" (donde X es el número).
 * Si el elemento es un Set (Conjunto), imprime todos los valores dentro de él. Para acceder a los elementos usar for...of
 * 
 * Ejemplo:
 * const datos = ["Hola", 42, new Set([100, 200, 300]), "JS", 99];
 * analizarDatos(datos);
 * 
 * Salida:
    H
    o
    l
    a
    Número encontrado: 42
    100
    200
    300
    J
    S
    Número encontrado: 99
*/