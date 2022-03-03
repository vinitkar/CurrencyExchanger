import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangerComponent } from './currency-exchanger.component';

describe('CurrencyExchangerComponent', () => {
  let component: CurrencyExchangerComponent;
  let fixture: ComponentFixture<CurrencyExchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
