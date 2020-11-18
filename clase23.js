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

var pilar = new Persona ('Pilar', 'Martinez', 1.72)
var ricardo = new Persona ('Ricardo', 'Cardona', 1.65)
var Amalia = new Persona ('Amalia', 'Quintana', 1.89)

/* El error del contexto de this en JavaScript es uno de los errores más comunes.
Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.
Por eso en la función no se poner como arrown function.  */
