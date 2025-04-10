// Simulador de Cajero Automático

/**
 * Objetivo: Practicar el uso del ciclo while para crear un sistema de cajero automático interactivo por consola.
 * 
 * Crea un programa que simule un cajero automático con las siguientes funcionalidades:
 * 
 * Saldo inicial: $10,000
 * Menú de opciones:
 *  1. Consultar saldo
 *  2. Depositar dinero
 *  3. Retirar dinero
 *  4. Salir
 * 
 * El programa debe:
 * Mostrar el menú de opciones continuamente hasta que el usuario elija salir
 * Validar que los montos ingresados sean números positivos
 * No permitir retiros mayores al saldo disponible
 * Mostrar mensajes claros para cada operación
 * 
 */

// Simulador de Cajero Automático
let saldo = 10000;
let opcion = '';

while (opcion !== '4') {
  // Mostrar menú
  console.log("\nBienvenido al Cajero Automático");
  console.log("1. Consultar saldo");
  console.log("2. Depositar dinero");
  console.log("3. Retirar dinero");
  console.log("4. Salir");
  
  // Solicitar opción (simulamos input con prompt)
  opcion = prompt("Seleccione una opción (1-4): ");
  
  // Procesar opción
  switch(opcion) {
    case '1':
      // TODO: Mostrar saldo actual
      break;
      
    case '2':
      // TODO: Implementar depósito
      break;
      
    case '3':
      // TODO: Implementar retiro
      break;
      
    case '4':
      console.log("Gracias por usar nuestro cajero. ¡Hasta pronto!");
      break;
      
    default:
      console.log("Opción no válida. Por favor seleccione 1-4.");
  }
}