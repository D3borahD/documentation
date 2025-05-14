import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOneComponent } from './part-one.component';

describe('PartOneComponent', () => {
  let component: PartOneComponent;
  let fixture: ComponentFixture<PartOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
