var Pilar = {
    nombre : 'Pilar',
    apellido: 'Martinez',
    edad: 25,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function profesiones (persona){
    console.log(`${persona.nombre} es: `);
    if (persona.ingeniero === true){ //no es necesario ponerle el === true, por que si bien es verdadero se esta estableciendo verdadero desde un comienzo en la condición. 
        console.log('Ingeniera')
    }

    if (persona.cocinero){
        console.log('Cocinera')
    }

    if (persona.cantante){
        console.log('Cantante')
    }


    if (persona.dj){
        console.log('Dj')
    }

    if (persona.guitarrista){
        console.log('Guitarrista')
    }

    if (persona.drone){
        console.log('Dronista')
    }
}

profesiones (Pilar)

// Desafio: Escribir la funcion llamada imprimirSiEsMayorDeEdad, va a recibir una persona y debe imprimir "xx es mayor de edad" o "xx no es mayor de edad"

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

function imprimirSiEsMayorDeEdad (persona){
    if (persona.edad < 18){
    console.log(`${persona.nombre} no es mayor de edad. `)
    } else{
        console.log(`${persona.nombre} es mayor de edad. `)
    }
}

imprimirSiEsMayorDeEdad(ejemplo)
imprimirSiEsMayorDeEdad(ejemplo1)
