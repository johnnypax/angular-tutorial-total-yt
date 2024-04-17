export class Prodotto {
    codice: string | undefined;
    nome: string | undefined;
    descrizione: string | undefined;
    prezzo: number | undefined;
    quantita: number | undefined;

    constructor(
        cod: string | undefined, 
        nom: string | undefined, 
        des: string | undefined,
        pre: number = 0,
        qua: number = 1
    ){
        this.codice = cod;
        this.nome = nom;
        this.descrizione = des;
        this.prezzo = pre; 
        this.quantita = qua;
    }
}
