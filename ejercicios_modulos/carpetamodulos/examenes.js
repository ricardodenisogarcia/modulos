function promedio(examen1, examen2){
    var notaCuatrimestre = examen1 + examen2;
    var notaFinal = notaCuatrimestre / 2;
    return notaFinal
}
 //var promedioMate = promedio(5,8);
 //console.log(promedioMate);

//console.log(promedio(5,8));
module.exports = {
    promedio,
    //promedioMate
}