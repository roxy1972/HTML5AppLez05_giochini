/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_nomi = [];
var ar_art = [];
var ar_prezzi = [];
var totale=0;

function login() {
    var d = new Date();
    var familyName = document.getElementById("in_cognome").value;
    document.getElementById("sp_name").innerHTML = d;
    var text = "Oggi è il " + d + ".<br>" + "Ciao" + " " + familyName + " buona giornata!";
    document.getElementById("sp_name").innerHTML = text;
}
function spostaNomi() {
    //dichiaro variabili dei vari input e metto mano sugli oggetti;
    let x = "";
    let n1 = document.getElementById("nome1").value;
    let n2 = document.getElementById("nome2").value;
    let n3 = document.getElementById("nome3").value;
    document.getElementById("nome1").value=n2;
    document.getElementById("nome2").value=n3;
    document.getElementById("nome3").value=n1;   
}

function carica() {
    ar_art.push(document.getElementById("in_art").value);
    ar_prezzi.push(document.getElementById("in_prezzo").value);
    document.getElementById("div_articol").innerHTML = createElencoOL();
    prep_output();    
}

function createElencoOL() {
    let text = "";
    let totale = 0;
    let ris = "";
    for (i = 0; i < ar_art.length; i++) {
        text += "<li>" + " " + ar_art[i] + " costa: " + ar_prezzi[i] + "</li>";
        totale += ar_art[i] * 1;
    }
    ris = "<ol>" + text + "</ol>";
    return ris;
}

function prep_output() {
    let text = "";
    let totale = 0;
    let media=0;
    let min=0;
    let max=0;
    for (i = 0; i < ar_art.length; i++) {        
        totale += ar_prezzi[i] * 1;      
    }   
    document.getElementById("totale").innerHTML = totale;
    document.getElementById("media").innerHTML= totale / ar_art.length;   
}
