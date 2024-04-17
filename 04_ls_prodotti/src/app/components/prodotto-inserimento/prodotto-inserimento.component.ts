import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../../models/prodotto';
import { ProdottoService } from '../../services/prodotto.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-prodotto-inserimento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prodotto-inserimento.component.html',
  styleUrl: './prodotto-inserimento.component.css'
})
export class ProdottoInserimentoComponent {

  codi: string | undefined;
  nome: string | undefined;
  desc: string | undefined;
  prez: number | undefined;
  quan: number | undefined;

  constructor( private service: ProdottoService, private router: Router ){
    
  }

  salva() : void {
    let prod = new Prodotto(this.codi, this.nome, this.desc, this.prez, this.quan);
    if(this.service.Insert(prod)){
      alert("Operazione effettuata con successo")
      this.router.navigateByUrl("prodotto/lista");
    }
      
    else
      alert("Errore")
  }
}
