/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function inviaTest() {
    var okTx1 = "cuccarini";
    var okTx2 = "hunziker";
    var okTx3 = "levi montalcini";
    var okTx4 = "majorana";
    var ris = 0;
    var p1 = 10 * 1;
    var p2 = 10 * 1;
    var p3 = 20 * 1;
    var p4 = 30 * 1;
    var tx1 = document.getElementById("in_txt1").value;
    var tx2 = document.getElementById("in_txt2").value;
    var tx3 = document.getElementById("in_txt3").value;
    var tx4 = document.getElementById("in_txt4").value;

    if (tx1 === okTx1) {
        document.getElementById("in_pt1").value = p1;
    } else {
        document.getElementById("in_pt1").value = 0 * 1;
    }
    if (tx2 === okTx2) {
        document.getElementById("in_pt2").value = p2;
    } else {
        document.getElementById("in_pt2").value = 0 * 1;
    }
    if (tx3 === okTx3) {
        document.getElementById("in_pt3").value = p3;
    } else {
        document.getElementById("in_pt3").value = 0 * 1;
    }
    if (tx4 === okTx4) {
        document.getElementById("in_pt4").value = p4;
    } else {
        document.getElementById("in_pt4").value = 0 * 1;
    }
    ris = somma();
    document.getElementById("sp_punt").innerHTML = ris;
    if (ris >= 40) {
        document.getElementById("sp_esito").innerHTML = maiusc("hai la muta!");
    } else {
        document.getElementById("sp_esito").innerHTML = maiusc("scorda la muta!");
    }
}

function maiusc(testo) {
    let ris = "";
    ris = testo.toUpperCase();
    return ris;
}

function somma() {
    var pt1 = document.getElementById("in_pt1").value * 1;
    var pt2 = document.getElementById("in_pt2").value * 1;
    var pt3 = document.getElementById("in_pt3").value * 1;
    var pt4 = document.getElementById("in_pt4").value * 1;
    let ris = 0;
    ris = pt1 + pt2 + pt3 + pt4;
    return ris;
}

var num;
var tot = 0;
var okDati;

function checkDati(val) {
    //verifico le monete
    // e ritorno true se presenti tagli monete
    // altrimenti ritorno false
    if (val === 0.5 || val === 0.1 || val === 0.2 || val === 1 || val === 2) {
        return true;
    } else {
        return false;
    }
}

function mettiMoneta() {
    let num = document.getElementById("moneta").value * 1;
    okDati = checkDati(num);
    if (okDati === true) {
        tot = num + tot;
        document.getElementById("sp_totale").innerHTML = tot;
    } else{
        alert("ATTENZIONE!! Dati non corretti");
    }
}

function prendiMoneta() {
        let num = document.getElementById("moneta").value * 1;
    okDati = checkDati(num);
    if (okDati === true) {
        tot = tot-num;
        document.getElementById("sp_totale").innerHTML = tot;
    } else{
        alert("ATTENZIONE!! Dati non corretti");
    }
}

