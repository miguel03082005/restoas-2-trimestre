let mes=parseInt(prompt("ingresa el mes que esta"));
console.log(`Mes elegido: ${mes}`)
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log(`Se encuentra en Invierno`)
    break;

    case 3:
    case 4:
    case 5:
        console.log(`Se encuentra en Primavera`)
    break;

    case 6:
    case 7:
    case 8:
        console.log(`Se encuentra en Verano`)
    break;

    case 9:
    case 10:
    case 11:
        console.log(`Se encuentra en Otoño`)
    break;

    default:
        console.log(`Dato incorrecto`)
        break;
}