/**
 * Ejercicio for...in: Calculadora de sueldos
 * 
 * A continuación se define una colección de empleados mediante un objeto. Cada empleado está
 * representado mediante un objeto anidado que contiene su puesto (position) y salario (salary).
 * Crea las siguientes funciones para calcular la colección de empleados:
 * 
 * 1. Calcular el salario promedio de los empleados
 * 2. Indentifcar el empleado con el salario más alto
 * 3. Crear un nuevo objeto con los salarios incrementados (10% para 'manager', 5% para developer y designer) 
 */

const employees = {
    john: {
        position: 'developer',
        salary: 6000
    },
    mary: {
        position: 'designer',
        salary: 5500
    },
    peter: {
        position: 'manager',
        salary: 8000
    },
    sarah: {
        position: 'developer',
        salary: 6500
    }
};
  
function getAverageSalary(employees) {
    // Retornar un valor number con el salario promedio
    return 0;
}

function getHighestPaid(employees) {
    // Retornar un string con el nombre del empleado (ejemplo 'peter')
    return '';
}

function increaseSalary(employees) {
    // Retornar un objeto que contenga todos los empleados con el salario incrementado
    // (10% para 'manager', 5% para developer y designer) 
    return {};
}
  
// Probar funciones
console.log('Empleados: ', employees);
console.log('Promedio: ', getAverageSalary(employees));
console.log('Salario más alto: ', getHighestPaid(employees));
console.log('Incremento de salarios: ', increaseSalary(employees));