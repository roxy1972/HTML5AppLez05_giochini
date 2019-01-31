/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tot = 0;
var larg;
var lung;
var costoMq;


function creaPavimento() {
    let ris=0;
    let larg = document.getElementById("in_largh").value*1;
    let lung = document.getElementById("in_lungh").value*1;
    let nome = document.getElementById("in_nome").value;
    let costo = document.getElementById("in_costo").value*1;
    //calcolo la dimensione in mp del pavimento
    ris=larg*lung;
    document.getElementById("dimensione").innerHTML=ris;
    document.getElementById("legno").innerHTML=nome;
    document.getElementById("prezzoMq").innerHTML=costo;
    prezzoFinale();
    rigaPreventivo();

}

function prezzoFinale() {
    //calcolo il totale in base ai mq
    let ris=0;
   



}

function rigaPreventivo() {


}
