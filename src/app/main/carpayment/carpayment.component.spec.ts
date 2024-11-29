import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpaymentComponent } from './carpayment.component';

describe('CarpaymentComponent', () => {
  let component: CarpaymentComponent;
  let fixture: ComponentFixture<CarpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarpaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
