// También es posible pasar callbacks como una expresión
function procesarUsuario(callback) {
    const nombre = "Lalo";
    callback(nombre);
}

procesarUsuario(function(nombre) {
    console.log("Hola,", nombre);
})

procesarUsuario((nombre) => {
    console.log("Hola,", nombre);
})

const frutas = ["pera", "uva", "manzana"];

function showValue(fruta) {
    console.log(fruta)
    // console.log(indice)
    // console.log(todasFrutas)
}

// frutas.forEach((value, index, array) => {
//     console.log(value)
// })
// frutas.forEach(showValue)

// Simular la función forEach
function customForEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        const value = array[i];
        const index = i;
        callback(value, index, array)
    }
}

// customForEach(frutas, (val, i, arr) => {
//     // hacer logica...
//     console.log(val)
// })

customForEach(frutas, showValue)