import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardContainerComponent } from './currency-card-container.component';

describe('CurrencyCardContainerComponent', () => {
  let component: CurrencyCardContainerComponent;
  let fixture: ComponentFixture<CurrencyCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
