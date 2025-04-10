/**
 * Diferencias entre while y for loops en JS
 * 
 * for: ideal para situaciones donde sabes (o puedes calcular) el número de iteraciones por adelantado
 * while: ideal para situaciones donde el número de iteraciones es desconocido o depende de condiciones dinámicas
 * 
 */

const frutas = ['manzana', 'banana', 'naranja'];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// Con while (menos ideal)
// let j = 0;
// while (j < frutas.length) {
//   console.log(frutas[j]);
//   j++;
// }

// While ideal para num de iteraciones desconocidas
let userInput = "";
while (userInput !== "exit") {
  userInput = prompt("Escribe un numero o 'exit' para salir: ")
  let num = parseInt(userInput)
  if (typeof num === "number" && num !== NaN) {
    alert(`El numero es ${num % 2 === 0 ? "par" : "impar"}`)
  } else {
    continue;
  }
}

//  Consejos para Elegir
/**
 * Usar for para:
 * 
 * Recorrer arrays o strings
 * Ejecutar código un num específico de veces
 * Soluciones con contador claro
 * 
 * 
 * Usar while para:
 * 
 * Esperar la entrada del usuario
 * Procesar datos para encontrar valor especifico
 * Juegos (game loops)
 * 
 */