let usuario="sebastian";
let password=123;

let registroU=prompt("ingrese su nombre de usuario");
let registroP=parseInt(prompt("ingrese su contraseña"));

if (usuario == registroU && password == registroP) {
    window.alert("bienvenido al sistema");
} else if (usuario != registroU && password == registroP) {
    window.alert("usuario incorrecto");
} else if (usuario == registroU && password != registroP) {
    window.alert("contraseña incorrecta")
} else if (usuario != registroU && password != registroP) {
    window.alert("cantraseña y usuario incorrectos")
}
