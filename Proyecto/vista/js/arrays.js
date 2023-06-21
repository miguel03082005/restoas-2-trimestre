//Definir Array
let onces=["Barra Chocolate","Tamal","Arepa","Mojarra","Frijoles"]

//Acceder a una posición del array
console.log(onces[1])

console.log(onces[onces.length-1])

//Recorrer array
onces.forEach(function(elemento,indice,array){
    //cuerpo función
    console.log(`En la posición ${indice} esta el elemento ${elemento} `)
})

//Añadir elementos al final del array --> push

onces.push("Perico")
console.log(onces)

//Eliminar el último elemento del array --> pop
onces.pop()
console.log(onces)

onces.push("Cheetos")
console.log(onces)

//Añadir elementos al inicio del array --> unshift
onces.unshift("Bilac")
console.log(onces)

//Borrar un elemento del incio del array --> shift
onces.shift()
console.log(onces)

//Borrar elemento particular del array --> splice
onces.splice(1,1)
console.log(onces)

//Copiar un array
let copia=onces.slice()

//Rellenar el array lunch
let lunch=[]
let seguir=true
while (seguir) {
    lunch.push(prompt("ingrese su alimento"))
    seguir=confirm("Desea continuar ingresando alimentos?")
}

console.log(lunch)

//Búsqueda
let filtro=onces.filter(onces=>onces=="Barra Chocolate")

console.log(filtro)

let filtro1=onces.find(onces=>onces=="Barra Chocolate")

console.log(filtro1)

