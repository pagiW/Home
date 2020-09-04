var p = document.getElementById('parrafo');
var txt = document.getElementById('texto');
var end = document.getElementById('end');
var center = document.getElementById('center');
var start = document.getElementById('start');
var b = document.getElementById('b');
var u = document.getElementById('u');
var i = document.getElementById('i');
var up;
var upper;
var bc = 0;
var uc = 0;
var ic = 0;

end.addEventListener('click', derecha);
center.addEventListener('click', centro);
start.addEventListener('click', izquierda);
b.addEventListener('click', bold);
u.addEventListener('click', under);
i.addEventListener('click', italic);
document.addEventListener('keyup', press);

function derecha() {
    p.style.textAlign = "end";
}

function centro() {
    p.style.textAlign = "center";
}

function izquierda() {
    p.style.textAlign = "start";
}

function bold() {
    if (bc == 0) {
        p.style.fontWeight = "bold";
        bc = Math.random();
    } else {
        p.style.fontWeight = "200";
        bc = 0;
    }
}

function under() {
    if (uc == 0) {
        p.style.textDecoration = "underline";
        uc = Math.random();
    } else {
        p.style.textDecoration = "none";
        uc = 0;
    }
}

function italic() {
    if (ic == 0) {
        p.style.fontStyle = "italic";
        ic = Math.random();
    } else {
        p.style.fontStyle = "normal";
        ic = 0;
    }
}

function press() {
    up = txt.value;
    upper = up.charAt(0).toUpperCase();
    p.innerHTML = upper +  up.slice(1);
}