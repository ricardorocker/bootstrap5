import { Component } from '@angular/core';

@Component({
  selector: 'app-features-icons',
  templateUrl: './features-icons.component.html',
  styleUrls: ['./features-icons.component.css'],
})
export class FeaturesIconsComponent {
  list = [
    {
      icon: 'bi-x-diamond',
      titulo: 'PAGUE PELO PIX',
      descricao: 'Ganhe 5% OFF em pagamentos via PIX',
    },
    {
      icon: 'bi-arrow-repeat',
      titulo: 'TROCA GRÁTIS',
      descricao: 'Fique livre para trocar em até 30 dias.',
    },
    {
      icon: 'bi-flower1',
      titulo: 'SUSTENTABILIDADE',
      descricao: 'Moda responsável, que respeita o meio ambiente.',
    },
  ];
}
