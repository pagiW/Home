var p = document.getElementById('parrafo');
var txt = document.getElementById('texto');
var end = document.getElementById('end');
var center = document.getElementById('center');
var start = document.getElementById('start');
var b = document.getElementById('b');
var u = document.getElementById('u');
var i = document.getElementById('i');
var colorbut = document.getElementById('cb');
var reset = document.getElementById('quit');
var color = document.getElementById('color');
var up;
var upper;
var bc = 0;
var uc = 0;
var ic = 0;
var estilo = p.style;

end.addEventListener('click', derecha);
center.addEventListener('click', centro);
start.addEventListener('click', izquierda);
colorbut.addEventListener('click', colorb);
reset.addEventListener('click', quitcolor);
b.addEventListener('click', bold);
u.addEventListener('click', under);
i.addEventListener('click', italic);
document.addEventListener('keyup', press);

function colorb() {
    estilo.color = color.value;
}

function quitcolor() {
    estilo.color = "white";
    color.value = "#ffffff"
}

function derecha() {
    estilo.textAlign = "end";
}

function centro() {
    estilo.textAlign = "center";
}

function izquierda() {
    estilo.textAlign = "start";
}

function bold() {
    if (bc == 0) {
        estilo.fontWeight = "bold";
        bc = Math.random();
    } else {
        estilo.fontWeight = "200";
        bc = 0;
    }
}

function under() {
    if (uc == 0) {
        estilo.textDecoration = "underline";
        uc = Math.random();
    } else {
        estilo.textDecoration = "none";
        uc = 0;
    }
}

function italic() {
    if (ic == 0) {
        estilo.fontStyle = "italic";
        ic = Math.random();
    } else {
        estilo.fontStyle = "normal";
        ic = 0;
    }
}

function press() {
    up = txt.value;
    upper = up.charAt(0).toUpperCase();
    p.innerHTML = upper +  up.slice(1);
}