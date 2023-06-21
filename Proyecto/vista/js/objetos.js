let instructor=[
    {nombre:"jennifer",apellido:"aa"},
    {nombre:"antonio",apellido:"aa"}
]

let i=parseInt(1)

while (i) {
    
    let rta=parseInt(prompt("1=agregar instructores 2=lista de instructores 3=buscar instructores 4=modificar instructor 5=borrar instructor 6=ordenar instructores a-z"));

    if (rta===1) {
        instructor.push(
            {nombre=prompt("ingrese el el nombre del instructor")}
        )
    } else if (rta===2) {
        
    } else if (rta===3) {
        
    } else if (rta===4) {
        
    } else if (rta===5) {
        
    } else if (rta===6) {
        
    }

    i=parseInt(prompt("Deseas realizar algunaotra operacion 1. SI / 2. NO"))
}