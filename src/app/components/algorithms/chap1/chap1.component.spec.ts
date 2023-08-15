import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap1Component } from './chap1.component';

describe('Chap1Component', () => {
  let component: Chap1Component;
  let fixture: ComponentFixture<Chap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chap1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
