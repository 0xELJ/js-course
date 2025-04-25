/**
 * La función filter() es un método de los Arrayys en JavaScript que permite crear un nuevo arreglo con todos los elementos que 
 * cumplan una condición específica.
 * 
 */

// Sintaxis básica
// const arrayOriginal = [10, 22, 33];
// const nuevoArray = arrayOriginal.filter(function(elemento, indice, arreglo) {
//     return /* condición booleana para incluir el elemento en el nuevo array */
// });

const arrayOriginal = [10, 22, 33];
const arrayFiltrado = arrayOriginal.filter(function(elemento, indice, array) {
    return elemento > 15;
});
console.log("arrayFiltrado", arrayFiltrado);

const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 17 },
    { nombre: 'María', edad: 30 }
];
const personasAdultas = personas.filter(function(elemento) {
    return elemento.edad >= 18;
});
console.log("personas", personas)
console.log("personasAdultas", personasAdultas)

// Dado un arreglo de numeros, crea un nuevo arreglo usando filter() que filtre los elementos con indice par
const numeros = [1, 2, 3, 4, 5];
// logica aqui...
// output: [1, 3, 5]
