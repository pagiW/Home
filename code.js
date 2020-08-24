var p = document.getElementById('parrafo');
var txt = document.getElementById('texto');
var boton = document.getElementById('boton');

boton.addEventListener('click', evento);

function evento() {
    p.innerHTML = txt.value;
}