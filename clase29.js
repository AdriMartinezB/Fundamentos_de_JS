const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Para hacer un request con jquery debemos hacerlo con $.get
//Este acepta varios parametros como la url a la que queremos acceder.
//La const LUKEURL que teniamos acá, ya no nos sirve por que la tenemos abajo en la función obtenerPersonaje
const OPTS = {crossDomain: true}

//  $.get(LUKEURL, OPTS, function (data) {   //Esta funcion que pusimos solo se va a ejecutar si el request es exitoso.
//      console.log(`Hola, yo soy ${data.name}`) //Y ese request lo hace el .get
//  })   //Y recordemos que esa función la estamos pasando como parametro.

const onResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`)
}

function obtenerPersonaje (id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, OPTS, onResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//Cuando hacemos multiples request no nos asegura que nos llegue en el mismo orden, estos pueden llegar todos pero en distinto orden.