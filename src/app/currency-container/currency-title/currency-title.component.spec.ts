import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTitleComponent } from './currency-title.component';

describe('CurrencyTitleComponent', () => {
  let component: CurrencyTitleComponent;
  let fixture: ComponentFixture<CurrencyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
