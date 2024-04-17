export class Prodotto {
    nom: string | undefined;
    des: string | undefined;
    pre: number | undefined;

    constructor(varNome: string | undefined, varDescrizione: string | undefined, varPrezzo: number | undefined){
        this.nom = varNome;
        this.des = varDescrizione;
        this.pre = varPrezzo;
    }
}
