import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-categoria',
  templateUrl: './cards-categoria.component.html',
  styleUrls: ['./cards-categoria.component.css'],
})
export class CardsCategoriaComponent {
  list = [
    { nome: 'Camisetas' },
    { nome: 'Bolsas' },
    { nome: 'Calçados' },
    { nome: 'Calças' },
    { nome: 'Casacos' },
    { nome: 'Óculos' }
  ];
}
