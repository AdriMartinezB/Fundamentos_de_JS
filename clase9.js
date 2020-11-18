var x = 4, y = '4';

//  =   Para asignar un valor  a una variable.
// ==   Comprar dos valores. Toma los dos valores y los lleva a un mismo tipo de dato y los compara.
// ===  Si queremos preguntar si son el mismo valor y ademas son la misma variable se ponen estos tres iguales.

//Si comparamos por ejemplo x == y nos va a dar True por que 4 en número es igual a 4 en str. lo que hace es que lleva al número cuatro a un str y los compara, como ve que son dos str iguales nos da True. 

//Ahora bien si queremos comparar que son el mismo valor y además el mismo tipo lo hariamos con el ===.

var sacha = {
    nombre: 'Sacha'
}

var otrapersona = {
    ...sacha
}
// Cuando comparamos objetos en JS, lo que hace JS es preguntar por la referencia de la variable que se esta utilizando.

//Para que esa comparación nos de true, se haria de la siguiente manera:

var otrapersona = sacha;
