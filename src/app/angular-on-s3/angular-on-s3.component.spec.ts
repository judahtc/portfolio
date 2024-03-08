import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOnS3Component } from './angular-on-s3.component';

describe('AngularOnS3Component', () => {
  let component: AngularOnS3Component;
  let fixture: ComponentFixture<AngularOnS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularOnS3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularOnS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
