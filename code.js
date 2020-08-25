var p = document.getElementById('parrafo');
var txt = document.getElementById('texto');
var boton = document.getElementById('boton');
var add = document.getElementById('añadir');
var end = document.getElementById('end');
var center = document.getElementById('center');
var start = document.getElementById('start');
var up;
var upper;

boton.addEventListener('click', evento);
add.addEventListener('click', añadir);
end.addEventListener('click', derecha);
center.addEventListener('click', centro);
start.addEventListener('click', izquierda);
document.addEventListener('keyup', press);

function evento() {
    up = txt.value;
    upper = up.charAt(0).toUpperCase();
    p.innerHTML = upper +  up.slice(1);
}

function añadir() {
    p.innerHTML += txt.value;
}

function derecha() {
    p.style.textAlign = "end";
}

function centro() {
    p.style.textAlign = "center";
}

function izquierda() {
    p.style.textAlign = "start";
}

function press(evento) {
    if (evento.keyCode == 13) {
        p.innerHTML += "<br />";
    }
}