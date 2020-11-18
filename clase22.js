/* JavaScript funciona con una estructura orientada a objetos y cada objeto
tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo. */

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){ //Es un objeto más de JS
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.8
}

var pilar = new Persona ('Pilar', 'Martinez', 1.72)
var ricardo = new Persona ('Ricardo', 'Cardona', 1.65)
var Amalia = new Persona ('Amalia', 'Quintana', 1.89)

pilar.saludar()
ricardo.saludar()
Amalia.saludar()

pilar.soyAlto()
ricardo.soyAlto()
Amalia.soyAlto()
//El prototipo es un objeto más de JS. Si nosotros lo modificamos, a partir de ahi va a quedar modificado.
//Los prototipos se suelen poner en el mismo lugar siempre para así llevar un orden y que no afecte el programa.
//Si lo ponemos por ejemplo despues de las lineas de var, nos arroja un error.