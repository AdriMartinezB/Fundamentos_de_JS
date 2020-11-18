var edad = 27;

edad = edad +1 ;//Si queremos incrementar en uno lo escribimos así.

edad += 1; //Es lo mismo que edad = edad + 1

var peso = 75; // Hacemos lo mismo para restar.

peso = peso - 2;

peso -= 2;

var sandwich = 1;

peso = peso + sandwich; //Operaciones entre variables.

peso += sandwich;

var jugarFutbol = 3;

peso = peso - jugarFutbol;

peso -= jugarFutbol;

var precioDeVino = 200.3; //Ejemplo con deciamles.

var total = precioDeVino * 3; //Redondear decimales no es tan preciso.  Así que utilizamos una función.

var total1 = precioDeVino * 100 * 3 / 100;

//Para redondear mas deciamles. Utilizamos el siguiente modulo

var total2 = Math.round (precioDeVino * 100 * 3) / 100;

var totalStr = total2.toFixed(2);//Si queremos que salga 600.90, el toFixed es tener en cuenta los decimales despues de la coma.

var total3 = parseFloat (totalStr); //Ahora si queremos pasar el string a float lo hacemos de esta manera.  parse es transformar, leer.

var pizza = 8;

var persona = 2;

var cantidadDePorcionesPorPersona = pizza / persona;