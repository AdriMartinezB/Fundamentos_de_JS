var Ricardo = {
    nombre: 'Ricardo',
    apellido: 'Cardona',
    edad: 24,
    peso: 65
}

console.log (`Al inicio del año ${Ricardo.nombre} pesa ${Ricardo.peso}kg.`);

const INCREMENTO_PESO = 0.2
const DIAS_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_ANO; i++) {
    var random = Math.random()  //Esta función es para sacar un número random. Va a ser un número entre 0 y 1

    if (random < 0.25){  //Si este número random es menor al 25% de las veces.
        aumentarDePeso(Ricardo)
    }else if (random < 0.5){ //Si este número random es menor 50% de las veces.
        adelgazar(Ricardo)
    }
}

console.log (`Al final del año ${Ricardo.nombre} pesa ${Ricardo.peso.toFixed(1)}kg. `)
//toFixed para que solo nos redondee el número. El número que va dentro del parentesis nos indica la cantidad de digitos decimales que va a tener el número.