const alumnos = [{
    nombre :"Maria",
    materias:[{
        nombre: "Ciencias",
        calificacion: 9
    },{
        nombre:"matematicas",
        calificacion: 8
    }]
},{
    nombre :"Juan",
    materias:[{
        nombre: "Ciencias",
        calificacion: 8
    },{
        nombre:"matematicas",
        calificacion: 5
    }]
}]

for (x=0;x<alumnos.length;x++){
    for(y=0;y< alumnos[x].materias.length;y++){

        if(alumnos[x].materias[y].calificacion<6){
            console.log("El alumno: "+ alumnos[x].nombre + " reprobo " + alumnos[x].materias[y].nombre)
        }
    }
}