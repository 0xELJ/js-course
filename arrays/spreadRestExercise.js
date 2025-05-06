/**
 * Ejercicio — "Gestión de Estudiantes"
 * 
 * Tienes un array de estudiantes y un objeto con datos personales.
 * Debes implementar funciones que practiquen tanto spread como rest.
 */

const estudiantes = ['Ana', 'Luis', 'Carlos'];

const datosPersonales = {
  nombre: 'Ana',
  edad: 20,
  ciudad: 'Madrid'
};

const datosAcademicos = {
  universidad: 'UCM',
  carrera: 'Ingeniería'
};

// 1. Clona el array de estudiantes usando spread

// 2. Agrega un nuevo estudiante al array clonado (sin modificar el original)

// 3. Crear una función agregarCursos que agregue cursos a un estudiante usando rest
const agregarCursos = (estudiante, ...cursos) => {}

// 4. Combina datos personales con información académica (spread en objetos).

// 5. Muestra los resultados por consola.