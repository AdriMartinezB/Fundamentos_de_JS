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

function imprimirNombreEnMayusculas3(persona){
    //var nombre = persona.nombre   Es lo mismo que escribimos en esta linea.
    //Para no tener duplicado como en el ejemplo de arriba el nombre lo ponemos mejor de la siguiente manera:
    var {nombre} = persona //Vamos a crear la variable nombre que va a salir de persona.nombre
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas3(Maria);
imprimirNombreEnMayusculas3(Juan);

// Reto: Escribir funcion que se llame imprimir nombre y edad que imprima: Hola me llamo Shacha y tengo 28 años.

var Gabriela = {
    nombre : 'Gabriela',
    apellido : 'Montes',
    edad : 34
}

var Laura = {
    nombre : 'Laura',
    apellido : 'Malaver',
    edad : 28
}


function ImprimirNombreyEdad ({nombre, edad}){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}

ImprimirNombreyEdad(Gabriela);
ImprimirNombreyEdad(Laura);
