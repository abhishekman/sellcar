import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMirComponent } from './car-mir.component';

describe('CarMirComponent', () => {
  let component: CarMirComponent;
  let fixture: ComponentFixture<CarMirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarMirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarMirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
