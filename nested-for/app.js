// Ejercicio: Suma de Matrices
// Crea un programa en JavaScript que realice la suma de dos matrices de tamaño n x n ingresadas por el usuario.

// Pide al usuario un número n (tamaño de la matriz).
let n = parseInt(prompt("Introduce el tamaño de la matriz (n x n): "));

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1
}

// Genera dos matrices de tamaño n x n con valores aleatorios entre 1 y 9.
function generateMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) { // filas
        let fila = [];
        for (let j = 0; j < n; j++) { // columnas
            let num = getRandomNumber();
            fila.push(num);
        }
        matrix.push(fila); 
    }
    return matrix;
}
const matrixA = generateMatrix(n);
const matrixB = generateMatrix(n);

// Usa bucles for anidados para calcular la suma de ambas matrices.

// Muestra las dos matrices originales y la matriz resultante en la consola.
console.log(matrixA, matrixB);