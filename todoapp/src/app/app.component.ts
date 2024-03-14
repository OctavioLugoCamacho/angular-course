import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'Curso de Platzi';
  tasks = [
    'Instalé Angular con npm',
    'Aprendí a levantar el Server',
    'Estoy viendo cómo mostrar variables en el front'
  ]
}
