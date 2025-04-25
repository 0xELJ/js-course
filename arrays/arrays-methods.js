/**
 * Ejercicio: Procesamiento de Datos de Estudiantes
 * 
 * Descripción: Apartir de un arreglo de objetos que representan estudiantes con sus notas en diferentes materias, realiza
 * las siguientes tareas utilizando métodos de arreglos y callbacks:
 * 
 * 1. Usa forEach() para imprimir en consola los nombres en mayúsculas 
 * 2. Usa forEach() para imprimir en consola la califcación más alta de cada estudiante
 * 3. Usa map() para crear un nuevo array donde cada estudiante tenga una nueva propiedad promedio (redondeada a 1 decimal)
 * 4. Usa filter() para obtener solo los estudiantes con promedio ≥ 7
 */

const estudiantes = [
    { nombre: "Ana", notas: [7, 8, 6] },
    { nombre: "Luis", notas: [9, 5, 8] },
    { nombre: "Carlos", notas: [4, 6, 7] },
    { nombre: "Marta", notas: [10, 9, 8] },
];

// 1. Usa forEach() para imprimir en consola los nombres en mayúsculas. Ejemplo: "ANA", "LUIS", "CARLOS", "MARTA"


// 2. Usa forEach() para crear un nuevo objeto con la califcación más alta de cada estudiante e imprimirlo en consola.
// Ejemplo: { "Ana: 8", "Luis: 9", "Carlos: 7", "Marta: 10" }


// 3. Usa map() para crear un nuevo array donde cada estudiante tenga una nueva propiedad promedio (redondeada a 1 decimal). 
// [
//     { nombre: "Ana", notas: [7, 8, 6], promedio: 7.0 },
//     // ...
// ]


// 4. Usa filter() para obtener solo los estudiantes con promedio ≥ 7
// [
//     { nombre: "Ana", promedio: 7.0 },
//     { nombre: "Luis", promedio: 7.3 },
//     { nombre: "Marta", promedio: 9.0 },
// ]
