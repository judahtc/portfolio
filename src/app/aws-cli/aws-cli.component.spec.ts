import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCliComponent } from './aws-cli.component';

describe('AwsCliComponent', () => {
  let component: AwsCliComponent;
  let fixture: ComponentFixture<AwsCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsCliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
