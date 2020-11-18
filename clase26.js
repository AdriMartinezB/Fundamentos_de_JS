/* En JavaScript, los parámetros de funciones son por defecto undefined.
De todos modos, en algunas situaciones puede ser útil colocar
un valor por defecto diferente que lo evalúe como verdadero. */

//En JS tambien se pueden pasar funciones como parametros.

class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(esDev){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (esDev) {
            esDev(this.nombre,this.apellido,false)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar (esDev){
        /* var nombre = this.nombre
        var apellido = this.apellido */
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (esDev) {
            esDev(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var pilar = new Persona ('Pilar', 'Martinez', 1.72)
var ricardo = new Persona ('Ricardo', 'Cardona', 1.65)
var Amalia = new Desarrollador ('Amalia', 'Quintana', 1.89)

pilar.saludar()
ricardo.saludar(responderSaludo)
Amalia.saludar(responderSaludo)
