const pilar = {
    nombre: 'Pilar',
    apellido: 'Martinez',
    edad: 25
}

/* const cumpleanos = persona => persona.edad++ */

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad+1
})