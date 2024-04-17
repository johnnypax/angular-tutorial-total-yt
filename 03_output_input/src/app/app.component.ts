import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { InserimentoComponent } from './inserimento/inserimento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent, InserimentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03_output_input';
}
