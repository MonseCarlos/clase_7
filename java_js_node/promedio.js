const calificaciones = [10,8,7,9,5]

let promedio = 0
let calificacion = 0

//const y = calificaciones.length

for(x=0; x < calificaciones.length; x++){

    //console.log(calificaciones[x])
    calificacion = calificacion + calificaciones[x]
}

promedio = calificacion/calificaciones.length

console.log("el promedio de calificacion es: " + promedio)