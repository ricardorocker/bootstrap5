import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoriaComponent } from './cards-categoria.component';

describe('CardsComponent', () => {
  let component: CardsCategoriaComponent;
  let fixture: ComponentFixture<CardsCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsCategoriaComponent]
    });
    fixture = TestBed.createComponent(CardsCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
