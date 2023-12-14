import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhoneCardComponent } from './single-phone-card.component';

describe('SinglePhoneCardComponent', () => {
  let component: SinglePhoneCardComponent;
  let fixture: ComponentFixture<SinglePhoneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePhoneCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePhoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
