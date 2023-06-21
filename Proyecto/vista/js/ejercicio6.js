//Metodo 1: Función a declarar
//Creación del metodo

    let rta=parseInt(prompt("que operacion va realizar 1=suma 2=resta 3=multiplicacion 4=divicion"))
    let numberOne=parseInt(prompt("Ingrese el primer número"))
    let numberTwo=parseInt(prompt("Ingrese el segundo número"))


function sumar(numberOne,numberTwo) {
    //cuerpo función 
    console.log(`La suma de los números ${numberOne} y ${numberTwo} es igual a ${numberOne+numberTwo}`)
    
}

/*function sumar(numberOne,numberTwo) {
    let numberOne=parseInt(prompt("Ingrese el primer número"))
    let numberTwo=parseInt(prompt("Ingrese el segundo número"))

    let suma= numberOne+numberTwo

    console.log(`La suma de ${numberOne} y ${numberTwo} es igual a ${suma}`)
}*/

//Invocar del Metodo/Función
//sumar()

//Metodo 2: Función por Expresión: la encapsula en una variable

let rest= function restar( numberOne, numberTwo) {

    let resta= numberOne-numberTwo

    return

}

resultado=rest(numberOne,numberTwo)

console.log(`el resultado de la resta entre ${numberOne} y ${numberTwo} ${rest(numberOne,numberTwo)}`)

//rest(numberOne,numberTwo)

//Metodo 3: Función anónima

let mult=function(numberOne,numberTwo) {
    console.log(`La multipicación de ${numberOne} y ${numberTwo} es igual a ${numberOne*numberTwo}`)
}

//mult()

//Metodo 4: Función Arrow o flecha
let div=(numberOne, numberTwo)=>{
    console.log(`La división de ${numberOne} y ${numberTwo} es igual a ${numberOne/numberTwo}`)
}

//div()

/*for (i=1;i=5;i++) {
    if (rta === 1) {
        sumar(numberOne,numberTwo)
    } else if (rta === 2) {
        rest(numberOne,numberTwo)
    } else if (rta === 3) {
        mult(numberOne,numberTwo)
    } else if (rta === 4) {
        div(numberOne,numberTwo)
    }
}*/
