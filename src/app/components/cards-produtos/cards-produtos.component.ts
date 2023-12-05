import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-produtos',
  templateUrl: './cards-produtos.component.html',
  styleUrls: ['./cards-produtos.component.css'],
})
export class CardsProdutosComponent {
  list = [
    {
      mobileImageSrc: '../../../assets/Mobile/produtos/camiseta.png',
      tabletImageSrc: '../../../assets/Tablet/produtos/camiseta.png',
      desktopImageSrc: '../../../assets/Desktop/produtos/camiseta.png',
      produto: 'Camiseta Conforto',
      preco: 'R$ 70,00',
      descricao:
        'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    },
    {
      mobileImageSrc: '../../../assets/Mobile/produtos/calca.png',
      tabletImageSrc: '../../../assets/Tablet/produtos/calca.png',
      desktopImageSrc: '../../../assets/Desktop/produtos/calca.png',
      produto: 'Calça Alfaiataria',
      preco: 'R$ 180,00',
      descricao:
        'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    },
    {
      mobileImageSrc: '../../../assets/Mobile/produtos/tenis.png',
      tabletImageSrc: '../../../assets/Tablet/produtos/tenis.png',
      desktopImageSrc: '../../../assets/Desktop/produtos/tenis.png',
      produto: 'Tênis Chunky',
      preco: 'R$ 250,00',
      descricao:
        'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    },
    {
      mobileImageSrc: '../../../assets/Mobile/produtos/jaqueta-jeans.png',
      tabletImageSrc: '../../../assets/Tablet/produtos/jaqueta-jeans.png',
      desktopImageSrc: '../../../assets/Desktop/produtos/jaqueta-jeans.png',
      produto: 'Jaqueta Jeans',
      preco: 'R$ 150,00',
      descricao:
        'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    },
    {
      mobileImageSrc: '../../../assets/Mobile/produtos/oculos.png',
      tabletImageSrc: '../../../assets/Tablet/produtos/oculos.png',
      desktopImageSrc: '../../../assets/Desktop/produtos/oculos.png',
      produto: 'Óculos Redondo',
      preco: 'R$ 120,00',
      descricao:
        'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    },
    {
      mobileImageSrc: '../../../assets/Mobile/produtos/bolsa.png',
      tabletImageSrc: '../../../assets/Tablet/produtos/bolsa.png',
      desktopImageSrc: '../../../assets/Desktop/produtos/bolsa.png',
      produto: 'Bolsa coringa',
      preco: 'R$ 120,00',
      descricao:
        'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    },
  ];
}
