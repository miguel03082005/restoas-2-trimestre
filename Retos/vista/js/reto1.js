let btn=document.getElementById("btn")

btn.addEventListener("click",

function proceso() {
    
    //botener palabra ingresada por el usuario

    let palabra = document.getElementById("palabra").value;

    //botener proceso seleccionado por el usuario

    let opcion = document.getElementById("opcion").value;

    //proceso realizado

    if (opcion === "1") {
        window.alert(`Longitud de la palabra es: ${palabra.length}`);
    } else if (opcion === "2") {
        window.alert(`La palabra en mayusculas es: ${palabra.toUpperCase()}`);
    } else if (opcion === "3") {
        window.alert(`La palabra en minusculas es: ${palabra.toLowerCase()}`);
    } else if (opcion === "4") {
        window.alert(`El primer caracter de la palabra es: ${palabra.charAt(0)}`);
    } else if (opcion > 4) {
        window.alert(`Elija ina opcion valida`);
    }

})