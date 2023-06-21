//Carisellazo

let jugador="Mike"
console.log(prompt("Ingrese su nombre, Jugador ^_~"))

let saldo_global=parseInt(prompt("ingrese el monto inicial"))
let i=1

let cara=parseInt(1)
let sello=parseInt(2)
let partidas=parseInt(1)

let max=parseInt(2)
let min=parseInt(1)
let probabilidad

let apuesta
let apuestaF

function lanzarMoneda() {

    var result = Math.round(Math.random(max-min)*2);
    probabilidad=result

}

function ganar() {

    console.log("Ha ganado")
    apuestaF=apuesta*2
    total=apuestaF+saldo_global
    console.log(`Saldo actual: $${saldo_global}`)

}

let perder=()=>{

    console.log("Ha perdido")
    apuestaF-=apuesta
    total=apuestaF-saldo_global
    console.log(`Saldo actual: $${saldo_global}`)

}

while (i) {

let apuesta=parseInt(prompt("¿Cuanto deseas apostar?"))
let total=saldo_global-apuesta

let eleccion=parseInt(prompt("Elige el lado de la moneda 1: Cara / 2: Sello"))
    console.log(`Elegiste ${eleccion}`)

lanzarMoneda()

if (eleccion === probabilidad) {
    ganar()
} else if (eleccion =! probabilidad) {
    perder()
} else {
    console.log("Error")
}

if (saldo_global==0) {
    partidas==0
    console.log("Te quedaste sin plata, no pudese seguir jugando")

} else if(saldo_global=!0) {



} else {

    console.log("Error")

}
i=(prompt("Deseas jugar nuevamente? 1. SI / 2. NO"))
}

console.log("Gracias por jugar ^_^")