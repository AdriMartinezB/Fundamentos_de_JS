const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Para hacer un request con jquery debemos hacerlo con $.get
//Este acepta varios parametros como la url a la que queremos acceder.

const OPTS = {crossDomain: true}

function obtenerPersonaje (id, callback){ //A la funcion que le llamamos callback tambien se le suele llamar cb ó fn
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(url, OPTS, function (data) {
        console.log(`Hola, yo soy ${data.name}`)

        if (callback){
            callback()
        }


    })
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7, function(){
            //A todo esto se le conoce como callback hell
                        })
                    })
                })
            })
        })
    })
})


