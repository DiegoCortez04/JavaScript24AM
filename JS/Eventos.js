var alumno = prompt('¿Cuál es tu nombre?')
document.querySelector(".contenido").innerHTML = `${alumno} esta aprendiendo JavaScript`


function CambiarColor(){
    var color = prompt('Color del texto')
    SeleccionarColor(color)
}

function SeleccionarColor(color){
    document.querySelector(".contenido").style.color = color
}
