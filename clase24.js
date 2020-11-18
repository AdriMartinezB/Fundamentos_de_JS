function heredaDe (prototipoHijo, prototipoPadre){ //Todas las funciones tienen el atributo prototype.
    var fn = function (){}//Esto es una funcion vacia, que no hace nada. Es anonima.
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)  //Primero se puso la clase hija  y luego se pueso la clase padre.

Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

/* var pilar = new Persona ('Pilar', 'Martinez', 1.72)
var ricardo = new Persona ('Ricardo', 'Cardona', 1.65)
var Amalia = new Persona ('Amalia', 'Quintana', 1.89) */


/* Los objetos en JavaScript son “contenedores” dinámicos de propiedades.
Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a
la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino
también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente
hasta que se encuentre una propiedad que coincida con el nombre o se alcance el
final de la cadena de prototipos. */


/* Prototype es un atributo que tienen todas las funciones y que es un objeto, que nos dice que metodos se entienen,
que constructor tiene, y tambien tiene un atributo que dice __proto: que apunta al prototipo que tiene el del inicio.  */