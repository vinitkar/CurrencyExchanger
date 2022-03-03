import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomContainerComponent } from './bottom-container.component';

describe('BottomContainerComponent', () => {
  let component: BottomContainerComponent;
  let fixture: ComponentFixture<BottomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
