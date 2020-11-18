var Ricardo = {
    nombre: 'Ricardo',
    apellido: 'Cardona',
    edad: 24,
    peso: 75
}

console.log (`Al inicio del año ${Ricardo.nombre} pesa ${Ricardo.peso}kg. `);

const INCREMENTO_PESO = 0.3
const DIAS_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3  //30% de los días come mucho.
const realizaDeporte = () => Math.random() < 0.4  //40% de los días realiza deporte.

const META = Ricardo.peso - 3 //objetivo de la persona menos los 3 kg que debe bajar.
var dias = 0

while (Ricardo.peso > META) {
    if(comeMucho()){
        aumentarDePeso(Ricardo)
    }

    if (realizaDeporte()){
        adelgazar(Ricardo)
    }
    dias +=1
}

console.log (`Pasaron ${dias} hasta que ${Ricardo.nombre} adelgazo 3 kg`)