import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesIconsComponent } from './features-icons.component';

describe('FeaturesIconsComponent', () => {
  let component: FeaturesIconsComponent;
  let fixture: ComponentFixture<FeaturesIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesIconsComponent]
    });
    fixture = TestBed.createComponent(FeaturesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
