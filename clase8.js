var Maria = {
    nombre : 'Maria',
    apellido : 'Jimenez',
    edad : 75
}

var Juan = {
    nombre : 'Juan',
    apellido : 'Quinonez',
    edad : 38
}

function cumpleanos (persona){
    return {   //Retornar de esta función función un objeto nuevo.
        ...persona,  //Desglosamos a esa persona original en este objeto nuevo. Pero podemos pisar alguno de los atributos o incorporar nuevos si quisieramos.
        //Si queremos modificar la edad por ejemplo lo hacemos de la siguiente forma:
        edad: persona.edad + 1
    }
}
 //Lo que hace esta función es ahora devolvernos un nuevo objeto que va a tener una edad aumentada en 1.
