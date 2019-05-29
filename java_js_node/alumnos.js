let alumnos = [{
    nombre :"alumeno1",
    calificaciones : [10,5,8,6,5,8]
}, {
    nombre:"alumeno2",
    calificaciones : [5,5,7,5,5,7]
} ]

const alumeno = "nombre"
const calif = "calificaciones"

let promedio = 0
let totalc 

let calificacion = 0
for (x=0;x<alumnos.length;x++){
    totalc = alumnos[x].calificaciones.length;
    promedio = 0;
    for(y=0; y< totalc;y++){
        promedio = promedio +alumnos[x].calificaciones[y]
    }
    calificacion = promedio/totalc

    if(calificacion < 6){
        console.log("El alumno: " + alumnos[x].nombre + " reprobo con una calificacion de: " + calificacion)

    }

   // console.log("El alumno: " + alumnos[x].nombre + " reprobo con una calificacion de: " + calificacion)

    
}