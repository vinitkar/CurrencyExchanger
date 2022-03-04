import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalContainerComponent } from './historical-container.component';

describe('HistoricalContainerComponent', () => {
  let component: HistoricalContainerComponent;
  let fixture: ComponentFixture<HistoricalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
