//Para definir un prototipo lo unico que debemos definir es una function. Esta funcion es la que se ve a crear cuando creemos una nueva persona.
function Persona(nombre, apellido, altura){     //Y en los parametros va a requerir inicilizar o crear una nueva persona.
    this.nombre = nombre //Hace referencia al objeto que se acaba de construir.
    this.apellido = apellido  //No es necesario poner return this por que esta implicito en JS que se retorne el objeto que se acaba de crear.
    this.altura = altura
}

Persona.prototype.soyAlto = function(){  //Aca estamos diciendo que dentro del prototipo Persona va a existir un atributo que en este caso seria soyAlto
    if (this.altura > 1.80) {
        console.log(`Me llamo ${this.nombre} ${this.apellido} y soy alto. `)
    } else {
        console.log(`Me llamo ${this.nombre} ${this.apellido} y no soy alto. `)
    }
}

/* Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`)
} */

var pilar = new Persona('Pilar', 'Martinez', 1.58) //new prototipo, la palabra new hace que se cree un nuevo objeto y a ese objeto se le va a asignar
var ricardo = new Persona('Ricardo', 'Cardona', 1.72)//el prototipo que se le indique despues.
var felipe = new Persona('Felipe', 'Quiñonez', 1.85) //Luego se va a ejecutar este constructor "esta funcion" que lleva por nombre el prototipo.


pilar.soyAlto()
ricardo.soyAlto()
felipe.soyAlto()



