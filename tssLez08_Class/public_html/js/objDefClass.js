/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//prima parte definizione anagrafica con classi e sottoClassi

class Anagrafica {
    constructor(nome, code, telefono, sex) {
        this.nome = nome.toUpperCase();
        this.code = code * 1;
        this.telefono = telefono;
        let s = sex;
        s = s.substr(0, 1).toUpperCase();
        this.sex = s;
    }
    saluta() {
        let ris = "";
        let fraseSex = "";
        // salve sono ......., sono un uomo/donna e il mio telefono è.....
        if (this.sex == "M")
            fraseSex = "un uomo";
        else
            fraseSex = "una donna";
        ris = "Salve sono" + " " + this.nome + ", sono" + " " + fraseSex + " e il mio telefono è" + " " + this.telefono;
        return ris;
    }
}

class Giocatore extends Anagrafica {
    constructor(nome, code, telefono, sex, peso, ruolo) {
        super(nome, code, telefono, sex);
        this.peso = peso;
        this.ruolo = ruolo;
    }
    saluta() {
        let ris = "";
        let fraseSex = "";
        // salve sono ......., sono un uomo/donna e il mio telefono è.....
        if (this.sex == "M")
            fraseSex = "un giocatore uomo";
        else
            fraseSex = "una donna";
        ris = "Salve sono" + " " + this.nome + ", sono" + " " + fraseSex + " e il mio ruolo è" + " " + this.ruolo;
        return ris;
    }
}

class Arbitro extends Anagrafica {
    constructor(nome, code, telefono, sex, categoria) {
        super(nome, code, telefono, sex);
        this.categoria = categoria;
    }
    saluta() {
        let ris = "";
        let fraseSex = "";
        // salve sono ......., sono un uomo/donna e il mio telefono è.....
        if (this.sex == "M")
            fraseSex = "un arbitro uomo";
        else
            fraseSex = "una arbitro donna";
        ris = "Salve sono" + " " + this.nome + ", sono" + " " + fraseSex + " e la mia categoria è" + " " + this.categoria;
        return ris;
    }
}

class Team {
    constructor(nome, sede, colori, categoria) {
        this.nome = nome;
        this.sede = sede;
        this.logo = "";
        this.colori = colori;
        this.categoria = categoria;
        this.elGiocatori = [];
    }
    elencoGiocBR() {
        let ris = "";
        for (let i = 0; i < this.elGiocatori.length; i++) {
            ris += this.elGiocatori[i].code + " " + this.elGiocatori[i].nome + " " + this.elGiocatori[i].ruolo + ", ";
        }
        return ris;
    }

    visTeam() {
        let ris = "";
        //La squadra Mastini Canavese, con sede a Ivrea, gioca in Seconda Divisione
        ris = "La squadra " + this.nome + " con sede a " + this.sede + " gioca in " + this.categoria + ". Elenco giocatori:";
        let el = this.elencoGiocBR();
        return ris + " " + el;
    }

    compraGiocatore(objGiocatore) {
        //all'elenco dei giocatori della squadra aggiungo giocatore che mi ahi passato
        this.elGiocatori.push(objGiocatore);
    }

    vendiGiocatore(codice) {
        for (let i = 0; i < this.elGiocatori.length; i++) {

            let cod = this.elGiocatori[i].codice;

            if (codice == cod) {
                this.elGiocatori.splice(i, 1);
                break;
            }
        }
    }
}

class Campionato {
    constructor(stagione) {
        this.stagione = stagione;
        this.el_partite = [];
    }

    aggiungiPartita(objPartita) {
        //aggiungo ref all'array dei ref
        this.el_partite.push(objPartita);
    }
    visPartite() {
        let ris = "";
        let elp = "";
        let i = 0;
        this.el_partite.forEach(
                function (myp) {
                    elp += "<option value='" + i + "'>" + myp.data + " - " + myp.sq1 + " vs " + myp.sq2 + "</option>";
                    i++;
                });
        ris = "<select onchange='selPartita()' size='10' multiple id='s_partite'>" + elp + "</select>";
        return ris;
    }
}

class Lega {
    constructor(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.el_squadre = [];
        this.el_ref = [];
        this.el_campionati = [];
    }
    aggiungiRef(objRef) {
        //aggiungo ref all'array dei ref
        this.el_ref.push(objRef);
    }
    aggiungiCampionato(objCampionato) {
        //aggiungo ref all'array dei ref
        this.el_campionati.push(objCampionato);
    }

    aggiungiSquadra(objSquadra) {
        //aggiungo squadre all'array delle squadre
        this.el_squadre.push(objSquadra);
    }

    visLega() {
        let ris = "";
        ris += this.nome + " " + this.descrizione + " ";
        let els = "";
        for (let i = 0; i < this.el_squadre.length; i++) {
            els += this.el_squadre[i].nome + ".";
        }
        //altro modo x scorrere array di oggetti
        els = "";
        this.el_squadre.forEach(
                function (mysq) {
                    els += mysq.visTeam();
                });
        return ris + " " + els;
    }
}
class Partita {
    constructor(data, luogo, sq1, sq2, ref) {
        this.data = data;
        this.luogo = luogo;
        this.sq1 = sq1;
        this.sq2 = sq2;
        this.ref = ref;
        this.pt1 = 0;
        this.pt2 = 0;
        this.risultato = "da giocare";
    }
    dammiRisultato() {
        //esempio ha vinto mastini 30 punti contro 12 sirbons
        let ris = "";
        if (this.pt1 > this.pt2)
            ris = "hanno vinto" + this.sq1 + " con " + this.pt1 + " punti contro " + this.pt2 + " punti di " + this.sq2;
        else
            "hanno vinto" + this.sq2 + " con " + this.pt2 + " punti contro " + this.pt1 + " punti di " + this.sq1;

        return ris;
    }
}




/*const donna = new Anagrafica("Rossana Massone", "667", "3311222090", "F");
 alert(donna.saluta() + ", codice ref " + donna.code);
 
 var giocatore = new Giocatore("Cristian Fiorino", "0574", "34821455475", "M", 95, "linebacker");
 alert(giocatore.saluta() + ", il mio peso è " + giocatore.peso + " kg");
 
 var arbitro = new Arbitro("Rossana Massone", "0574", "34821455475", "f", "junior");
 alert(arbitro.saluta());
 
 var sq = new Team("Mastini Canavese", "Ivrea", "bianco e grigio", "Seconda Divisione");
 
 giocatore = new Giocatore("simone paschetto", "325", "34821455475", "M", 95, "safety");
 sq.compraGiocatore(giocatore);
 
 giocatore = new Giocatore("stefano canella", "478", "34821455475", "M", 95, "linebacker");
 sq.compraGiocatore(giocatore);
 alert(sq.visTeam());
 
 const lega = new Lega("IFL", "campionato italiano di football americano");
 lega.aggiungiSquadra(sq);
 alert(lega.visLega());
 
 var camp = new Campionato("stagione 2019");
 var part;
 part = new Partita("2019-02-16", "cagliari", "crusaders", "sirbons", 19);
 camp.aggiungiPartita(part);
 part = new Partita("2019-02-23", "balangero", "blitz", "alfieri", 278);
 camp.aggiungiPartita(part);
 part = new Partita("2019-03-02", "novara", "lancieri", "pirates", 675);
 
 lega.aggiungiCampionato(camp);
 lega.el_campionati[0].aggiungiPartita(part);
 document.write(lega.el_campionati[0].visPartite());*/








