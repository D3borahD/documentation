import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSoftwareCraftComponent } from './introduction-software-craft.component';

describe('IntroductionSoftwareCraftComponent', () => {
  let component: IntroductionSoftwareCraftComponent;
  let fixture: ComponentFixture<IntroductionSoftwareCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionSoftwareCraftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductionSoftwareCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
