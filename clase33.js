const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPersonaje (id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url, opts,function(data){
            resolve(data)
        })
        .fail(() => reject (id))
    })
}

function onError (id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}


obtenerPersonaje(1)
.then(personaje => {
    console.log(`El personaje 1 es: ${personaje.name}`) //Al resolver esta promesa vamos a retornar otra promesa.
    return obtenerPersonaje(2)
})
.then(personaje => {
    console.log(`El personaje 2 es: ${personaje.name}`) //Al resolver esta promesa vamos a retornar otra promesa.
    return obtenerPersonaje(3)
})
.then(personaje => {
    console.log(`El personaje 3 es: ${personaje.name}`) //Al resolver esta promesa vamos a retornar otra promesa.
})
.catch(onError)



