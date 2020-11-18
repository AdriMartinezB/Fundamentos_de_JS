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

const esAlta = persona => persona.altura > 1.8;

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);

const pasarAlturaACms = persona => {

    return { //cuando lo escribimos de esta manera, recordemos que creamos un nuevo array para no modificar el original.
        ...persona,  //Se crea el nuevo objeto
        altura: persona.altura * 100   //Pisamos ese nuevo objeto
    }
}
/*  Es la misa función escrita en la parte de arriba pero para no tener que poner el return lo que se hace es que se pone la función entre ()

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    })

*/

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);
