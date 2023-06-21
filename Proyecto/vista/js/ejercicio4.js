let num=prompt("ingrese la tabla a mostrar")

for (let i=1; i <=10; i++) {

    let total=0;

    total=parseInt(num)*parseInt(i);
    
    console.log(`${num} x ${i} = ${total}`)
}