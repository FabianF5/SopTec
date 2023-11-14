let ruta = document.getElementById("boton")
let crearBoton = () => {
    let boton = document.createElement("button")
    let nombre = document.createTextNode("Botón")
    boton.appendChild(nombre)
    boton.classList.add("btn")
    return boton
}
const boton = crearBoton()
ruta.appendChild(boton)
