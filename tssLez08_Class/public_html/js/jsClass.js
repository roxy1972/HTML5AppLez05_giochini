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
        ris = "Salve sono" +" "+ this.nome + ", sono" +" " + fraseSex + " e il mio telefono è" +" "+ this.telefono;

        return ris;
    }

}

class Giocatore extends Anagrafica{
    constructor(nome, code, telefono,sex,peso,ruolo){
        super(nome,code,telefono,sex)
        this.peso=peso;
        this.ruolo=ruolo;
    }
    saluta() {
        let ris = "";
        let fraseSex = "";
        // salve sono ......., sono un uomo/donna e il mio telefono è.....
        if (this.sex == "M")
            fraseSex = "un uomo";
        else
            fraseSex = "una donna";
        ris = "Salve sono" +" "+ this.nome + ", sono" +" " + fraseSex + " e il mio ruolo è" +" "+ this.ruolo;

        return ris;
    }
    
}

const donna = new Anagrafica("Rossana Massone", "0574", "3311222090", "F");
alert(donna.saluta() + ", codice ref "+ donna.code);

const giocatore = new Giocatore("Cristian Fiorino", "0574", "34821455475", "M",95,"linebacker");
alert(giocatore.saluta() + ", il mio peso è "+ giocatore.peso + " kg");
