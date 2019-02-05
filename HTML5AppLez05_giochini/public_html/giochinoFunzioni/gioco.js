
var coloriSfondo = ["red", "green", "yellow", "blue", "white"];
var indice = 0;
var sx = Math.random() * 1000;
document.getElementById("astronave").style.left = sx + "px";
var alto = Math.random() * 100;
document.getElementById("astronave").style.top = alto + "px";

document.querySelector(".nord").onclick = function () {
    muovi("#astronave",0,-5);
};

document.querySelector(".sud").onclick = function () {
    muovi("#astronave",0,5);
};

document.querySelector(".est").onclick = function () {
    muovi("#astronave", 5, 0);
};

document.querySelector(".ovest").onclick = function () {
//    let x =parseFloat(document.getElementById("astronave").style.left);
//    x-=5;
//    document.getElementById("astronave").style.left=x+"px";
    muovi("#astronave", -5, 0);
    // console.log("est",x);
};

document.querySelector(".pOk").onclick = function () {
    indice++;
    if (indice >= coloriSfondo.length) {
        indice = 0;
    }
    document.body.style.backgroundColor = coloriSfondo[indice];

//    Con la linea commentata seguente si fa quello scritto sopra con una riga sola
//    document.querySelector("body").style.bachgroundColor=coloriSfondo[indice++ % coloriSfondo.length];
    console.log(indice);
};


function muovi(str, x, y) {

    let posX = parseFloat(document.querySelector(str).style.left);
    let posY = parseFloat(document.querySelector(str).style.top);
    posX += x;
    posY += y;
    document.querySelector(str).style.left = posX + "px";
    document.querySelector(str).style.top = posY + "px";

    console.log(str, posX, posY);
}

console.log("pagina gioco js caricata!");
console.log(sx, alto);