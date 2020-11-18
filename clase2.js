var nombre = 'Ricardo', apellido= 'Cardona';

//Para invocar un función le ponemos un .

var nombreEnMayusculas = nombre.toUpperCase();  //Para transformar texto en mayuscula .toUpperCase
var apellidoEnMinusculas = apellido.toLowerCase(); //Para tranformar texto en minuscula .toLowerCase
var primeraLetraNombre = nombre.charAt(0); //Para saber el primer caracter de un Str
var cantidadDeLetrasDelNombre = nombre.length; //Cantidad de letras que tiene el nombre.
var nombreCompleto = nombre + ' ' + apellido; //Como concatenar dos Str
var nombreInterpolado = `${nombre} ${apellido}` //Otra forma de concatenar más nueva. Interpolación de texto.
var nombreInterpoladoV = `${nombre} ${apellido.toUpperCase()}` //Dentro de estas llaves podemos escribir código de JS.
var str = nombre.charAt(1) + nombre.charAt(2);//Podemos acceder a un substring de un string.
var str1 = nombre.substr(3,2);//Pero tambien lo podemos hacer de la siguiente manera. Donde el 3 es desde la posición que va a tomar, y el 2 es la cantidad de letras que va a tomar de ese texto.

console.log (nombreEnMayusculas);
console.log (apellidoEnMinusculas);
console.log (primeraLetraNombre);
console.log (cantidadDeLetrasDelNombre);
console.log (nombreCompleto);
console.log (nombreInterpolado);
console.log (nombreInterpoladoV);
console.log (str);
console.log (str1);

console.log("Desafio: Mostrar la última letra del nombre.")

var nombreDesafio = 'Isabella';
var ultimaLetra = nombreDesafio.charAt(nombreDesafio.length-1);
console.log (ultimaLetra);
