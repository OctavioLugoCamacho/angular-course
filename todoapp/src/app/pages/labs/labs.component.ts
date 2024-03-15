import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Curso de Platzi';
  tasks = [
    'Instalé Angular con npm',
    'Aprendí a levantar el Server',
    'Estoy viendo cómo mostrar variables en el front'
  ]
  name = 'Octavio';
  age = 27;
  
}
