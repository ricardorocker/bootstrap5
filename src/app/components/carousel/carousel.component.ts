import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  list = [
    {
      mobileImageSrc: '../../../assets/Mobile/banner1-mobile.png',
      tabletImageSrc: '../../../assets/Tablet/banner1-tablet.png',
      desktopImageSrc: '../../../assets/Desktop/banner1-desktop.png',
      title: '',
      description: ''
    },
    {
      mobileImageSrc: '../../../assets/Mobile/banner2-mobile.png',
      tabletImageSrc: '../../../assets/Tablet/banner2-tablet.png',
      desktopImageSrc: '../../../assets/Desktop/banner2-desktop.png',
      title: 'COLEÇÃO ATEMPORAL',
      description: 'Estilo e qualidade para durar.'
    },
    {
      mobileImageSrc: '../../../assets/Mobile/banner3-mobile.png',
      tabletImageSrc: '../../../assets/Tablet/banner3-tablet.png',
      desktopImageSrc: '../../../assets/Desktop/banner3-desktop.png',
      title: 'COLEÇÃO ATEMPORAL',
      description: 'Alto impacto visual, baixo impacto ambiental!'
    },
  ];
}
