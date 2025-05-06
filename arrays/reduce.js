/**
 * Función reduce() en JavaScript es un método de arreglos que permite 'reducir' un arreglo a un
 * único valor mediante la invocación de una función reductora (en secuencia) y la acumulación
 * del resultado.
 */

const array = [1, 2, 3];
initialValue = 0;

/**
 * Sintaxis de reduce() 
 * 
 * @param reducer Callback que es ejecutada por cada elemento y sirve como función reductora
 * @param initialValue (opcional) Valor que se usa como el primer argumento en la primera invocación del callback
 */
array.reduce(reducer, initialValue);


/**
 * Sintaxis de función reductora (reducer function)
 * @param accumulator El valor acumulado de la ejecución anterior del callback
 * @param currentValue El elemento actual que está siendo procesado
 * @param currentIndex (opcional) El índice del elemeto actual
 * @param array (opcional) El arreglo sobre el cuál reduce() fue invocado
 */
function reducer(accumulator, currentValue, currentIndex, array) {
    // logica para acumular valor...
    return accumulator; // siempre regresar el valor acumulado
}

// Ejemplo básico: suma de números
function sumaReducer(accumulator, currentValue, currentIndex, array) {
    // console.log({ accumulator, currentValue, currentIndex, array });
    // accumulator = accumulator + currentValue; 
    accumulator += currentValue;
    return accumulator;
}

const suma = array.reduce(sumaReducer, 0);
console.log({ suma });


// Ejemplo promedio de edad
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 17 },
    { nombre: 'María', edad: 30 }
];
// TODO: Poner logica de promedio aqui...

//REDUCE METHOD PT. 3
const votes = ['y','y','n','y','n','y','n','n'];

const result = votes.reduce((tally, vote) =>{
    if (tally[vote]) {
        tally[vote]++;
    } else {
        tally[vote] = 1;
    }
    return tally;
}, {});

console.log({ result })

// const result = votes.reduce((tally, val) =>{
//     tally[val] = (tally[val] || 0) + 1;
//     return tally;
// },{})


// Ejemplo sin valor inicial
