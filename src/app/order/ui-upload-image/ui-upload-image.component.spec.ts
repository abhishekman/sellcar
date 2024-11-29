import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUploadImageComponent } from './ui-upload-image.component';

describe('UiUploadImageComponent', () => {
  let component: UiUploadImageComponent;
  let fixture: ComponentFixture<UiUploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiUploadImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
