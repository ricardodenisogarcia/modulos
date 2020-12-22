var profe = require("./profesores");
var notas = require("./examenes");


var profeMatematicas = new profe.Profesor("Miguel");
var matematicas1er = notas.promedio(8,9);
var PrimerAño = profeMatematicas.nombre + "  " + matematicas1er;
//console.log(PrimerAño);


module.exports = {
    //PrimerAño,
    profe,
    notas,
}