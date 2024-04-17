import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DueComponent } from './due/due.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnoComponent, DueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_test';
}
