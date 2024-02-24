import { Component } from '@angular/core';

@Component({
  selector: 'app-coda-poste',
  templateUrl: './coda-poste.component.html',
  styleUrls: ['./coda-poste.component.css']
})
export class CodaPosteComponent {

  // definiamo un array che chiameremo 'tabellone'
  // con dei valori di tipo string
  tabellone: string[] = [];

  // mi serve per tracciare l'ultimo ticket
  // staccato. Mi va benissimo che sia un numero
  // perchè lo posso incrementare.
  ultimoTicket = 0;

  // Massimo consentito prima di cancellare
  // gli elementi del tabellone
  elementiMaxTabellone = 10;

  ultimoTicketFormattato = '';

  coda: string[] = [];

  repartoValue : String = '';

  staccaTicket() {
    this.ultimoTicket++;
    this.generaTicketFormattato();
    this.aggiungiTicketAllaCoda();
    console.log(this.repartoValue);
  };

  gestisciCoda(){
    // Prendere e rimuovere il primo elemento della coda
    // e agiungerlo al tabellone.
    // Il metodo 'shift()' RIMUOVE il primo elemento di un array.
    // Il metodo 'pop()' rimuove l'ultimo elemento.
    const primoElementoCoda = this.coda.shift();

    if (primoElementoCoda !== undefined){
      // fare il controllo, perchè altrimenti
      // il metodo 'unshift' darà
      // errore, in quanto potrebbe restituire
      //  un 'undefined
      
      // .unshift. è simile a .push, ma invece
      // di aggiungere alla fine di un array, inserisce
      // l'elemento come prima posizione
      this.tabellone.unshift(primoElementoCoda);
    }

    // Se il tabellone diventa troppo affollato,
    // massimo 10 elementi, comincia ad eliminarli, per 
    // tenere pulito
    if (this.tabellone.length >= this.elementiMaxTabellone) {
      this.tabellone.splice(this.elementiMaxTabellone)
    }
  }
    
  // In TS posso definire l'incapsulazione utilizzando
  // la keyword 'private' (di default è tutto public)
  private generaTicketFormattato() {
    // ALTRO METODO
  // altro metodo:  let res = this.ultimoTicket + '';

    let res = this.ultimoTicket.toString();

    if (this.ultimoTicket < 10) {
      res = '00' + res;
   } else if (this.ultimoTicket < 100) {
  res = '0' + res
  }

  if(this.repartoValue == 'radiologia')
  {
    res = 'R' + res;
  }
  else if(this.repartoValue == 'cardiologia')
  {
    res = 'C' + res;
  }
  else if(this.repartoValue == 'neurologia')
  {
    res = 'N' + res;
  }
  else if(this.repartoValue == 'nefrologia')
  {
    res = 'NF' + res;
  }
  else
  {
    res = '';
  }

  
  this.ultimoTicketFormattato = res;

    // Se il numero è < 10 aggiungo uno 00 davanti
    // Se il numero è < 100 aggiungo uno 0 davanti.
    // Negli altri casi non aggiungo niente.



  };

  private aggiungiTicketAllaCoda() {
    // Con questo metodo aggiungo i ticket ad un array
    // di tipo string chiamato 'coda: string[] = []'
    this.coda.push(this.ultimoTicketFormattato);
  }
  
}
