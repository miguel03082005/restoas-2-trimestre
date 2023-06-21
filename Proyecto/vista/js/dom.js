console.log(document.getElementById("myid"))

console.log(document.querySelector("p"))
console.log(document.querySelector(".myclass"))
console.log(document.querySelector("#myid"))

console.log(document.querySelectorAll("p")[1])

document.querySelectorAll("p").forEach((el)=>{
    console.log(el)
})

console.log(document.querySelector("a").getAttribute("href"))

document.querySelector("a").setAttribute("href","https://www.office.com/?auth=2")
console.log(document.querySelector("a").getAttribute("href"))

let contenedor=document.querySelector(".myclass")
/*
contenedor.style.setProperty("color","red")
contenedor.style.setProperty("background-color","rgb(30,30,30)")
contenedor.style.setProperty("width","500px")
*/
let text="hola esta es la caja de la seccion"
let text1=`
<h1> este es el nuevo titulo </h1>
<p> este es el nuevo parrafo </p>
`

contenedor.textContent=text

contenedor.innerHTML=text1

let img=document.createElement("img")
img.src="https://i.pinimg.com/originals/a7/a4/3d/a7a43d1428d728c851c9976c584717e7.png"
document.body.appendChild(img)
/*
img.style.setProperty("border","solid black 2px")
img.style.setProperty("border-radius","15px")
img.style.setProperty("height","500px")
img.style.setProperty("width","500px")
*/
let img2=document.createElement("div")
img2.innerHTML=`<img src="img/descarga.jpeg" alt="" height="500px" width="600">`
contenedor.appendChild(img2)

//actividad

let div=document.createElement("div")

div.innerHTML=`
<h1> Miguel Angel Granados Pachon </h1>
<p> soy estudiante sena tengo 17 años y estudio programacion </p>
<img src="img/a.jpg" height="500" width="500" class="a">
`

div.classList.add("i")
/*
div.style.setProperty("border","solid black 2px")
div.style.setProperty("border-radius","15px")
div.style.setProperty("background-color","rgb(0,0,0)")
div.style.setProperty("color","rgb(255, 255, 255)")
div.style.setProperty("padding","10px")
*/

let seccion=document.getElementById("myid")
seccion.appendChild(div)

contenedor.remove()
img.remove()
