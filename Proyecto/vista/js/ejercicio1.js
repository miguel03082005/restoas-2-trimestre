let number1=prompt("ingresa el primer numero");
let number2=prompt("ingrese el segundo numero");

console.log(`lo numeros ungresados son ${number1} y ${number2}`)

let rta=prompt("1=suma 2=resta 3=multiplicacion 4=division 5=potenciacion");

let total=0;

switch (rta) {
    case "1":{
        total=parseInt(number1)+parseInt(number2);
        break;
    }
    case "2":{
        total=parseInt(number1)-parseInt(number2);
        break;
    }
    case "3":{
        total=parseInt(number1)*parseInt(number2);
        break;
    }
    case "4":{
        total=parseInt(number1)/parseInt(number2);
        break;
    }
    case "5":{
        total=parseInt(number1)**parseInt(number2);
        break;
    }
}

console.log(`el total de la operacion es: ${total}`);

if (number1 < number2) {
    console.log(`el numero mayor es ${number1}`);
} else if (number1 > number2) {
    console.log(`el numero mayor es ${number2}`);
} else if (number1 == number2) {
    console.log(`los numeros son iguales`);
} else{
    console.log(`Dato incorrecto`)
}


