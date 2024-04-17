import { Component } from '@angular/core';
import { ProdottoService } from '../../services/prodotto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from '../../models/prodotto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodotto-modifica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prodotto-modifica.component.html',
  styleUrl: './prodotto-modifica.component.css'
})
export class ProdottoModificaComponent {

  codi: string | undefined
  nome: string | undefined
  desc: string | undefined
  prez: number | undefined
  quan: number | undefined

  constructor(
    private service: ProdottoService, 
    private activeRoute: ActivatedRoute, 
    private router: Router){
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(risultato => {
      let prod = this.service.GetByCodice(risultato['codice']);
      
      this.codi = prod?.codice;
      this.nome = prod?.nome;
      this.desc = prod?.descrizione
      this.prez = prod?.prezzo
      this.quan = prod?.quantita
    })
  }

  modifica(): void{

    let proNuovo = new Prodotto(this.codi, this.nome, this.desc, this.prez, this.quan);

    if(this.service.Update(proNuovo)){
      alert("Operazione effettuata con successo")
      this.router.navigateByUrl("prodotto/lista")
    }
    else{
      alert("Errore di modifica")
    }
  }

}
