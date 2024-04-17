import { Routes } from '@angular/router';
import { ProdottoInserimentoComponent } from './components/prodotto-inserimento/prodotto-inserimento.component';
import { ProdottoListaComponent } from './components/prodotto-lista/prodotto-lista.component';
import { ProdottoModificaComponent } from './components/prodotto-modifica/prodotto-modifica.component';

export const routes: Routes = [
    {path: "", redirectTo: "/prodotto/inserisci", pathMatch: "full"},
    {path: "prodotto/inserisci", component: ProdottoInserimentoComponent},
    {path: "prodotto/lista", component: ProdottoListaComponent},
    {path: "prodotto/modifica/:codice", component: ProdottoModificaComponent}
];
