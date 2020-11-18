const API_URL = 'https://swapi.dev/api/'   //Guardar la URL en una variable que la vamos a poner como constante.
const PEOPLE_URL = 'people/:id' //Poner la parte de las personas.
var personaje = prompt(`Ingresa el # del personaje que quieres ver: `)

//Para hacer un request con jquery debemos hacerlo con $.get
//Este acepta varios parametros como la url a la que queremos acceder.

const LUKEURL = `${API_URL}${PEOPLE_URL.replace(':id',personaje)}` // para reemplazar  id por el número vamos a utilizar la función replace.
const OPTS = {crossDomain: true} // Indicarle a jQuery debe hacerlo a otra página.

//  $.get(LUKEURL, OPTS, function (data) {   //Esta funcion que pusimos solo se va a ejecutar si el request es exitoso.
//      console.log(`Hola, yo soy ${data.name}`) //Y ese request lo hace el .get
//  })   //Y recordemos que esa función la estamos pasando como parametro.

/* const onResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`)
} */

const onResponse = data => console.log(`Hola, yo soy ${data.name}.`)

$.get(LUKEURL, OPTS, onResponse)


