import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProdutosComponent } from './cards-produtos.component';

describe('CardsProdutosComponent', () => {
  let component: CardsProdutosComponent;
  let fixture: ComponentFixture<CardsProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsProdutosComponent]
    });
    fixture = TestBed.createComponent(CardsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
