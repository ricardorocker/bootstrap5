import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-categoria',
  templateUrl: './cards-categoria.component.html',
  styleUrls: ['./cards-categoria.component.css'],
})
export class CardsCategoriaComponent {
  list = [
    {
      mobileImageSrc:
        '../../../assets/Mobile/categorias/categoria-camiseta.png',
      tabletImageSrc:
        '../../../assets/Tablet/categorias/categoria-camiseta.png',
      desktopImageSrc:
        '../../../assets/Desktop/categorias/categoria-camiseta.png',
      nome: 'Camisetas',
    },
    {
      mobileImageSrc:
        '../../../assets/Mobile/categorias/categoria-bolsas.png',
      tabletImageSrc:
        '../../../assets/Tablet/categorias/categoria-bolsas.png',
      desktopImageSrc:
        '../../../assets/Desktop/categorias/categoria-bolsa.png',
      nome: 'Bolsas',
    },
    {
      mobileImageSrc:
        '../../../assets/Mobile/categorias/categoria-calcados.png',
      tabletImageSrc:
        '../../../assets/Tablet/categorias/categoria-calcados.png',
      desktopImageSrc:
        '../../../assets/Desktop/categorias/categoria-calcados.png',
      nome: 'Calçados',
    },
    {
      mobileImageSrc:
        '../../../assets/Mobile/categorias/categoria-calcas.png',
      tabletImageSrc:
        '../../../assets/Tablet/categorias/categoria-calcas.png',
      desktopImageSrc:
        '../../../assets/Desktop/categorias/categoria-calcas.png',
      nome: 'Calças',
    },
    {
      mobileImageSrc:
        '../../../assets/Mobile/categorias/categoria-casacos.png',
      tabletImageSrc:
        '../../../assets/Tablet/categorias/categoria-casacos.png',
      desktopImageSrc:
        '../../../assets/Desktop/categorias/categoria-casacos.png',
      nome: 'Casacos',
    },
    {
      mobileImageSrc:
        '../../../assets/Mobile/categorias/categoria-oculos.png',
      tabletImageSrc:
        '../../../assets/Tablet/categorias/categoria-oculos.png',
      desktopImageSrc:
        '../../../assets/Desktop/categorias/categoria-oculos.png',
      nome: 'Óculos',
    },
  ];
}
