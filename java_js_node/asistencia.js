//const qtdasistencias = 5
const asistencias =[true,false,false,true,true]
let sumaasis = 0
let promedio = 0

for (x = 0; x < asistencias.length;x++){
    if(asistencias[x]){
        sumaasis++
    }
}

promedio = (sumaasis * 100 )/ asistencias.length

console.log("El promedio de asistencias es de: " + promedio)