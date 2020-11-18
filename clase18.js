var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = persona => persona.altura > 1.8
// const esAlta = ({altura}) => altura > 1.8    Desglosado
const esBaja = persona => persona.altura < 1.8
// const esBaja = ({altura}) => altura < 1.8    Desglosado

var personas = [sacha, alan, martin, dario, vicky, paula]

//Para filtrar necesitamos dos cosas: un array y una condición. Y esa condición va a ser una función.
// var personasAltas = personas.filter(condición) y esa condición debe ser una función.

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


//Tambien puede funcionar de la siguiente manera

/*

var personasAltas = personas.filter (function (persona){
    return persona.altura > 1.8
})

*/

console.log(personasAltas)
console.log(personasBajas)

