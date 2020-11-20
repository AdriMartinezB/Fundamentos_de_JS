function crearSaludo(finalDeFrase){   //Esta función recibe como parametro otra función. Esta función es generadora de otras funciones.
    return function(nombre){   //Esto es una función anónima.
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

//Vamos a llamar esta función
const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('parce')

//Vamos a llamar
saludoArgentino('Sacha') //Hola Sacha che
saludoColombiano('Pilar') //Hola Pilar Parce
saludoMexicano('Johana') //Hola Johana wey