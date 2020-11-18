var nombrePilar = 'Pilar';
var nombreRicardo = 'Ricardo';

function imprimirNombreEnMayusculas1(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre)
}

imprimirNombreEnMayusculas1(nombrePilar);
imprimirNombreEnMayusculas1(nombreRicardo);

//Lo anterior no es muy conveniente si se necesitan meter varios datos. Así que para eso se realizan los objetos.
console.log(" ");

var Isabella = {
    Nombre : 'Isabella',  //Clave (Key) : valor (value)
    Apellido : 'Coullen', //van separados por medio de una coma.
    Edad : 31
}

var Leidy = {
    Nombre : 'Leidy',
    Apellido : 'Gomez',
    Edad : 82
}

function imprimirNombreEnMayusculas2(n){
    n = n.toUpperCase();
    console.log(n);
}

imprimirNombreEnMayusculas2(Isabella.Nombre);
imprimirNombreEnMayusculas2(Leidy.Nombre);

console.log(" ");

var Maria = {
    NOMBRE : 'Maria',
    APELLIDO : 'Jimenez',
    EDAD : 75
}

var Juan = {
    NOMBRE : 'Juan',
    APELLIDO : 'Quinonez',
    EDAD : 38
}

function imprimirNombreEnMayusculas3(persona){
    var nombre = persona.NOMBRE.toUpperCase(); //Esto lo podemos escribir de otra manera. **
    console.log(nombre);
}

imprimirNombreEnMayusculas3(Maria);
imprimirNombreEnMayusculas3(Juan);

//** function imprimirNombreEnMayusculas3(persona){
//   console.log(persona.NOMBRE.toUpperCase());
//   }

//  function imprimirNombreEnMayusculas3({NOMBRE}){  //Esto para solo acceder a nombre del objeto.
//  console.log(NOMBRE.toLowerCase());
//  }



console.log(" ")

imprimirNombreEnMayusculas3({NOMBRE: 'Alicia'});  //Podemos definir un nuevo objeto así.

// imprimirNombreEnMayusculas3() //JS va a tratar de acceder al atributo nombre y como no se lo estamos pasando entonces es como un undefined.