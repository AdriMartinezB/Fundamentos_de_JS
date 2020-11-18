// Para declarar variables lo hacemos de la siguiente manera:

var nombre ;

//Asignar un valor en esa variable

nombre = 'Pilar' ;

//Las comillas mas utilizadas en JS es la comilla simple, sin embargo no interesa si se utiliza comillas dobles, es buena práctica hacerlo.

//Hay casos muy puntuales donde si o si se deben poner los ;

console.log ('Hola ' + nombre); //Para imprimir en el navegador.

// Para declarar y asignar una variable en una sola linea se hace de la siguiente forma:

var nombre = 'Adriana';

var apellido = 'Martinez';

console.log('Hola ' +  nombre + ' ' + apellido);

//Podemos declarar y asignar varias variables en una sola linea, así:

var nombre = 'Ricardo', apellido= 'Cardona';

console.log ('Hola ' + nombre + ' ' + apellido);

//Js es un lenguaje debilmente tipado por que no hay nada que diga que un dato sea especifco en str, int, bool, etc. Puede que empiece sinedo un número el valor y termine como un str.