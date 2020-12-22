var alumnado = require("./alumno");
var asignaturas = require("./carpetamodulos/asignaturas");

var alumno1 = new alumnado.Alumnos("Ricardo","Deniso",33);
var alumno2 = new alumnado.Alumnos("Joselito","Gonabi",42);
var alumno3 = new alumnado.Alumnos("Juana","De Arco", 22);

var alumno01 = alumno1.nombre + " " + alumno1.apellido + " " + "edad " + alumno1.edad;
//console.log(alumno01);
var alumno02 = alumno2.nombre + " " + alumno2.apellido + " " + "edad " + alumno2.edad;
var alumno03 = alumno3.nombre + " " + alumno3.apellido + " " + "edad " + alumno3.edad;

var mat01 = asignaturas.notas.promedio(9, 9);
var mat02 = asignaturas.notas.promedio(4, 6);
var mat03 = asignaturas.notas.promedio(6, 6);

console.log("Los alumnos del primer año son:" + " " + alumno01 + ", " + alumno02 + " y " + alumno03 );
console.log("El promedio de " + alumno1.nombre + " en la asignatura matematicas es: " + mat01);
console.log("El promedio de " + alumno2.nombre + " en la asignatura matematicas es: " + mat02);
console.log("El promedio de " + alumno3.nombre + " en la asignatura matematicas es: " + mat03);
