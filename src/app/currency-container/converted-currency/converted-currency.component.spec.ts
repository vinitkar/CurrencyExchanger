import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertedCurrencyComponent } from './converted-currency.component';

describe('ConvertedCurrencyComponent', () => {
  let component: ConvertedCurrencyComponent;
  let fixture: ComponentFixture<ConvertedCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertedCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertedCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
