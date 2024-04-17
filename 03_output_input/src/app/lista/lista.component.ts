import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  elenco: string[] = ["Lambo", "FIA", "BM", "Koning"]

  elenco_studenti: any = [
    {nome: "Giovanni", cognome: "Pace", matr: "AB1234"},
    {nome: "Valeria", cognome: "Verdi", matr: "AB1235"},
    {nome: "Mario", cognome: "Rossi", matr: "AB1236"},
  ]

}
