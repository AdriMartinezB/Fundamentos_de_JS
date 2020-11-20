function diasEntreFechas (fecha1, fecha2){
    const unDia = 1000 * 60 * 60 * 24 //milisegundos * 60 segundos * 60 minutos * 24horas
    const diferencia = Math.abs(fecha1 - fecha2) //El math.abs nos saca el número absoluto del resultado.

    return Math.floor(diferencia / unDia) //Math.floor para redondear para abajo.
}

const hoy = new Date() //Fecha actual por defecto
const nacimiento = new Date(1995, 8, 12)