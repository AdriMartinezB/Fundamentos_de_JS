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

const MAYORIA_DE_EDAD= 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad. `);
    } else{
        console.log(`${persona.nombre} es menor de edad. `) ;
    }
}

function permitirAcceso (persona){
    if(!esMayorDeEdad(persona)){          //El simbolo ! es la negación.
        console.log('ACCESO DENEGADO')
    }
}

imprimirSiEsMayorDeEdad(ejemplo)
permitirAcceso(ejemplo)
console.log(' ')
imprimirSiEsMayorDeEdad(ejemplo1)
permitirAcceso(ejemplo1)

//Reto escribir la negación de menor de edad

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

const Mayoria_de_edad = 18

function siEsMenorDeEdad (persona){
    return persona.edad < Mayoria_de_edad
}

function edades (persona) {
    if(siEsMenorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function Acceso (persona){
    if (!siEsMenorDeEdad(persona)){
        console.log('Bienvenido a la farra (*-*)/')
    }
}

edades (ejemplo)
Acceso (ejemplo)
console.log(' ')
edades (ejemplo1)
Acceso (ejemplo1)