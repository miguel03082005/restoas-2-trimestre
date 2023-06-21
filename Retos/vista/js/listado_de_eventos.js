//ONCLICK

let btn=document.getElementById("btn")

btn.onclick=(
    function evento(e) {
        window.alert("!VIVI EL ANIME¡")
    }
)

//ONCHANGE

document.getElementById("palabra").onchange = function() {ONCHANGE()}

function ONCHANGE() {
    var palabra = document.getElementById("palabra")
    palabra.value = palabra.value.toUpperCase()
}

//ONBLUR

function ONBLUR() {
    let palabra1 = document.getElementById("palabra1");
    palabra1.value = palabra1.value.toUpperCase();
}

//ONABORT

function ONABORT(){ 
    respuesta = confirm ("Has detenido la carga de la página y hay una imagen que no estás viendo ¿Deseas cargar la imagen?") 
    if (respuesta) 
       document.img1.src = "img/KIRITO.jpg" 
}

//ONDRAGDROP

window.addEventListener("dragdrop", ONDRAGDROP, false);

function ONDRAGDROP(event) {
    alert("!As arastrado algo¡");
    event.stopPropagation();
}

//ONERROR

function ONERROR() {
    document.getElementById("demo").innerHTML = "La imagen no se a podido cargar intente de nuevo";
}

//ONFOCUS

function ONFOCUS(color) {
    color.style.background = "#2EFEF7";
}

//ONKEYDOWN

function ONKEYDOWN() {
    document.getElementById("demo1").innerHTML = "As escrto algo";
}

//ONKEYPRESS

function ONKEYPRESS() {
    alert("As pulsado una tecla");
}

//ONKEYUP

function ONKEYUP() {
    let palabra5 = document.getElementById("palabra5");
    palabra5.value = palabra5.value.toUpperCase();
}

//ONLOAD

function ONLOAD() {
    alert("!La pagina se a cargado¡");
}

//ONMOUSEDOWN

function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }