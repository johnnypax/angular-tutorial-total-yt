import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottoService } from '../../services/prodotto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodotto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodotto-lista.component.html',
  styleUrl: './prodotto-lista.component.css'
})
export class ProdottoListaComponent {

  elenco: Prodotto[] = new Array();

  constructor(private service: ProdottoService){

  }

  ngOnInit(): void {
    this.elenco = this.service.GetAll();
  }

  elimina(varCodice: string | undefined): void {
    if(varCodice != undefined && this.service.Delete(varCodice)){
      alert("Operazione effettuata con successo")
      this.elenco = this.service.GetAll();
    }
    else{
      alert("Errore nell'esecuzione dell'eliminazione")
    }
  }

}
