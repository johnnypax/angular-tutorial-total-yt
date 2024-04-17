import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inserimento.component.html',
  styleUrl: './inserimento.component.css'
})
export class InserimentoComponent {

    nome: string | undefined;
    descrizione: string | undefined;
    prezzo: number | undefined;

    elenco: Prodotto[] = new Array();

    salva(): void {
      let prod = new Prodotto(this.nome, this.descrizione, this.prezzo);
      this.elenco.push(prod);
    }
}
