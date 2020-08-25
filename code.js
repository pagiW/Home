var p = document.getElementById('parrafo');
var txt = document.getElementById('texto');
var boton = document.getElementById('boton');
var add = document.getElementById('añadir');

boton.addEventListener('click', evento);
add.addEventListener('click', añadir);

function evento() {
    p.innerHTML = txt.value;
}

function añadir() {
    p.innerHTML += txt.value;
}