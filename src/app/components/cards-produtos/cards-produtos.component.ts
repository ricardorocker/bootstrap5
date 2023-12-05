import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-produtos',
  templateUrl: './cards-produtos.component.html',
  styleUrls: ['./cards-produtos.component.css'],
})
export class CardsProdutosComponent {
  list = [
    {
      produto: 'Camiseta Conforto',
      preco: 'R$ 70,00',
      descricao:
        'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    },
    {
      produto: 'Calça Alfaiataria',
      preco: 'R$ 180,00',
      descricao:
        'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    },
    {
      produto: 'Tênis Chunky',
      preco: 'R$ 250,00',
      descricao:
        'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    },
    {
      produto: 'Jaqueta Jeans',
      preco: 'R$ 150,00',
      descricao:
        'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    },
    {
      produto: 'Óculos Redondo',
      preco: 'R$ 120,00',
      descricao:
        'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    },
    {
      produto: 'Bolsa coringa',
      preco: 'R$ 120,00',
      descricao:
        'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    },
  ];
}
