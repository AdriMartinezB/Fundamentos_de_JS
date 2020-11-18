//A partir del año 2015 se empieza a actualizar con el nombre de ECMAScript año, es el estandar que se basa JS para
//conformarse como lenguaje, es decir todas las funcionalidades que tiene como lenguaje.

/* De esta manera decimos que hay una clase "Persona" y que va a tener un método llamado constructor. */
class Persona { //Creación de una clase que es lo mismo que un prototipo.
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola, me lamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar (){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

var pilar = new Persona ('Pilar', 'Martinez', 1.72)
var ricardo = new Desarrollador ('Ricardo', 'Cardona', 1.89)

/* function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
} */

/* Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
} */