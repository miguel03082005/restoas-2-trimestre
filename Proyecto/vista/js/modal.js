let btnModal=document.getElementById("openM")

let vModal=document.getElementById("ventanaModal")

let cModal=document.querySelector(".closeM")

btnModal.addEventListener("click", ()=> {
    vModal.style.display="block"
})

cModal.addEventListener("click", ()=>{
    vModal.style.display="none"
})