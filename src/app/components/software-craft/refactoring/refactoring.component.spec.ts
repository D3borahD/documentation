import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactoringComponent } from './refactoring.component';

describe('RefactoringComponent', () => {
  let component: RefactoringComponent;
  let fixture: ComponentFixture<RefactoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefactoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
