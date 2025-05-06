import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCraftComponent } from './software-craft.component';

describe('SoftwareCraftComponent', () => {
  let component: SoftwareCraftComponent;
  let fixture: ComponentFixture<SoftwareCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCraftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
