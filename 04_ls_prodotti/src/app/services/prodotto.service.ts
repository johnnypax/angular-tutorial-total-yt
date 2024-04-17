import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  elenco: Prodotto[] = new Array();

  constructor() { 
    let stingaLs = localStorage.getItem("elenco_negozio");
    
    if(!stingaLs)
      localStorage.setItem("elenco_negozio", JSON.stringify([]))
    else
      this.elenco = JSON.parse(stingaLs);
  }

  Insert(objProd: Prodotto): boolean {
    this.elenco.push(objProd);
    localStorage.setItem("elenco_negozio", JSON.stringify(this.elenco));
    return true;          //Sempre vero, da sostituire nel futuro con l'esito di una REST API
  }

  GetAll(): Prodotto[]{
    let stingaLs = localStorage.getItem("elenco_negozio");
    return stingaLs ? JSON.parse(stingaLs) : [];
  }

  GetByCodice(varCod: string): Prodotto | null {
    let stingaLs = localStorage.getItem("elenco_negozio");
    if(stingaLs){
      this.elenco = JSON.parse(stingaLs);
    
      for(let [idx, item] of this.elenco.entries()){
        if(item.codice == varCod){
          return item;
        }
      }
    }

    return null;
  }

  Delete(varCod: string): boolean {
    let stingaLs = localStorage.getItem("elenco_negozio");
    if(stingaLs){
      this.elenco = JSON.parse(stingaLs);

      for(let [idx, item] of this.elenco.entries()){
        if(item.codice == varCod){
          this.elenco.splice(idx, 1)
          localStorage.setItem("elenco_negozio", JSON.stringify(this.elenco));
          return true;
        }
          
      }
    }

    return false;
  }

  Update(varObj: Prodotto) : boolean {
    let stingaLs = localStorage.getItem("elenco_negozio");
    if(stingaLs){
      this.elenco = JSON.parse(stingaLs);

      for(let [idx, item] of this.elenco.entries()){
        if(item.codice == varObj.codice){             //Unico elemento che non devo modificare
          item.nome = varObj.nome
          item.descrizione = varObj.descrizione
          item.prezzo = varObj.prezzo
          item.quantita = varObj.quantita
          
          localStorage.setItem("elenco_negozio", JSON.stringify(this.elenco));
          
          return true;
        }
      }
    }

    return false;
  }
}
