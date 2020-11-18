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
    apellido: 'Barrios',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

//Para llamarlo en la consola lo podemos hacer de las siguientes maneras:
//  personas[0]
//  personas[0].altura
//  personas[0]['altura']

//Para recorrerlo lo vamos a hacer con un ciclo for

for (var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura} mts. `)
}

//Iterarlos: Es recorrer los arrays.