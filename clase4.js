//Las funciones son pedazos de códigos reutilizables.

var nombre = 'Ricardo', edad = 23;

//Para definir la funcion hacemos uso de la palabra function que es una palabra reservada.

function imprimirEdad (nombre, edad){
    console.log (`${nombre} tiene ${edad} años`);
}

function imprimirEdad1 (n, e){
    console.log (`${n} tiene ${e} años`);
}

imprimirEdad(nombre, edad);
imprimirEdad('Adriana', 24);
imprimirEdad1('Jose', 58);
imprimirEdad1('Matilda', 63);
