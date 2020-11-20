const pilar = {
    nombre: 'Pilar',
    apellido: 'Martinez',
}
const mariela = {
    nombre: 'Mariela',
    apellido: 'Riesnik',
}

function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

const saludarAPilar = saludar.bind(pilar)
const saludarAMariela = saludar.bind(mariela)



const str = `lorem ipsum dolor`

function myFunction(){
	alert('Si usas ";" sí funciono!')
}

	// Uncaught TypeError: "lorem ipsum dolor" is not a function at <anonymous>:4:2



