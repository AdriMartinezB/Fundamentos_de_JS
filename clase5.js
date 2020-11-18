var nombre = 'Pilar';

function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas();  //Invocar la función.

//Para mirar las variables globales en el buscador, como es global ponemos window.variable y nos mostrara que hay tenemos guardada esa variable.

//Para no modificar las variables globales como en el ejemplo anterior lo hacemos de la siguiente manera.

var nombre1 = 'Ricardo';

function imprimirNombreEnMayusculas1(n){  //Esta variable dentro de la funcion tiene un alcance local, quiere decir que solo existe en la funcion.
    n = n.toUpperCase();
    console.log(n)
}

imprimirNombreEnMayusculas1(nombre1);


var nombre2 = 'Daniela';

function imprimirNombreEnMayusculas1(nombre2){  //JS nos permite que la variable local se llame de la misma manera que la variable local.
    nombre2 = nombre2.toUpperCase();
    console.log(nombre2)
}

imprimirNombreEnMayusculas1(nombre2);