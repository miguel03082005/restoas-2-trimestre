//array
let a=1

let instructores=["jennifer"];
while (a) {
    
    let rta=parseInt(prompt("1=agregar instructores 2=lista de instructores 3=buscar instructores 4=modificar instructor 5=borrar instructor 6=ordenar instructores a-z"));

    if (rta===1) {

        
let seguir=true
        while (seguir) {
            instructores.push(prompt("ingrese el nuevo instructor"))
            seguir=confirm("Desea continuar ingresando instructores?")
    }

        console.log(instructores)

    } else if (rta===2) {

        instructores.forEach(function(elemento,indice,array){
            //cuerpo función
            console.log(`En la posición: ${indice+1} esta el instructor: ${elemento} `)
        })

    } else if (rta===3) {

        let a=prompt("ingrese el nombre del intructor que quiere buscar")

        let busqueda=instructores.filter(instructores=>instructores==a)

        console.log(busqueda)

    } else if (rta===4) {

        instructores.forEach(function(elemento,indice,array){
            //cuerpo función
            console.log(`En la posición: ${indice+1} esta el instructor: ${elemento} `)
        })

        let replaza=parseInt(prompt("ingrese el codigo del instructor que quiere modificar"))

        instructores=[replaza-1]
        let seguir=true
        while (seguir) {
            instructores.push(prompt("ingrese el nuevo instructor"))
            seguir=confirm("Desea continuar modificando instructores?")
        }

        console.log(instructores)

    } else if (rta===5) {

        instructores.forEach(function(elemento,indice,array){
            //cuerpo función
            console.log(`En la posición: ${indice+1} esta el instructor: ${elemento} `)
        })

        let borrar=parseInt(prompt("ingrese el codigo del elemento que desea leiminar"))

        let atr=borrar-1

        instructores.splice(atr,1)
        console.log(instructores)

    } else if (rta===6) {

        instructores.sort()
        console.log(instructores)
       
    }   

    a=parseInt(prompt("Deseas realizar algunaotra operacion 1. SI / 2. NO"))
}