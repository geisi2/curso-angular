import { Component } from '@angular/core';
import { Animal } from ' src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
animais: Animal[] = [
  {nome: "Larry", tipo: "cachorro"},
  {nome: "Miau", tipo: "gato"},
  {nome: "Anita", tipo: "cachorro"},
  {nome: "LItasjara", tipo: "cavalo"}
];
constructor() { }
}
