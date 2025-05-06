/**
 * Spread Operator -> Extiende/Expande
 * 
 * Toma los elementos de un array u objeto y los expande donde se esperan elementos indiviudales
 */

// Copia de un array
const numeros = [5, 6, 7];
const copiaNumeros = [...numeros];
// Opcion de copia sin spread
const copia = numeros.slice();
console.log({ copiaNumeros, copia })

// Concatenar arrays
const nombres = ["Martha", "Kike"]
const todos = ["Lalo", ...nombres];


// Copia de un objeto
const persona = { nombre: 'Kike', edad: 31 };
const copiaPersona = { ...persona };
// Opción de copia
const copiaObj = Object.assign({}, persona);
console.log({ copiaPersona, copiaObj })

// Extender un objeto
const personaConCiudad = { ...persona, ciudad: 'CDMX' };


/**
 * Rest Operator -> Agrupar
 * 
 * Toma múltiples elementos y los empaqueta en un array u objecta
 */
function suma(...numeros) {
    console.log(numeros)
    return numeros.reduce((suma, num) => suma + num, 0);
}

const res = suma(7, 8, 9, 10)
console.log({ res })

const { nombre, ...otrosDatos } = personaConCiudad;
console.log({ nombre, otrosDatos })