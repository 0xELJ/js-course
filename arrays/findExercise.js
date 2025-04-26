/**
 * Sistema de Búsqueda de Libros
 * Objetivo: Practicar el uso de find() con arreglos de objetos y manejo de casos de búsqueda.
 * 
 */

// Base de datos de libros
const biblioteca = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967, prestado: false },
    { id: 2, titulo: 'Rayuela', autor: 'Julio Cortázar', año: 1963, prestado: true },
    { id: 3, titulo: 'Ficciones', autor: 'Jorge Luis Borges', año: 1944, prestado: false },
    { id: 4, titulo: 'La ciudad y los perros', autor: 'Mario Vargas Llosa', año: 1963, prestado: true },
    { id: 5, titulo: 'El aleph', autor: 'Jorge Luis Borges', año: 1949, prestado: false }
];

// 1. Buscar libro por título exacto
function buscarPorTitulo(titulo) {
    // Tu código aquí (retornar el libro o undefined)
}

// 2. Buscar libro disponible por autor 
function buscarDisponiblePorAutor(autor) {
    // Tu código aquí (retornar el primer libro disponible del autor o undefined)
}

// 3. Buscar el libro más antiguo de un autor
function libroMasAntiguoDeAutor(autor) {
    // Tu código aquí (usar find combinado con otras operaciones)
}

// llamar funciones e imprimir valores