import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutSectionComponent } from './callout-section.component';

describe('CalloutSectionComponent', () => {
  let component: CalloutSectionComponent;
  let fixture: ComponentFixture<CalloutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalloutSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalloutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
