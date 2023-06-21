let contador=1
let billetera=0
let ingresos

while (contador == 1) {
    
    ingresos=parseInt(prompt("Ingrese el monto para su billetera virtual"))

    let total=+ ingresos 

    window.alert(`Monto ingresado: ${ingresos}`)

    contador=confirm("¿Desea continuar con ingresar montos a su billetera?")

    billetera=total
}

    window.alert(`Billetera actual: ${billetera}`)

    /*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math*/