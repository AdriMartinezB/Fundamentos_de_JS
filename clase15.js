var contador = 0, frecuencia; //contador: número que va a incrementar.  frecuencia: frecuencia con la que va a llover.

const llueve = () => Math.random() < 0.25  //0.25 es igual al 25% de las veces que va a llover.

do {
    contador++
} while (!llueve()) //Esto se va a repetir mientras no llueve.

if(contador === 1){
    frecuencia = "vez"
} else {
    frecuencia = "veces"
}

console.log (`Fui a ver si llovía ${contador} ${frecuencia}.`)
