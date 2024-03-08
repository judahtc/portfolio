import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsFreeTierComponent } from './aws-free-tier.component';

describe('AwsFreeTierComponent', () => {
  let component: AwsFreeTierComponent;
  let fixture: ComponentFixture<AwsFreeTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsFreeTierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsFreeTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
