var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]
//Si este ejemplo lo hicieramos con un ciclo como lo es for nos quedaria de la siguiente manera:

/* var acum = 0

for (var i = 0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${acum} libros`)
*/

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros //cantidadDeLibros es por que solo nos interesa ese dato, asi que en los paremetros podemos desestructurar a la persona por eso lo ponermos entre {}

var TotalLibros = personas.reduce(reducer, 0) //Reducir el radio de personas a un total, y para eso necesitamos dos cosas una funcion que en este ejemplo llamamos reducer, y el valor original del valor inicial del acomulador.

console.log(`En total todos tienen ${TotalLibros} libros`)

