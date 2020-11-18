var signo = prompt ('¿Cuál es tu signo?') //Esta funcion lo que hace es mostrarle una pregunta al usuario y solicitarle datos al usuario. 

switch (signo) {
    case 'acuario':
        console.log('No desvíe por ninguna razón su visión, de lo contrario, no podrá cumplir con los objetivos que se propuso para su vida. Si se lo propone, conseguirá todo.')
        break;
    case 'piscis':
        console.log('Prepárese, ya que se acerca el momento propicio para demostrar al mundo lo que usted es capaz de brindar. Intente ser más solidario, no espere nada a cambio.')
        break;
    case 'aries':
        console.log('Sepa que pronto recuperará la autoestima y la seguridad en usted mismo, así podrá alcanzar el éxito en sus próximos emprendimientos y proyectos planeados.')
        break;
    case 'tauro':
        console.log('No es momento para detenerse. Prepárese, ya que se sentirá pleno de vitalidad y confianza, todo lo que emprenda en esta jornada tendrá un final exitoso.')
        break;
    case 'géminis':
    case 'geminis':
        console.log('Deje de seguir vacilando y empiece a actuar sin demora, ya que será un período de decisiones. No deje para después lo que puede y quiere hacer hoy.')
        break;
    case 'cáncer':
    case 'cancer':
        console.log('Transitará por un período óptimo para comenzar con una renovación en su vida personal. No olvide aceptarse tal cual es e incremente su autoestima.')
        break;
    case 'leo':
        console.log('Durante esta jornada, sentirá una gran contradicción entre sus propios deseos y lo que tiene, no se ahogue en ellos. Crea en usted mismo y todo saldrá como esperaba.')
        break;
    case 'virgo':
        console.log('Comenzará el día deseando estar en soledad. No piense que algo funciona mal, sepa que se trata de una necesidad de reencontrarse con usted mismo.')
        break;
    case 'libra':
        console.log('Sepa que aislarse no le traerá ningún beneficio, no permita que su timidez le gane. No es momento para reprimirse, intente abrirse a los demás.')
        break;
    case 'escorpion':
    case 'escorpión':
        console.log('Comprenda que no se puede resolver todo en un solo día. Empiece a ser más paciente y deje que trascurra el tiempo necesario para que todo se acomode.')
        break;
    case 'sagitario':
        console.log('Probablemente, se sentirá presionado entre la diversión y el deber en esta jornada. Lo mejor será que se entregue a la soledad y ponga en orden sus ideas.')
        break;
    case 'capricornio':
        console.log('Deje de exponer tanto su vida privada a los demás, ya que las decisiones deberá tomarlas usted mismo. Hoy su inseguridad le afectará en todos los planos.')
        break;
    default:
        console.log('No es un signo zodiacal valido.')
        break;
}