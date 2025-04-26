/**
 * El método find() de arreglos de JS permite buscar y retornar el primer elemento que cumpla una condición específica
 * 
 * - Retorna el elemento encontrado (no un arreglo)
 * - Si no encuentra ningún elemento, retorna 'undefined'
 * - No modifica el arreglo original
 * 
 */

// Sintaxis básica
const arreglo = ["Martha", "Lalo", "Kike"]
const elemento = arreglo.find(function (elemento, indice, arreglo) {
    // logica para encontrar el elemento
    return elemento === "Romi"; // condición booleana
});
console.log("elemento", elemento)

const inventarioFrutas = [
    { nombre: 'manzanas', cantidad: 2 },
    { nombre: 'platanos', cantidad: 6 },
    { nombre: 'cerezas', cantidad: 8 },
];
const fruta = inventarioFrutas.find(fruta => fruta.cantidad > 5);
console.log(fruta)