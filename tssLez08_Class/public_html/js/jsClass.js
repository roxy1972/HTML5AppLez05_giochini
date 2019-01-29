/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lega;
//prima parte definizione anagrafica con classi e sottoClassi
function init(){
//creo la lega
lega = new Lega("IFL", "campionato italiano di football americano");
//mi dichiaro un arbitro
let arbitro = new Arbitro("Rossana Massone", "19", "34821455475", "f", "junior");
lega.aggiungiRef(arbitro);
// creo giocatori e squadre
var sq = new Team("Mastini Canavese", "Ivrea", "bianco e grigio", "Seconda Divisione");
var giocatore = new Giocatore("Cristian Fiorino", "0574", "34821455475", "M", 95, "linebacker");
sq.compraGiocatore(giocatore);
giocatore = new Giocatore("simone paschetto", "325", "34821455475", "M", 95, "safety");
sq.compraGiocatore(giocatore);
giocatore = new Giocatore("stefano canella", "478", "34821455475", "M", 95, "linebacker");
sq.compraGiocatore(giocatore);
// aggancio la squadra alla lega
lega.aggiungiSquadra(sq);
// creo altra squadra e giocatori
sq = new Team("Sirbons", "Cagliari", "bianco e rosso", "Seconda Divisione");
giocatore = new Giocatore("ciccio piras ", "120", "34821455475", "M", 95, "linebacker");
sq.compraGiocatore(giocatore);
giocatore = new Giocatore("marco mura", "121", "34821455475", "M", 95, "safety");
sq.compraGiocatore(giocatore);
giocatore = new Giocatore("attilio puddu", "122", "34821455475", "M", 95, "linebacker");
sq.compraGiocatore(giocatore);
// aggancio la squadra alla lega
lega.aggiungiSquadra(sq);
sq = new Team("lancieri", "novara", "bianco e azzurro", "Seconda Divisione");
giocatore = new Giocatore("marco rossi ", "220", "34821455475", "M", 95, "linebacker");
sq.compraGiocatore(giocatore);
giocatore = new Giocatore("demetrio bianchi", "221", "34821455475", "M", 95, "safety");
sq.compraGiocatore(giocatore);
giocatore = new Giocatore("attilio verdi", "222", "34821455475", "M", 95, "linebacker");
sq.compraGiocatore(giocatore);
// aggancio la squadra alla lega
lega.aggiungiSquadra(sq);
var camp = new Campionato("stagione 2019");
part = new Partita("2019-02-03", "ivrea", "mastini","sirbons", 19);
camp.aggiungiPartita(part);
part = new Partita("2019-02-16", "cagliari", "sirbons", "mastini", 19);
camp.aggiungiPartita(part);
part = new Partita("2019-02-19", "ivrea", "mastini", "lancieri", 19);
camp.aggiungiPartita(part);
part = new Partita("2019-02-27", "novara", "lancieri","mastini", 19);
camp.aggiungiPartita(part);
part = new Partita("2019-03-03", "cagliari", "sirbons", "lancieri", 19);
camp.aggiungiPartita(part);
part = new Partita("2019-03-09", "novara", "lancieri","sirbons", 19);
camp.aggiungiPartita(part);
lega.aggiungiCampionato(camp);
document.getElementById("d_ris").innerHTML=lega.el_campionati[0].visPartite();
}

function selPartita(){
    let ris=0;
    return ris;
}

function addRisultato(){
    let pt1=document.getElementById("in_pt1").value*1;
    let pt2=document.getElementById("in_pt2").value*1;
    let indexP=document.getElementById("s_partite").value;
    let camp=lega.el_campionati[0];
    let part= camp.el_partite[indexP];
    part.pt1=pt1;
    part.pt2=pt2; 
    document.getElementById("d_ris").innerHTML=lega.el_campionati[0].visPartite();
    
}


/*const donna = new Anagrafica("Rossana Massone", "667", "3311222090", "F");
alert(donna.saluta() + ", codice ref " + donna.code);


alert(arbitro.saluta());





var camp = new Campionato("stagione 2019");
var part;
part = new Partita("2019-02-16", "cagliari", "crusaders", "sirbons", 19);
camp.aggiungiPartita(part);
part = new Partita("2019-02-23", "balangero", "blitz", "alfieri", 278);
camp.aggiungiPartita(part);
part = new Partita("2019-03-02", "novara", "lancieri", "pirates", 675);



document.write(lega.el_campionati[0].visPartite());*/








