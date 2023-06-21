//tradicional atributo HTML (no recomendada)
//1= en el HTML debo identificar el elemento desencadenante
//2= invocar funcion javascript que va a jejcutar al suseder la accion
//3= crear funcion
/*
let rta=document.querySelector("#rta")
function res (e) {
    //evitar propagacion
    e.preventDefault()
    alert("hola")

    let num1=parseInt(document.querySelector("#num1").value)
    let num2=parseInt(document.querySelector("#num2").value)
    let oper=document.querySelector("#oper").value
    

    if (oper == "+") {
        let suma=num1+num2

        rta.value=suma
    } else if (oper == "-") {
        
    } else if (oper == "*") {

    } else if (oper == "/") {

    }
}
*/

//no recomendado

/*
let btn=document.getElementById("btn")

btn.onclick=(
    function calcular(e){
        //evitar propagacion
        e.preventDefault()

        let num1=parseInt(document.querySelector("#num1").value)
        let num2=parseInt(document.querySelector("#num2").value)
        let oper=document.querySelector("#oper").value
    

        if (oper == "+") {
            let suma=num1+num2
            rta.value=suma
        } else if (oper == "-") {
            let resta=num1-num2
            rta.value=resta
        } else if (oper == "*") {
            let multiplicacion=num1*num2
            rta.value=multiplicacion
        } else if (oper == "/") {
            let divicion=num1/num2
            rta.value=divicion
        }
    }
)
*/

//metodo limpio(recomendado)

let btn=document.getElementById("btn")

btn.addEventListener("click",
function calcular(e){
    //evitar propagacion
    e.preventDefault()

    let num1=parseInt(document.querySelector("#num1").value)
    let num2=parseInt(document.querySelector("#num2").value)
    let oper=document.querySelector("#oper").value


    if (oper == "+") {
        let suma=num1+num2
        rta.value=suma
    } else if (oper == "-") {
        let resta=num1-num2
        rta.value=resta
    } else if (oper == "*") {
        let multiplicacion=num1*num2
        rta.value=multiplicacion
    } else if (oper == "/") {
        let divicion=num1/num2
        rta.value=divicion
    }
}
)