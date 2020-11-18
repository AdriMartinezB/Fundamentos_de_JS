var ejemplo = {
    nombre: 'Ricardo',
    apellido: 'Cardona',
    edad: 25
}

var ejemplo1 = {
    nombre: 'Daniela',
    apellido: 'Cardona',
    edad: 13
}

const MAYORIA_DE_EDAD = 18  //para indicar que una variable es constante le ponemos el const. Se escriben en mayusculas y seperadas por un guión.

function esMayorDeEdad (persona){
    return persona.edad >= MAYORIA_DE_EDAD;  //Nos devuelva esta condición.
}

function imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){  //En esta linea se evidencia si el valor es True.
    console.log(`${persona.nombre} es mayor de edad. `);
    } else {
        console.log(`${persona.nombre} es menor de edad. `) ;
    }
}

imprimirSiEsMayorDeEdad(ejemplo)
imprimirSiEsMayorDeEdad(ejemplo1)
