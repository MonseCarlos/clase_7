const calificaciones = [10,6,7,5,4,8,9]
let examenes = 0

for(x=0; x < calificaciones.length;x++){
    if(calificaciones[x]<6){
        examenes++
    }
}

console.log("la cantidad de examenes a realizar de nuevo es de: " + examenes)